<script>
import getOdsUrl from './plugins/odsql.js'
import loadDataFromNetworkFirst from './plugins/local-data.js'

let recordsUrl = getOdsUrl('eburdet')('etienne-tracks')()
let apiCall = loadDataFromNetworkFirst('tracks', recordsUrl)

let title = 'Tracks'
</script>

<h1>{recordsUrl}</h1>

{#await apiCall}
<p>Waiting…</p>
{:then res}
  {JSON.stringify(res)}
{:catch error}
  {error}
{/await}
