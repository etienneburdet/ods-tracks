<script>
import { slide } from 'svelte/transition'
import { onMount } from 'svelte'
import noUiSlider from 'nouislider'
import { activeFilterMenu, selectedFilters, filters } from './store.js'
import NumericInput from './NumericInput.svelte'

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
    },
    step: 10,
    pips: {
      mode: 'steps',
      density: 10
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
      on:click|stopPropagation
      class:dropdown
      transition:slide={{duration: 200}}>
        <div class="inputs">
          <NumericInput name="Durée minimum" value="10"/>
          -
          <NumericInput name="Durée maximum" value="60"/>
        </div>
        <div class="slider" bind:this={slider}></div>
    </form>
</button>


<style lang="scss">
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 55px;
    left: -50%;
    border-radius: 5px;
    background: white;
    box-shadow: 0 1px 2px 0 rgba(60,64,67,0.3),0 2px 6px 2px rgba(60,64,67,0.15);
    border-radius: 5px;
    z-index: 10;
    width: max-content;
    height: max-content;
    padding: 13px;
    padding-bottom: 34px;
  }

  .inputs {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 13px;
    > * {
      margin: 0 5px;
    }
  }

  .dropdown {
    bottom: -122px;
  }

  .slider {
    width: 95%;
  }

</style>
