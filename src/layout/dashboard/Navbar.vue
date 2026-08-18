<script setup lang="ts">
import { computed, onMounted } from 'vue'
import Avatar from '@/components/ui/Avatar.vue'
import DropdownAvatar from '../web/DropdownAvatar.vue'

const props = defineProps({
  user: {
    type: Object,
    default: () => ({
      firstName: 'f_name',
      lastName: 'l_name',
    }),
  },
  class: {
    type: String,
    default: () => '',
  },
})
</script>

<template>
  <header class="navbar" :class="props.class" style="margin-bottom: 3rem">
    <div>
      <p class="breadcrumb">Dashboard</p>

      <h2>
        Welcome back,
        {{ user.first_name }}
      </h2>
    </div>

    <div class="actions">
      <!-- <button class="icon-btn">
        <span class="material-symbols-outlined"> notifications </span>
      </button>

      <button class="icon-btn">
        <span class="material-symbols-outlined"> settings </span>
      </button> -->

      <DropdownAvatar />
    </div>
  </header>
</template>

<style scoped>
.navbar {
  height: 72px;

  padding: 0 30px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background: white;

  border-bottom: 1px solid #eee;
}

.breadcrumb {
  font-size: 0.8rem;

  text-transform: uppercase;

  letter-spacing: 1px;

  color: #999;

  margin-top: 12px;
}

h2 {
  font-size: 1.35rem;

  font-weight: 700;
}

.actions {
  display: flex;

  align-items: center;

  gap: 12px;
}

.icon-btn {
  width: 42px;

  height: 42px;

  display: flex;

  justify-content: center;

  align-items: center;

  background: #f7f7f7;

  border: none;

  border-radius: 12px;

  cursor: pointer;

  transition: 0.2s;
}

.icon-btn:hover {
  background: var(--gold-soft);

  color: var(--gold);
}

@media (max-width: 700px) {
  .navbar {
    height: auto;

    padding: 20px;

    flex-direction: column;

    align-items: flex-start;

    gap: 18px;
  }

  .actions {
    width: 100%;

    justify-content: flex-end;
  }
}
</style>
