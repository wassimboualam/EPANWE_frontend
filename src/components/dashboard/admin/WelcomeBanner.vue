<script setup>
import BaseButton from '@/components/ui/BaseButton.vue'
</script>

<template>
  <section
    class="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6 lg:gap-[30px]
           p-6 md:p-8 lg:p-10
           bg-white rounded-3xl shadow-[var(--shadow)]"
  >
    <div class="max-w-[700px]">
      <span
        class="inline-block px-3.5 py-1.5 rounded-full bg-[var(--gold-soft)] text-[var(--gold)]
               font-semibold text-xs md:text-[0.85rem] mb-4"
      >
        ADMIN DASHBOARD
      </span>

      <h1 class="text-2xl md:text-[2rem] font-bold text-[var(--slate)] mb-4">
        Welcome back!
      </h1>

      <p class="text-gray-500 leading-[1.8]">
        Review and manage applications submitted through the EPANWE website. New requests requiring
        your attention will appear below.
      </p>
    </div>

    <a href="#requests" class="self-start lg:self-auto">
      <BaseButton
        text="View Pending Requests"
        color="primary"
      />
    </a>
  </section>
</template>