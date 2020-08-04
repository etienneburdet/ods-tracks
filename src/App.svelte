<script>
import getOdsUrl from './plugins/odsql.js'
import loadDataFromNetworkFirst from './plugins/local-data.js'
import TrackItem from './components/TrackItem.svelte'
import Map from './components/Map.svelte'
import Marker from './components/Marker.svelte'

let recordsUrl = getOdsUrl('eburdet')('etienne-tracks')()
let apiCall = loadDataFromNetworkFirst('tracks', recordsUrl)

const markers = [
  { lng: 5.85721904018, lat: 44.7445298701 },
  { lng: 6.54729078917, lat: 45.0363080142 }
]
</script>

<!-- {#await apiCall}
<p>Waiting…</p>
{:then res}
  {#each res.data as record}
    <TrackItem fields={record.record.fields}/>
  {/each}
{:catch error}
  {error}
{/await} -->
<Map>
  {#each markers as marker, index}
    <Marker {...markers[index]}/>
  {/each}
</Map>
