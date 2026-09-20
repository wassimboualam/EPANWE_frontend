<script setup>
import BaseButton from '@/components/ui/BaseButton.vue'
</script>

<template>
  <section class="registration bg-white py-16 md:py-24">
    <div class="container">
      <div class="text-center mb-10 md:mb-[60px]">
        <p class="text-[var(--gold)] font-bold tracking-[2px] mb-3 text-sm md:text-base">
          Call to action
        </p>

        <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--slate)]">
          Join us here and now
        </h2>
      </div>

      <div class="flex justify-center items-end">
        <RouterLink to="/register">
          <BaseButton text="Sign up" />
        </RouterLink>
      </div>
    </div>
  </section>
</template>