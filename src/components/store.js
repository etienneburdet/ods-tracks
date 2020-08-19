/* global history */
import { writable } from 'svelte/store'
import { loadDataFromNetworkFirst } from '../plugins/local-data.js'

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

export const track = writable(0)
export const tracks = writable(0)
export const activeFilter = writable(0)
