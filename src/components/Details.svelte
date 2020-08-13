<script>
  import { fly } from 'svelte/transition'
  import { trackId } from './store.js'
</script>

<div
  in:fly={ { x: -200, duration: 300, delay: 100} }
  out:fly={ { x: -200, duration: 300} }>
  <button on:click={trackId.reset}>X Retours liste des tracés</button>
</div>

<style lang="scss">
  div {
    position: relative;
    top: 66vh;
    width: 99vw;
  }
</style>
