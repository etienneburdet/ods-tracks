import { derived } from 'svelte/store'
import { tracks } from './tracks.js'
import { filtersChoices } from './filters-choices.js'

const isInSports = (track, choices) => {
  const isIncluded = choices.sports.includes(track.sport)
  return isIncluded
}

const isInDifficulties = (track, choices) => {
  const isIncluded = choices.difficulties.includes(track.difficulte)
  return isIncluded
}

const isInElevationGains = (track, choices) => {
  const isOverMin = track.deniv >= choices.gains[0]
  const isUnderMax = track.deniv <= choices.gains[1]
  const isNull = !choices.gains[0]
  return (isOverMin && isUnderMax) || isNull
}

const isFiltered = (track, choices) => {
  return isInSports(track, choices) && isInDifficulties(track, choices) && isInElevationGains(track, choices)
}

const getFilteredTracks = ([$tracks, $filtersChoices]) => {
  const filteredTracks = $tracks.filter(track => isFiltered(track, $filtersChoices))
  return filteredTracks
}

export const filteredTracks = derived([tracks, filtersChoices], getFilteredTracks)
