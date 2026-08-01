<script setup>
const categories = [
  {
    icon: 'psychology',
    title: 'Personal Growth',
  },

  {
    icon: 'groups',
    title: 'Communication & Relationships',
  },

  {
    icon: 'volunteer_activism',
    title: 'Community Engagement',
  },

  {
    icon: 'palette',
    title: 'Creativity & Wellbeing',
  },

  {
    icon: 'self_improvement',
    title: 'Leadership and self-management',
  },
]
</script>

<template>
  <section>
    <div class="container">
      <div class="heading">
        <p>DISCOVER</p>

        <h2>Choose Your Path</h2>
      </div>

      <div class="grid">
        <div v-for="category in categories" :key="category.title" class="card category-card">
          <span class="material-symbols-outlined">
            {{ category.icon }}
          </span>

          <h3>
            {{ category.title }}
          </h3>
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

  letter-spacing: 2px;

  margin-bottom: 10px;
}

.grid {
  display: grid;

  grid-template-columns: repeat(3, 1fr);

  gap: 30px;
}

.category-card {
  padding: 40px;

  text-align: center;

  transition: 0.3s;

  cursor: pointer;
}

.category-card:hover {
  transform: translateY(-8px);
}

span {
  font-size: 52px;

  color: var(--gold);

  margin-bottom: 20px;

  display: block;
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
