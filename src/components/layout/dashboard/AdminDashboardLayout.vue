<script setup>
import Navbar from '@/components/layout/dashboard/Navbar.vue'
import { useRequestStore } from '@/stores/request'
import { useToastStore } from '@/stores/toast'
import { useUserStore } from '@/stores/user'
import { onMounted } from 'vue'
import { RouterView, useRouter } from 'vue-router'

const userStore = useUserStore()
const toastStore = useToastStore()
const requestStore = useRequestStore()

const router = useRouter()

onMounted(async () => {})
</script>

<template>
  <Navbar :user="userStore.userInfo" />

  <RouterView />
</template>
