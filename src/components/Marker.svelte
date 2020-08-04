<script>
import { getContext } from 'svelte'

const { mapbox, getMap, bounds } = getContext('mapbox')
const map = getMap()

export let lat
export let lng

const marker = new mapbox.Marker()
  .setLngLat([lng, lat])
  .addTo(map)

bounds.extend([lng, lat])
map.fitBounds(bounds)
</script>
