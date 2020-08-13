/* global history */
import { writable } from 'svelte/store'

const createTrackId = () => {
  const { subscribe, set } = writable(0)

  return {
    subscribe,
    select: (id) => {
      history.pushState({ id: id }, '', `?id=${id}`)
      set(id)
    },
    reset: () => {
      history.pushState(null,'','/')
      set(null)
    }
  }
}

export const trackId = createTrackId()
