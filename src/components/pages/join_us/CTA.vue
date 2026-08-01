<script setup>
import { reactive } from 'vue'
import Button from '@/components/ui/Button.vue'
</script>

<template>
  <section class="registration">
    <div class="container">
      <div class="heading">
        <p>Call to action</p>

        <h2>Join us here and now</h2>
      </div>

      <div style="display: flex; justify-content: center; align-items: end">
        <RouterLink to="/register">
          <Button text="Sign up" />
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.registration {
  background: #fff;
}

.heading {
  text-align: center;

  margin-bottom: 60px;
}

.heading p {
  color: var(--gold);

  font-weight: 700;

  letter-spacing: 2px;
}

@media (max-width: 700px) {
  .row {
    grid-template-columns: 1fr;
  }

  .form {
    padding: 30px;
  }
}
</style>
