<script setup>
import HeroSection from '@/components/pages/program_details/HeroSection.vue'
import { useProgramsStore } from '@/stores/programs'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const programStore = useProgramsStore()
const route = useRoute()

const currentProgram = ref()

onMounted(async () => {
  currentProgram.value = await programStore.loadProgram(route.params.id)
  console.log(currentProgram.value)
  currentProgram.value = await currentProgram.value.json()
  console.log(currentProgram.value)
})
</script>

<template>
  <HeroSection :program="currentProgram" />
</template>
