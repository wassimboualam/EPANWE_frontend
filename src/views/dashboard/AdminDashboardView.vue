<script setup>
import WelcomeBanner from '@/components/dashboard/admin/WelcomeBanner.vue'
import StatCard from '@/components/dashboard/admin/StatCard.vue'
import RequestsTable from '@/components/dashboard/admin/RequestsTable.vue'
import { useRequestStore } from '@/stores/request'
import { computed, onMounted } from 'vue'
import { useToastStore } from '@/stores/toast'
import { getCsrf } from '@/utilities'

const requestStore = useRequestStore()
const toastStore = useToastStore()

const stats = computed(() => [
  {
    title: 'Pending',
    value: requestStore.requests.filter((r) => r.status === 'pending').length,
    subtitle: 'Needs Review',
    icon: 'pending_actions',
    color: '#F59E0B',
  },
  {
    title: 'Approved',
    value: requestStore.requests.filter((r) => r.status === 'approved').length,
    subtitle: 'Accepted',
    icon: 'check_circle',
    color: '#16A34A',
  },
  {
    title: 'Rejected',
    value: requestStore.requests.filter((r) => r.status === 'rejected').length,
    subtitle: 'Declined',
    icon: 'cancel',
    color: '#DC2626',
  },
  {
    title: 'Total',
    value: requestStore.requests.length,
    subtitle: 'Applications',
    icon: 'groups',
    color: 'var(--gold)',
  },
])

let csrf

async function setApproval(type, user_id) {
  try {
    await requestStore.setApproval(type, user_id, csrf)
    await requestStore.refreshAllRequests()
  } catch (error) {
    toastStore.error(error.name + ': ' + error.message)
  }
}

onMounted(async () => {
  csrf = await getCsrf()
  await requestStore.refreshAllRequests()
  requestStore.sortRequests()
})
</script>

<template>
  <div class="flex flex-col gap-6 md:gap-8 my-5 mx-10 sm:my-10 sm:mx-20">
    <WelcomeBanner />

    <section class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 md:gap-6">
      <StatCard
        v-for="card in stats"
        :key="card.title"
        v-bind="card"
      />
    </section>

    <!-- <FilterBar @change="handleFilters" /> -->

    <RequestsTable
      :requests="requestStore.requests"
      @set-approval="setApproval"
    />
  </div>
</template>