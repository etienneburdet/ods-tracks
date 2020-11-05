import { writable } from 'svelte/store'

const initFiltering = () => {
  const { subscribe, update } = writable(false)

  return {
    subscribe,
    toggle () {
      update((filtering) => !filtering)
    }
  }
}

export const isFiltering = initFiltering()
