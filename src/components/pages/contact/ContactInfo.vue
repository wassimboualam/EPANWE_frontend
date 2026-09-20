<script setup>
const cards = [
  {
    icon: 'call',
    title: 'Phone',
    main: '+212 669 951 116',
    text: 'Monday - Friday\n09:00 - 17:00',
  },
  {
    icon: 'mail',
    title: 'Email',
    main: 'contact@epanwe.ma',
    text: 'Average reply time:\n24 hours',
  },
  {
    icon: 'location_on',
    title: 'Address',
    main: '119, Boulevard Abdelmoumen, Appt 18, Casablanca',
    text: 'Visits by appointment',
  },
]
</script>

<template>
  <section class="py-16 md:py-[70px]">
    <div class="container">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-[30px]">
        <div
          v-for="card in cards"
          :key="card.title"
          class="card bg-white p-7 md:p-8 lg:p-[35px] rounded-[22px] shadow-[var(--shadow)] text-center transition-transform duration-300 hover:-translate-y-2"
        >
          <div
            class="w-[70px] h-[70px] mx-auto mb-5 flex justify-center items-center rounded-[18px] bg-[var(--gold-soft)] text-[var(--gold)]"
          >
            <span class="material-symbols-outlined text-[2rem]">
              {{ card.icon }}
            </span>
          </div>

          <h3 class="text-lg md:text-xl font-semibold text-[var(--slate)] mb-3">
            {{ card.title }}
          </h3>

          <h4 class="text-base font-semibold text-[var(--gold)] mb-4">
            {{ card.main }}
          </h4>

          <p class="text-gray-500 leading-[1.8] whitespace-pre-line">
            {{ card.text }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>