<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/stores/user.js'
import BaseButton from '@/components/ui/BaseButton.vue'
import { RouterLink } from 'vue-router'
import DropdownAvatar from '@/layout/web/DropdownAvatar.vue'

const userStore = useUserStore()
const isMenuOpen = ref(false)

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
  { name: 'How to join', path: '/howtojoin' },
]
</script>

<template>
  <nav class="bg-white sticky top-0 z-[100] shadow-[0_1px_8px_rgba(0,0,0,0.05)]">
    <div class="container flex items-center justify-between h-[85px]">
      <div class="text-2xl md:text-[1.6rem] font-bold font-[Poppins] text-[var(--slate)]">
        EPANWE
      </div>

      <!-- Desktop nav links -->
      <ul class="hidden md:flex gap-10 list-none font-medium">
        <li
          v-for="link in navLinks"
          :key="link.path"
        >
          <a
            :href="link.path"
            class="cursor-pointer transition-colors duration-300 hover:text-[var(--gold)]"
          >
            {{ link.name }}
          </a>
        </li>
      </ul>

      <!-- Desktop actions -->
      <div class="hidden md:flex gap-[15px]">
        <DropdownAvatar v-if="userStore.userInfo?.id" />
        <template v-else>
          <RouterLink to="/login">
            <BaseButton
              text="Log In"
              color="secondary"
              variant="outline"
            />
          </RouterLink>
          <RouterLink to="/register">
            <BaseButton text="Join Us" />
          </RouterLink>
        </template>
      </div>

      <!-- Mobile hamburger -->
      <button
        class="md:hidden flex items-center justify-center text-[var(--slate)] cursor-pointer"
        aria-label="Toggle navigation menu"
        @click="isMenuOpen = !isMenuOpen"
      >
        <span class="material-symbols-outlined text-3xl">
          {{ isMenuOpen ? 'close' : 'menu' }}
        </span>
      </button>
    </div>

    <!-- Mobile dropdown menu -->
    <div
      v-if="isMenuOpen"
      class="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-2"
    >
      <a
        v-for="link in navLinks"
        :key="link.path"
        :href="link.path"
        class="py-2 font-medium text-[var(--slate)] transition-colors duration-300 hover:text-[var(--gold)]"
        @click="isMenuOpen = false"
      >
        {{ link.name }}
      </a>

      <div class="flex flex-col gap-3 pt-4 mt-2 border-t border-gray-100">
        <DropdownAvatar 
          v-if="userStore.userInfo?.id" 
          class="ml-auto" 
        />
        <template v-else>
          <RouterLink
            to="/login"
            @click="isMenuOpen = false"
          >
            <BaseButton
              text="Log In"
              color="secondary"
              variant="outline"
              :full-width="true"
            />
          </RouterLink>
          <RouterLink
            to="/register"
            @click="isMenuOpen = false"
          >
            <BaseButton
              text="Join Us"
              :full-width="true"
            />
          </RouterLink>
        </template>
      </div>
    </div>
  </nav>
</template>