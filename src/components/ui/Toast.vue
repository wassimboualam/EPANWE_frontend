<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  toast: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['close'])

const icon = computed(() => {
  switch (props.toast.type) {
    case 'success':
      return 'check_circle'

    case 'error':
      return 'error'

    case 'warning':
      return 'warning'

    default:
      return 'info'
  }
})
</script>

<template>
  <div class="toast" :class="toast.type">
    <div class="icon">
      <span class="material-symbols-outlined">
        {{ icon }}
      </span>
    </div>

    <div class="content">
      <h4>
        {{ toast.title }}
      </h4>

      <p>
        {{ toast.message }}
      </p>

      <div
        class="progress"
        :style="{
          animationDuration: toast.duration + 'ms',
        }"
      ></div>
    </div>

    <button class="close" @click="$emit('close')">
      <span class="material-symbols-outlined"> close </span>
    </button>
  </div>
</template>

<style scoped>
.toast {
  position: relative;

  display: flex;

  gap: 16px;

  align-items: flex-start;

  width: 360px;

  background: white;

  border-radius: 18px;

  padding: 18px;

  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12);

  overflow: hidden;

  border-left: 4px solid transparent;

  pointer-events: auto;
}

.toast.success {
  border-color: #22c55e;
}

.toast.error {
  border-color: #ef4444;
}

.toast.warning {
  border-color: #f59e0b;
}

.toast.info {
  border-color: var(--gold);
}

.icon {
  margin-top: 2px;
}

.success .icon {
  color: #22c55e;
}

.error .icon {
  color: #ef4444;
}

.warning .icon {
  color: #f59e0b;
}

.info .icon {
  color: var(--gold);
}

.content {
  flex: 1;
}

h4 {
  margin-bottom: 6px;

  font-size: 1rem;
}

p {
  font-size: 0.92rem;

  color: #666;

  line-height: 1.5;
}

.close {
  background: none;

  border: none;

  cursor: pointer;

  color: #999;
}

.progress {
  position: absolute;

  left: 0;

  bottom: 0;

  height: 3px;

  background: currentColor;

  width: 100%;

  transform-origin: left;

  animation: progress linear forwards;
}

.success .progress {
  color: #22c55e;
}

.error .progress {
  color: #ef4444;
}

.warning .progress {
  color: #f59e0b;
}

.info .progress {
  color: var(--gold);
}

@keyframes progress {
  from {
    transform: scaleX(1);
  }

  to {
    transform: scaleX(0);
  }
}
</style>
