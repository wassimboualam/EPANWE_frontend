<script setup>
import Button from '@/components/ui/Button.vue'
</script>

<template>
  <section class="hero">
    <div class="container hero-grid">
      <div class="content">
        <span class="badge"> OUR PROGRAMS </span>

        <h1>
          Explore Opportunities to
          <span>Learn, Grow & Flourish</span>
        </h1>

        <p>
          Discover educational, sports, cultural and personal development programs designed to help
          children and young adults reach their full potential.
        </p>

        <div class="buttons">
          <Button text="Browse Programs" />
          <Button text="Contact Us" styleType="secondary" />
        </div>
      </div>

      <div class="image">
        <!-- <img
          src="/images/programs-hero.jpg"
          alt="Programs"
        /> -->
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

  gap: 80px;

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
  font-size: 3.8rem;

  margin-bottom: 25px;

  line-height: 1.15;
}

h1 span {
  color: var(--gold);

  display: block;
}

p {
  font-size: 1.1rem;

  max-width: 600px;

  margin-bottom: 40px;
}

.buttons {
  display: flex;

  gap: 20px;
}

.image img {
  width: 100%;

  height: 560px;

  object-fit: cover;

  border-radius: 30px;

  box-shadow: var(--shadow);
}

@media (max-width: 1000px) {
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
