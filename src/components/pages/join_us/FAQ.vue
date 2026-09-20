<script setup>
import { ref } from 'vue'

const open = ref(0)

const faqs = [
  {
    question: 'Who can apply?',
    answer:
      'Anyone interested in participating in our programs or partnering with EPANWE.',
  },
  {
    question: 'Is there a registration fee?',
    answer:
      'While there is a registration fee, participants who are affiliated with one of our partners may take part some of the group activities free of charge.',
  },
  {
    question: 'When will I receive a response?',
    answer: 'Our team usually replies within a few working days.',
  },
  {
    question: 'Can parents register children?',
    answer: 'Yes. Parents or legal guardians may submit applications on behalf of minors.',
  },
]
</script>

<template>
  <section class="py-16 md:py-24">
    <div class="container">
      <div class="text-center mb-12 md:mb-[60px]">
        <p class="text-[var(--gold)] font-bold tracking-[2px] mb-3 text-sm md:text-base">
          FAQ
        </p>

        <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--slate)]">
          Frequently Asked Questions
        </h2>
      </div>

      <div class="max-w-[800px] mx-auto">
        <div
          v-for="(faq, index) in faqs"
          :key="faq.question"
          class="py-[22px] border-b border-gray-200"
        >
          <button
            class="flex justify-between items-center gap-4 w-full text-left text-base md:text-[1.1rem] font-semibold text-[var(--slate)] bg-transparent cursor-pointer"
            @click="open = open === index ? null : index"
          >
            <span>{{ faq.question }}</span>
            <span class="text-[var(--gold)] text-xl shrink-0">
              {{ open === index ? '−' : '+' }}
            </span>
          </button>

          <div
            v-if="open === index"
            class="mt-[18px] text-gray-500 leading-[1.7]"
          >
            {{ faq.answer }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>