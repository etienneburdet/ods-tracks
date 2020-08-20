<script>
import { slide } from 'svelte/transition'
import { activeFilterMenu, selectedFilters, filters } from './store.js'
import NumericInput from './NumericInput.svelte'
import RangeSlider from './RangeSlider.svelte'

export let category
export let name
let scroll, dropdown
let selectedLowerBound = 10
let selectedUpperBound = 90


$: dropdown = scroll > 300
$: $selectedFilters[category] = [selectedLowerBound, selectedUpperBound]

const toggleFilter = category => ev => {
  $activeFilterMenu === category
   ? $activeFilterMenu = ''
   : $activeFilterMenu = category
}
</script>

<svelte:window bind:scrollY={scroll} />

<button on:click|stopPropagation={toggleFilter(category)}>
  {name}
  {#if $activeFilterMenu === category }
    <form
      on:click|stopPropagation
      class:dropdown
      transition:slide={{duration: 200}}>
        <div class="inputs">
          <NumericInput name={`${name} minimum`} bind:value={selectedLowerBound}/>
          -
          <NumericInput name={`${name} maximum`} bind:value={selectedUpperBound}/>
        </div>
        <RangeSlider bind:low={selectedLowerBound} bind:up={selectedUpperBound}/>
    </form>
    {/if}
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
  }

  .inputs > :global(*) {
    margin: 0 5px;
  }

  .dropdown {
    bottom: -122px;
  }
</style>
