import { defineStore } from 'pinia'
import { useDashboardStore } from './dashboard'
import { useToastStore } from './toast'
import { capitalise } from '@/utilities'

export const useRequestStore = defineStore('request', {
  state: () => ({
    request: {
      status: 'Not done yet',
      submittedAt: null,
      updatedAt: null,
      message: '',
    },
    requests: [],
  }),
  actions: {
    async refreshAllRequests() {
      const toastStore = useToastStore()
      try {
        const response = await fetch('http://localhost:8000/request', {
          method: 'GET',
          credentials: 'include',
        })

        this.requests = await response.json()
        this.sortRequests()
      } catch (error) {
        toastStore.error(`${error.name} : ${error.message}`)
      }
    },

    getRequests() {
      const requests = this.requests.map((r) => this.formatRequest(r, r))
      return requests
    },
    async makeRequest({ userId, csrf }) {
      const response = await fetch('http://localhost:8000/request', {
        method: 'POST',
        body: JSON.stringify({
          userId,
        }),
        headers: {
          'X-CSRF-TOKEN': csrf,
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      })

      return await response.json()
    },
    async getRequest(userId) {
      const toastStore = useToastStore()
      const dashboardStore = useDashboardStore()

      try {
        const response = await fetch('http://localhost:8000/request/' + userId, {
          credentials: 'include',
        })
        const data = await response.json()

        this.request.status = data.status
        this.request.submittedAt = this.formatDate(data.created_at)
        this.request.updatedAt = this.formatDate(data.updated_at)
        this.request.message = data.message

        await dashboardStore.getHasApplied()
      } catch (error) {
        toastStore.error(`${error.name} : ${error.message}`)
        return
      }
    },
    formatRequest(source, receiver) {
      receiver.status = source.status
      receiver.submittedAt = this.formatDate(source.created_at)
      receiver.updatedAt = this.formatDate(source.updated_at)
      receiver.message = source.message
    },
    formatDate(date = '') {
      date = date.split(/[A-z\.]/)
      return date[0] + ' ' + date[1]
    },

    async setApproval(type = '', user_id = -1, csrf) {
      if (!Number.isInteger(user_id) || user_id === -1) {
        throw new Error('Add user_id argument')
      }
      if (!['approved', 'rejected'].includes(type)) {
        throw new Error('Add type argument')
      }
      if (!csrf) {
        throw new Error('Add csrf argument')
      }
      const toastStore = useToastStore()

      const response = await fetch('http://localhost:8000/request/setapproval/', {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify({ type, user_id }),
        headers: {
          'X-CSRF-TOKEN': csrf,
          'Content-Type': 'application/json',
        },
      })
      const data = await response.json()

      const message = data.message
      type = data.type

      toastStore.show({
        title: capitalise(type),
        message: message,
        type: type,
      })
    },

    sortRequests() {
      const statuses = ['pending', 'rejected', 'approved']
      this.requests = this.requests.sort((r1, r2) => {
        const r1Index = statuses.findIndex((s) => r1.status == s)
        const r2Index = statuses.findIndex((s) => r2.status == s)
        return r1Index - r2Index
      })
    },
  },
})
