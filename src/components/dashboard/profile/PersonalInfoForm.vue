<script setup>
import { reactive } from 'vue'
import Button from '@/components/ui/Button.vue'

const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['submit'])

const form = reactive({
  first_name: props.user.first_name,
  last_name: props.user.last_name,
  age: props.user.age,
  gender: props.user.gender,
})
</script>

<template>
  <section class="card">
    <h2>Personal Information</h2>

    <div class="grid">
      <div class="field">
        <label> First Name </label>

        <input v-model="form.first_name" type="text" />
      </div>

      <div class="field">
        <label> Last Name </label>

        <input v-model="form.last_name" type="text" />
      </div>

      <div class="field">
        <label> Age </label>

        <input v-model="form.age" type="number" />
      </div>

      <div class="field">
        <label> Gender </label>

        <select v-model="form.gender">
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option v-if="user.role === 'admin'" value="clank">Clank</option>
        </select>
      </div>
    </div>

    <div class="actions">
      <Button text="Save Changes" @click="emit('submit', form)" />
    </div>
  </section>
</template>

<style scoped>
.card {
  background: white;

  padding: 35px;

  border-radius: 20px;

  box-shadow: var(--shadow);
}

h2 {
  margin-bottom: 30px;
}

.grid {
  display: grid;

  grid-template-columns: repeat(2, 1fr);

  gap: 20px;
}

.full {
  grid-column: 1/-1;
}

.field {
  display: flex;

  flex-direction: column;

  gap: 8px;
}

label {
  font-weight: 600;
}

input,
select {
  padding: 14px;

  border-radius: 12px;

  border: 1px solid #ddd;

  font-size: 1rem;
}

.actions {
  margin-top: 30px;

  display: flex;

  justify-content: flex-end;
}

@media (max-width: 700px) {
  .grid {
    grid-template-columns: 1fr;
  }

  .full {
    grid-column: auto;
  }
}
</style>
