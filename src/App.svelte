<script>
import getOdsUrl from './plugins/odsql.js'
import loadDataFromNetworkFirst from './plugins/local-data.js'
import TrackItem from './components/TrackItem.svelte'
import Map from './components/Map.svelte'
import Marker from './components/Marker.svelte'
import List from './components/List.svelte'
import Details from './components/Details.svelte'
import { selectedTrack } from './components/store.js'

let recordsUrl = getOdsUrl('eburdet')('etienne-tracks')()
let apiCall = loadDataFromNetworkFirst('tracks', recordsUrl)

const updateSelectedTrack = event => {
  $selectedTrack = event.state
}
</script>

<svelte:window on:popstate={updateSelectedTrack} />

{#await apiCall}
<p>Waiting…</p>
{:then res}
  <Map>
    {#each res.data as record}
      <Marker {...record.record.fields.geo_point_2d } id={record.record.id} />
    {/each}
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
