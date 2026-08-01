<script setup>
import { reactive, ref } from 'vue'
import Button from '@/components/ui/Button.vue'
import Modal from '@/components/ui/Modal.vue'

const emit = defineEmits(['submitEmail', 'refreshPassword'])

const props = defineProps({
  email: {
    type: String,
    default: '',
  },
})

const email = ref(props.email)
const showModal = ref(false)

function submitEmail(email) {
  emit('submitEmail', email)
  showModal.value = false
}
</script>

<template>
  <section class="card">
    <h2>Security</h2>

    <p class="subtitle">Update your email.</p>

    <div class="field">
      <label> Email </label>

      <div class="relative email">
        <input class="w-full p-3.5 rounded-xl" v-model="email" type="email" />
      </div>
    </div>

    <div class="actions">
      <Button text="Update E-mail" @click="showModal = true" />
      <Modal v-if="showModal" title="Changing e-mail" @close="showModal = false">
        Are you sure you want to change your e-mail?
        <template #footer>
          <Button text="Update E-mail" @click="submitEmail(email)" />
        </template>
      </Modal>
    </div>

    <p class="subtitle">Refresh your password.</p>

    <div class="actions">
      <Button text="Refresh password" @click="emit('refreshPassword')" />
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

.subtitle {
  margin: 10px 0 30px;

  color: #777;
}

.field {
  display: flex;

  flex-direction: column;

  gap: 8px;

  margin-bottom: 22px;
}

.password {
  position: relative;
}

.email input {
  width: 100%;

  padding: 14px;

  border-radius: 12px;

  border: 1px solid #ddd;

  font-size: 1rem;
}

.password button {
  position: absolute;

  top: 50%;

  right: 14px;

  transform: translateY(-50%);

  background: none;

  border: none;

  cursor: pointer;

  color: #777;
}

.actions {
  display: flex;

  justify-content: flex-end;

  margin-top: 30px;
}
</style>
