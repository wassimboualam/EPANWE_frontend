<script setup lang="ts">
import { computed, onMounted } from 'vue'

const props = defineProps({
  request: {
    type: Object,
    required: true,
  },
})

const status = computed(() => {
  switch (props.request.status) {
    case 'approved':
      return {
        label: 'Approved',
        class: 'approved',
      }

    case 'rejected':
      return {
        label: 'Rejected',
        class: 'rejected',
      }

    default:
      return {
        label: 'Pending Review',
        class: 'pending',
      }
  }
})
</script>

<template>
  <section class="card">
    <div class="header">
      <h2>Access Request</h2>

      <span class="badge" :class="status.class">
        {{ status.label }}
      </span>
    </div>

    <div class="details">
      <div>
        <label> Submitted </label>

        <p>
          {{ request.submittedAt /*.split('T')[0]*/ }}
        </p>
      </div>

      <div>
        <label> Updated </label>

        <p>
          {{ request.updatedAt /*.split('T')[0]*/ }}
        </p>
      </div>
    </div>

    <p class="message">
      {{ request.message }}
    </p>
  </section>
</template>

<style scoped>
.card {
  padding: 30px 35px;

  background: white;

  border-radius: 20px;

  box-shadow: var(--shadow);
}

.header {
  display: flex;

  justify-content: space-between;

  align-items: center;

  margin-bottom: 25px;
}

.badge {
  padding: 8px 16px;

  border-radius: 999px;

  font-weight: 600;

  font-size: 0.9rem;
}

.pending {
  background: #fef3c7;

  color: #b45309;
}

.approved {
  background: #dcfce7;

  color: #15803d;
}

.rejected {
  background: #fee2e2;

  color: #b91c1c;
}

.details {
  display: grid;

  grid-template-columns: repeat(2, 1fr);

  gap: 20px;

  margin-bottom: 25px;
}

label {
  font-size: 0.8rem;

  text-transform: uppercase;

  color: #999;

  font-weight: 600;
}

.message {
  color: #555;

  line-height: 1.7;
}

@media (max-width: 700px) {
  .header {
    flex-direction: column;

    align-items: flex-start;

    gap: 15px;
  }

  .details {
    grid-template-columns: 1fr;
  }
}
</style>
