<script>
import { getContext, onMount } from 'svelte'
import { displayedTrack } from './store.js'

const { mapbox, getMap, bounds } = getContext('mapbox')
const map = getMap()

export let track
let { lat, lon } = track.geo_point_2d

const marker = new mapbox.Marker()
  .setLngLat([lon, lat])

marker.getElement()
  .addEventListener('click', () => { displayedTrack.display(track) })

bounds.extend([lon, lat])
map.fitBounds(bounds, { padding: { bottom: 150, top: 50, left: 20, right: 20 } })

onMount(() => {
  marker.addTo(map)
  return () => marker.remove()
})
</script>
