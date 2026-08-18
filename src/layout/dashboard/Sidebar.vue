<script setup>
import Button from '@/components/ui/Button.vue'
import LogoutButton from '@/components/ui/LogoutButton.vue'
import { useDashboardStore } from '@/stores/dashboard'
import { useUserStore } from '@/stores/user'
import { RouterLink, useRouter } from 'vue-router'

const store = useDashboardStore()
const pages = store.pages
const userStore = useUserStore()
const router = useRouter()

async function logOut() {
  await userStore.logOut()
  router.push('/')
}
</script>

<template>
  <aside class="sidebar">
    <div class="brand">
      <h2>
        <RouterLink to="/">EPANWE</RouterLink>
      </h2>
    </div>

    <nav ref="nav">
      <RouterLink
        v-for="page in pages"
        :to="page.link"
        class="item flex items-center gap-3.5 font-medium py-3.5 px-4"
        :class="page.isActive ? 'active' : ''"
      >
        <span class="material-symbols-outlined">{{ page.icon }}</span>
        {{ page.name }}
      </RouterLink>
    </nav>

    <div class="bottom">
      <button class="logout flex items-center gap-3 w-full px-4 py-3.5" @click="logOut()">
        <span class="material-symbols-outlined">logout</span>
        Logout
      </button>
    </div>
  </aside>
</template>

<style scoped>
.sidebar {
  width: 270px;
  background: white;
  border-right: 1px solid #eee;
  height: 100vh;
  padding: 30px 22px;

  display: flex;
  flex-direction: column;

  position: sticky;
  top: 0px;
}

.brand {
  padding: 10px 12px 35px;
}

.brand h2 {
  font-size: 1.7rem;
  color: var(--slate);
}

nav {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.item {
  border-radius: 14px;

  color: var(--gray);

  transition: 0.3s;
}

.item:hover {
  background: #f5f5f5;
}

.item.active {
  background: var(--gold-soft);
  color: var(--gold);
}

.item span {
  font-size: 24px;
}

.bottom {
  margin-top: auto;
  padding-top: 25px;
}

.logout {
  border-radius: 14px;

  background: #fff5f5;
  color: #dc2626;
  transition: 0.25s;

  font-weight: 600;
}

.logout:hover {
  background-color: #dc2626;
  color: #fff5f5;
}

@media (max-width: 950px) {
  .sidebar {
    width: 100%;
    min-height: auto;
    border-right: none;
    border-bottom: 1px solid #eee;
  }

  nav {
    flex-direction: row;
    flex-wrap: wrap;
  }

  .bottom {
    display: none;
  }
}
</style>
