<script>
import { slide } from 'svelte/transition'

import NumericInput from './NumericInput.svelte'
import RangeSlider from './RangeSlider.svelte'

import { selectedFilters } from '../stores/selected-filters.js'
import { filters } from '../stores/filters.js'

export let category
export let name
let selectedLowerBound
let selectedUpperBound
</script>

  <h3>{name} : </h3>
  <div class="inputs">
    <NumericInput {name} bind:value={selectedLowerBound}/>
    -
    <NumericInput {name} bind:value={selectedUpperBound}/>
  </div>
  <RangeSlider
    min={$filters[category][0]}
    max={$filters[category][1]}
    bind:low={selectedLowerBound}
    bind:up={selectedUpperBound}
  />

<style lang="scss">
  .inputs {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 13px;
  }

  .inputs > :global(*) {
    margin: 0 5px;
  }
</style>
