<script>
import noUiSlider from 'nouislider'
import { onMount } from 'svelte'

export let low = 0
export let up = 100
export let min
export let max

let slider

onMount(() => {
  noUiSlider.create(slider, {
    start: [min, max],
    connect: true,
    range: {
      min: min,
      max: max
    },
    step: max / 10,
    pips: {
      mode: 'steps',
      density: max / 10
    }
  })

  slider.noUiSlider.on('update', setFilter)
})

$: slider && slider.noUiSlider.set([low, up])

const setFilter = (event) => {
  [low, up] = slider.noUiSlider.get().map(val => Math.round(val))
}
</script>

<div class="slider" bind:this={slider}></div>

<style>
.slider {
  width: 95%;
}
</style>
