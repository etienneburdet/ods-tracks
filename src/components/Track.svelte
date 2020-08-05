<script>
  import { getContext } from 'svelte'

  const { mapbox, getMap, bounds } = getContext('mapbox')
  const map = getMap()

  export let geoshape

  console.log(geoshape)
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
</script>
