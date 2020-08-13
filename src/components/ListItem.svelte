<script>
  import DifficultyBadge from './DifficultyBadge.svelte'
  import { getThumbnailTag } from '../plugins/cloudinary.js'
  import { trackId} from './store.js'
  export let track
  export let id

  const sportIcons = {
    Trail: "run-line.svg",
    Splitboard: "snow-outline.svg"
  }

  let thumbnailTag = getThumbnailTag(track.image)
</script>

<a href="#" class="track-item" on:click={trackId.select(id)}>
  {@html thumbnailTag}
  <div class="description">
    <h2>{track.name}</h2>
    <div class="details">
      <span>
        <object type="image/svg+xml" data="locate-outline.svg"/>
        {track.place}
      </span>
      <span>
        <object type="image/svg+xml" data="trending-up-outline.svg"/>
        {track.deniv}m
      </span>
      <span>
        <object type="image/svg+xml" data="time-outline.svg"/>
        {track.temps}h
      </span>
      <span>
        <object type="image/svg+xml" data={sportIcons[track.sport]}/>
        {track.sport}
      </span>
    </div>
    <DifficultyBadge difficulty={track.difficulte}/>
  </div>
</a>

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

  object {
    height: 1rem;
    width: 1rem;
    color: #565656;
    vertical-align: text-bottom;
  }

  .description {
   padding: 8px;
  }


  .details {
    font-size: 0.8rem;
    line-height: 1rem;
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    padding: 5px 0;
    color: #565656;
    & > * {
      padding: 5px;
    }
  }

  h2 {
    font-size: 1rem;
  }
</style>
