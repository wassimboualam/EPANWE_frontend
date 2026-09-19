<script setup>
import { useUserStore } from '@/stores/user.js'
import WaitPage from '@/components/ui/WaitPage.vue'
import { onBeforeMount, onMounted } from 'vue'
import { useToastStore } from '@/stores/toast.js'
import { RouterView, useRouter } from 'vue-router'

const userStore = useUserStore()
const toastStore = useToastStore()
const router = useRouter()

onMounted(async () => {
  // in case the user accesses the regestration or log in forms while being logged in
  if (userStore.userExists) {
    toastStore.warning("You are already logged in. You don't need to register or log in.")
    return router.push('/dashboard')
  }
})
onBeforeMount(async () => {
  await userStore.refreshUser()
})
</script>

<template>
  <WaitPage v-if="userStore.isLoading" />
  <div v-else>
    <RouterView />
  </div>
</template>
