<script setup>
import AuthLayout from '@/components/auth/AuthLayout.vue'
import LoginForm from '@/components/auth/LoginForm.vue'
import { useToastStore } from '@/stores/toast'
import { useUserStore } from '@/stores/user'
import { getCsrf } from '@/utilities'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const userStore = useUserStore()
const toastStore = useToastStore()
const router = useRouter()

let csrf
let disabled = ref(false)

const login = async (form) => {
  disabled.value = true

  const { type, message, title } = await userStore.login(form, csrf)
  disabled.value = false

  if (type === 'error') {
    toastStore.error(message)
    return
  }
  toastStore.success(message)
  router.push('/dashboard')
}

onMounted(async () => {
  csrf = await getCsrf()
})
</script>

<template>
  <AuthLayout
    title="Welcome Back"
    subtitle="Continue your journey with EPANWE by signing into your account."
    image="/images/login.jpg"
  >
    <LoginForm @submit="login" :disabled="disabled" />
  </AuthLayout>
</template>
