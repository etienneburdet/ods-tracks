<script>
  import { getContext, onMount } from 'svelte'
  import difficlutyColors from './difficulty-colors.js'

  const { mapbox, getMap } = getContext('mapbox')
  const map = getMap()

  export let fields
  let coordinates = fields.geo_shape.geometry.coordinates


  onMount(() => {
    map.isStyleLoaded()
      ? addTrackLayer()
      : map.on('load', addTrackLayer)
    return clearTracks
  })

  const clearTracks = () => {
    map.removeLayer('track')
    map.removeSource('track')
  }

  const addTrackLayer = () => {
    map.addSource('track', {
      'type': 'geojson',
      'data': fields.geo_shape.geometry
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
        'line-color': difficlutyColors[fields.difficulte],
        'line-width': 8
      }
    })

    fitBoundsToTrack()
  }

  const fitBoundsToTrack = () => {
    let trackBounds = coordinates.reduce(
      (bounds, coords) => bounds.extend(coords),
      new mapbox.LngLatBounds(coordinates[0], coordinates[0])
    )
    map.fitBounds(trackBounds, { padding: 100 })
  }
</script>
