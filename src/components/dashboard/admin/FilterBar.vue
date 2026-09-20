<script setup>
import { reactive, watch } from 'vue'

const filters = reactive({
  search: '',
  status: 'all',
  sort: 'newest',
})

const emit = defineEmits(['change'])

watch(filters, () => emit('change', { ...filters }), { deep: true })
</script>

<template>
  <section
    class="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-5
           bg-white p-5 md:p-6 rounded-3xl shadow-[var(--shadow)]"
  >
    <div
      class="flex-1 flex items-center gap-3 px-4
             border border-gray-300 rounded-[14px]"
    >
      <span class="material-symbols-outlined text-gray-400">search</span>
      <input
        v-model="filters.search"
        placeholder="Search by name or email..."
        class="w-full py-3.5 border-none outline-none text-[0.95rem] bg-transparent"
      >
    </div>

    <select
      v-model="filters.status"
      class="px-4 py-3.5 rounded-[14px] border border-gray-300 bg-white cursor-pointer text-[var(--slate)]"
    >
      <option value="all">All Statuses</option>
      <option value="pending">Pending</option>
      <option value="approved">Approved</option>
      <option value="rejected">Rejected</option>
    </select>

    <select
      v-model="filters.sort"
      class="px-4 py-3.5 rounded-[14px] border border-gray-300 bg-white cursor-pointer text-[var(--slate)]"
    >
      <option value="newest">Newest First</option>
      <option value="oldest">Oldest First</option>
    </select>
  </section>
</template>