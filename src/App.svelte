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

import { trackId, track, tracks } from './components/store.js'

let recordsUrl = getOdsUrl('eburdet')('gpx')()
let trackShape

onMount (async () => {
  $tracks = await getTracksFromServ()
  const params = new URLSearchParams(document.location.search)
  const id = params.get('id')
  id && track.select(id)
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
   ? trackId.select(history.state.id)
   : trackId.reset()
}

const getTrack = (res) => {
  const record = res.data.find(el => el.record.id === $trackId)
  return record.record.fields
}

const getFilters = (res) => {
  const sports = getSports(res)
  const difficulties = getDifficulties(res)
  return { sports, difficulties }
}
const getSports = (res) => {
  let sports = [...new Set(res.data.map(record => record.record.fields.sport))]
  return sports
}

const getDifficulties = (res) => {
  let difficulties = [...new Set(res.data.map(record => record.record.fields.difficulte))]
  return difficulties
}
</script>

<svelte:window on:popstate={updateSelectedTrack} />


<!-- {#await promiseFromServ}
<p>Waiting…</p>
{:then res} -->
{#if $tracks}
  <Map>
    {#if $track}
      <Track track={$track}/>
    {:else}
      {#each $tracks as track}
        <Marker {...track.geo_point_2d} id={track.id} />
      {/each}
    {/if}
  </Map>
  {#if $track}
    <Details track={$track}/>
  {:else}
    <!-- <List filters={getFilters(res)}>
      {#each $tracks as track}
      <ListItem {track} id={track.id} />
      {/each}
    </List> -->
  {/if}
{/if}
<!-- {:catch error}
  {error}
{/await} -->
