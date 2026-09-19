<script setup>
import BaseButton from '@/components/ui/BaseButton.vue'
</script>

<template>
  <div class="m-10 p-15">
    <h1 class="mb-6">
      Page not found
    </h1>
    <p class="mb-6">
      It seems you tried to access a page that doesn't exist. <br>
      Please go back to the home page and find what you're looking for from there.
    </p>
    <a href="/">
      <BaseButton
        color="primary"
        text="Home page"
        size="sm"
      />
    </a>
  </div>
</template>
