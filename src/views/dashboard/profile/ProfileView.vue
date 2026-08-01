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
  <div class="profile-grid" :class="userStore.userInfo.role === 'admin' ? 'mx-20' : ''">
    <AvatarUploader :user="userStore.userInfo" />

    <div class="forms">
      <PersonalInfoForm :user="userStore.userInfo" @submit="editInfo" />

      <SecurityForm
        :email="userStore.userInfo.email"
        @submit-email="requestEmailChange"
        @refresh-password="refreshPassword"
      />
    </div>
  </div>
</template>

<style scoped>
.dashboard {
  display: grid;

  grid-template-columns: 270px 1fr;

  min-height: 100vh;

  background: #f7f8fa;
}

.content {
  display: flex;

  flex-direction: column;

  overflow: hidden;
}

.page-content {
  padding: 30px;
}

.profile-grid {
  display: grid;

  grid-template-columns: 320px 1fr;

  gap: 30px;

  align-items: start;
}

.forms {
  display: flex;

  flex-direction: column;

  gap: 30px;
}

@media (max-width: 1000px) {
  .dashboard {
    grid-template-columns: 90px 1fr;
  }

  .profile-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 700px) {
  .dashboard {
    grid-template-columns: 1fr;
  }

  .page-content {
    padding: 20px;
  }
}
</style>
