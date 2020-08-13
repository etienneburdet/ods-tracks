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
  import { selectedTrack } from './components/store.js'

  let recordsUrl = getOdsUrl('eburdet')('etienne-tracks')()
  let promiseFromServ = loadDataFromNetworkFirst('tracks', recordsUrl)
  let trackShape

  const updateSelectedTrack = event => {
    console.log('pop')
    $selectedTrack = event.state
  }

  const getTrackFields = (res) => {
    const record = res.data.find(el => el.record.id === $selectedTrack)
    return record.record.fields
  }

  onMount (() => {
    const params = new URLSearchParams(document.location.search)
    $selectedTrack = params.get('id')
  })
</script>

<svelte:window on:popstate={updateSelectedTrack} />

{#await promiseFromServ}
<p>Waiting…</p>
{:then res}
  <Map>
    {#if $selectedTrack}
      <Track fields={getTrackFields(res)}/>
    {:else}
      {#each res.data as record}
        <Marker {...record.record.fields.geo_point_2d} id={record.record.id} />
      {/each}
    {/if}
  </Map>
  {#if $selectedTrack}
    <Details />
  {:else}
    <List>
      {#each res.data as record}
      <ListItem fields={record.record.fields} />
      {/each}
    </List>
  {/if}
{:catch error}
  {error}
{/await}
