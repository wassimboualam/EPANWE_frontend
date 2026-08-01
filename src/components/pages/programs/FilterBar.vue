<script setup>
import { useProgramsStore } from '@/stores/programs'
import { ref } from 'vue'

const search = ref('')
const category = ref('')
const ageGroup = ref('')

const store = useProgramsStore()

const categories = store.categories
const ageGroups = store.age_groups
</script>

<template>
  <section class="filters">
    <div class="container">
      <div class="wrapper">
        <input v-model="search" placeholder="Search programs..." />

        <select v-model="category">
          <option value="">All Categories</option>

          <option v-for="category of categories">{{ category }}</option>
        </select>

        <select v-model="ageGroup">
          <option value="">All Ages</option>

          <option v-for="ageGroup of ageGroups">{{ ageGroup }}</option>
        </select>

        <button>Reset</button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.filters {
  padding: 20px 0 60px;

  position: sticky;

  top: 84px;

  background: #f9fafb;

  z-index: 20;
}

.wrapper {
  display: grid;

  grid-template-columns: 2fr 1fr 1fr auto;

  gap: 20px;
}

input,
select {
  padding: 16px;

  border-radius: 14px;

  border: 1px solid #ddd;

  font-size: 1rem;
}

button {
  background: var(--gold);

  color: white;

  padding: 16px 30px;

  border: none;

  border-radius: 14px;
}

@media (max-width: 900px) {
  .wrapper {
    grid-template-columns: 1fr;
  }
}
</style>
