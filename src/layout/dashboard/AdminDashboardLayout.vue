<script setup>
import Navbar from '@/layout/dashboard/DashboardNavbar.vue'
import { useUserStore } from '@/stores/user'
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'

const userStore = useUserStore()

onMounted(async () => {})
</script>

<template>
  <Navbar :user="userStore.userInfo" />

  <RouterView />
</template>
