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
import { trackId } from './components/store.js'

let recordsUrl = getOdsUrl('eburdet')('gpx')()
let promiseFromServ = loadDataFromNetworkFirst('tracks', recordsUrl)
let trackShape

const updateSelectedTrack = event => {
  history.state
   ? trackId.select(history.state.id)
   : trackId.reset()
}

const getTrack = (res) => {
  const record = res.data.find(el => el.record.id === $trackId)
  return record.record.fields
}

onMount (() => {
  const params = new URLSearchParams(document.location.search)
  const id = params.get('id')
  id && trackId.select(id)
})
</script>

<svelte:window on:popstate={updateSelectedTrack} />

{#await promiseFromServ}
<p>Waiting…</p>
{:then res}
  <Map>
    {#if $trackId}
      <Track track={getTrack(res)}/>
    {:else}
      {#each res.data as record}
        <Marker {...record.record.fields.geo_point_2d} id={record.record.id} />
      {/each}
    {/if}
  </Map>
  {#if $trackId}
    <Details track={getTrack(res)}/>
  {:else}
    <List>
      {#each res.data as record}
      <ListItem track={record.record.fields} id={record.record.id} />
      {/each}
    </List>
  {/if}
{:catch error}
  {error}
{/await}
