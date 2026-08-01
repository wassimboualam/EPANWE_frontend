<script setup lang="ts">
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
  <section class="section">
    <div class="container">
      <div class="card" v-for="card in cards" :key="card.title">
        <div class="icon">
          <span class="material-symbols-outlined">
            {{ card.icon }}
          </span>
        </div>

        <h3>
          {{ card.title }}
        </h3>

        <h4>
          {{ card.main }}
        </h4>

        <p>
          {{ card.text }}
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section {
  padding: 70px 0;
}

.container {
  width: min(1200px, 90%);

  margin: auto;

  display: flex;

  justify-content: center;

  gap: 30px;
}

.card {
  background: white;

  padding: 35px;

  border-radius: 22px;

  box-shadow: var(--shadow);

  text-align: center;

  transition: 0.3s;

  width: 400px;
}

.card:hover {
  transform: translateY(-8px);
}

.icon {
  width: 70px;

  height: 70px;

  margin: auto;

  margin-bottom: 20px;

  display: flex;

  justify-content: center;

  align-items: center;

  border-radius: 18px;

  background: var(--gold-soft);

  color: var(--gold);
}

.icon span {
  font-size: 2rem;
}

h3 {
  margin-bottom: 14px;
}

h4 {
  font-size: 1rem;

  margin-bottom: 16px;

  color: var(--gold);
}

p {
  color: #666;

  line-height: 1.8;

  white-space: pre-line;
}

@media (max-width: 1000px) {
  .container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 650px) {
  .container {
    grid-template-columns: 1fr;
  }
}
</style>
