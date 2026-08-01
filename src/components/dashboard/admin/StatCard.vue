<script setup lang="ts">
const props = defineProps({
  title: String,

  value: Number,

  subtitle: String,

  icon: String,

  color: String,
})
</script>

<template>
  <div class="card">
    <div class="icon" :style="{ background: color + '20', color }">
      <span class="material-symbols-outlined">
        {{ icon }}
      </span>
    </div>

    <div class="text">
      <h2>
        {{ value }}
      </h2>

      <h3>
        {{ title }}
      </h3>

      <p>
        {{ subtitle }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.card {
  display: flex;

  align-items: center;

  gap: 20px;

  padding: 28px;

  background: white;

  border-radius: 20px;

  box-shadow: var(--shadow);

  transition: 0.25s;
}

.card:hover {
  transform: translateY(-5px);
}

.icon {
  width: 64px;

  height: 64px;

  border-radius: 18px;

  display: flex;

  justify-content: center;

  align-items: center;

  flex-shrink: 0;
}

.icon span {
  font-size: 2rem;
}

.text {
  display: flex;

  flex-direction: column;
}

h2 {
  font-size: 2rem;

  margin-bottom: 4px;
}

h3 {
  font-size: 1rem;

  margin-bottom: 4px;
}

p {
  font-size: 0.9rem;

  color: #777;
}
</style>
