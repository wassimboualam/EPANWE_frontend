<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Toast from './components/ui/Toast.vue'
import ToastContainer from './components/ui/ToastContainer.vue'
import { useUserStore } from './stores/user.js'
import { onMounted } from 'vue'
import { useRequestStore } from './stores/request.js'
import { useEventStore } from './stores/event.js'
import { useDashboardStore } from './stores/dashboard.js'

const userStore = useUserStore()
const requestStore = useRequestStore()
const dashboardStore = useDashboardStore()

onMounted(async () => {
  try {
    await userStore.refreshUser()
    if (userStore.userExists) {
      dashboardStore.setPages()
    }
  } catch (error) {
    console.error(
      'Haya!! we got an error over here\n' +
        `${error.name}: ${error.message} \n` +
        `From ${error.cause} in ${error.fileName}:${error.lineNumber}:${error.columnNumber} `,
    )
  }
})
</script>

<template>
  <RouterView />
  <ToastContainer />
</template>

<style scoped></style>
