<script>
  import { fly } from 'svelte/transition'
  import TopBar from './TopBar.svelte'
</script>

<div
  in:fly={ { x: 200, duration: 300, delay: 100} }
  out:fly={ { x: 200, duration: 300} }>
  <TopBar>
    <a href="#" on:click={trackId.reset}>
      Sport
    </a>
    <a href={track.file.url}>
      Difficulté
    </a>
    <a href={track.url}>
      Durée
    </a>
    <a href="#">
      Dénivelé
    </a>
  </TopBar>
  <slot></slot>
</div>

<style lang="scss">
  div {
    position: relative;
    top: 66vh;
    width: 100vw;
  }
</style>
