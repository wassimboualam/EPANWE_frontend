<script setup>
const cards = [
  {
    icon: 'call',
    title: 'Phone',
    text: '+212 669 951 116',
  },

  {
    icon: 'mail',
    title: 'Email',
    text: 'contact@epanwe.org',
  },

  {
    icon: 'location_on',
    title: 'Address',
    text: '119, Boulevard Abdelmoumen, Appt 18, Casablanca',
  },

  // {
  //   icon: 'schedule',
  //   title: 'Office Hours',
  //   text: 'Mon - Fri | 9:00 - 17:00',
  // },
]
</script>

<template>
  <section class="contact">
    <div class="container">
      <div class="heading">
        <p>CONTACT</p>

        <h2>Need More Information?</h2>
      </div>

      <div class="grid">
        <div class="card" v-for="card in cards" :key="card.title">
          <span class="material-symbols-outlined">
            {{ card.icon }}
          </span>

          <h3>
            {{ card.title }}
          </h3>

          <p>
            {{ card.text }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact {
  background: white;
}

.heading {
  text-align: center;

  margin-bottom: 60px;
}

.heading p {
  color: var(--gold);

  font-weight: 700;

  letter-spacing: 2px;
}

.grid {
  display: grid;

  grid-template-columns: repeat(3, 1fr);

  gap: 30px;
}

.card {
  padding: 40px;

  text-align: center;
}

.card span {
  font-size: 50px;

  display: block;

  margin-bottom: 20px;

  color: var(--gold);
}

@media (max-width: 900px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
