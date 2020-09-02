import { writable } from 'svelte/store'

import { getRecordsUrl, addWhereQuery } from '../plugins/odsql.js'

const recordsUrl = getRecordsUrl ('eburdet')('gpx')
const getTrackUrlByName = name => addWhereQuery(recordsUrl)(`name="${name}"`)

const createDisplayedTrack = () => {
  const { subscribe, set } = writable(0)

  return {
    subscribe,
    async display (name) {
      history.pushState({ name: name }, '', `?name=${name}`)
      set(await fetchDetails(name))
    },
    async prefetch (name) { await fetchDetails(name)},
    quit () {
      history.pushState(null, '', '/')
      set(null)
    }
  }
}

const fetchDetails = async (name) => {
  const trackUrl = getTrackUrlByName(name)
  const promiseFromServ = await fetch(trackUrl)
  const data = await promiseFromServ.json()
  return data.records[0].record.fields
}

export const displayedTrack = createDisplayedTrack()
