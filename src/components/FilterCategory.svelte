<script>
import { selectedFilters } from '../stores/selected-filters.js'
import { filters } from '../stores/filters.js'

export let category
export let name
let checkedOptions

$: $selectedFilters[category] = checkedOptions
</script>

<div>
  <h3>{name} : </h3>
  {#each $filters[category] as choice}
    <label>
      <input type="checkbox"
        bind:group={checkedOptions}
        value={choice}
        checked>
      {choice}
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
