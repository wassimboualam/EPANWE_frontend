// import { defineStore } from 'pinia'

// export const useToastStore = defineStore('toast', {
//   state: () => ({
//     show: false,
//     message: '',
//     type: 'info',
//     timeoutId: null,
//   }),

//   actions: {
//     trigger(message, type, duration = 3000) {
//       this.message = message
//       this.type = type
//       this.show = true

//       if (this.timeoutId) {
//         clearTimeout(this.timeoutId)
//       }

//       this.timeoutId = window.setTimeout(() => {
//         this.show = false
//       }, duration)
//     },

//     hide() {
//       this.show = false
//     },
//   },
// })

import { defineStore } from 'pinia'

let id = 0

export const useToastStore = defineStore('toast', {
  state: () => ({
    toasts: [],
  }),

  actions: {
    show({ title, message, type = 'info', duration = 15000 }) {
      const toast = {
        id: id++,

        title,

        message,

        type,

        duration,
      }

      this.toasts.push(toast)

      setTimeout(() => {
        this.remove(toast.id)
      }, duration)
    },

    remove(id) {
      this.toasts = this.toasts.filter((t) => t.id !== id)
    },

    success(message, title = 'Success', duration = 4000) {
      this.show({
        title,

        message,

        type: 'success',

        duration,
      })
    },

    error(message, title = 'Error', duration = 4000) {
      this.show({
        title,

        message,

        type: 'error',

        duration,
      })
    },

    warning(message, title = 'Warning', duration = 4000) {
      this.show({
        title,

        message,

        type: 'warning',

        duration,
      })
    },

    info(message, title = 'Information', duration = 4000) {
      this.show({
        title,

        message,

        type: 'info',

        duration,
      })
    },
  },
})
