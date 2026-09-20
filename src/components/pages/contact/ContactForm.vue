<script setup>
import { reactive, ref } from 'vue'

import Button from '@/components/ui/Button.vue'
import { useToastStore } from '@/stores/toast'

const toast = useToastStore()

const loading = ref(false)

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const errors = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
})

function validate() {
  let valid = true

  Object.keys(errors).forEach((key) => {
    errors[key] = ''
  })

  if (!form.name.trim()) {
    errors.name = 'Please enter your name.'
    valid = false
  }

  if (!form.email.trim()) {
    errors.email = 'Please enter your email.'
    valid = false
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Please enter a valid email.'
    valid = false
  }

  if (!form.subject.trim()) {
    errors.subject = 'Please enter a subject.'
    valid = false
  }

  if (form.message.trim().length < 20) {
    errors.message = 'Your message must contain at least 20 characters.'
    valid = false
  }

  return valid
}

async function send() {
  if (!validate()) return

  loading.value = true

  try {
    /*
        await fetch(...)
        */

    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast.success('Your message has been sent successfully.')

    form.name = ''
    form.email = ''
    form.subject = ''
    form.message = ''
  } catch {
    toast.error('Unable to send your message.')
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <section class="py-16 md:py-20 lg:py-[80px]">
    <div class="container grid grid-cols-1 lg:grid-cols-[350px_1fr] gap-10 md:gap-12 lg:gap-[50px] items-start">
      <div class="intro">
        <span class="text-[var(--gold)] font-semibold tracking-[2px] text-sm md:text-[0.9rem]">
          GET IN TOUCH
        </span>

        <h2 class="my-5 text-2xl md:text-3xl lg:text-[2.4rem] font-bold text-[var(--slate)] leading-tight">
          Send us a Message
        </h2>

        <p class="text-gray-500 leading-[1.8]">
          Complete the form below and our team will reply as soon as possible.
        </p>
      </div>

      <form
        class="card bg-white p-6 sm:p-8 md:p-10 rounded-3xl shadow-[var(--shadow)]"
        @submit.prevent="send"
      >
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-[22px]">
          <div class="flex flex-col gap-2">
            <label class="font-semibold text-[var(--slate)]">Full Name</label>
            <input
              v-model="form.name"
              class="px-4 py-[15px] border rounded-[14px] font-[inherit] text-base transition-colors duration-200 focus:outline-none focus:border-[var(--gold)]"
              :class="errors.name ? 'border-red-600' : 'border-gray-300'"
            >
            <small
              v-if="errors.name"
              class="text-red-600 text-sm"
            >
              {{ errors.name }}
            </small>
          </div>

          <div class="flex flex-col gap-2">
            <label class="font-semibold text-[var(--slate)]">Email Address</label>
            <input
              v-model="form.email"
              type="email"
              class="px-4 py-[15px] border rounded-[14px] font-[inherit] text-base transition-colors duration-200 focus:outline-none focus:border-[var(--gold)]"
              :class="errors.email ? 'border-red-600' : 'border-gray-300'"
            >
            <small
              v-if="errors.email"
              class="text-red-600 text-sm"
            >
              {{ errors.email }}
            </small>
          </div>

          <div class="flex flex-col gap-2 md:col-span-2">
            <label class="font-semibold text-[var(--slate)]">Subject</label>
            <input
              v-model="form.subject"
              class="px-4 py-[15px] border rounded-[14px] font-[inherit] text-base transition-colors duration-200 focus:outline-none focus:border-[var(--gold)]"
              :class="errors.subject ? 'border-red-600' : 'border-gray-300'"
            >
            <small
              v-if="errors.subject"
              class="text-red-600 text-sm"
            >
              {{ errors.subject }}
            </small>
          </div>

          <div class="flex flex-col gap-2 md:col-span-2">
            <label class="font-semibold text-[var(--slate)]">Message</label>
            <textarea
              v-model="form.message"
              rows="8"
              class="px-4 py-[15px] border rounded-[14px] font-[inherit] text-base resize-y transition-colors duration-200 focus:outline-none focus:border-[var(--gold)]"
              :class="errors.message ? 'border-red-600' : 'border-gray-300'"
            />
            <small
              v-if="errors.message"
              class="text-red-600 text-sm"
            >
              {{ errors.message }}
            </small>
          </div>
        </div>

        <div class="mt-8 flex justify-end">
          <Button
            text="Send Message"
            :loading="loading"
            button-type="submit"
          />
        </div>
      </form>
    </div>
  </section>
</template>