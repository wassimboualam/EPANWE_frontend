<script setup>
import AvatarUploader from '@/components/dashboard/profile/AvatarUploader.vue'
import PersonalInfoForm from '@/components/dashboard/profile/PersonalInfoForm.vue'
import SecurityForm from '@/components/dashboard/profile/SecurityForm.vue'
import { useDashboardStore } from '@/stores/dashboard'
import { useToastStore } from '@/stores/toast'
import { useUserStore } from '@/stores/user'
import { capitalise, getCsrf } from '@/utilities'
import { onMounted } from 'vue'

const store = useDashboardStore()
store.setCurrentPage('Profile')

const userStore = useUserStore()
const toastStore = useToastStore()
let csrf

async function editInfo(form) {
  const { type, message } = await userStore.editInfo(form, csrf)
  userStore.refreshUser()
  toastStore.show({
    title: capitalise(type),
    message,
    type,
  })
}

async function requestEmailChange(email) {
  const { type, message } = await userStore.requestEmailChange(email, csrf)
  toastStore.show({
    title: capitalise(type),
    message,
    type,
  })
}

async function refreshPassword() {
  const { title, message, type, duration } = await userStore.refreshPassword(csrf)
  toastStore.show({
    title,
    message,
    type,
    duration,
  })
}

onMounted(async () => {
  csrf = await getCsrf()
})
</script>

<template>
  <div
    class="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-6 lg:gap-[30px] items-start"
    :class="userStore.userInfo.role === 'admin' ? 'lg:mx-10 xl:mx-20' : ''"
  >
    <AvatarUploader :user="userStore.userInfo" />

    <div class="flex flex-col gap-6 lg:gap-[30px] min-w-0">
      <PersonalInfoForm
        :user="userStore.userInfo"
        @submit="editInfo"
      />

      <SecurityForm
        :email="userStore.userInfo.email"
        @submit-email="requestEmailChange"
        @refresh-password="refreshPassword"
      />
    </div>
  </div>
</template>