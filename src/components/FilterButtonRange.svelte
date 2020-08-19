<script>
import { slide } from 'svelte/transition'
import { onMount } from 'svelte'
import noUiSlider from 'nouislider'
import { activeFilterMenu, selectedFilters, filters } from './store.js'

export let category
export let name
let scroll, dropdown
let slider


onMount(() => {
  noUiSlider.create(slider, {
    start: [20, 80],
    connect: true,
    range: {
      min: 0,
      max: 100
    }
  })
})

$: dropdown = scroll > 300

const toggleFilter = category => ev => {
  $activeFilterMenu === category
   ? $activeFilterMenu = ''
   : $activeFilterMenu = category
}
</script>

<svelte:window bind:scrollY={scroll} />

<button on:click|stopPropagation={toggleFilter(category)}>
  {name}
    <form
      bind:this={slider}
      on:click|stopPropagation
      class:dropdown
      transition:slide={{duration: 200}}>
    </form>
</button>


<style lang="scss">
  form {
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 55px;
    left: 0px;
    border-radius: 5px;
    background: white;
    box-shadow: 0 1px 2px 0 rgba(60,64,67,0.3),0 2px 6px 2px rgba(60,64,67,0.15);
    border-radius: 5px;
    z-index: 10;
    width: 144px;
    height: 55px;
  }

  .dropdown {
    bottom: -122px;
  }
</style>
