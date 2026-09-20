<script setup>
const cards = [
  {
    icon: "flag",
    title: "Our Mission",
    text: "Empower young people through innovative educational, cultural and personal development experiences."
  },
  {
    icon: "public",
    title: "Our Vision",
    text: "A future where every young person has access to opportunities that help them flourish and succeed.",
    bg: "blue"
  }
]
</script>

<template>
  <section class="py-16 md:py-24">
    <div class="container">
      <div class="text-center mb-10 md:mb-[60px]">
        <p class="text-[var(--gold)] font-bold tracking-[2px] mb-3 text-sm md:text-base">
          MISSION &amp; VISION
        </p>

        <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--slate)]">
          Why We Exist
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-[35px]">
        <div
          v-for="card in cards"
          :key="card.title"
          class="card mission-card p-8 md:p-10 lg:p-12"
          :class="card.bg === 'blue' ? 'bg-[var(--blue-soft)]' : ''"
        >
          <span class="material-symbols-outlined block text-[40px] md:text-[48px] text-[var(--gold)] mb-5">
            {{ card.icon }}
          </span>

          <h3 class="text-xl md:text-2xl font-semibold text-[var(--slate)] mb-4">
            {{ card.title }}
          </h3>

          <p class="text-gray-600 leading-relaxed">
            {{ card.text }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>