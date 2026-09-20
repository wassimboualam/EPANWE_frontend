<script setup>
import { reactive, ref } from 'vue'
import { RouterLink } from 'vue-router'
import BaseButton from '@/components/ui/BaseButton.vue'

defineProps({
  disabled: Boolean,
})

const showPassword = ref(false)

const emit = defineEmits(['submit'])

const form = reactive({
  email: '',
  password: '',
})
</script>

<template>
  <form @submit.prevent="() => emit('submit', form)">
    <h2 class="text-2xl md:text-[2rem] font-bold text-[var(--slate)] mb-3">
      Welcome Back
    </h2>

    <p class="text-gray-500 mb-8 md:mb-10">
      Sign in to continue.
    </p>

    <div class="flex flex-col gap-2 mb-6">
      <label class="font-semibold text-[var(--slate)]">Email</label>

      <input
        v-model="form.email"
        type="email"
        placeholder="john@email.com"
        class="w-full px-4 py-[15px] border border-gray-300 rounded-[14px] text-base font-[inherit] focus:outline-none focus:border-[var(--gold)] transition-colors"
      >
    </div>

    <div class="flex flex-col gap-2 mb-6">
      <label class="font-semibold text-[var(--slate)]">Password</label>

      <div class="relative">
        <input
          v-model="form.password"
          :type="showPassword ? 'text' : 'password'"
          placeholder="••••••••"
          class="w-full px-4 py-[15px] pr-12 border border-gray-300 rounded-[14px] text-base font-[inherit] focus:outline-none focus:border-[var(--gold)] transition-colors"
        >

        <button
          type="button"
          class="absolute right-4 top-1/2 -translate-y-1/2 bg-transparent text-gray-500 hover:text-[var(--slate)] transition-colors cursor-pointer"
          @click="showPassword = !showPassword"
        >
          <span class="material-symbols-outlined">
            {{ showPassword ? 'visibility_off' : 'visibility' }}
          </span>
        </button>
      </div>
    </div>

    <!-- <div class="flex justify-between mb-9 text-sm">
      <label class="flex items-center gap-2 cursor-pointer">
        <input type="checkbox" />
        Remember me
      </label>

      <RouterLink to="/forgot-password">Forgot Password?</RouterLink>
    </div> -->

    <BaseButton
      text="Login"
      button-type="submit"
      :disabled="disabled"
    />

    <p class="mt-8 text-center text-[var(--slate)]">
      Don't have an account?
      <RouterLink
        to="/register"
        class="text-[var(--gold)] font-semibold hover:underline ml-1"
      >
        Create one
      </RouterLink>
    </p>
  </form>
</template>