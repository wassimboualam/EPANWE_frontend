<script setup>
import { ref } from 'vue'

const open = ref(0)

const faqs = [
  {
    question: 'Who can apply?',
    answer:
      'Anyone interested in participating in our programs, volunteering or partnering with EPANWE.',
  },

  {
    question: 'Is there a registration fee?',
    answer:
      'Some activities are free while others may require a participation fee depending on the program.',
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
  <section>
    <div class="container">
      <div class="heading">
        <p>FAQ</p>

        <h2>Frequently Asked Questions</h2>
      </div>

      <div class="faq" v-for="(faq, index) in faqs" :key="faq.question">
        <button @click="open = open === index ? null : index">
          <span>{{ faq.question }}</span>

          <span>
            {{ open === index ? '−' : '+' }}
          </span>
        </button>

        <div v-if="open === index" class="answer">
          {{ faq.answer }}
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.heading {
  text-align: center;

  margin-bottom: 60px;
}

.heading p {
  color: var(--gold);

  font-weight: 700;
}

.faq {
  padding: 22px 0;

  border-bottom: 1px solid #ddd;
}

button {
  display: flex;

  justify-content: space-between;

  width: 100%;

  font-size: 1.1rem;

  font-weight: 600;

  background: none;
}

.answer {
  margin-top: 18px;

  color: #666;

  line-height: 1.7;
}
</style>
