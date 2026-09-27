<script setup>
import BaseButton from '@/components/ui/BaseButton.vue'
import { formatDate } from '@/utilities'

defineProps({
  partners: {
    type: Array,
    default: () => [],
  },
})

const emit = defineEmits(['view', 'delete'])
</script>

<template>
  <section
    id="partners"
    class="bg-white rounded-3xl py-4 shadow-[var(--shadow)] overflow-hidden"
  >
    <div
      class="flex justify-between items-center px-5 md:px-8 py-5 md:py-6 border-b border-gray-200"
    >
      <h2 class="text-lg md:text-xl font-bold text-[var(--slate)]">
        Partnership Requests
      </h2>
      <span class="text-sm text-gray-500">
        {{ partners.length }} total
      </span>
    </div>

    <div v-if="!partners.length" class="p-8 text-center text-gray-500">
      No partnership requests yet.
    </div>

    <div v-else class="overflow-x-auto">
      <table class="w-full border-collapse">
        <thead class="hidden lg:table-header-group">
          <tr>
            <th class="text-left px-4 lg:px-5 xl:px-8 py-4 bg-gray-50 font-semibold text-sm text-[var(--slate)]">Company</th>
            <th class="text-left px-4 lg:px-5 xl:px-8 py-4 bg-gray-50 font-semibold text-sm text-[var(--slate)]">Contact</th>
            <th class="text-left px-4 lg:px-5 xl:px-8 py-4 bg-gray-50 font-semibold text-sm text-[var(--slate)]">Activity</th>
            <th class="text-left px-4 lg:px-5 xl:px-8 py-4 bg-gray-50 font-semibold text-sm text-[var(--slate)]">Date</th>
            <th class="bg-gray-50" />
          </tr>
        </thead>

        <tbody class="block lg:table-row-group">
          <tr
            v-for="partner in partners"
            :key="partner.id"
            class="block lg:table-row border-b border-gray-200 lg:border-t lg:border-gray-100
                   p-5 lg:p-0 transition-colors duration-200 hover:bg-gray-50"
          >
            <td class="block lg:table-cell py-1.5 lg:py-5 lg:px-5 xl:px-8 text-sm font-semibold text-[var(--slate)]">
              {{ partner.company_name || '—' }}
            </td>

            <td class="block lg:table-cell py-1.5 lg:py-5 lg:px-5 xl:px-8 text-sm text-gray-600">
              <div>{{ partner.contact_name || '—' }}</div>
              <div class="text-gray-400 break-all">{{ partner.contact_email || '' }}</div>
            </td>

            <td class="block lg:table-cell py-1.5 lg:py-5 lg:px-5 xl:px-8 text-sm text-gray-600">
              {{ partner.activity_field || '—' }}
            </td>

            <td class="block lg:table-cell py-1.5 lg:py-5 lg:px-5 xl:px-8 text-sm text-gray-600">
              {{ formatDate(partner.created_at) }}
            </td>

            <td class="block lg:table-cell py-3 lg:py-5 lg:px-5 xl:px-8 lg:text-right">
              <div class="flex gap-2 justify-end lg:flex-col xl:flex-row">
                <BaseButton
                  text="See more"
                  variant="outline"
                  color="info"
                  size="sm"
                  @click="emit('view', partner)"
                />
                <BaseButton
                  text="Delete"
                  variant="outline"
                  color="danger"
                  size="sm"
                  @click="emit('delete', partner)"
                />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>