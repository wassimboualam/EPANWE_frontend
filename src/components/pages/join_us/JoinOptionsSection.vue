<script setup>
const options = [
  {
    icon: 'school',
    title: 'Join as a participant',
    text: 'Take part in educational, cultural and personal development programs for all age groups.',
  },
  {
    icon: 'handshake',
    title: 'Become a Partner',
    text: 'Collaborate with EPANWE and be granted access to our service for all your affiliates.',
  },
]
</script>

<template>
  <section class="py-16 md:py-24">
    <div class="container">
      <div class="text-center mb-12 md:mb-[70px]">
        <p class="text-[var(--gold)] font-bold tracking-[2px] mb-3 text-sm md:text-base">
          WAYS TO JOIN
        </p>

        <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--slate)]">
          How Would You Like to Get Involved?
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-[30px]">
        <div
          v-for="option in options"
          :key="option.title"
          class="card option-card p-8 md:p-10 text-center transition-transform duration-300 hover:-translate-y-2 cursor-pointer"
        >
          <span class="material-symbols-outlined block text-[40px] md:text-[52px] text-[var(--gold)] mb-5">
            {{ option.icon }}
          </span>

          <h3 class="text-lg md:text-xl font-semibold text-[var(--slate)] mb-4">
            {{ option.title }}
          </h3>

          <p class="text-gray-600 leading-relaxed">
            {{ option.text }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>