import { writable } from 'svelte/store'


const createDisplayedTrack = () => {
  const { subscribe, set } = writable(0)

  return {
    subscribe,
    display: (track) => {
      history.pushState({ id: track.id }, '', `?id=${track.id}`)
      set(track)
    },
    quit: () => {
      history.pushState(null,'','/')
      set(null)
    }
  }
}

export const displayedTrack = createDisplayedTrack()
