<script>
  import { fly } from 'svelte/transition'
  import TopBar from './TopBar.svelte'
  import Select from './Select.svelte'

  let selecting = ''
  const setSelectingCategory = category => ev => {
    ev.preventDefault()
    selecting = category
  }
</script>

<div
  in:fly={ { x: 200, duration: 300, delay: 100} }
  out:fly={ { x: 200, duration: 300} }>
  <TopBar>
    <a href="#" on:click={setSelectingCategory('sport')}>
      Sport
      {#if (selecting === 'sport')}
        <Select name="sport" />
      {/if}
    </a>
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
  div {
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
