<script setup>
import BaseModal from '@/components/ui/BaseModal.vue'
import { onMounted, ref } from 'vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import { useUserStore } from '@/stores/user.js'
import { useToastStore } from '@/stores/toast.js'
import { useRequestStore } from '@/stores/request.js'
import { capitalise, getCsrf } from '@/utilities.js'
import { useDashboardStore } from '@/stores/dashboard.js'

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
  <section
    class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-6
           p-6 md:p-8 lg:p-[30px_35px]
           bg-white rounded-3xl shadow-[var(--shadow)]"
  >
    <div>
      <h2 class="text-lg md:text-xl font-bold text-[var(--slate)] mb-3">
        Back-Office Access
      </h2>

      <p class="max-w-[500px] text-gray-500 leading-relaxed">
        Request access to the EPANWE Back-Office Platform to benefit from our full extended support
        and have access to all the services we provide.
      </p>
    </div>

    <BaseButton
      text="Request Access"
      :disabled="hasApplied"
      class="self-start sm:self-auto shrink-0"
      @click="showModal = true"
    />

    <BaseModal
      v-if="showModal"
      title="Make joining request"
      @close="showModal = false"
    >
      <p>Are you sure you want to make that request?</p>
      <div class="w-full flex justify-end mt-8" />
      <template #footer>
        <BaseButton
          text="Confirm"
          color="primary"
          :disabled="disabled"
          @click="confirmRequest"
        />
      </template>
    </BaseModal>
  </section>
</template>