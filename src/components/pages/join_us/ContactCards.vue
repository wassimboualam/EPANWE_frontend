<script setup>
const cards = [
  {
    icon: 'call',
    title: 'Phone',
    text: '+212 669 951 116',
  },
  {
    icon: 'mail',
    title: 'Email',
    text: 'contact@epanwe.org',
  },
  {
    icon: 'location_on',
    title: 'Address',
    text: '119, Boulevard Abdelmoumen, Appt 18, Casablanca',
  },

  // {
  //   icon: 'schedule',
  //   title: 'Office Hours',
  //   text: 'Mon - Fri | 9:00 - 17:00',
  // },
]
</script>

<template>
  <section class="contact bg-white py-16 md:py-24">
    <div class="container">
      <div class="text-center mb-12 md:mb-[60px]">
        <p class="text-[var(--gold)] font-bold tracking-[2px] mb-3 text-sm md:text-base">
          CONTACT
        </p>

        <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--slate)]">
          Need More Information?
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-[30px]">
        <div
          v-for="card in cards"
          :key="card.title"
          class="card p-8 md:p-10 text-center"
        >
          <span class="material-symbols-outlined block text-[44px] md:text-[50px] text-[var(--gold)] mb-5">
            {{ card.icon }}
          </span>

          <h3 class="text-lg md:text-xl font-semibold text-[var(--slate)] mb-4">
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