<script setup>
import { useUserStore } from '@/stores/user.js'
import DashboardLayout from './DashboardLayout.vue'
import WaitPage from '@/components/ui/WaitPage.vue'
import { computed, onMounted } from 'vue'
import { useToastStore } from '@/stores/toast.js'
import { useRouter } from 'vue-router'
import { useRequestStore } from '@/stores/request.js'
import AdminDashboardLayout from './AdminDashboardLayout.vue'

const userStore = useUserStore()
const toastStore = useToastStore()
const requestStore = useRequestStore()
const router = useRouter()

const userExists = computed(
  () => userStore.userInfo != undefined && userStore.userInfo.role != undefined,
)

onMounted(async () => {
  await userStore.refreshUser()
  // in case the user session has been expired
  if (!userStore.userExists) {
    toastStore.warning('You have been logged out. Please log back in.')
    return router.push('/login')
  }
})
</script>

<template>
  <WaitPage
    v-if="
      !userExists // checks if user doesn't exist
      // (userStore.userInfo.role === 'admin' && requestStore.requests.length === 0)
    "
  />
  <div v-else>
    <AdminDashboardLayout v-if="userStore.userInfo.role == 'admin'" />
    <DashboardLayout v-else />
  </div>
</template>
