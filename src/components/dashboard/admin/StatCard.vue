<script setup>
defineProps({
  title: { type: String, default: '' },
  value: { type: Number, default: 0 },
  subtitle: { type: String, default: '' },
  icon: { type: String, default: '' },
  color: { type: String, default: '' },
})
</script>

<template>
  <div
    class="flex items-center gap-5 p-6 md:p-7
           bg-white rounded-3xl shadow-[var(--shadow)]
           transition-transform duration-200 hover:-translate-y-1"
  >
    <div
      class="w-14 h-14 md:w-16 md:h-16 rounded-[18px] shrink-0
             flex justify-center items-center"
      :style="{ background: color + '20', color }"
    >
      <span class="material-symbols-outlined text-[2rem]">
        {{ icon }}
      </span>
    </div>

    <div class="flex flex-col">
      <h2 class="text-2xl font-bold text-[var(--slate)] mb-1">
        {{ value }}
      </h2>

      <h3 class="text-base font-semibold text-[var(--slate)] mb-1">
        {{ title }}
      </h3>

      <p class="text-sm text-gray-500">
        {{ subtitle }}
      </p>
    </div>
  </div>
</template>