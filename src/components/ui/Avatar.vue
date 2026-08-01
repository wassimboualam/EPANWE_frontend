<script setup>
import DropdownMenu from '@/components/ui/DropdownMenu.vue'
import { useUserStore } from '@/stores/user'

const props = defineProps({
  initials: {
    type: String,
  },
  makeDimmer: {
    type: Boolean,
    default: false,
  },
})

const userStore = useUserStore()
</script>

<template>
  <div class="avatar">
    {{ userStore.getInitials() }}
  </div>
</template>

<style scoped>
.avatar {
  width: 42px;

  height: 42px;

  border-radius: 50%;

  background: var(--gold);

  color: white;

  display: flex;

  justify-content: center;

  align-items: center;

  font-weight: 700;
}
</style>
