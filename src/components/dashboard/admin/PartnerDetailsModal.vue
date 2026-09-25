<script setup>
import BaseModal from '@/components/ui/BaseModal.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import { formatDate } from '@/utilities'
// import { usePartnerStore } from '@/stores/partner'

defineProps({
  partner: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['close', 'delete'])
// const partnerStore = usePartnerStore()

const rows = [
  { label: 'Company name', key: 'company_name' },
  { label: 'ICE', key: 'ice' },
  { label: 'Legal form', key: 'legal_form' },
  { label: 'Activity field', key: 'activity_field' },
  { label: 'Website', key: 'website' },
  { label: 'Email', key: 'email' },
  { label: 'Phone', key: 'phone_number' },
  { label: 'Address', key: 'address' },
  { label: 'Contact name', key: 'contact_name' },
  { label: 'Contact email', key: 'contact_email' },
  { label: 'Contact phone', key: 'contact_phone_number' },
  { label: 'Age range', key: 'age_range' },
  { label: 'Number of users', key: 'number_of_users' },
  { label: 'Submitted', key: 'created_at', format: 'date' },
]
</script>

<template>
  <BaseModal
    title="Partnership Request"
    width="720px"
    @close="emit('close')"
  >
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
      <div
        v-for="row in rows"
        :key="row.key"
        class="flex flex-col gap-1 min-w-0"
      >
        <span class="text-[0.72rem] uppercase tracking-wider font-semibold text-gray-400">
          {{ row.label }}
        </span>
        <span class="text-sm text-[var(--slate)] break-words">
          <template v-if="row.format === 'date'">
            {{ formatDate(partner[row.key]) }}
          </template>
          <template v-else>
            {{ partner[row.key] ?? '—' }}
          </template>
        </span>
      </div>
    </div>

    <div class="mt-6 flex flex-col gap-1">
      <span class="text-[0.72rem] uppercase tracking-wider font-semibold text-gray-400">
        Description
      </span>
      <p class="text-sm text-[var(--slate)] leading-relaxed whitespace-pre-line">
        {{ partner.description || '—' }}
      </p>
    </div>

    <template #footer>
      <BaseButton
        text="Close"
        variant="outline"
        color="secondary"
        @click="emit('close')"
      />
      <BaseButton
        text="Delete request"
        color="danger"
        @click="emit('delete', partner)"
      />
    </template>
  </BaseModal>
</template>