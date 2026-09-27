<script setup>
import BaseButton from '@/components/ui/BaseButton.vue'
</script>

<template>
  <section 
    id="cta"
    class="py-16 md:py-24 lg:py-[120px]" 
  >
    <div class="container">
      <div
        class="relative overflow-hidden rounded-3xl md:rounded-[32px] bg-gradient-to-br from-[#d4af37] to-[#e2c45b] px-6 py-12 sm:px-10 sm:py-16 lg:px-20 lg:py-[90px] shadow-[0_25px_60px_rgba(0,0,0,0.12)]"
      >
        <!-- Decorative circles -->
        <span
          class="pointer-events-none absolute w-[320px] h-[320px] rounded-full bg-white/[0.08] -right-[100px] -top-[120px]"
        />
        <span
          class="pointer-events-none absolute w-[180px] h-[180px] rounded-full bg-white/[0.12] -bottom-[70px] right-[180px]"
        />

        <div class="relative z-[2] max-w-[700px]">
          <span
            class="inline-block px-[18px] py-2 rounded-full bg-white/[0.18] text-white font-semibold mb-6 tracking-[1px] text-xs md:text-sm"
          >
            JOIN OUR COMMUNITY
          </span>

          <h2 class="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Ready to Help Shape the Future?
          </h2>

          <p class="text-white text-base md:text-lg leading-[1.8] mb-8 md:mb-10 opacity-95">
            Whether you're a parent, educator, volunteer, or future participant, EPANWE welcomes
            everyone who believes in helping young people discover their full potential.
          </p>

          <div class="flex flex-col sm:flex-row gap-4 sm:gap-5">
            <a href="/howtojoin">
              <BaseButton
                text="Join as participant"
                color="white"
                :full-width="true"
              />
            </a>
            <a href="/partner">
              <BaseButton
                text="Join as partner"
                color="secondary"
                :full-width="true"
              />
            </a>
            <!-- <BaseButton text="Explore Programs" color="secondary" /> -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>