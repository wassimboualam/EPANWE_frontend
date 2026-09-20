<script setup>
import Button from '../../ui/Button.vue'
import ProgramCard from '../../cards/ProgramCard.vue'

const programs = [
  {
    title: 'Des Sons et des Voix',
    category: 'Music',
    age: '13-17',
    image: '/images/music.jpg',
    description:
      'Develop communication, creativity and emotional intelligence through rhythm, singing and collaborative musical experiences.',
  },
  {
    title: 'Young Leaders',
    category: 'Leadership',
    age: '15-18',
    image: '/images/leadership.jpg',
    description:
      'Build confidence, leadership and teamwork through workshops, projects and real-world challenges.',
  },
  {
    title: 'Sports & Wellbeing',
    category: 'Sports',
    age: '10-16',
    image: '/images/sports.jpg',
    description:
      'Promote healthy lifestyles while developing resilience, discipline and cooperation.',
  },
]
</script>

<template>
  <section class="py-16 md:py-24">
    <div class="container">
      <div class="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-6 lg:gap-10 mb-10 md:mb-[60px]">
        <div class="max-w-[650px]">
          <p class="font-bold tracking-[2px] text-[var(--gold)] mb-3 text-sm md:text-base">
            PROGRAMS
          </p>

          <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--slate)] mb-4">
            Featured Programs
          </h2>

          <p class="text-gray-600 leading-relaxed">
            Explore our most popular educational, creative and sports experiences.
          </p>
        </div>

        <Button
          text="All Programs"
          style-type="secondary"
        />
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-[35px]">
        <ProgramCard
          v-for="program in programs"
          :key="program.title"
          :program="program"
        />
      </div>
    </div>
  </section>
</template>