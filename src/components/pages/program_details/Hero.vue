<script setup>
import Button from '@/components/ui/Button.vue'

defineProps({
  program: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <section class="hero">
    <div class="container hero-grid">
      <div class="content">
        <span class="badge">
          {{ program.category }}
        </span>

        <h1>
          {{ program.title }}
        </h1>

        <p>
          {{ program.description }}
        </p>

        <div class="meta">
          <div>
            <span class="material-symbols-outlined">schedule</span>
            {{ program.duration }}
          </div>

          <div>
            <span class="material-symbols-outlined">groups</span>
            {{ program.age_group }}
          </div>

          <div>
            <span class="material-symbols-outlined">location_on</span>
            {{ program.location }}
          </div>
        </div>

        <Button text="Register Now" />
      </div>

      <div class="image">
        <img :src="program.image" :alt="program.title" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding: 80px 0;

  background: #fff;
}

.hero-grid {
  display: grid;

  grid-template-columns: 1.1fr 1fr;

  gap: 70px;

  align-items: center;
}

.badge {
  display: inline-block;

  padding: 8px 18px;

  border-radius: 999px;

  background: var(--gold-soft);

  color: var(--gold);

  font-weight: 600;

  margin-bottom: 25px;
}

h1 {
  font-size: 3.5rem;

  margin-bottom: 25px;
}

.meta {
  display: flex;

  gap: 30px;

  margin: 35px 0;

  flex-wrap: wrap;
}

.meta div {
  display: flex;

  align-items: center;

  gap: 8px;

  font-weight: 500;
}

.meta span {
  color: var(--gold);
}

.image img {
  width: 100%;

  height: 520px;

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
}
</style>
