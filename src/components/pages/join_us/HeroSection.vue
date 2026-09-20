<script setup>
import BaseButton from '@/components/ui/BaseButton.vue'
</script>

<template>
  <section class="bg-white py-16 md:py-20 lg:py-[90px]">
    <div class="container grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 lg:gap-[70px] items-center">
      <div class="content order-2 lg:order-1">
        <span
          class="inline-block px-[18px] py-[10px] bg-[var(--gold-soft)] text-[var(--gold)] font-semibold rounded-full mb-6 text-xs md:text-sm"
        >
          JOIN EPANWE
        </span>

        <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-[3.6rem] font-bold text-[var(--slate)] leading-[1.1] mb-6">
          Become Part of a Community That Inspires Change
        </h1>

        <p class="text-gray-600 text-base md:text-lg leading-[1.8] mb-10">
          Whether you're looking to participate in a program, volunteer your time, or partner with
          us, we'd love to welcome you into the EPANWE family.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 sm:gap-5">
          <a href="#steps">
            <BaseButton
              text="Learn how to join"
              :full-width="true"
            />
          </a>

          <a href="/contact">
            <BaseButton
              text="Contact Us"
              style-type="secondary"
              :full-width="true"
            />
          </a>
        </div>
      </div>

      <div class="order-1 lg:order-2">
        <img
          src="/images/hero3.jpg"
          alt="Join EPANWE"
          class="w-full aspect-[4/3] object-cover rounded-lg shadow-[var(--shadow)]"
        >
      </div>
    </div>
  </section>
</template>