import { writable, get } from 'svelte/store'

const initSelectedFilters = () => {
  const { subscribe, set } = writable({
    sports: [],
    difficulties: [],
    gains: []
  })

  return {
    subscribe,
    initialize (filters) { set(filters) }
  }
}

export const selectedFilters = initSelectedFilters()
