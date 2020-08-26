import { writable } from 'svelte/store'

import getOdsUrl from '../plugins/odsql.js'
import loadDataFromNetworkFirst from '../plugins/local-data.js'

const getRecordsUrl = getOdsUrl('eburdet')('gpx')

const createDisplayedTrack = () => {
  const { subscribe, set } = writable(0)

  return {
    subscribe,
    async display (name) {
      history.pushState({ name: name }, '', `?name=${name}`)
      set(await fetchDetails(name))
    },
    quit () {
      history.pushState(null,'','/')
      set(null)
    }
  }
}

const fetchDetails = async (name) => {
  const promiseFromServ = await fetch(getRecordsUrl({ where: `name="${name}"` }))
  const data = await promiseFromServ.json()
  return data.records[0].record.fields
}

export const displayedTrack = createDisplayedTrack()
