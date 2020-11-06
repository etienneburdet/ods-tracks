<script>
import { slide } from 'svelte/transition'

import { filteredTracks } from '../stores/filtered-tracks.js'
</script>

<div transition:slide>
  <h1>Filtres</h1>
  <main>
    <slot></slot>
  </main>
  <footer>
    <button type="button" name="close">
      See {$filteredTracks.length} tracks
    </button>
  </footer>
</div>

<style lang="scss">
  div {
    position: fixed;
    top: 0;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    background: white;
    z-index: 2;
    box-sizing: border-box;
    * {
      padding: 13px 21px;
    }
  }

  h1 {
    flex: 0 0 auto;
    font-size: 21px;
    display: block;
    text-align: center;
    border-bottom: 1px solid #dadada;
  }

  main {
    flex: 1 1 auto;
  }


  footer {
    flex: 0 0 auto;
    border-top: 1px solid #dadada;
  }

  button {
    display: block;
    width: 100%;
    background: black;
    color: white;
    border-radius: 8px;
    border: none;
  }
</style>
