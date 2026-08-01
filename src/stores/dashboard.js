import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
import { useRequestStore } from './request'
import { useUserStore } from './user'

export const useDashboardStore = defineStore('dashboard', {
  state: () => ({
    currentPage: ref(''),
    pages: reactive([
      {
        link: '/dashboard',
        name: 'Dashboard',
        icon: 'dashboard',
        isActive: true,
      },
      {
        link: '/dashboard/profile',
        name: 'Profile',
        icon: 'person',
        isActive: false,
      },
    ]),
    hasApplied: false,
  }),
  actions: {
    setCurrentPage(name) {
      this.pages.forEach((page) =>
        name === page.name ? (page.isActive = true) : (page.isActive = false),
      )
      this.currentPage = name
    },
    async setPages() {
      const userStore = useUserStore()
      if (userStore.userInfo.role === 'admin') {
        this.pages[0].link = '/admin'
      } else {
        this.pages[0].link = '/dashboard'
      }
    },
    apply() {
      this.hasApplied = true
    },
    async getHasApplied() {
      const requestStore = useRequestStore()
      if (requestStore.request.status === 'not done yet') {
        this.hasApplied = false
      } else {
        this.hasApplied = true
      }
    },
  },
})
