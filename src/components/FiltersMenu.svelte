<script>
import { slide } from 'svelte/transition'
</script>

<div transition:slide>
  <h1>Filtres</h1>
  <slot></slot>
</div>

<style>

  h1 {
    font-size: 21px;
    display: block;
    padding-top: 34px;
    text-align: center;
    border-bottom: 1px solid #dadada;
  }

  div {
    position: fixed;
    top: 0;
    height: 100%;
    width: 100%;
    background: white;
    z-index: 2;
    padding: 21px;
    box-sizing: border-box;
  }
</style>
