/* global history */
import { writable, derived, get } from 'svelte/store'
import { loadDataFromNetworkFirst } from '../plugins/local-data.js'

const createDisplayedTrack = () => {
  const { subscribe, set } = writable(0)

  return {
    subscribe,
    display: (track) => {
      history.pushState({ id: track.id }, '', `?id=${track.id}`)
      set(track)
    },
    quit: () => {
      history.pushState(null,'','/')
      set(null)
    }
  }
}

const getFilters = (tracks) => {
  const sports = getSports(tracks)
  const difficulties = getDifficulties(tracks)
  return { sports, difficulties }
}

const getSports = (tracks) => {
  let sports = [...new Set(tracks.map(track => track.sport))]
  return sports
}

const getDifficulties = (tracks) => {
  let difficulties = [...new Set(tracks.map(track => track.difficulte))]
  return difficulties
}

export const tracks = writable([])
export const displayedTrack = createDisplayedTrack()
export const activeFilterMenu = writable('')
export const filters = derived(tracks, $tracks => getFilters($tracks))
export const selectedFilters = writable({})
