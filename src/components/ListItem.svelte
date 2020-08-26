<script>
import { slide } from 'svelte/transition'
import { getThumbnailTag } from '../plugins/cloudinary.js'

import DifficultyBadge from './DifficultyBadge.svelte'
import TrackSpecs from './TrackSpecs.svelte'

import { displayedTrack } from '../stores/displayed-track.js'

export let track
export let id

let thumbnailTag = getThumbnailTag(track.image)

let specs = {
  place: track.place,
  time: track.temps,
  gain: track.deniv,
  sport: track.sport
}

const showDetails = async () => await displayedTrack.display(track.name)
const prefetchDetails = async () => await displayedTrack.prefetch(track.name)
</script>

<div class="track-item"
  on:click={showDetails}
  on:mouseenter={prefetchDetails}
  on:touchstart={prefetchDetails}
  transition:slide={{duration: 200}}>
  {@html thumbnailTag}
  <div class="description">
    <h2>{track.name}</h2>
    <TrackSpecs {...specs} invert="25%"/>
    <DifficultyBadge difficulty={track.difficulte} />
  </div>
</div>

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
