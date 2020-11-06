<script>
import { slide } from 'svelte/transition'

import { filteredTracks } from '../stores/filtered-tracks.js'
import { isFiltering } from '../stores/is-filtering.js'
import { filtersChoices } from '../stores/filters-choices.js'

const pouet = () => console.log('pouet')

</script>

<div transition:slide>
  <header>
    <span  on:click={isFiltering.toggle}>
      <svg viewBox="0 0 12 12" role="presentation" aria-hidden="true" focusable="false" style="height: 14px; width: 14px; display: block; fill: currentcolor;">
        <path d="m11.5 10.5c.3.3.3.8 0 1.1s-.8.3-1.1 0l-4.4-4.5-4.5 4.5c-.3.3-.8.3-1.1 0s-.3-.8 0-1.1l4.5-4.5-4.4-4.5c-.3-.3-.3-.8 0-1.1s.8-.3 1.1 0l4.4 4.5 4.5-4.5c.3-.3.8-.3 1.1 0s .3.8 0 1.1l-4.5 4.5z" fill-rule="evenodd"></path>
      </svg>
    </span>
    <h1>Filtres</h1>
    <button on:click={filtersChoices.initialize} class="reset">Reset</button>
  </header>
  <main>
    <slot></slot>
  </main>
  <footer>
    <button class="apply" type="button" name="close" on:click={isFiltering.toggle}>
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

  header {
    flex: 0 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #dadada;
  }

  h1 {
    font-size: 16px;
    display: block;
    text-align: center;
  }

  .reset {
    border: none;
    background: white;
    color: black;
    font-size: 16px;
    text-decoration: underline;
  }

  main {
    flex: 1 1 auto;
    overflow: scroll;
  }


  footer {
    flex: 0 0 auto;
    border-top: 1px solid #dadada;
  }

  .apply {
    display: block;
    width: 100%;
    background: black;
    color: white;
    border-radius: 8px;
    border: none;
    font-size: 16px;
  }
</style>
