<script setup lang="ts">
import { RouterView } from 'vue-router'
import Footer from './Footer.vue'
import Navbar from './Navbar.vue'
</script>

<template>
  <Navbar />

  <RouterView />

  <Footer />
</template>
