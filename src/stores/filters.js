import { derived } from 'svelte/store'
import { tracks } from './tracks.js'

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

export const filters = derived(tracks, $tracks => getFilters($tracks))
