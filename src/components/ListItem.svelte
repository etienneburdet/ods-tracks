<script>
import { slide } from 'svelte/transition'
import { getThumbnailTag } from '../plugins/cloudinary.js'
import { displayedTrack, selectedFilters } from './store.js'
import DifficultyBadge from './DifficultyBadge.svelte'
import TrackSpecs from './TrackSpecs.svelte'

export let track
export let id

let thumbnailTag = getThumbnailTag(track.image)

let specs = {
  place: track.place,
  time: track.temps,
  gain: track.deniv,
  sport: track.sport
}

const isInSports = (selectedFilters) => {
  const isIncluded = selectedFilters.sports.includes(track.sport)
  const isNull = selectedFilters.sports.length === 0
  return isIncluded || isNull
}

const isInDifficulties = (selectedFilters) => {
  const isIncluded = selectedFilters.difficulties.includes(track.sport)
  const isNull = selectedFilters.difficulties.length === 0
  return isIncluded || isNull
}

const isInElevationGains = (selectedFilters) => {
  const isOverMin = track.deniv >= selectedFilters.elevationGains[0]
  const isUnderMax = track.deniv <= selectedFilters.elevationGains[1]
  const isNull = !selectedFilters.elevationGains[0]
  return (isOverMin && isUnderMax) || isNull
}

const isFiltered = (selectedFilters) => {
  return isInSports(selectedFilters) && isInDifficulties(selectedFilters) && isInElevationGains(selectedFilters)
}
</script>

{#if isFiltered($selectedFilters)}
<div class="track-item"
  on:click={displayedTrack.display(track)}
  transition:slide={{duration: 200}}>
  {@html thumbnailTag}
  <div class="description">
    <h2>{track.name}</h2>
    <TrackSpecs {...specs} invert="25%"/>
    <DifficultyBadge difficulty={track.difficulte} />
  </div>
</div>
{/if}

<style lang="scss">
  .track-item {
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    border-bottom: 1px solid grey;
    width: 100%;
    background: white;
    text-decoration: none;
    color: black;
  }

  .description {
   padding: 8px;
  }

  h2 {
    font-size: 1rem;
  }
</style>
