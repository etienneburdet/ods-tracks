import { derived } from 'svelte/store'
import { tracks } from './tracks.js'
import { selectedFilters } from './selected-filters.js'

const isInSports = (track, selectedFilters) => {
  const isIncluded = selectedFilters.sports.includes(track.sport)
  const isNull = selectedFilters.sports.length === 0
  return isIncluded || isNull
}

const isInDifficulties = (track, selectedFilters) => {
  const isIncluded = selectedFilters.difficulties.includes(track.sport)
  const isNull = selectedFilters.difficulties.length === 0
  return isIncluded || isNull
}

const isInElevationGains = (track, selectedFilters) => {
  const isOverMin = track.deniv >= selectedFilters.elevationGains[0]
  const isUnderMax = track.deniv <= selectedFilters.elevationGains[1]
  const isNull = !selectedFilters.elevationGains[0]
  return (isOverMin && isUnderMax) || isNull
}

const isFiltered = (track, selectedFilters) => {
  return isInSports(track, selectedFilters) && isInDifficulties(track, selectedFilters) && isInElevationGains(track, selectedFilters)
}

const getFilteredTracks = ([$tracks, $selectedFilters]) => {
  const filteredTracks = $tracks.filter(track => isFiltered(track, $selectedFilters))
  return filteredTracks
}

export const filteredTracks = derived([tracks, selectedFilters], getFilteredTracks)
