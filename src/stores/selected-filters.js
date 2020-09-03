import { writable } from 'svelte/store'

export const selectedFilters = writable({
  sports: [],
  elevationGains: [],
  difficulties: [],
})
