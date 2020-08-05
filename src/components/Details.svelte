<script>
  import { selectedTrack } from './store.js'

  const resetState = () => {
    history.pushState(null,'','/')
    $selectedTrack = null
  }
</script>

<div>
  <button on:click={resetState}>X Retours liste des tracés</button>
  {$selectedTrack}
</div>

<style lang="scss">
  div {
    position: relative;
    top: 66vh;
    width: 99vw;
  }
</style>
