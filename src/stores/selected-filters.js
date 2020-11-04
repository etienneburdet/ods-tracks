import { writable } from 'svelte/store'

const initSelectedFilters = () => {
  const { subscribe, set } = writable({
    sports: [],
    difficulties: [],
    gains: []
  })

  return {
    subscribe,
    set,
    initialize: (choices) => {
      set(choices)
    }
  }
}

export const selectedFilters = initSelectedFilters()
