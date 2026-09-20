<script setup>
const services = [
  {
    icon: "volunteer_activism",
    title: "Help",
    text: "Supporting children and young people through programs that encourage personal growth, confidence and well-being."
  },
  {
    icon: "school",
    title: "Teach",
    text: "Delivering educational experiences that inspire curiosity, creativity and lifelong learning."
  },
  {
    icon: "emoji_people",
    title: "Empower",
    text: "Helping every participant develop leadership, responsibility and the confidence to create positive change."
  }
]
</script>

<template>
  <section class="services bg-[#F9FAFB] py-16 md:py-24">
    <div class="container">
      <div class="text-center max-w-[700px] mx-auto mb-10 md:mb-[70px]">
        <p class="font-bold text-[var(--gold)] tracking-[2px] mb-4 text-sm md:text-base">
          WHAT WE DO
        </p>

        <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--slate)] leading-tight">
          Helping young people flourish in every aspect of life.
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-[35px]">
        <div
          v-for="service in services"
          :key="service.title"
          class="service-card p-6 md:p-8 lg:p-10 bg-white rounded-3xl shadow-[var(--shadow)] transition-transform duration-300 hover:-translate-y-2"
        >
          <div class="w-[70px] h-[70px] rounded-[18px] flex justify-center items-center bg-[var(--gold-soft)] mb-6">
            <span class="material-symbols-outlined text-[38px] text-[var(--gold)]">
              {{ service.icon }}
            </span>
          </div>

          <h3 class="text-xl md:text-2xl font-semibold text-[var(--slate)] mb-4">
            {{ service.title }}
          </h3>

          <p class="text-gray-600 leading-relaxed">
            {{ service.text }}
          </p>

          <!-- <a href="#" class="font-semibold text-[var(--gold)]">Learn More →</a> -->
        </div>
      </div>
    </div>
  </section>
</template>