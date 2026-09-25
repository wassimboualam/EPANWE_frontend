<script setup>
import BaseButton from '@/components/ui/BaseButton.vue'
import { useDashboardStore } from '@/stores/dashboard'
import { useUserStore } from '@/stores/user'
import { RouterLink, useRouter } from 'vue-router'

const store = useDashboardStore()
const pages = store.getPages()
const userStore = useUserStore()
const router = useRouter()

async function logOut() {
  await userStore.logOut()
  router.push('/')
}
</script>

<template>
  <aside
    class="bg-white border-b lg:border-b-0 lg:border-r border-gray-200
           px-4 py-3 lg:p-[30px_22px]
           lg:h-screen lg:sticky lg:top-0
           flex flex-col"
  >
    <div class="mb-0 lg:mb-3 lg:pt-[10px] lg:px-3 lg:pb-[35px]">
      <h2 class="mb-0 text-xl lg:text-[1.7rem] font-bold text-[var(--slate)]">
        <RouterLink to="/">
          EPANWE
        </RouterLink>
      </h2>
    </div>

    <nav class=" hidden lg:flex flex-row flex-wrap lg:flex-col gap-2 lg:gap-2.5">
      <RouterLink
        v-for="page in pages"
        :key="page.name"
        :to="page.link"
        class="flex items-center gap-2 lg:gap-3.5 font-medium
               py-2 px-3 lg:py-3.5 lg:px-4
               rounded-[14px] text-[var(--gray)] transition-colors duration-300
               hover:bg-gray-100"
        :class="page.isActive ? 'bg-[var(--gold-soft)] text-[var(--gold)]' : ''"
      >
        <span class="material-symbols-outlined text-xl lg:text-2xl">{{ page.icon }}</span>
        {{ page.name }}
      </RouterLink>
    </nav>

    <div class="hidden lg:block mt-auto pt-6">
      <BaseButton
        text="Logout"
        icon="logout"
        variant="dimmed"
        color="danger"
        :full-width="true"
        :justify-content="'flex-start'"
        class="!px-4 !py-3.5 !gap-3"
        @click="logOut()"
      />
    </div>
  </aside>
</template>