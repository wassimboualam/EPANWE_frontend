<script setup>
defineProps({
  program: Object,
})
</script>

<template>
  <div class="card">
    <!-- <div class="image">
      <img :src="program.image" :alt="program.title" />
    </div> -->

    <div class="content">
      <div class="badges">
        <span>
          {{ program.category }}
        </span>

        <span>
          {{ program.age_group }}
        </span>
      </div>

      <h3>
        {{ program.title }}
      </h3>

      <p>
        {{ program.text.split(' ').reduce((t, v, i) => `${t} ${i <= 9 ? v : ''}`, '') + '...' }}
      </p>

      <!-- <div class="details">
        <span>
           ⏱ 
          {{ program.duration }}
        </span>

        <span>
           📍 
          {{ program.location }}
        </span>
      </div> -->

      <a href="#"> Learn More → </a>
    </div>
  </div>
</template>

<style scoped>
.card {
  background: white;

  border-radius: 24px;

  overflow: hidden;

  box-shadow: var(--shadow);

  transition: 0.35s;

  height: 400px;
}

.card:hover {
  transform: translateY(-8px);
}

.image {
  height: 220px;

  overflow: hidden;
}

img {
  width: 100%;

  height: 100%;

  object-fit: cover;

  transition: 0.4s;
}

.card:hover img {
  transform: scale(1.08);
}

.content {
  display: grid;

  grid-template-columns: 1fr;

  grid-template-rows: 1fr 2fr 2fr 1fr;

  gap: 8px;

  padding: 30px;

  height: 400px;
}

.badges {
  display: flex;

  gap: 10px;

  margin-bottom: 18px;
}

.badges span {
  display: flex;

  justify-content: center;

  align-items: center;

  background: var(--gold-soft);

  padding: 6px 14px;

  border-radius: 999px;

  font-size: 0.8rem;

  font-weight: 600;

  color: var(--gold);
}

.details {
  display: flex;

  justify-content: space-between;

  margin: 25px 0;

  font-size: 0.9rem;

  color: #666;
}

a {
  color: var(--gold);

  font-weight: 600;
}
</style>
