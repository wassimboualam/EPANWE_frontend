<script setup>
import { RouterLink, useRouter } from 'vue-router'
import BaseAvatar from '@/components/ui/BaseAvatar.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import DropdownMenu from '@/components/ui/DropdownMenu.vue'
import { useUserStore } from '@/stores/user.js'
import LogoutButton from '@/components/ui/LogoutButton.vue'
import { useDashboardStore } from '@/stores/dashboard.js'

const userStore = useUserStore()
const dashboardStore = useDashboardStore()
const router = useRouter()

async function logOut() {
  await userStore.logOut()
  router.push('/')
}
</script>

<template>
  <DropdownMenu :is-round="true">
    <template #button>
      <BaseAvatar />
    </template>
    <div class="user-menu">
      <RouterLink
        v-for="page in dashboardStore.pages"
        :key="page.name"
        :to="page.link"
      >
        <BaseButton
          variant="outline"
          color="primary"
          size="sm"
          :full-width="true"
        >
          <span class="material-symbols-outlined"> {{ page.icon }} </span>
          {{ page.name }}
        </BaseButton>
      </RouterLink>
      <hr>
      <!-- <BaseButton
        @click="logOut()"
        variant="outline"
        color="danger"
        text="Logout"
        size="sm"
        :full-width="true"
      /> -->
      <LogoutButton
        size="sm"
        variant="outline"
        @click="logOut"
      />
    </div>
  </DropdownMenu>
</template>

<style scoped>
.user-menu {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
}
</style>
