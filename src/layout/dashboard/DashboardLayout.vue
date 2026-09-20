<script setup>
import { RouterView } from 'vue-router'
import Navbar from './DashboardNavbar.vue'
import Sidebar from './DashboardSidebar.vue'
import { useUserStore } from '@/stores/user.js'

const userStore = useUserStore()
</script>

<template>
  <div class="grid grid-cols-1 lg:grid-cols-[270px_1fr] min-h-screen bg-[#f7f8fa]">
    <Sidebar />

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