<script>
import { onMount } from 'svelte'

import { getRecordsUrl } from './plugins/odsql.js'

import ListItem from './components/ListItem.svelte'
import Map from './components/Map.svelte'
import Marker from './components/Marker.svelte'
import Track from './components/Track.svelte'
import List from './components/List.svelte'
import Details from './components/Details.svelte'
import FilterPill from './components/FilterPill.svelte'
import FiltersMenu from './components/FiltersMenu.svelte'
import FilterCategory from './components/FilterCategory.svelte'
import FilterRange from './components/FilterRange.svelte'

import { displayedTrack } from './stores/displayed-track.js'
import { tracks } from './stores/tracks.js'
import { filteredTracks } from './stores/filtered-tracks.js'
import { filtering } from './stores/filtering.js'

let recordsUrl = getRecordsUrl('eburdet')('gpx')
let trackShape

onMount (async () => {
  const params = new URLSearchParams(document.location.search)
  const name = params.get('name')
  name && displayedTrack.display(name)
})

const updateSelectedTrack = event => {
  history.state
    ? displayedTrack.display(history.state.name)
    : displayedTrack.quit()
}
</script>

<svelte:window on:popstate={updateSelectedTrack} />

{#if $tracks !== []}
  <Map>
    {#if $displayedTrack}
      <Track track={$displayedTrack}/>
    {:else}
      {#each $filteredTracks as track}
        <Marker {track} />
      {/each}
    {/if}
  </Map>
  {#if $displayedTrack}
    <Details track={$displayedTrack} on:click={displayedTrack.quit}/>
  {:else}
    <FilterPill on:click={filtering.toggle}/>
    <List>
      {#each $filteredTracks as track (track.id)}
        <ListItem {track} id={track.id} />
      {/each}
    </List>
  {/if}
  {#if $filtering}
    <FiltersMenu>
      <FilterCategory category="sports" name="Sports" />
      <FilterCategory category="difficulties" name="Difficlutés" />
      <FilterRange category="gains" name="Dénivelé" />
    </FiltersMenu>
  {/if}
{/if}
