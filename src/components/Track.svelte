<script>
  import { getContext } from 'svelte'

  const { mapbox, getMap } = getContext('mapbox')
  const map = getMap()
  if (map.getLayer('track')) {
    map.removeLayer('track')
    map.removeSource('track')
  }

  export let geoshape
  let coordinates = geoshape.geometry.coordinates

  map.addSource('track', {
    'type': 'geojson',
    'data': geoshape
  })

  map.addLayer({
    'id': 'track',
    'type': 'line',
    'source': 'track',
    'layout': {
    'line-join': 'round',
    'line-cap': 'round'
    },
    'paint': {
    'line-color': '#888',
    'line-width': 8
    }
  })

  const extendBounds = (bounds, coords) => bounds.extend(coords)
  let startCoords = new mapbox.LngLatBounds(coordinates[0], coordinates[0])
  let bounds = coordinates.reduce(extendBounds, startCoords)
  map.fitBounds(bounds, { padding: 100 })
</script>
