<script setup>
import { useUserStore } from '@/stores/user.js'
import Button from '@/components/ui/Button.vue'
import { RouterLink } from 'vue-router'
import DropdownAvatar from '@/layout/web/DropdownAvatar.vue'

const userStore = useUserStore()
</script>

<template>
  <nav>
    <div class="container nav">
      <div class="logo">EPANWE</div>

      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/howtojoin">How to join</a></li>
      </ul>

      <div v-if="userStore.userInfo?.id" class="actions">
        <DropdownAvatar/>
      </div>
      <div v-else class="actions">
        <RouterLink to="/login">
          <Button text="Log In" color="secondary" variant="outline"/>
        </RouterLink>
        <RouterLink to="/register">
          <Button text="Join Us"/>
        </RouterLink>
      </div>
     </div>
   </nav>
</template>

<style scoped>
nav {
  background: white;

  position: sticky;

  top: 0;

  z-index: 100;

  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.05);
}

.nav {
  height: 85px;

  display: flex;

  align-items: center;

  justify-content: space-between;
}

.logo {
  font-size: 1.6rem;

  font-weight: 700;

  font-family: Poppins;

  color: var(--slate);
}

ul {
  display: flex;

  gap: 40px;

  list-style: none;

  font-weight: 500;
}

.actions {
  display: flex;

  gap: 15px;
}

li {
  cursor: pointer;

  transition: 0.3s;
}

li:hover {
  color: var(--gold);
}
</style>
