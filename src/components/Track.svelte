<script>
  import { getContext, onMount } from 'svelte'

  const { mapbox, getMap } = getContext('mapbox')
  const map = getMap()

  export let geoshape
  let coordinates = geoshape.geometry.coordinates


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
