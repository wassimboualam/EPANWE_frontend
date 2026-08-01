<script setup>
import Button from '@/components/ui/Button.vue'
</script>

<template>
  <section class="hero">
    <div class="container hero-grid">
      <div class="content">
        <span class="badge"> JOIN EPANWE </span>

        <h1>Become Part of a Community That Inspires Change</h1>

        <p>
          Whether you're looking to participate in a program, volunteer your time, or partner with
          us, we'd love to welcome you into the EPANWE family.
        </p>

        <div class="buttons">
          <Button text="Apply Now" />

          <Button text="Contact Us" styleType="secondary" />
        </div>
      </div>

      <div class="image">
        <img src="/images/hero3.jpg" alt="Join EPANWE" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding: 90px 0;

  background: white;
}

.hero-grid {
  display: grid;

  grid-template-columns: 1fr 1fr;

  gap: 70px;

  align-items: center;
}

.badge {
  display: inline-block;

  padding: 10px 18px;

  background: var(--gold-soft);

  color: var(--gold);

  font-weight: 600;

  border-radius: 999px;

  margin-bottom: 25px;
}

h1 {
  font-size: 3.6rem;

  line-height: 1.1;

  margin-bottom: 25px;
}

p {
  font-size: 1.1rem;

  line-height: 1.8;

  margin-bottom: 40px;
}

.buttons {
  display: flex;

  gap: 20px;
}

.image img {
  width: 100%;

  height: 540px;

  object-fit: cover;

  border-radius: 28px;

  box-shadow: var(--shadow);
}

@media (max-width: 900px) {
  .hero-grid {
    grid-template-columns: 1fr;
  }

  .image {
    order: -1;
  }

  .image img {
    height: 420px;
  }
}
</style>
