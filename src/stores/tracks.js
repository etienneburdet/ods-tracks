import { writable } from 'svelte/store'

import getOdsUrl from '../plugins/odsql.js'
import loadDataFromNetworkFirst from '../plugins/local-data.js'

const initTracks = () => {
  const { subscribe, set } = writable([])

  return {
    subscribe,
    async setList () { set(await fetchList()) }
  }
}

const getRecordsUrl = getOdsUrl('eburdet')('gpx')

const listParams = {
  select: 'name, image, difficulte, place, temps, deniv, sport, geo_point_2d'
}

const fetchList = async () => {
  const tracks = []
  const promiseFromServ = await loadDataFromNetworkFirst(
    'tracks',
    getRecordsUrl(listParams)
  )
  promiseFromServ.data.forEach((record, index) => {
    tracks[index] = { ...record.record.fields }
    tracks[index].id = record.record.id
  })
  return tracks
}

export const tracks = initTracks()
