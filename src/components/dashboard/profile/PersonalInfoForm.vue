<script setup>
import { reactive } from 'vue'
import BaseButton from '@/components/ui/BaseButton.vue'

const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['submit'])

const form = reactive({
  first_name: props.user.first_name,
  last_name: props.user.last_name,
  age: props.user.age,
  gender: props.user.gender,
})
</script>

<template>
  <section class="bg-white p-6 md:p-8 lg:p-[35px] rounded-3xl shadow-[var(--shadow)]">
    <h2 class="text-xl md:text-2xl font-bold text-[var(--slate)] mb-6 md:mb-8">
      Personal Information
    </h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
      <div class="flex flex-col gap-2">
        <label class="font-semibold text-[var(--slate)]">First Name</label>
        <input
          v-model="form.first_name"
          type="text"
          class="px-4 py-3.5 rounded-xl border border-gray-300 text-base font-[inherit]
                 focus:outline-none focus:border-[var(--gold)] transition-colors"
        >
      </div>

      <div class="flex flex-col gap-2">
        <label class="font-semibold text-[var(--slate)]">Last Name</label>
        <input
          v-model="form.last_name"
          type="text"
          class="px-4 py-3.5 rounded-xl border border-gray-300 text-base font-[inherit]
                 focus:outline-none focus:border-[var(--gold)] transition-colors"
        >
      </div>

      <div class="flex flex-col gap-2">
        <label class="font-semibold text-[var(--slate)]">Age</label>
        <input
          v-model="form.age"
          type="number"
          class="px-4 py-3.5 rounded-xl border border-gray-300 text-base font-[inherit]
                 focus:outline-none focus:border-[var(--gold)] transition-colors"
        >
      </div>

      <div class="flex flex-col gap-2">
        <label class="font-semibold text-[var(--slate)]">Gender</label>
        <select
          v-model="form.gender"
          class="px-4 py-3.5 rounded-xl border border-gray-300 text-base font-[inherit] bg-white
                 focus:outline-none focus:border-[var(--gold)] transition-colors"
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option
            v-if="user.role === 'admin'"
            value="clank"
          >
            Clank
          </option>
        </select>
      </div>
    </div>

    <div class="mt-8 flex justify-end">
      <BaseButton
        text="Save Changes"
        @click="emit('submit', form)"
      />
    </div>
  </section>
</template>