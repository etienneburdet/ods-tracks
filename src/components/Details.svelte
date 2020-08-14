<script>
  import { fly } from 'svelte/transition'
  import { trackId } from './store.js'
  import DetailsHeader from './DetailsHeader.svelte'

  export let track

  let specs = {
    place: track.place,
    time: track.temps,
    gain: track.deniv,
    sport: track.sport,
  }
</script>

<div
  in:fly={ { x: -200, duration: 300, delay: 100} }
  out:fly={ { x: -200, duration: 300} }>
  <button on:click={trackId.reset}>X Retours liste des tracés</button>
  <a href={track.file.url}>.gpx</a>
  <a href={track.url}>more on strava</a>
  <DetailsHeader
    {specs}
    image={track.image}
    title={track.name}
    difficulty={track.difficulte} />
  <p>{track.description}</p>
</div>

<style lang="scss">
  div {
    position: relative;
    background: white;
    top: 50vh;
    width: 100vw;
  }
</style>
