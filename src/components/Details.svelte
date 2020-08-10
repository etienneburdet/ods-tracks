<script>
  import { fly } from 'svelte/transition'
  import { selectedTrack } from './store.js'

  const backToList = () => {
    history.pushState(null,'','/')
    $selectedTrack = null
  }
</script>

<div
  in:fly={ { x: -200, duration: 300, delay: 100} }
  out:fly={ { x: -200, duration: 300} }>
  <button on:click={backToList}>X Retours liste des tracés</button>
  {$selectedTrack}
</div>

<style lang="scss">
  div {
    position: relative;
    top: 66vh;
    width: 99vw;
  }
</style>
