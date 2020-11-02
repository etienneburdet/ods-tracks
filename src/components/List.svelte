<script>
import { fly } from 'svelte/transition'
</script>

<div
  in:fly={{ x: 200, duration: 300, delay: 100 }}
  out:fly={{ x: 200, duration: 300 }}>
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
</style>
