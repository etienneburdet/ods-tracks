<script>
  import { fly } from 'svelte/transition'
  import { trackId } from './store.js'
  import { getFullWidthTag } from '../plugins/cloudinary.js'

  export let track

  console.log(track.image)
  let fullWidtImgTag = getFullWidthTag(track.image)
</script>

<div
  in:fly={ { x: -200, duration: 300, delay: 100} }
  out:fly={ { x: -200, duration: 300} }>
  <button on:click={trackId.reset}>X Retours liste des tracés</button>

  {@html fullWidtImgTag}
</div>

<style lang="scss">
  div {
    position: relative;
    top: 66vh;
    width: 100vw;
  }

  img {
    width: 100vw;
    height: 33vw;
  }
</style>
