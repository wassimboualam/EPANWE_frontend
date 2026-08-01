import { defineStore } from 'pinia'
import { computed } from 'vue'
import { useToastStore } from './toast'
import { requestBackend } from '@/utilities'
import { useRoute } from 'vue-router'

export const useUserStore = defineStore('user', {
  state: () => ({
    userInfo: null,
    isLoading: false,
    userExists: false,
  }),
  actions: {
    async refreshUser() {
      this.isLoading = true

      const response = await fetch('http://localhost:8000/user/me', {
        credentials: 'include',
      })

      if (response.status === 200) {
        this.userInfo = await response.json()
        this.userExists = true
      } else {
        this.userExists = false
      }

      this.isLoading = false
    },
    async register(form, csrf) {
      const toastStore = useToastStore()
      try {
        const response = await fetch('http://localhost:8000/user/register', {
          method: 'POST',
          body: JSON.stringify(form),
          headers: {
            'X-CSRF-TOKEN': csrf,
            'Content-Type': 'application/json',
          },
          credentials: 'include',
        })

        return await response.json()
      } catch (error) {
        toastStore.error(error.name + ': ' + error.message)
      }
    },
    async login(form, csrf) {
      const response = await fetch('http://localhost:8000/user/login', {
        method: 'POST',
        body: JSON.stringify(form),
        headers: {
          'X-CSRF-TOKEN': csrf,
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      })

      return await response.json()
    },
    async isLoggedIn() {
      await this.refreshUser()
      if (this.userInfo.id === undefined) {
        return false
      } else {
        return true
      }
    },
    getInitials() {
      return computed(() => {
        if (this.userInfo === null) return ''
        const { first_name, last_name } = this.userInfo
        if (!first_name || !last_name) {
          return ''
        } else {
          return (first_name[0] + last_name[0]).toUpperCase()
        }
      })
    },
    async editInfo(form, csrf) {
      const response = await fetch('http://localhost:8000/user/edit/', {
        method: 'PUT',
        body: JSON.stringify(form),
        credentials: 'include',
        headers: {
          'X-CSRF-TOKEN': csrf,
          'Content-Type': 'application/json',
        },
      })

      return await response.json()
    },
    async requestEmailChange(email, csrf) {
      const response = await fetch('http://localhost:8000/user/checkemailchange/', {
        method: 'POST',
        body: email,
        credentials: 'include',
        headers: {
          'X-CSRF-TOKEN': csrf,
          'Content-Type': 'text/plain',
        },
      })

      return await response.json()
    },
    async confirmEmailChange(csrf, id) {
      return await requestBackend('', {
        path: '/user/editemail/' + id,
        csrf,
        method: 'PUT',
      })
    },
    async refreshPassword(csrf) {
      return await requestBackend(null, {
        path: '/user/refreshpassword',
        csrf: csrf,
      })
    },
    async logOut() {
      const toastStore = useToastStore()
      try {
        const response = await fetch('http://localhost:8000/user/logout', {
          credentials: 'include',
        })

        const { type, message } = await response.json()

        this.userExists = false
        this.userInfo = undefined

        toastStore.info(message)
      } catch (error) {
        toastStore.error(error.name + ': ' + error.message)
      }
    },
  },
})
