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
  <section class="partners">
    <div class="container">
      <p class="subtitle">OUR PARTNERS</p>

      <h2>Trusted by organizations that believe in youth.</h2>

      <p class="description">
        We collaborate with educational institutions, companies and organizations that share our
        vision of helping young people flourish.
      </p>

      <div class="logos">
        <div class="logo-card" v-for="partner in partners" :key="partner">
          <img :src="partner" alt="Partner" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.partners {
  background: white;
}

.subtitle {
  text-align: center;

  font-weight: 700;

  letter-spacing: 2px;

  color: var(--gold);

  margin-bottom: 12px;
}

h2 {
  text-align: center;

  margin-bottom: 20px;
}

.description {
  max-width: 700px;

  margin: auto;

  text-align: center;

  margin-bottom: 70px;
}

.logos {
  display: grid;

  grid-template-columns: repeat(5, 1fr);

  gap: 25px;
}

.logo-card {
  height: 130px;

  background: white;

  border-radius: 20px;

  display: flex;

  justify-content: center;

  align-items: center;

  box-shadow: var(--shadow);

  transition: 0.3s;

  padding: 20px;
}

.logo-card:hover {
  transform: translateY(-8px);
}

.logo-card img {
  max-width: 120px;

  max-height: 70px;

  filter: grayscale(100%);

  opacity: 0.7;

  transition: 0.3s;
}

.logo-card:hover img {
  filter: none;

  opacity: 1;
}

@media (max-width: 1000px) {
  .logos {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 650px) {
  .logos {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
