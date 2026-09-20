<script setup>
import { RouterView } from 'vue-router'
import ToastContainer from './components/ui/ToastContainer.vue'
import { useUserStore } from './stores/user.js'
import { onMounted } from 'vue'

const userStore = useUserStore()

onMounted(async () => {
  try {
    await userStore.refreshUser()
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
