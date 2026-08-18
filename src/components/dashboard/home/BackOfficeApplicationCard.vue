<script setup>
import Modal from '@/components/ui/Modal.vue'
import { onMounted, ref } from 'vue'
import Button from '../../ui/Button.vue'
import { useUserStore } from '@/stores/user.js'
import { useToastStore } from '@/stores/toast.js'
import { useRequestStore } from '@/stores/request.js'
import { capitalise, getCsrf } from '@/utilities.js'
import { useDashboardStore } from '@/stores/dashboard.js'
import { useRouter } from 'vue-router'

defineProps({
  hasApplied: {
    type: Boolean,
    default: false,
  },
})

const showModal = ref(false)
const disabled = ref(false)

let csrf = ''

const toastStore = useToastStore()
const userStore = useUserStore()
const requestStore = useRequestStore()
const dashboardStore = useDashboardStore()
const router = useRouter()

const confirmRequest = async () => {
  disabled.value = true

  try {
    const { message, type } = await requestStore.makeRequest({
      userId: userStore.userInfo.id,
      csrf,
    })

    if (type != 'success') {
      toastStore.show({
        title: capitalise(type),
        message,
        type,
      })
    } else {
      await requestStore.getRequest(userStore.userInfo.id)
      toastStore.success(message)
      showModal.value = false
      dashboardStore.hasApplied = true
    }
  } catch (error) {
    toastStore.error(error.message)
  }

  disabled.value = false
}

onMounted(async () => {
  csrf = await getCsrf()
})
</script>

<template>
  <section class="card flex justify-between items-center">
    <div>
      <h2>Back-Office Access</h2>

      <p>
        Request access to the EPANWE Back-Office Platform to benefit from our full extended support
        and have access to all the services we provide.
      </p>
    </div>

    <Button text="Request Access" @click="showModal = true" :disabled="hasApplied" />

    <!-- <Button v-else text="View Request" styleType="secondary" /> -->

    <Modal v-if="showModal" title="Make joining request" @close="showModal = false">
      <p>Are you sure you want to make that request?</p>
      <div class="modal-lower">
      </div>
      <template #footer>
        <Button text="Confirm" color="primary" :disabled="disabled" @click="confirmRequest" />
      </template>
    </Modal>
  </section>
</template>

<style scoped>
.card {
  display: flex;

  justify-content: space-between;

  align-items: center;

  padding: 30px 35px;

  background: white;

  border-radius: 20px;

  box-shadow: var(--shadow);
}

h2 {
  margin-bottom: 10px;
}

p {
  max-width: 500px;

  color: #666;

  line-height: 1.6;
}

.modal-lower {
  width: 100%;
  display: flex;
  justify-content: end;
  margin-top: 2rem;
}

@media (max-width: 700px) {
  .card {
    flex-direction: column;

    align-items: flex-start;

    gap: 25px;
  }
}
</style>
