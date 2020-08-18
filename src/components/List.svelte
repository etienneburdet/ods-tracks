<script>
import { fly } from 'svelte/transition'
import TopBar from './TopBar.svelte'
import Select from './Select.svelte'

let selecting = ''

const toggleFilter = category => ev => {
  ev.preventDefault()
  selecting
   ? selecting = ''
   : selecting = category
}

const closeMenu = () => {
  selecting = ''
}
</script>

<svelte:window on:click={closeMenu} />

<div class="container"
  in:fly={ { x: 200, duration: 300, delay: 100} }
  out:fly={ { x: 200, duration: 300} }>
  <TopBar>
    <a href="#" on:click|stopPropagation={toggleFilter('sport')}>
      Sport
    </a>
    {#if selecting === 'sport'}
      <Select />
    {/if }
    <a href="#">
      Difficulté
    </a>
    <a href="#">
      Durée
    </a>
    <a href="#">
      Dénivelé
    </a>
  </TopBar>
  <slot></slot>
</div>

<style lang="scss">
  .container {
    position: relative;
    top: 66vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
  }

  a {
    border-left: 1px solid #cbd2db;
    &:first-child {
      border: none;
    }
    padding: 3px 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: black;
  }
</style>
