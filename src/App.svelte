<script>
import getOdsUrl from './plugins/odsql.js'
import loadDataFromNetworkFirst from './plugins/local-data.js'
import TrackItem from './components/TrackItem.svelte'

let recordsUrl = getOdsUrl('eburdet')('etienne-tracks')()
let apiCall = loadDataFromNetworkFirst('tracks', recordsUrl)


</script>

{#await apiCall}
<p>Waiting…</p>
{:then res}
  {#each res.data as record}
    <TrackItem fields={record.record.fields}/>
  {/each}
{:catch error}
  {error}
{/await}
