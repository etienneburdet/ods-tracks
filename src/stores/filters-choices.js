import { writable, get } from 'svelte/store'

import { filtersOptions } from './filters-options.js'

const initChoices = () => {
  const { subscribe, set } = writable({
    sports: [],
    difficulties: [],
    gains: []
  })

  return {
    subscribe,
    set,
    initialize () { set(get(filtersOptions)) }
  }
}
export const filtersChoices = initChoices()
