<script setup>
import Button from '../../ui/Button.vue'
</script>

<template>
  <section class="about">
    <div class="container wrapper">
      <div class="image">
        <img src="/images/mission.jpg" alt="EPANWE" />
      </div>

      <div class="content">
        <p class="small">ABOUT EPANWE</p>

        <h2>Helping every young person discover their potential.</h2>

        <p>
          EPANWE is a Moroccan organization dedicated to the development of children and young
          adults through educational, sports, cultural and personal development programs. We believe
          every young person deserves the opportunity to grow, learn and thrive.
        </p>

        <a href="about">
          <Button text="Learn More" />
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  background: white;
}

.wrapper {
  display: grid;

  grid-template-columns: 1fr 1fr;

  gap: 80px;

  align-items: center;
}

.image img {
  border-radius: 24px;

  box-shadow: var(--shadow);

  height: 500px;

  object-fit: cover;

  width: 100%;
}

.small {
  color: var(--gold);

  font-weight: 700;

  letter-spacing: 2px;

  margin-bottom: 15px;
}

.content p {
  margin-bottom: 30px;
}

@media (max-width: 900px) {
  .wrapper {
    grid-template-columns: 1fr;
  }
}
</style>
