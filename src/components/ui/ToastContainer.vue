<script setup>
import { useToastStore } from '@/stores/toast'

import Toast from './Toast.vue'

const toastStore = useToastStore()
</script>

<template>
  <div class="container">
    <TransitionGroup name="toast">
      <Toast
        v-for="toast in toastStore.toasts"
        :key="toast.id"
        :toast="toast"
        @close="toastStore.remove(toast.id)"
      />
    </TransitionGroup>
  </div>
</template>

<style scoped>
.container {
  position: fixed;

  right: 24px;

  bottom: 24px;

  display: flex;

  flex-direction: column;

  align-items: flex-end;

  gap: 14px;

  z-index: 99999;

  pointer-events: none;
}

.toast-enter-from {
  opacity: 0;

  transform: translate(40px, 40px);
}

.toast-leave-to {
  opacity: 0;

  transform: translate(40px, 40px);
}

.toast-enter-active,
.toast-leave-active {
  transition: all 0.3s ease;
}

.toast-move {
  transition: transform 0.3s ease;
}

@media (max-width: 600px) {
  .container {
    left: 16px;
    right: 16px;
    bottom: 16px;

    align-items: stretch;
  }

  :deep(.toast) {
    width: 100%;
  }
}
</style>
