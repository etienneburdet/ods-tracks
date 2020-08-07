<script>
  import { selectedTrack } from './store.js'

  const backToList = () => {
    history.pushState(null,'','/')
    $selectedTrack = null
  }
</script>

<div>
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
