<script setup>
import Button from './BaseButton.vue'

defineProps({
  logOut: {
    type: Function,
    default: () => alert("Something's amiss"),
  },
})

</script>

<template>
  <Button
    color="danger"
    @click="logOut"
  >
    <span class="material-symbols-outlined">logout</span>
    Log out
  </Button>
</template>

<style scoped></style>
