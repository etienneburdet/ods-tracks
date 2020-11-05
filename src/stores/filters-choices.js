import { writable } from 'svelte/store'

export const filtersChoices = writable({
  sports: [],
  difficulties: [],
  gains: []
})
