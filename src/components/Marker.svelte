<script>
import { getContext } from 'svelte'
import { createEventDispatcher } from 'svelte';

const dispatch = createEventDispatcher()
const { mapbox, getMap, bounds } = getContext('mapbox')
const map = getMap()

export let lat
export let lon

const marker = new mapbox.Marker()
  .setLngLat([lon, lat])
  .addTo(map)

marker.getElement()
  .addEventListener('click', ev => {
    dispatch('clickedMarker', ev.detail)
})

bounds.extend([lon, lat])
map.fitBounds(bounds, { padding: 100 })
</script>
