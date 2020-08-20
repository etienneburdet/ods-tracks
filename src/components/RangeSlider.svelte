<script>
import noUiSlider from 'nouislider'
import { onMount, afterUpdate } from 'svelte'

export let low
export let up
let slider

onMount(() => {
  noUiSlider.create(slider, {
    start: [low, up],
    connect: true,
    range: {
      min: 0,
      max: 100
    },
    step: 10,
    pips: {
      mode: 'steps',
      density: 10
    }
  })

  slider.noUiSlider.on('update', setFilter)
})

$: slider && slider.noUiSlider.set([low, up])

const setFilter = (event) => {
  [low, up] = slider.noUiSlider.get()
}
</script>

<div class="slider" bind:this={slider}></div>

<style>
.slider {
  width: 95%;
}
</style>
