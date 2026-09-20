<script setup>
const features = [
  {
    title: "Holistic Development",
    text: "Educational, sports, cultural and personal development programs designed to help every participant flourish.",
    icon: "school"
  },
  {
    title: "Experienced Mentors",
    text: "Our educators, coaches and professionals guide every participant throughout their learning journey.",
    icon: "groups"
  },
  {
    title: "Programs Across Morocco",
    text: "Accessible programs delivered through schools, organizations and community partners across the country.",
    icon: "public"
  }
]
</script>

<template>
  <section
    id="whyus"
    class="py-16 md:py-24"
  >
    <div class="container">
      <div class="text-center max-w-[700px] mx-auto mb-10 md:mb-[60px]">
        <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--slate)] mb-4">
          Why Choose EPANWE?
        </h2>

        <p class="text-gray-600 leading-relaxed">
          Everything we do is centered around helping young people
          learn, grow and become confident members of society.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-[30px]">
        <div
          v-for="feature in features"
          :key="feature.title"
          class="card feature p-6 md:p-8 lg:p-10 transition-transform duration-300 hover:-translate-y-2"
        >
          <span class="material-symbols-outlined block text-[40px] md:text-[52px] text-[var(--gold)] mb-5">
            {{ feature.icon }}
          </span>

          <h3 class="text-lg md:text-xl font-semibold text-[var(--slate)] mb-4">
            {{ feature.title }}
          </h3>

          <p class="text-gray-600 leading-relaxed">
            {{ feature.text }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>