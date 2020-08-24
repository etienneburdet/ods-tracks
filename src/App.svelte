<script>
import { onMount } from 'svelte'

import getOdsUrl from './plugins/odsql.js'
import loadDataFromNetworkFirst from './plugins/local-data.js'

import ListItem from './components/ListItem.svelte'
import Map from './components/Map.svelte'
import Marker from './components/Marker.svelte'
import Track from './components/Track.svelte'
import List from './components/List.svelte'
import Details from './components/Details.svelte'

import { displayedTrack } from './stores/displayed-track.js'
import { tracks } from './stores/tracks.js'
import { filteredTracks } from './stores/filtered-tracks.js'

let recordsUrl = getOdsUrl('eburdet')('gpx')()
let trackShape

onMount (async () => {
  $tracks = await getTracksFromServ()
  const params = new URLSearchParams(document.location.search)
  const id = params.get('id')
  if (id) {
    const track = $tracks.filter(track => track.id === id)
    displayedTrack.display(track)
  }
})

const getTracksFromServ = async () => {
  const tracks = []
  const promiseFromServ = await loadDataFromNetworkFirst('tracks', recordsUrl)
  promiseFromServ.data.forEach((record, index) => {
    tracks[index] = { ...record.record.fields }
    tracks[index].id = record.record.id
  })
  return tracks
}

const updateSelectedTrack = event => {
  history.state
   ? displayedTrack.display(history.state.id)
   : displayedTrack.quit()
}
</script>

<svelte:window on:popstate={updateSelectedTrack} />

{#if $tracks}
  <Map>
    {#if $displayedTrack}
      <Track track={$displayedTrack}/>
    {:else}
      {#each $filteredTracks as track}
        <Marker {track} />
      {/each}
    {/if}
  </Map>
  {#if $displayedTrack}
    <Details track={$displayedTrack}/>
  {:else}
    <List>
      {#each $filteredTracks as track (track.id)}
        <ListItem {track} id={track.id} />
      {/each}
    </List>
  {/if}
{/if}
