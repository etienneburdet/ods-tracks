<script>
import { slide } from 'svelte/transition'
import { activeFilter } from './store.js'

export let category
export let name

let scroll, dropdown
$: dropdown = scroll > 300

const toggleFilter = category => ev => {
  $activeFilter
   ? $activeFilter = ''
   : $activeFilter = category
}
</script>

<svelte:window bind:scrollY={scroll} />

<button on:click|stopPropagation={toggleFilter(category)}>
  {name}
  {#if $activeFilter === category}
    <form action="#" on:click|stopPropagation class:dropdown transition:slide>
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
    box-shadow: 0 1px 2px 0 rgba(60,64,67,0.3),0 2px 6px 2px rgba(60,64,67,0.15);
    border-radius: 5px;
    z-index: 10;
  }

  .dropdown {
    bottom: unset;
    top: -55px;
  }

  label {
    border-top: 1px solid #cbd2db;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 5px 8px;
    &:first-child {
      border: none;
    }
  }
</style>
