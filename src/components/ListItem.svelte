<script>
  import { getThumbnailTag } from '../plugins/cloudinary.js'
  import { trackId} from './store.js'
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
</script>

<div class="track-item" on:click={trackId.select(id)}>
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
    align-items: flex-start;
    justify-content: flex-start;
    border-bottom: 1px solid grey;
    width: 100%;
    background: white;
    text-decoration: none;
    color: black;
  }

  img {
    flex: 0 0 108px;
    height: 108px;
  }

  .description {
   padding: 8px;
  }

  h2 {
    font-size: 1rem;
  }
</style>
