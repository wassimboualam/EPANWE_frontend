<script setup>
defineProps({
  title: {
    type: String,
    default: "Welcome Back",
  },
  subtitle: {
    type: String,
    default: "Continue your journey with EPANWE by signing into your account.",
  },
  image: {
    type: String,
    default: '/images/auth.jpg',
  },
})
</script>

<template>
  <section class="grid grid-cols-1 lg:grid-cols-[1fr_520px] min-h-screen py-0 bg-white">
    <!-- Left: image + overlay (hidden below lg) -->
    <div class="hidden lg:block relative overflow-hidden">
      <div
        class="absolute inset-0 z-[2] flex flex-col justify-center px-10 xl:px-20 py-20 text-white bg-black/45"
      >
        <a
          href="/"
          class="mb-4 w-fit px-4 py-2 rounded-full text-[var(--slate)] bg-white/80 hover:bg-slate-500 hover:text-white active:bg-slate-600 transition-colors"
        >
          ← Go back to home page
        </a>

        <span
          class="inline-block w-fit px-[18px] py-2 rounded-full bg-white/15 backdrop-blur-md mb-8 text-sm font-semibold"
        >
          EPANWE
        </span>

        <h1 class="text-3xl xl:text-5xl font-bold mb-5 leading-tight">
          {{ title }}
        </h1>

        <p class="text-base xl:text-lg leading-[1.8] max-w-[420px]">
          {{ subtitle }}
        </p>
      </div>

      <img
        :src="image"
        alt=""
        class="w-full h-full object-cover"
      >
    </div>

    <!-- Right: form area -->
    <div class="flex flex-col items-center px-5 py-10 sm:px-8 md:px-10 md:py-14 lg:p-[60px]">
      <!-- Top row: back link (mobile only) + logo -->
      <div class="w-full max-w-[420px] flex items-center justify-between mb-16 md:mb-24">
        <a
          href="/"
          class="text-2xl md:text-[1.75rem] font-bold font-[Poppins] text-[var(--slate)] tracking-wide transition-colors hover:text-[var(--gold)] lg:mx-auto"
        >
          EPANWE
        </a>
      </div>

      <!-- Form centered vertically in remaining space -->
      <div class="w-full max-w-[420px] flex-1 flex flex-col justify-center">
        <slot />
      </div>
    </div>
  </section>
</template>