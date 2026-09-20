<script setup>
import { reactive } from 'vue'
import Button from '@/components/ui/Button.vue'

const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  ageGroup: '',
  interest: '',
  message: '',
  accepted: false,
})

const submit = () => {
  console.log(form)
}
</script>

<template>
  <section class="registration bg-white py-16 md:py-24">
    <div class="container">
      <div class="text-center mb-12 md:mb-[60px]">
        <p class="text-[var(--gold)] font-bold tracking-[2px] mb-3 text-sm md:text-base">
          APPLICATION FORM
        </p>

        <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--slate)]">
          Tell Us About Yourself
        </h2>
      </div>

      <form
        class="card form max-w-[900px] mx-auto p-6 sm:p-8 md:p-10 lg:p-12"
        @submit.prevent="submit"
      >
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mb-5 md:mb-6">
          <div class="flex flex-col gap-2">
            <label class="font-semibold text-[var(--slate)]">First Name</label>
            <input
              v-model="form.firstName"
              type="text"
              placeholder="John"
              class="px-4 py-4 rounded-[14px] border border-gray-300 text-base font-[inherit] focus:outline-none focus:border-[var(--gold)] transition-colors"
            >
          </div>

          <div class="flex flex-col gap-2">
            <label class="font-semibold text-[var(--slate)]">Last Name</label>
            <input
              v-model="form.lastName"
              type="text"
              placeholder="Doe"
              class="px-4 py-4 rounded-[14px] border border-gray-300 text-base font-[inherit] focus:outline-none focus:border-[var(--gold)] transition-colors"
            >
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mb-5 md:mb-6">
          <div class="flex flex-col gap-2">
            <label class="font-semibold text-[var(--slate)]">Email</label>
            <input
              v-model="form.email"
              type="email"
              placeholder="john@email.com"
              class="px-4 py-4 rounded-[14px] border border-gray-300 text-base font-[inherit] focus:outline-none focus:border-[var(--gold)] transition-colors"
            >
          </div>

          <div class="flex flex-col gap-2">
            <label class="font-semibold text-[var(--slate)]">Phone</label>
            <input
              v-model="form.phone"
              type="tel"
              placeholder="+212 ..."
              class="px-4 py-4 rounded-[14px] border border-gray-300 text-base font-[inherit] focus:outline-none focus:border-[var(--gold)] transition-colors"
            >
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mb-5 md:mb-6">
          <div class="flex flex-col gap-2">
            <label class="font-semibold text-[var(--slate)]">Age Group</label>
            <select
              v-model="form.ageGroup"
              class="px-4 py-4 rounded-[14px] border border-gray-300 text-base font-[inherit] bg-white focus:outline-none focus:border-[var(--gold)] transition-colors"
            >
              <option value="">
                Choose...
              </option>
              <option>8-12</option>
              <option>13-17</option>
              <option>18-25</option>
              <option>26+</option>
            </select>
          </div>

          <div class="flex flex-col gap-2">
            <label class="font-semibold text-[var(--slate)]">I Want To...</label>
            <select
              v-model="form.interest"
              class="px-4 py-4 rounded-[14px] border border-gray-300 text-base font-[inherit] bg-white focus:outline-none focus:border-[var(--gold)] transition-colors"
            >
              <option value="">
                Choose...
              </option>
              <option>Join a Program</option>
              <option>Volunteer</option>
              <option>Become a Partner</option>
              <option>Support the Organization</option>
            </select>
          </div>
        </div>

        <div class="flex flex-col gap-2 mb-5 md:mb-6">
          <label class="font-semibold text-[var(--slate)]">Message</label>
          <textarea
            v-model="form.message"
            rows="6"
            placeholder="Tell us a little about yourself..."
            class="px-4 py-4 rounded-[14px] border border-gray-300 text-base font-[inherit] resize-y focus:outline-none focus:border-[var(--gold)] transition-colors"
          />
        </div>

        <label class="flex items-center gap-3 my-7 font-normal text-[var(--slate)] cursor-pointer">
          <input
            v-model="form.accepted"
            type="checkbox"
            class="w-4 h-4 accent-[var(--gold)]"
          >
          <span>I agree to the processing of my information.</span>
        </label>

        <Button
          text="Submit Application"
          button-type="submit"
        />
      </form>
    </div>
  </section>
</template>