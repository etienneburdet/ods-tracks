<script>
import { slide } from 'svelte/transition'

import { filteredTracks } from '../stores/filtered-tracks.js'
</script>

<div transition:slide>
  <h1>Filtres</h1>
  <slot></slot>
  <footer>
    <button type="button" name="close">
      See {$filteredTracks.length} tracks
    </button>
  </footer>
</div>

<style>

  h1 {
    flex: 0 0 auto;
    font-size: 21px;
    display: block;
    padding-top: 34px;
    text-align: center;
    border-bottom: 1px solid #dadada;
  }

  div {
    position: fixed;
    top: 0;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    background: white;
    z-index: 2;
    padding: 21px;
    box-sizing: border-box;
  }

  footer {
    border-top: 1px solid rgb(235, 235, 235);
  }

  button {
    position: absolute;
    bottom: 0;
    display: block;
    width: 100%;
  }
</style>
