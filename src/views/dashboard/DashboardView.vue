<script setup>
import ApplicationStatusCard from '@/components/dashboard/home/ApplicationStatusCard.vue'
import BackOfficeApplicationCard from '@/components/dashboard/home/BackOfficeApplicationCard.vue'
import WelcomeBanner from '@/components/dashboard/home/WelcomeBanner.vue'
import { useDashboardStore } from '@/stores/dashboard'
import { useRequestStore } from '@/stores/request'
import { useUserStore } from '@/stores/user'
import { computed, onMounted } from 'vue'

const dashboardStore = useDashboardStore()
const userStore = useUserStore()
const requestStore = useRequestStore()

const request = computed(() => requestStore.request)

dashboardStore.setCurrentPage('Dashboard')
onMounted(async () => {
  await requestStore.getRequest(userStore.userInfo.id)
})
</script>

<template>
  <WelcomeBanner />

  <BackOfficeApplicationCard :has-applied="dashboardStore.hasApplied" />

  <ApplicationStatusCard v-if="dashboardStore.hasApplied" :request="request" />
</template>

<style scoped></style>
