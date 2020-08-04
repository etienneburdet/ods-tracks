<script>
import { onMount, setContext } from 'svelte'
import mapbox from 'mapbox-gl'

mapbox.accessToken = 'pk.eyJ1IjoiZXRpZW5uZWJ1cmRldCIsImEiOiJja2F4bHN2MXUwMGliMnJsN2RzNXowYzQ1In0.ju6w4WN1F_CRVNXtp5L-7w';

let map
let container
let bounds = new mapbox.LngLatBounds()

setContext('mapbox', {
  mapbox: mapbox,
  getMap: () => map,
  bounds: bounds
})

onMount(() => {
    map = new mapbox.Map({
    container,
    style: 'mapbox://styles/mapbox/streets-v11'
  })
})

</script>

<div bind:this={container}>
  {#if map}
    <slot></slot>
  {/if}
</div>

<style lang="scss">
  @import '~mapbox-gl/dist/mapbox-gl.css';

  div {
    height: 66vh;
    width: 100vw;
    position: fixed;
  }
</style>
