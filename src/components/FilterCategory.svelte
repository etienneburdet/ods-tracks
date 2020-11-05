<script>
import { onDestroy } from 'svelte'
import { filtersOptions } from '../stores/filters-options.js'
import { filtersChoices } from '../stores/filters-choices.js'

export let category
export let name

// const updateChoices = (event) => {
//   const choiceName = event.target.value
//   const choiceChecked = event.target.checked
//   const choiceIndex = $selectedFilters[category].indexOf(choiceName)
//
//   !choiceChecked && choiceIndex > -1
//     ? $selectedFilters[category].splice(choiceIndex, 1)
//     : $selectedFilters[category] = [...$selectedFilters[category], choiceName]
// }

// onDestroy(() => {
//   console.log($filtersOptions[category])
// })
</script>

<div>
  <h3>{name} : </h3>
  {#each $filtersOptions[category] as option}
    <label>
      <input type="checkbox"
        value={option}
        bind:group={$filtersChoices[category]}
      >
      {option}
    </label>
  {/each}
</div>


<style lang="scss">
  h3 {
    font-size: 21px;
    line-height: 26px;
  }
  div {
    display: flex;
  }

  label {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 13px 8px;
    font-size: 16px;
    line-height: 26px;
  }
</style>
