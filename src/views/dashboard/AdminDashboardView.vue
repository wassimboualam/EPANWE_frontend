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

const stats = computed( () => [
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
]);

let csrf

function handleFilters(filters) {
  console.log(filters)
}

function reviewRequest(request) {
  console.log(request)
}

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
  <div class="dashboard px-4">
    <WelcomeBanner />

    <section class="stats">
      <StatCard v-for="card in stats" :key="card.title" v-bind="card" />
    </section>

    <!-- FilterBar -->
    <!-- <FilterBar @change="handleFilters" /> -->

    <!-- RequestsTable -->
    <RequestsTable
      :requests="requestStore.requests"
      @review="reviewRequest"
      @set-approval="setApproval"
    />
  </div>
</template>

<style scoped>
.dashboard {
  display: flex;

  flex-direction: column;

  gap: 32px;

  padding-inline: 100px;

  margin-bottom: 40px;
}

.stats {
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));

  gap: 24px;
}
</style>
