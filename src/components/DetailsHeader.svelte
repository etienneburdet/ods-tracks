<script>
  import { getFullWidthUrl } from '../plugins/cloudinary.js'
  import TrackSpecs from './TrackSpecs.svelte'
  import DifficultyBadge from './DifficultyBadge.svelte'

  export let specs, image, title, difficulty
  let fullWidthImgUrl = getFullWidthUrl(image)
</script>

<div style="--url: url({fullWidthImgUrl})">
  <h2>{title}</h2>
  <TrackSpecs {...specs} invert="100%"/>
  <DifficultyBadge {difficulty} />
</div>

<style lang="scss">
  div {
    background-image: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), var(--url);
    background-size: cover;
    width: 100vw;
    height: 50vw;
    padding: 13px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    color: white;
    text-shadow: 1px 1px 3px rgba(0,0,0,0.2);
  }
</style>
