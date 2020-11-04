<script>
import { onDestroy } from 'svelte'
import { options } from '../stores/options.js'
import { selectedFilters } from '../stores/selected-filters.js'

export let category
export let name

const updateChoices = (event) => {
  const choiceName = event.target.value
  const choiceChecked = event.target.checked
  const choiceIndex = $selectedFilters[category].indexOf(choiceName)

  !choiceChecked && choiceIndex > -1
    ? $selectedFilters[category].splice(choiceIndex, 1)
    : $selectedFilters[category] = [...$selectedFilters[category], choiceName]
}

onDestroy(() => {
  console.log($options[category])
})
</script>

<div>
  <h3>{name} : </h3>
  {#each $options[category] as option, index (option)}
    <label>
      <input type="checkbox"
        value={option}
        checked={$selectedFilters[category].includes(option)}
        on:change={updateChoices}
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
