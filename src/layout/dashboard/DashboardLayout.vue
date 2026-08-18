<script setup>
import { RouterView, useRouter } from 'vue-router'
import Navbar from './Navbar.vue'
import Sidebar from './Sidebar.vue'
import { useUserStore } from '@/stores/user.js'
import { onMounted } from 'vue'
import { useToastStore } from '@/stores/toast.js'
import { useRequestStore } from '@/stores/request.js'

const userStore = useUserStore()
const toastStore = useToastStore()
const router = useRouter()

// onMounted(async () => {
//   const userStore = useUserStore()
//   await userStore.refreshUser()

//   const id = userStore.userInfo.id

//   // in case the user session has been expired
//   if (!id) {
//     toastStore.warning('You have been logged out. Please log back in.')
//     return router.push('/login')
//   }

//   // const requestStore = useRequestStore()
//   // requestStore.getRequest(id)
// })
</script>

<template>
  <div class="dashboard">
    <Sidebar />
    <div class="content">
      <Navbar v-if="userStore.userInfo" :user="userStore.userInfo" />
      <div class="page-content">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style scoped>
.dashboard {
  display: grid;
  grid-template-columns: 270px 1fr;
  min-height: 100vh;
  background: #f7f8fa;
}

.content {
  display: flex;
  flex-direction: column;
}

.page-content {
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

@media (max-width: 1000px) {
  .dashboard {
    grid-template-columns: 90px 1fr;
  }

  .content {
    padding: 25px;
  }
}

@media (max-width: 700px) {
  .dashboard {
    grid-template-columns: 1fr;
  }

  .content {
    padding: 20px;
  }
}
</style>
