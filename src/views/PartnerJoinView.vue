<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import Button from '@/components/ui/Button.vue'
import { useToastStore } from '@/stores/toast'
import Hero from '@/components/pages/partner_join/Hero.vue'
import Benefits from '@/components/pages/partner_join/Benefits.vue'
import Form from '@/components/pages/partner_join/Form.vue'

const router = useRouter()
const toastStore = useToastStore()

const loading = ref(false)

const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  age: '',
  gender: '',
})

const submitRequest = async () => {
  loading.value = true

  try {
    const response = await fetch('http://localhost:8000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(form),
    })

    const data = await response.json()

    toastStore.show({
      title: data.title,
      message: data.message,
      type: data.type,
      duration: data.duration ?? 5000,
    })

    if (response.ok && data.type === 'success') {
      router.push('/login')
    }
  } catch (error) {
    toastStore.show({
      title: 'Something went wrong',
      message: 'We could not send your request. Please try again.',
      type: 'error',
    })
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <main class="min-h-screen bg-[#F8F7F3]">
    <Hero />
    <section class="px-6 pb-20 md:px-10">
      <div class="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <Benefits />
        <Form />
      </div>

    </section>
  </main>
</template>