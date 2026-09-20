<script setup>
import BaseButton from '@/components/ui/BaseButton.vue'
import { useRequestStore } from '@/stores/request'

defineProps({
  requests: {
    type: Array,
    default: () => [],
  }
})

const requestStore = useRequestStore()
const emit = defineEmits(['setApproval'])

function badge(status) {
  switch (status) {
    case 'approved':
      return 'approved'
    case 'rejected':
      return 'rejected'
    default:
      return 'pending'
  }
}
</script>

<template>
  <section
    id="requests"
    class="bg-white rounded-3xl py-4 shadow-[var(--shadow)] overflow-hidden"
  >
    <div class="flex justify-between items-center px-5 md:px-8 py-5 md:py-6 border-b border-gray-200">
      <h2 class="text-lg md:text-xl font-bold text-[var(--slate)]">
        Access Requests
      </h2>
    </div>

    <div class="overflow-x-auto">
      <table class="w-full border-collapse">
        <thead class="hidden lg:table-header-group">
          <tr>
            <th class="text-left px-5 lg:px-8 py-4 bg-gray-50 font-semibold text-sm text-[var(--slate)]">Name</th>
            <th class="text-left px-5 lg:px-8 py-4 bg-gray-50 font-semibold text-sm text-[var(--slate)]">Email</th>
            <th class="text-left px-5 lg:px-8 py-4 bg-gray-50 font-semibold text-sm text-[var(--slate)]">Date</th>
            <th class="text-left px-5 lg:px-8 py-4 bg-gray-50 font-semibold text-sm text-[var(--slate)]">Status</th>
            <th class="bg-gray-50" />
          </tr>
        </thead>

        <tbody class="block lg:table-row-group">
          <tr
            v-for="request in requests"
            :key="request.user.id"
            class="block lg:table-row border-b border-gray-200 lg:border-t lg:border-gray-100
                   p-5 lg:p-0
                   transition-colors duration-200 hover:bg-gray-50"
          >
            <td class="block lg:table-cell py-1.5 lg:py-5 lg:px-8 text-sm text-[var(--slate)]">
              {{ request.user.first_name }} {{ request.user.last_name }}
            </td>

            <td class="block lg:table-cell py-1.5 lg:py-5 lg:px-8 text-sm text-gray-600 break-all">
              {{ request.user.email }}
            </td>

            <td class="block lg:table-cell py-1.5 lg:py-5 lg:px-8 text-sm text-gray-600">
              {{ requestStore.formatDate(request.created_at) }}
            </td>

            <td class="block lg:table-cell py-1.5 lg:py-5 lg:px-8">
              <span
                class="inline-flex px-3 py-1.5 rounded-full text-[0.85rem] font-semibold capitalize"
                :class="{
                  'bg-amber-100 text-amber-700': badge(request.status) === 'pending',
                  'bg-green-100 text-green-700': badge(request.status) === 'approved',
                  'bg-red-100 text-red-700': badge(request.status) === 'rejected',
                }"
              >
                {{ request.status }}
              </span>
            </td>

            <td class="block lg:table-cell py-3 lg:py-5 lg:px-8 lg:text-right">
              <div class="flex gap-2 lg:justify-end">
                <BaseButton
                  text="Approve"
                  variant="outline"
                  color="success"
                  size="sm"
                  @click="emit('setApproval', 'approved', request.user_id)"
                />
                <BaseButton
                  text="Reject"
                  variant="outline"
                  color="danger"
                  size="sm"
                  @click="emit('setApproval', 'rejected', request.user_id)"
                />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>