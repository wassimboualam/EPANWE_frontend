<script setup>
import { ref } from 'vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import BaseModal from '@/components/ui/BaseModal.vue'

const emit = defineEmits(['submitEmail', 'refreshPassword'])

const props = defineProps({
  email: {
    type: String,
    default: '',
  },
})

const email = ref(props.email)
const showModal = ref(false)

function submitEmail(email) {
  emit('submitEmail', email)
  showModal.value = false
}
</script>

<template>
  <section class="bg-white p-6 md:p-8 lg:p-[35px] rounded-3xl shadow-[var(--shadow)]">
    <h2 class="text-xl md:text-2xl font-bold text-[var(--slate)] mb-2">
      Security
    </h2>

    <p class="text-gray-500 mt-2 mb-8">
      Update your email.
    </p>

    <div class="flex flex-col gap-2 mb-6">
      <label class="font-semibold text-[var(--slate)]">Email</label>
      <input
        v-model="email"
        type="email"
        class="w-full px-4 py-3.5 rounded-xl border border-gray-300 text-base font-[inherit]
               focus:outline-none focus:border-[var(--gold)] transition-colors"
      >
    </div>

    <div class="flex justify-end">
      <BaseButton
        text="Update E-mail"
        @click="showModal = true"
      />

      <BaseModal
        v-if="showModal"
        title="Changing e-mail"
        @close="showModal = false"
      >
        Are you sure you want to change your e-mail?
        <template #footer>
          <BaseButton
            text="Update E-mail"
            @click="submitEmail(email)"
          />
        </template>
      </BaseModal>
    </div>

    <p class="text-gray-500 mt-8 mb-6">
      Refresh your password.
    </p>

    <div class="flex justify-end">
      <BaseButton
        text="Refresh password"
        @click="emit('refreshPassword')"
      />
    </div>
  </section>
</template>