<script setup>
import BaseButton from '@/components/ui//BaseButton.vue'
</script>

<template>
  <section class="py-16 md:py-24">
    <div class="container">
      <div
        class="bg-gradient-to-br from-[#d4af37] to-[#e2c45b] px-6 py-12 sm:px-10 sm:py-16 lg:p-20 rounded-3xl md:rounded-[32px] text-center text-white"
      >
        <p class="font-bold tracking-[2px] mb-4 text-sm md:text-base">
          JOIN OUR MISSION
        </p>

        <h2 class="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-5">
          Become Part of the Story
        </h2>

        <p class="max-w-[700px] mx-auto mb-8 md:mb-9 opacity-95 leading-relaxed">
          Whether you're a parent, educator, institution or volunteer, your support helps create
          opportunities for young people to flourish.
        </p>

        <div class="flex flex-col sm:flex-row justify-center gap-4 sm:gap-5">
          <a href="/howtojoin">
            <BaseButton
              text="Join Us"
              :full-width="true"
            />
          </a>

          <a href="/contact">
            <BaseButton
              text="Contact Us"
              color="secondary"
              :full-width="true"
            />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>