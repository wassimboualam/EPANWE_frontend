import { defineStore } from 'pinia'

export const usePageStore = defineStore('page', {
  state: () => ({
    currentLayout: 'web',
    currentPage: 'home',
  }),
  actions: {
    setLayout(layout) {
      this.currentLayout = layout
    },
  },
})
