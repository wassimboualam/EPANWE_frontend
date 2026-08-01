<script setup lang="ts">
import Button from '@/components/ui/Button.vue'
</script>

<template>
  <section class="banner">
    <div>
      <span class="badge"> ACCOUNT </span>

      <h1>Welcome Back 👋</h1>

      <p>Manage your account and request access to the EPANWE Back-Office Platform.</p>
    </div>

    <!-- <Button text="Edit Profile" styleType="secondary" /> -->
  </section>
</template>

<style scoped>
.banner {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 30px 35px;

  background: white;

  border-radius: 20px;

  box-shadow: var(--shadow);
}

.badge {
  display: inline-block;

  padding: 6px 14px;

  background: var(--gold-soft);

  color: var(--gold);

  border-radius: 999px;

  font-size: 0.85rem;

  font-weight: 600;

  margin-bottom: 12px;
}

h1 {
  font-size: 2rem;

  margin-bottom: 10px;
}

p {
  color: #666;

  max-width: 500px;
}

@media (max-width: 700px) {
  .banner {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
}
</style>
