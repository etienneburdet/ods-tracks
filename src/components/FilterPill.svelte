<script>
  import { isFiltering } from '../stores/is-filtering.js'

  let hide
  $: hide = $isFiltering
</script>

<button on:click class:hide>
  <img src="filter-outline.svg" alt="filters button logo"/>
  Filters
</button>

<style>
  img {
    height: 1rem;
    width: 1rem;
    padding: 0 5px;
  }

  button {
    position: fixed;
    top: 34px;
    right: 34px;
    display: flex;
    align-items: center;
    border-radius: 1rem;
    border: none;
    background: white;
    padding: 5px 8px;
    box-shadow: 0 1px 2px 0 rgba(60,64,67,0.3), 0 2px 6px 2px rgba(60,64,67,0.15);
    z-index: 10;
  }

  .hide {
    visibility: hidden;
    display: none;
  }
</style>
