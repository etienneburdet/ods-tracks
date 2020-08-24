/* global history */
import { writable, derived } from 'svelte/store'

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
  const sports = getOptions('sport', tracks)
  const difficulties = getOptions('difficulte', tracks)
  // const times = getRange('temps', tracks)
  const elevationGains = getRange('deniv', tracks)
  return { sports, difficulties, elevationGains }
}

const getOptions = (category, tracks) => {
  const options = [...new Set(tracks.map(track => track[category]))]
  return options
}

const getRange = (category, tracks) => {
  if (tracks.length > 0) {
    const values = tracks.map(track => track[category])
    const min = Math.min(...values)
    const max = Math.max(...values)
    return [min, max]
  } else {
    return [0, 100]
  }
}


export const tracks = writable([])
export const displayedTrack = createDisplayedTrack()
export const activeFilterMenu = writable('')
export const filters = derived(tracks, $tracks => getFilters($tracks))
export const selectedFilters = writable({})
