<script setup>
const steps = [
  "Openness",
  "Acceptance",
  "Autonomy",
  "Confidence",
  "Joy",
  "Social Engagement"
]
</script>

<template>
  <section class="method bg-white py-16 md:py-24">
    <div class="container">
      <div class="text-center mb-12 md:mb-20">
        <p class="text-[var(--gold)] font-bold tracking-[2px] mb-3 text-sm md:text-base">
          OUR METHOD
        </p>

        <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--slate)] mb-4">
          The EPANWE Methodology
        </h2>

        <p class="text-gray-600 leading-relaxed">
          Our EPANWE method is there to nurture in our youth the following skills:
        </p>
      </div>

      <!-- Desktop timeline -->
      <div class="hidden md:flex justify-between relative">
        <div
          class="absolute left-0 right-0 top-[15px] h-[3px] bg-[var(--gold)] z-[1]"
          aria-hidden="true"
        />

        <div
          v-for="step in steps"
          :key="step"
          class="relative z-[2] text-center w-[150px]"
        >
          <div class="w-[30px] h-[30px] rounded-full bg-[var(--gold)] mx-auto mb-5" />

          <h4 class="text-base font-semibold text-[var(--slate)]">
            {{ step }}
          </h4>
        </div>
      </div>

      <!-- Mobile vertical list -->
      <div class="md:hidden flex flex-col gap-8">
        <div
          v-for="step in steps"
          :key="step"
          class="flex items-center gap-4"
        >
          <div class="w-[24px] h-[24px] rounded-full bg-[var(--gold)] shrink-0" />

          <h4 class="text-base font-semibold text-[var(--slate)]">
            {{ step }}
          </h4>
        </div>
      </div>
    </div>
  </section>
</template>