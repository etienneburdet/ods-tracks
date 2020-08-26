import { writable } from 'svelte/store'

import getOdsUrl from '../plugins/odsql.js'
import loadDataFromNetworkFirst from '../plugins/local-data.js'

const initTracks = () => {
  const { subscribe, set } = writable([])

  return {
    subscribe,
    async setList () { set(await fetchList()) },
  }
}

const getRecordsUrl = getOdsUrl('eburdet')('gpx')

const listParams = {
  select: 'name, image, difficulte, place, temps, deniv, sport, geo_point_2d'
}

const fetchList = async () => {
  const promiseFromServ = await fetch(getRecordsUrl(listParams))
  const data = await promiseFromServ.json()
  const tracks = data.records.reduce((acc, record) => {
    const track = { ...record.record.fields }
    track.id = record.record.id
    return [...acc, track]
  }, [])
  return tracks
}

export const tracks = initTracks()
