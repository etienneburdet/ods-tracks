<script>
  import DifficultyBadge from './DifficultyBadge.svelte'
  import { getThumbnailTag } from '../plugins/cloudinary.js'
  export let fields

  let thumbnailTag = getThumbnailTag(fields.image)
</script>

<div class="track-item">
  {@html thumbnailTag}
  <div class="description">
    <h2>{fields.name}</h2>
    <div class="details">
      <span>Zermatt · </span>
      <span>{fields.deniv}m · </span>
      <span>{fields.temps}h · </span>
      <span>{fields.sport} · </span>
      <DifficultyBadge difficulty={fields.difficulte}/>
    </div>
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
  }

  img {
    flex: 0 0 108px;
    height: 108px;
  }

  .description {
   padding: 8px;
  }


  .details {
    font-size: 0.8rem;
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    color: darkgrey;
    & > * {
      padding: 5px;
    }
  }

  h2 {
    font-size: 1rem;
  }
</style>
