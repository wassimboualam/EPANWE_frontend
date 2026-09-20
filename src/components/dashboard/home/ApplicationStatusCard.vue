<script setup>
import { computed } from 'vue'

const props = defineProps({
  request: {
    type: Object,
    required: true,
  },
})

const status = computed(() => {
  switch (props.request.status) {
    case 'approved':
      return { label: 'Approved', class: 'approved' }
    case 'rejected':
      return { label: 'Rejected', class: 'rejected' }
    default:
      return { label: 'Pending Review', class: 'pending' }
  }
})
</script>

<template>
  <section class="p-6 md:p-8 lg:p-[30px_35px] bg-white rounded-3xl shadow-[var(--shadow)]">
    <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-6">
      <h2 class="text-lg md:text-xl font-bold text-[var(--slate)]">
        Access Request
      </h2>

      <span
        class="inline-flex w-fit px-4 py-2 rounded-full font-semibold text-[0.9rem]"
        :class="{
          'bg-amber-100 text-amber-700': status.class === 'pending',
          'bg-green-100 text-green-700': status.class === 'approved',
          'bg-red-100 text-red-700': status.class === 'rejected',
        }"
      >
        {{ status.label }}
      </span>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
      <div>
        <label class="text-[0.8rem] uppercase text-gray-400 font-semibold">
          Submitted
        </label>
        <p class="mt-1 text-[var(--slate)]">
          {{ request.submittedAt }}
        </p>
      </div>

      <div>
        <label class="text-[0.8rem] uppercase text-gray-400 font-semibold">
          Updated
        </label>
        <p class="mt-1 text-[var(--slate)]">
          {{ request.updatedAt }}
        </p>
      </div>
    </div>

    <p class="text-gray-600 leading-[1.7]">
      {{ request.message }}
    </p>
  </section>
</template>