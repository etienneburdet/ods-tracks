<script>
import { fly, fade } from 'svelte/transition'

import DetailsHeader from './DetailsHeader.svelte'
import TopBar from './TopBar.svelte'

export let track

let showCopyToast = false
let specs = {
  place: track.place,
  time: track.temps,
  gain: track.deniv,
  sport: track.sport
}

const copyUrlToCB = async (ev) => {
  ev.preventDefault()
  const url = window.location.toString()
  const clipboardRes = await navigator.clipboard.writeText(url)
  showCopyToast = true
  setTimeout(() => { showCopyToast = false }, 500)
}
</script>

<div
  in:fly={ { x: -200, duration: 300, delay: 100} }
  out:fly={ { x: -200, duration: 300} }>
  <TopBar>
    <a href="#back" on:click>
      <img src="arrow-back-outline.svg" alt="back-logo">
      Liste
    </a>
    <a href={track.file.url}>
      <img src="download-outline.svg" alt="download-logo">
      .gpx
    </a>
    <a href={track.url}>
      <img src="link-outline.svg" alt="external-link-logo">
      Strava
    </a>
    <a href="#copy" on:click={copyUrlToCB}>
      <img src="share-social-outline.svg" alt="copy to clipboard logo">
      Copier Url
      {#if showCopyToast}
        <span class="copy-toast" transition:fade>Copié</span>
      {/if}
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
    display: flex;
    flex-direction: column;
    position: relative;
    background: transparent;
    top: 50vh;
    width: 100vw;
  }

  .copy-toast {
    padding: 8px 13px;
    border-radius: 5px;
    background: black;
    color: white;
    z-index: 20;
    position: absolute;
    top: -34px;
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

  p {
    padding: 13px;
  }
</style>
