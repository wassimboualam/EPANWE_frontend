<script setup>
import { useUserStore } from '@/stores/user'
import AdminDashboardView from './AdminDashboardView.vue'
import DashboardView from './DashboardView.vue'
import { useDashboardStore } from '@/stores/dashboard.js'

const store = useDashboardStore()
store.setCurrentPage('Dashboard')

const userStore = useUserStore()
</script>

<template>
  <AdminDashboardView v-if="userStore.userInfo.role === 'admin'" />
  <DashboardView v-else />
</template>
