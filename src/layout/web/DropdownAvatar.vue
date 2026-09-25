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

    <div class="flex flex-col justify-center gap-4 p-4 min-w-[220px]">
      <RouterLink
        v-for="page in dashboardStore.getPages()"
        :key="page.name"
        :to="page.link"
      >
        <BaseButton
          variant="outline"
          color="primary"
          size="sm"
          :full-width="true"
        >
          <span class="material-symbols-outlined">{{ page.icon }}</span>
          {{ page.name }}
        </BaseButton>
      </RouterLink>

      <hr class="border-none h-px bg-gray-200/40 my-1">

      <LogoutButton
        size="sm"
        variant="outline"
        @click="logOut"
      />
    </div>
  </DropdownMenu>
</template>