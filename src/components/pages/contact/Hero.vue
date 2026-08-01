<script setup lang="ts">
import Button from '@/components/ui/Button.vue'
</script>

<template>
  <section class="hero">
    <div class="container">
      <span class="eyebrow"> CONTACT </span>

      <h1>We'd Love to Hear From You</h1>

      <p>
        Whether you're a parent, educator, partner organization or simply interested in EPANWE, our
        team is here to answer your questions and help you find the right information.
      </p>

      <!-- <Button text="Send us a Message" color="primary" /> -->
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding: 110px 0 90px;

  background: linear-gradient(180deg, #fff9f0 0%, white 100%);

  text-align: center;
}

.container {
  width: min(900px, 90%);

  margin: auto;
}

.eyebrow {
  display: inline-block;

  padding: 8px 18px;

  border-radius: 999px;

  background: var(--gold-soft);

  color: var(--gold);

  font-weight: 600;

  margin-bottom: 24px;
}

h1 {
  font-size: clamp(2.5rem, 5vw, 4rem);

  margin-bottom: 22px;

  line-height: 1.15;
}

p {
  font-size: 1.1rem;

  color: #666;

  line-height: 1.8;

  max-width: 700px;

  margin: auto;

  margin-bottom: 40px;
}
</style>
