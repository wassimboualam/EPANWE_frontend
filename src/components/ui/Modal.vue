<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  width: {
    type: String,
    default: '500px',
  },
  persistent: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['close'])

function close() {
  if (!props.persistent) {
    emit('close')
  }
}
</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div class="overlay" @click="close">
        <div class="modal" :style="{ maxWidth: width }" @click.stop>
          <div class="header">
            <h2>
              {{ title }}
            </h2>

            <button class="close" @click="$emit('close')">
              <span class="material-symbols-outlined"> close </span>
            </button>
          </div>

          <div class="body">
            <slot />
          </div>

          <div class="footer">
            <slot name="footer" />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.overlay {
  position: fixed;

  inset: 0;

  background: rgba(0, 0, 0, 0.45);

  backdrop-filter: blur(5px);

  display: flex;

  justify-content: center;

  align-items: center;

  padding: 20px;

  z-index: 9999;
}

.modal {
  width: 100%;

  background: white;

  border-radius: 24px;

  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.18);

  overflow: hidden;
}

.header {
  display: flex;

  justify-content: space-between;

  align-items: center;

  padding: 24px 28px;

  border-bottom: 1px solid #eee;
}

.header h2 {
  font-size: 1.35rem;

  margin: 0;
}

.close {
  width: 40px;

  height: 40px;

  display: flex;

  justify-content: center;

  align-items: center;

  background: #f5f5f5;

  border: none;

  border-radius: 12px;

  cursor: pointer;

  transition: 0.2s;
}

.close:hover {
  background: #ececec;
}

.body {
  padding: 28px;
}

.footer {
  padding: 20px 28px;

  display: flex;

  justify-content: flex-end;

  gap: 12px;

  border-top: 1px solid #eee;
}

.modal-enter-active,
.modal-leave-active {
  transition: 0.25s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal,
.modal-leave-to .modal {
  transform: translateY(20px) scale(0.96);
}

@media (max-width: 600px) {
  .modal {
    border-radius: 18px;
  }

  .body {
    padding: 20px;
  }

  .header {
    padding: 20px;
  }

  .footer {
    padding: 20px;

    flex-direction: column;
  }
}
</style>
