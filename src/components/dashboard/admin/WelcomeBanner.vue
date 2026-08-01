<script setup lang="ts">
import Button from '@/components/ui/Button.vue'
</script>

<template>
  <section class="banner">
    <div class="content">
      <span class="eyebrow"> ADMIN DASHBOARD </span>

      <h1>Welcome back!</h1>

      <p>
        Review and manage applications submitted through the EPANWE website. New requests requiring
        your attention will appear below.
      </p>
    </div>

    <a href="#requests">
      <Button text="View Pending Requests" color="primary" />
    </a>
  </section>
</template>

<style scoped>
.banner {
  display: flex;

  justify-content: space-between;

  align-items: center;

  gap: 30px;

  padding: 40px;

  background: white;

  border-radius: 24px;

  box-shadow: var(--shadow);
}

.content {
  max-width: 700px;
}

.eyebrow {
  display: inline-block;

  padding: 6px 14px;

  border-radius: 999px;

  background: var(--gold-soft);

  color: var(--gold);

  font-weight: 600;

  font-size: 0.85rem;

  margin-bottom: 18px;
}

h1 {
  font-size: 2rem;

  margin-bottom: 16px;
}

p {
  color: #666;

  line-height: 1.8;
}

@media (max-width: 900px) {
  .banner {
    flex-direction: column;

    align-items: flex-start;
  }
}
</style>
