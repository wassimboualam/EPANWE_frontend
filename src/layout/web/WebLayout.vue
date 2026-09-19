<script setup>
import { RouterView } from 'vue-router'
import Footer from './FooterSection.vue'
import Navbar from './NavbarSection.vue'
</script>

<template>
  <Navbar />

  <RouterView />

  <Footer />
</template>
