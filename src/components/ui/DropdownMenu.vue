<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  isRound: {
    type: Boolean,
  },
  menuStyle: {
    type: String,
    default: '',
  },
})

const open = ref(false)
const container = ref(null)

const toggle = () => {
  open.value = !open.value
}

const close = () => {
  open.value = false
}

const handleClickOutside = (event) => {
  if (container.value && !container.value.contains(event.target)) {
    close()
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <div ref="container" class="dropdown">
    <button
      class="trigger"
      :style="`border-radius:${props.isRound ? '50%' : '0%'};`"
      @click.stop="toggle"
    >
      <slot name="button"> Options </slot>
    </button>

    <Transition name="dropdown">
      <div v-if="open" :style="props.menuStyle" class="menu">
        <slot />
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.dropdown {
  position: relative;
  display: inline-block;
}

.trigger {
  cursor: pointer;
  &:hover {
    opacity: 90%;
  }
}

.menu {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;

  min-width: 180px;

  background: white;
  border: 1px solid #ddd;
  border-radius: 10px;

  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);

  padding: 8px;

  z-index: 1000;
}

.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.2s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
