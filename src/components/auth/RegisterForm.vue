<script setup>
import { onMounted, reactive, ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import BaseButton from '@/components/ui/BaseButton.vue'
import { useToastStore } from '@/stores/toast'
import { getCsrf } from '@/utilities'
import { useUserStore } from '@/stores/user'

const toastStore = useToastStore()
const userStore = useUserStore()
const router = useRouter()

const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  age: '',
  gender: '',
})

const errors = reactive({
  firstName: '',
  lastName: '',
  email: '',
  age: '',
  gender: '',
})

function validate() {
  let valid = true

  Object.keys(errors).forEach((key) => {
    errors[key] = ''
  })

  if (!form.firstName.trim()) {
    errors.firstName = 'First name is required.'
    valid = false
  }

  if (!form.lastName.trim()) {
    errors.lastName = 'Last name is required.'
    valid = false
  }

  if (!form.email.trim()) {
    errors.email = 'Email is required.'
    valid = false
  }

  if (!form.age) {
    errors.age = 'Please select an age.'
    valid = false
  }

  if (!form.gender) {
    errors.gender = 'Please select a gender.'
    valid = false
  }

  return valid
}

let csrf

const disabled = ref(false)

const register = async () => {
  if (!validate()) {
    return
  }
  disabled.value = true
  try {
    const { type, message, title } = await userStore.register(form, csrf)
    disabled.value = false
    toastStore.show({
      title,
      message,
      type,
      duration: 5000,
    })
    router.push('/')
  } catch (error) {
    disabled.value = false
    console.error(error)
  }
}

onMounted(async () => {
  csrf = await getCsrf()
})
</script>

<template>
  <form @submit.prevent="register">
    <h2 class="text-2xl md:text-[2rem] font-bold text-[var(--slate)] mb-3">
      Create Account
    </h2>

    <p class="text-gray-500 mb-8 md:mb-9">
      Join the EPANWE community.
    </p>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
      <div class="flex flex-col gap-2 mb-1">
        <label class="font-semibold text-[var(--slate)]">First Name</label>
        <input
          v-model="form.firstName"
          type="text"
          class="w-full px-4 py-[15px] border rounded-[14px] text-base font-[inherit] focus:outline-none focus:border-[var(--gold)] transition-colors"
          :class="errors.firstName ? 'border-red-600' : 'border-gray-300'"
        >
        <small
          v-if="errors.firstName"
          class="text-red-600 text-sm mt-1"
        >
          {{ errors.firstName }}
        </small>
      </div>

      <div class="flex flex-col gap-2 mb-1">
        <label class="font-semibold text-[var(--slate)]">Last Name</label>
        <input
          v-model="form.lastName"
          type="text"
          class="w-full px-4 py-[15px] border rounded-[14px] text-base font-[inherit] focus:outline-none focus:border-[var(--gold)] transition-colors"
          :class="errors.lastName ? 'border-red-600' : 'border-gray-300'"
        >
        <small
          v-if="errors.lastName"
          class="text-red-600 text-sm mt-1"
        >
          {{ errors.lastName }}
        </small>
      </div>

      <div class="flex flex-col gap-2 mb-1">
        <label class="font-semibold text-[var(--slate)]">Age</label>
        <input
          v-model="form.age"
          type="number"
          class="w-full px-4 py-[15px] border rounded-[14px] text-base font-[inherit] focus:outline-none focus:border-[var(--gold)] transition-colors"
          :class="errors.age ? 'border-red-600' : 'border-gray-300'"
        >
        <small
          v-if="errors.age"
          class="text-red-600 text-sm mt-1"
        >
          {{ errors.age }}
        </small>
      </div>

      <div class="flex flex-col gap-2 mb-1">
        <label class="font-semibold text-[var(--slate)]">Gender</label>
        <select
          v-model="form.gender"
          class="w-full px-4 py-[15px] border rounded-[14px] text-base font-[inherit] bg-white focus:outline-none focus:border-[var(--gold)] transition-colors"
          :class="errors.gender ? 'border-red-600' : 'border-gray-300'"
        >
          <option value="male">
            Male
          </option>
          <option value="female">
            Female
          </option>
        </select>
        <small
          v-if="errors.gender"
          class="text-red-600 text-sm mt-1"
        >
          {{ errors.gender }}
        </small>
      </div>
    </div>

    <div class="flex flex-col gap-2 mt-1 mb-6">
      <label class="font-semibold text-[var(--slate)]">Email</label>
      <input
        v-model="form.email"
        type="email"
        class="w-full px-4 py-[15px] border rounded-[14px] text-base font-[inherit] focus:outline-none focus:border-[var(--gold)] transition-colors"
        :class="errors.email ? 'border-red-600' : 'border-gray-300'"
      >
      <small
        v-if="errors.email"
        class="text-red-600 text-sm mt-1"
      >
        {{ errors.email }}
      </small>
    </div>

    <input
      type="hidden"
      name="_token"
    >

    <BaseButton
      text="Create Account"
      button-type="submit"
      :disabled="disabled"
    />

    <p class="mt-8 text-center text-[var(--slate)]">
      Already have an account?
      <RouterLink
        to="/login"
        class="text-[var(--gold)] font-semibold hover:underline ml-1"
      >
        Sign In
      </RouterLink>
    </p>
  </form>
</template>