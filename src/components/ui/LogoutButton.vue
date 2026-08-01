<script setup lang="ts">
import { useUserStore } from '@/stores/user.js'
import Button from './Button.vue'
import { useRouter } from 'vue-router'
const props = defineProps({
  logOut: Function,
})

const userStore = useUserStore()
const router = useRouter()
</script>

<template>
  <Button color="danger" @click="logOut">
    <span class="material-symbols-outlined">logout</span>
    Log out
  </Button>
</template>

<style scoped></style>
