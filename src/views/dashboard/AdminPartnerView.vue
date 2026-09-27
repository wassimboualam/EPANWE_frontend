<script setup>
import { onMounted, ref } from 'vue'
import PartnersTable from '@/components/dashboard/admin/PartnersTable.vue'
import PartnerDetailsModal from '@/components/dashboard/admin/PartnerDetailsModal.vue'
import BaseModal from '@/components/ui/BaseModal.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import { useToastStore } from '@/stores/toast'
import { getCsrf } from '@/utilities'
import { useDashboardStore } from '@/stores/dashboard'
import { usePartnerRequestStore } from '@/stores/partnerRequest'

const partnerRequestStore = usePartnerRequestStore()
const toastStore = useToastStore()
const dashboardStore = useDashboardStore()

dashboardStore.setCurrentPage("Partnership requests")

let csrf
console.log(csrf)

const selected = ref(null)
const toDelete = ref(null)
const deleting = ref(false)

function openDetails(partner) {
  selected.value = partner
}

function requestDelete(partner) {
  toDelete.value = partner
  selected.value = null
}

async function confirmDelete() {
  if (!toDelete.value) return
  deleting.value = true
  try {
    const { type, title, message } = await partnerRequestStore.delete(toDelete.value.id, csrf)
    toDelete.value = null
    toastStore.show({title, message, type, duration: 5000})
  } catch (error) {
    toastStore.error(`${error.name}: ${error.message}`)
  } finally {
    deleting.value = false
  }
}

onMounted(async () => {
  csrf = await getCsrf()
  await partnerRequestStore.refreshAll()
})
</script>

<template>
  <div class="flex flex-col gap-6 md:gap-8 my-5 mx-5 sm:my-10 sm:mx-10 lg:mx-5">
    <header class="flex flex-col gap-2">
      <h1 class="text-2xl md:text-3xl font-bold text-[var(--slate)]">Partnership Requests</h1>
      <p class="text-gray-500">
        Companies and organizations that submitted a partnership request.
      </p>
    </header>

    <PartnersTable
      :partners="partnerRequestStore.requests"
      @view="openDetails"
      @delete="requestDelete"
    />

    <PartnerDetailsModal
      v-if="selected"
      :partner="selected"
      @close="selected = null"
      @delete="requestDelete"
    />

    <BaseModal
      v-if="toDelete"
      title="Delete partnership request?"
      @close="!deleting && (toDelete = null)"
    >
      <p>
        You are about to permanently delete the request from
        <strong>{{ toDelete.company_name }}</strong>. This action cannot be undone.
      </p>
      <template #footer>
        <BaseButton
          text="Cancel"
          variant="outline"
          color="secondary"
          :disabled="deleting"
          @click="toDelete = null"
        />
        <BaseButton
          text="Delete"
          color="danger"
          :loading="deleting"
          @click="confirmDelete"
        />
      </template>
    </BaseModal>
  </div>
</template>