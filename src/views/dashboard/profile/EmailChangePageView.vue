<script setup>
import Button from '@/components/ui/Button.vue'
import Modal from '@/components/ui/Modal.vue'
import { useToastStore } from '@/stores/toast'
import { useUserStore } from '@/stores/user'
import { getCsrf } from '@/utilities'
import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

const userStore = useUserStore()
const toastStore = useToastStore()

let csrf

async function updateEmail() {
  const o = await userStore.confirmEmailChange(csrf, route.params.id)
  console.log(o)
  const { title, message, type } = o
  toastStore.show({
    title,
    message,
    type,
  })
  router.push('/dashboard')
}

onMounted(async () => {
  console.log('EmailChangePageView called')
  csrf = await getCsrf()
})
</script>

<template>
  <Modal title="Want to change email?">
    Are you really sure you want to change your email?
    <template #footer>
      <Button text="Update email" @click="updateEmail" />
    </template>
  </Modal>
</template>
