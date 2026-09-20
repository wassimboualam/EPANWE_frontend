<script setup>
import BaseButton from '@/components/ui/BaseButton.vue'
</script>

<template>
  <section class="bg-white py-16 md:py-24">
    <div class="container grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-20 items-center">
      <div>
        <img
          src="/images/mission.jpg"
          alt="EPANWE"
          class="rounded-3xl shadow-[var(--shadow)] h-[300px] sm:h-[400px] lg:h-[500px] w-full object-cover"
        >
      </div>

      <div class="content">
        <p class="text-[var(--gold)] font-bold tracking-[2px] mb-4 text-sm md:text-base">
          ABOUT EPANWE
        </p>

        <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--slate)] mb-6">
          Helping every young person discover their potential.
        </h2>

        <p class="text-gray-600 leading-relaxed mb-8">
          EPANWE is a Moroccan organization dedicated to the development of children and young
          adults through educational, sports, cultural and personal development programs. We believe
          every young person deserves the opportunity to grow, learn and thrive.
        </p>

        <a href="about">
          <BaseButton text="Learn More" />
        </a>
      </div>
    </div>
  </section>
</template>