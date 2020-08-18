<script>
import { activeFilter } from './store.js'

export let category
export let name

const toggleFilter = category => ev => {
  $activeFilter
   ? $activeFilter = ''
   : $activeFilter = category
}
</script>

<button on:click|stopPropagation={toggleFilter(category)}>
  {name}
  {#if $activeFilter === category}
    <form action="#" on:click|stopPropagation>
      {#each Object.values(category) as choice}
        <label>
          <input type="checkbox">
          {choice}
        </label>
      {/each}
    </form>
  {/if }
</button>


<style lang="scss">
  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: absolute;
    bottom: 55px;
    left: 0px;
    border-radius: 5px;
    background: white;
  }

  label {
    border-top: 1px solid #cbd2db;
    display: block;
    text-align: left;
    padding: 5px 8px;
    &:first-child {
      border: none;
    }
  }
</style>
