<script setup>
import Navbar from '@/layout/dashboard/DashboardNavbar.vue'
import { useUserStore } from '@/stores/user'
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import DashboardSidebar from './DashboardSidebar.vue'

const userStore = useUserStore()

onMounted(async () => {})
</script>

<template>
  <div class="grid grid-cols-1 lg:grid-cols-[270px_1fr] min-h-screen bg-[#f7f8fa]">
    <DashboardSidebar />

    <div class="flex flex-col min-w-0">
      <Navbar
        v-if="userStore.userInfo"
        :user="userStore.userInfo"
      />

      <div class="p-5 md:p-6 lg:p-[30px] flex flex-col gap-6">
        <RouterView />
      </div>
    </div>
  </div>
</template>
