<script setup lang="ts">
import CTASection from '@/components/pages/home/CTASection.vue'
import CategorySection from '@/components/pages/programs/CategorySection.vue'
import FAQSection from '@/components/pages/programs/FAQSection.vue'
import FilterBar from '@/components/pages/programs/FilterBar.vue'
import Hero from '@/components/pages/programs/Hero.vue'
import ProgramsGrid from '@/components/pages/programs/ProgramsGrid.vue'
import { useProgramsStore } from '@/stores/programs'
import { onMounted } from 'vue'

onMounted(async () => {
  await useProgramsStore().loadPrograms()
  console.log(useProgramsStore().programs)
})
</script>

<template>
  <Hero />

  <CategorySection />

  <FilterBar />

  <ProgramsGrid />

  <FAQSection />

  <CTASection />
</template>
