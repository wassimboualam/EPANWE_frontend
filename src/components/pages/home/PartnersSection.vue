<script setup>
const partners = [
  '/images/logos/atlanta-1.png',
  '/images/logos/carrefour-market-1.png',
  '/images/logos/CDG-1.png',
  '/images/logos/cimentdu-maroc-1.png',
  '/images/logos/ecole-yasime-1.png',
  '/images/logos/lydec-1.png',
  '/images/logos/mondelez-1.png',
  '/images/logos/undiapolis-1.png',
  '/images/logos/zenata-1.png',
  '/images/logos/ecole-ryad-almaarifa-1.png',
]
</script>

<template>
  <section class="bg-white py-16 md:py-24">
    <div class="container">
      <p class="text-center font-bold tracking-[2px] text-[var(--gold)] mb-3 text-sm md:text-base">
        OUR PARTNERS
      </p>

      <h2 class="text-center text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--slate)] mb-5">
        Trusted by organizations that believe in youth.
      </h2>

      <p class="max-w-[700px] mx-auto text-center text-gray-600 leading-relaxed mb-10 md:mb-[70px]">
        We collaborate with educational institutions, companies and organizations that share our
        vision of helping young people flourish.
      </p>

      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-[25px]">
        <div
          v-for="partner in partners"
          :key="partner"
          class="group h-[110px] md:h-[130px] bg-white rounded-3xl flex justify-center items-center shadow-[var(--shadow)] transition-transform duration-300 hover:-translate-y-2 p-4"
        >
          <img
            :src="partner"
            alt="Partner"
            class="max-w-[120px] max-h-[70px] grayscale opacity-70 transition duration-300 group-hover:grayscale-0 group-hover:opacity-100"
          >
        </div>
      </div>
    </div>
  </section>
</template>