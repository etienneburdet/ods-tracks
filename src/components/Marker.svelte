<script>
import { getContext } from 'svelte'
import { selectedTrack } from './store.js'

const { mapbox, getMap, bounds } = getContext('mapbox')
const map = getMap()

export let lat
export let lon
export let id

const marker = new mapbox.Marker()
  .setLngLat([lon, lat])
  .addTo(map)

marker.getElement()
  .addEventListener('click', ev => {
    history.pushState({ id: id }, '', `?${id}`)
    $selectedTrack = history.state.id
})

bounds.extend([lon, lat])
map.fitBounds(bounds, { padding: 100 })
</script>
