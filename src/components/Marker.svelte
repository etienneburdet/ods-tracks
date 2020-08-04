<script>
import { getContext } from 'svelte'

const { mapbox, getMap, bounds } = getContext('mapbox')
const map = getMap()

export let lat
export let lon

const marker = new mapbox.Marker()
  .setLngLat([lon, lat])
  .addTo(map)

bounds.extend([lon, lat])
map.fitBounds(bounds, { padding: 100 })
</script>
