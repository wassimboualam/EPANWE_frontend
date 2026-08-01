import { defineStore } from 'pinia'

export const useEventStore = defineStore('event', {
  state: () => ({
    type: null,
    callback: null,
    duration: 4000,
    isOn: false,
  }),
  actions: {
    reset() {
      this.type = null
      this.callback = null
      this.duration = 4000
      this.isOn = false
    },
  },
})
