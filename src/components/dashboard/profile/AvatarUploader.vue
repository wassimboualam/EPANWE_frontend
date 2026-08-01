<script setup lang="ts">
import { computed } from 'vue'
import Button from '@/components/ui/Button.vue'

const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
})

const initials = computed(() => {
  return (props.user.first_name.charAt(0) + props.user.last_name.charAt(0)).toUpperCase()
})

function changePhoto() {
  // TODO
}
</script>

<template>
  <section class="card">
    <div v-if="user.avatar" class="avatar image">
      <img :src="user.avatar" alt="Profile picture" />
    </div>

    <div v-else class="avatar">
      {{ initials }}
    </div>

    <h3>{{ user.first_name }} {{ user.last_name }}</h3>

    <p>
      {{ user.email }}
    </p>

    <!-- <Button text="Change Photo" type="secondary" @click="changePhoto" /> -->
  </section>
</template>

<style scoped>
.card {
  background: white;

  border-radius: 20px;

  padding: 35px;

  box-shadow: var(--shadow);

  display: flex;

  flex-direction: column;

  align-items: center;

  gap: 18px;
}

.avatar {
  width: 120px;

  height: 120px;

  border-radius: 50%;

  display: flex;

  justify-content: center;

  align-items: center;

  background: var(--gold);

  color: white;

  font-size: 2rem;

  font-weight: 700;

  overflow: hidden;
}

.avatar img {
  width: 100%;

  height: 100%;

  object-fit: cover;
}

h3 {
  font-size: 1.25rem;

  text-align: center;
}

p {
  color: #777;

  text-align: center;

  word-break: break-word;
}
</style>
