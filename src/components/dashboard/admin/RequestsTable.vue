<script setup>
import Button from '@/components/ui/Button.vue'
import { useRequestStore } from '@/stores/request'

const props = defineProps({
  requests: Array,
})

const requestStore = useRequestStore()
const emit = defineEmits(['review'])

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
  <section id="requests" class="table-card w-auto px-10 flex justify-center items-center flex-col">
    <div class="header w-full">
      <h2>Access Requests</h2>

      <!-- <span> {{ requests.length }} Applications </span> -->
    </div>

    <table class="mx-10">
      <thead>
        <tr>
          <th>Name</th>

          <th>Email</th>

          <th>Date</th>

          <th>Status</th>

          <th></th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="request in requests">
          <td>{{ request.user.first_name }} {{ request.user.last_name }}</td>
          <td>
            {{ request.user.email }}
          </td>

          <td>
            {{ requestStore.formatDate(request.created_at) }}
          </td>

          <td>
            <span class="badge" :class="badge(request.status)">
              {{ request.status }}
            </span>
          </td>

          <td class="actions flex gap-2 justify-end">
            <Button
              :text="'Approve'"
              variant="outline"
              color="success"
              size="sm"
              @click="$emit('setApproval', 'approved', request.user_id)"
            />
            <Button
              :text="'Reject'"
              variant="outline"
              color="danger"
              size="sm"
              @click="$emit('setApproval', 'rejected', request.user_id)"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<style scoped>
.table-card {
  background: white;

  border-radius: 20px;

  box-shadow: var(--shadow);

  overflow: hidden;
}

.header {
  padding: 24px 30px;

  display: flex;

  justify-content: space-between;

  align-items: center;

  border-bottom: 1px solid #eee;
}

table {
  width: 80%;

  border-collapse: collapse;
}

th {
  padding: 18px 30px;

  text-align: left;

  background: #fafafa;

  font-weight: 600;
}

td {
  padding: 20px 30px;

  border-top: 1px solid #f1f1f1;
}

tbody tr {
  transition: 0.2s;
}

tbody tr:hover {
  background: #fafafa;
}

.actions {
  text-align: right;
}

.badge {
  display: inline-flex;

  padding: 6px 12px;

  border-radius: 999px;

  font-size: 0.85rem;

  font-weight: 600;

  text-transform: capitalize;
}

.pending {
  background: #fef3c7;

  color: #b45309;
}

.approved {
  background: #dcfce7;

  color: #166534;
}

.rejected {
  background: #fee2e2;

  color: #991b1b;
}

@media (max-width: 900px) {
  table,
  thead,
  tbody,
  th,
  td,
  tr {
    display: block;
  }

  thead {
    display: none;
  }

  tr {
    padding: 20px;

    border-bottom: 1px solid #eee;
  }

  td {
    padding: 8px 0;

    border: none;
  }

  .actions {
    margin-top: 16px;

    text-align: left;
  }
}
</style>
