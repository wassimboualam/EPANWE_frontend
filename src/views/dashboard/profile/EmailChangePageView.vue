<script setup>
import BaseButton from '@/components/ui/BaseButton.vue'
import BaseModal from '@/components/ui/BaseModal.vue'
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
  const { title, message, type } = o
  toastStore.show({ title, message, type })
  router.push('/dashboard')
}

onMounted(async () => {
  csrf = await getCsrf()
})
</script>

<template>
  <BaseModal title="Want to change email?">
    Are you really sure you want to change your email?
    <template #footer>
      <BaseButton
        text="Update email"
        @click="updateEmail"
      />
    </template>
  </BaseModal>
</template>