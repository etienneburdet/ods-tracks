<script>
import getOdsUrl from './plugins/odsql.js'
import loadDataFromNetworkFirst from './plugins/local-data.js'
import TrackItem from './components/TrackItem.svelte'
import Map from './components/Map.svelte'
import Marker from './components/Marker.svelte'
import Track from './components/Track.svelte'
import List from './components/List.svelte'
import Details from './components/Details.svelte'
import { selectedTrack } from './components/store.js'

let recordsUrl = getOdsUrl('eburdet')('etienne-tracks')()
let apiCall = loadDataFromNetworkFirst('tracks', recordsUrl)
let trackShape

const updateSelectedTrack = event => {
  $selectedTrack = event.state
}

const getShape = (res) => {
  const record = res.data.find(el => el.record.id === $selectedTrack)
  console.log(record.record.fields.geo_shape)
  return record.record.fields.geo_shape
}
</script>

<svelte:window on:popstate={updateSelectedTrack} />

{#await apiCall}
<p>Waiting…</p>
{:then res}
  <Map>
    {#if $selectedTrack}
      <Track geoshape={getShape(res)}/>
    {:else}
      {#each res.data as record}
        <Marker {...record.record.fields.geo_point_2d } id={record.record.id} />
      {/each}
    {/if}
  </Map>
  {#if $selectedTrack}
    <Details />
  {:else}
    <List>
      {#each res.data as record}
      <TrackItem fields={record.record.fields} />
      {/each}
    </List>
  {/if}
{:catch error}
  {error}
{/await}
