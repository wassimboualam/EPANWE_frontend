<script setup>
import BaseButton from '@/components/ui/BaseButton.vue'
</script>

<template>
  <section class="py-10 md:py-16 lg:py-24">
    <div class="container grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-20 items-center">
      <div>
        <p
          class="inline-block px-4 py-2 bg-[var(--gold-soft)] rounded-full mb-5 font-semibold text-[var(--gold)] text-xs md:text-sm"
        >
          Empowering The Next Generation
        </p>

        <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--slate)] leading-tight">
          Helping Every Young Person Discover Their
          <span class="text-[var(--gold)]">Full Potential</span>
        </h1>

        <p class="text-gray-600 text-base md:text-lg leading-relaxed mt-6">
          Educational, cultural and sports programs designed to help children and youth flourish.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 sm:gap-5 mt-8 md:mt-10">
          <a href="howtojoin">
            <BaseButton
              text="Join Us"
              :full-width="true"
            />
          </a>
          <a href="#whyus">
            <BaseButton
              text="Learn More"
              color="secondary"
              variant="outline"
              :full-width="true"
            />
          </a>
        </div>
      </div>

      <div class=" hidden sm:block">
        <img
          src="/images/hero.jpg"
          alt=""
          class="rounded-3xl shadow-[var(--shadow)] w-full h-auto"
        >
      </div>
    </div>
  </section>
</template>