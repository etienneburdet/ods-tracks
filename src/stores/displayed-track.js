import { writable } from 'svelte/store'

import getOdsUrl from '../plugins/odsql.js'
import loadDataFromNetworkFirst from '../plugins/local-data.js'

const getRecordsUrl = getOdsUrl('eburdet')('gpx')

const createDisplayedTrack = () => {
  const { subscribe, set } = writable(0)

  return {
    subscribe,
    async display (track) {
      history.pushState({ id: track.id }, '', `?id=${track.id}`)
      set(await fetchDetails(track))
    },
    quit () {
      history.pushState(null,'','/')
      set(null)
    }
  }
}

const fetchDetails = async (track) => {
  const promiseFromServ = await loadDataFromNetworkFirst(
    'tracks',
    getRecordsUrl({ where: `name="${track.name}"` })
  )
  return promiseFromServ.data[0].record.fields
}

export const displayedTrack = createDisplayedTrack()
