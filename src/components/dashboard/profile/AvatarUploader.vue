<script setup>
import { computed } from 'vue'

const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
})

const initials = computed(() => {
  return (props.user.first_name.charAt(0) + props.user.last_name.charAt(0)).toUpperCase()
})
</script>

<template>
  <section
    class="bg-white rounded-3xl p-6 md:p-8 lg:p-[35px] shadow-[var(--shadow)]
           flex flex-col items-center gap-5"
  >
    <div
      v-if="user.avatar"
      class="w-[120px] h-[120px] rounded-full overflow-hidden flex justify-center items-center
             bg-[var(--gold)] text-white"
    >
      <img
        :src="user.avatar"
        alt="Profile picture"
        class="w-full h-full object-cover"
      >
    </div>

    <div
      v-else
      class="w-[120px] h-[120px] rounded-full flex justify-center items-center
             bg-[var(--gold)] text-white text-[2rem] font-bold overflow-hidden"
    >
      {{ initials }}
    </div>

    <h3 class="text-lg md:text-[1.25rem] font-semibold text-[var(--slate)] text-center">
      {{ user.first_name }} {{ user.last_name }}
    </h3>

    <p class="text-gray-500 text-center break-words">
      {{ user.email }}
    </p>
  </section>
</template>