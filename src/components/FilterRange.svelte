<script>
import { slide } from 'svelte/transition'

import NumericInput from './NumericInput.svelte'
import RangeSlider from './RangeSlider.svelte'

import { filtersChoices } from '../stores/filters-choices.js'
import { filtersOptions } from '../stores/filters-options.js'

export let category
export let name
</script>

  <h3>{name} :</h3>
  <div class="inputs">
    <NumericInput {name} bind:value={$filtersChoices[category][0]}/>
    -
    <NumericInput {name} bind:value={$filtersChoices[category][1]}/>
  </div>
  <RangeSlider
    min={$filtersOptions[category][0]}
    max={$filtersOptions[category][1]}
    bind:low={$filtersChoices[category][0]}
    bind:up={$filtersChoices[category][1]}
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
