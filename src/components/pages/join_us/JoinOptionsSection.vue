<script setup>
const options = [
  {
    icon: 'school',
    title: 'Join as a participant',
    text: 'Take part in educational, cultural and personal development programs for all age groups.',
  },

  {
    icon: 'handshake',
    title: 'Become a Partner',
    text: 'Collaborate with EPANWE and be granted access to our service for all your affiliates.',
  },
]
</script>

<template>
  <section>
    <div class="container">
      <div class="heading">
        <p>WAYS TO JOIN</p>

        <h2>How Would You Like to Get Involved?</h2>
      </div>

      <div class="grid">
        <div class="card option-card" v-for="option in options" :key="option.title">
          <span class="material-symbols-outlined">
            {{ option.icon }}
          </span>

          <h3>
            {{ option.title }}
          </h3>

          <p>
            {{ option.text }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.heading {
  text-align: center;

  margin-bottom: 70px;
}

.heading p {
  color: var(--gold);

  font-weight: 700;

  letter-spacing: 2px;

  margin-bottom: 12px;
}

.grid {
  display: grid;

  grid-template-columns: repeat(2, 1fr);

  gap: 30px;
}

.option-card {
  padding: 40px;

  text-align: center;

  transition: 0.3s;

  cursor: pointer;
}

.option-card:hover {
  transform: translateY(-8px);
}

.option-card span {
  font-size: 52px;

  color: var(--gold);

  display: block;

  margin-bottom: 20px;
}

.option-card h3 {
  margin-bottom: 15px;
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
