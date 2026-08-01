<script setup lang="ts">
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
  <section class="filter-bar">
    <div class="search">
      <span class="material-symbols-outlined"> search </span>

      <input v-model="filters.search" placeholder="Search by name or email..." />
    </div>

    <select v-model="filters.status">
      <option value="all">All Statuses</option>

      <option value="pending">Pending</option>

      <option value="approved">Approved</option>

      <option value="rejected">Rejected</option>
    </select>

    <select v-model="filters.sort">
      <option value="newest">Newest First</option>

      <option value="oldest">Oldest First</option>
    </select>
  </section>
</template>

<style scoped>
.filter-bar {
  display: flex;

  gap: 20px;

  align-items: center;

  background: white;

  padding: 20px;

  border-radius: 20px;

  box-shadow: var(--shadow);
}

.search {
  flex: 1;

  display: flex;

  align-items: center;

  gap: 12px;

  padding: 0 16px;

  border: 1px solid #ddd;

  border-radius: 14px;
}

.search input {
  width: 100%;

  padding: 14px 0;

  border: none;

  outline: none;

  font-size: 0.95rem;
}

select {
  padding: 14px 18px;

  border-radius: 14px;

  border: 1px solid #ddd;

  background: white;

  cursor: pointer;
}

@media (max-width: 900px) {
  .filter-bar {
    flex-direction: column;

    align-items: stretch;
  }
}
</style>
