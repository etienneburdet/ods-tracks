<script>
import { getContext, onMount } from 'svelte'
import { trackId } from './store.js'

const { mapbox, getMap, bounds } = getContext('mapbox')
const map = getMap()

export let lat
export let lon
export let id

const marker = new mapbox.Marker()
  .setLngLat([lon, lat])

marker.getElement()
  .addEventListener('click', () => { trackId.select(id) })

bounds.extend([lon, lat])
map.fitBounds(bounds, { padding: 100 })

onMount(() => {
  marker.addTo(map)
  return () => marker.remove()
})
</script>
