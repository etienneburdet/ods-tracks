<script>
import getOdsUrl from './plugins/odsql.js'
import loadDataFromNetworkFirst from './plugins/local-data.js'

let recordsUrl = getOdsUrl('eburdet')('etienne-tracks')()
let apiCall = loadDataFromNetworkFirst('tracks', recordsUrl)

let title = 'Tracks'
</script>

{#await apiCall}
<p>Waiting…</p>
{:then res}
  {#each res.data as record}
    {JSON.stringify(record.record.fields.name)}
  {/each}
{:catch error}
  {error}
{/await}
