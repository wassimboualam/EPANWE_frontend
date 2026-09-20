<script setup>
import DropdownAvatar from '../web/DropdownAvatar.vue'

const props = defineProps({
  user: {
    type: Object,
    default: () => ({
      first_name: 'f_name',
      last_name: 'l_name',
    }),
  },
  class: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <header
    class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 sm:gap-0
           bg-white border-b border-gray-200
           px-5 py-4  sm:px-[30px] sm:py-0"
    :class="props.class"
  >
    <div>
      <p class="text-[0.8rem] uppercase tracking-[1px] text-gray-400 mt-2 sm:mt-3">
        Dashboard
      </p>

      <h2 class="text-xl sm:text-[1.35rem] font-bold mb-2 sm:mb-3 text-[var(--slate)]">
        Welcome back,
        {{ user.first_name }}
      </h2>
    </div>

    <div class="flex items-center gap-3 self-end sm:self-auto">
      <!--
      <button class="w-[42px] h-[42px] flex justify-center items-center bg-[#f7f7f7] rounded-xl transition-colors duration-200 hover:bg-[var(--gold-soft)] hover:text-[var(--gold)] cursor-pointer">
        <span class="material-symbols-outlined">notifications</span>
      </button>

      <button class="w-[42px] h-[42px] flex justify-center items-center bg-[#f7f7f7] rounded-xl transition-colors duration-200 hover:bg-[var(--gold-soft)] hover:text-[var(--gold)] cursor-pointer">
        <span class="material-symbols-outlined">settings</span>
      </button>
      -->

      <DropdownAvatar />
    </div>
  </header>
</template>