<script>
import getOdsUrl from './plugins/odsql.js'
import loadDataFromNetworkFirst from './plugins/local-data.js'
import TrackItem from './components/TrackItem.svelte'
import Map from './components/Map.svelte'
import Marker from './components/Marker.svelte'
import List from './components/List.svelte'

let recordsUrl = getOdsUrl('eburdet')('etienne-tracks')()
let apiCall = loadDataFromNetworkFirst('tracks', recordsUrl)
</script>

{#await apiCall}
<p>Waiting…</p>
{:then res}
  <Map>
    {#each res.data as record}
      <Marker {...record.record.fields.geo_point_2d }/>
    {/each}
  </Map>
  <List>
    {#each res.data as record}
    <TrackItem fields={record.record.fields}/>
    {/each}
  </List>
{:catch error}
  {error}
{/await}
