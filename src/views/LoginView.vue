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

  try {
    const { type, message } = await userStore.login(form, csrf)
    if (type === 'error') {
      toastStore.error(message)
      return
    }
    toastStore.success(message)
    router.push('/dashboard')
  } catch (error) {
    toastStore.error(error.message, error.name);
    console.error(error);
  } finally {
    disabled.value = false;
  }
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
    <LoginForm
      :disabled="disabled"
      @submit="login"
    />
  </AuthLayout>
</template>
