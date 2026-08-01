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
  <section>
    <div class="container">
      <div class="header">
        <div>
          <p>PROGRAMS</p>

          <h2>Featured Programs</h2>

          <p>Explore our most popular educational, creative and sports experiences.</p>
        </div>

        <Button text="All Programs" styleType="secondary" />
      </div>

      <div class="grid">
        <ProgramCard v-for="program in programs" :key="program.title" :program="program" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.header {
  display: flex;

  justify-content: space-between;

  align-items: end;

  margin-bottom: 60px;
}

.header > div {
  max-width: 650px;
}

.header p:first-child {
  font-weight: 700;

  letter-spacing: 2px;

  color: var(--gold);

  margin-bottom: 10px;
}

.grid {
  display: grid;

  grid-template-columns: repeat(3, 1fr);

  gap: 35px;
}

@media (max-width: 1000px) {
  .grid {
    grid-template-columns: 1fr;
  }

  .header {
    flex-direction: column;

    align-items: flex-start;

    gap: 25px;
  }
}
</style>
