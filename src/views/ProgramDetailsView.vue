<script setup lang="ts">
import Hero from '@/components/pages/program_details/Hero.vue'
import { useProgramsStore } from '@/stores/programs'
import { onMounted, reactive, ref } from 'vue'
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
  <Hero :program="currentProgram" />
</template>
