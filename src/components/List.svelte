<script>
import { fly } from 'svelte/transition'
import TopBar from './TopBar.svelte'
import FilterButtonCategory from './FilterButtonCategory.svelte'
import FilterButtonRange from './FilterButtonRange.svelte'
import { activeFilterMenu } from './store.js'

export let filters

const closeMenu = () => { $activeFilterMenu = '' }
</script>

<svelte:window on:click={closeMenu} />

<div
  in:fly={ { x: 200, duration: 300, delay: 100} }
  out:fly={ { x: 200, duration: 300} }>
  <TopBar>
    <FilterButtonCategory name="Sport" category="sports" />
    <FilterButtonRange name="Durée" category="timeRange" />
    <button>
      Dénivelé
    </button>
    <FilterButtonCategory name="Difficulté" category="difficulties" />
  </TopBar>
  <slot></slot>
</div>

<style lang="scss">
  div {
    position: relative;
    top: 66vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
  }
</style>
