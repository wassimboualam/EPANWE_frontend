<script setup>
import AuthLayout from '@/components/auth/AuthLayout.vue'
import RegisterForm from '@/components/auth/RegisterForm.vue'
</script>

<template>
  <AuthLayout
    title="Join EPANWE"
    subtitle="Create your account and start discovering our programs, events and community."
    image="/images/register.jpg"
  >
    <RegisterForm />
  </AuthLayout>
</template>
