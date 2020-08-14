<script>
  import { fly } from 'svelte/transition'
  import { trackId } from './store.js'
  import DetailsHeader from './DetailsHeader.svelte'
  import TopBar from './TopBar.svelte'

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
  <TopBar>
    <a href="#" on:click={trackId.reset}>
      <img src="arrow-back-outline.svg" alt="download">
      Liste
    </a>
    <a href={track.file.url}>
      <img src="download-outline.svg" alt="download">
      .gpx
    </a>
    <a href={track.url}>
      <img src="link-outline.svg" alt="external link">
      Strava
    </a>
    <a href="#">
      <img src="share-social-outline.svg" alt="external link">
      Copier Url
    </a>
  </TopBar>
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
    background: transparent;
    top: 50vh;
    width: 100vw;
  }

  img {
    height: 1rem;
    width: 1rem;
    vertical-align: text-bottom;
    margin-right: 5px;
  }

  a {
    border-left: 1px solid #cbd2db;
    &:first-child {
      border: none;
    }
    padding: 3px 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: black;
  }
</style>
