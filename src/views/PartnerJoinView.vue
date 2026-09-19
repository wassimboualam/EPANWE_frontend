<script setup>
import { onMounted, ref } from 'vue'
import { useToastStore } from '@/stores/toast'
import HeroSection from '@/components/pages/partner_join/HeroSection.vue'
import BenefitsSection from '@/components/pages/partner_join/BenefitsSection.vue'
import FormSection from '@/components/pages/partner_join/FormSection.vue'
import { getCsrf } from '@/utilities'

const toastStore = useToastStore()

const loading = ref(false)
let csrf

async function submitForm(form) {
  loading.value = true;

  try {
    const response = await fetch('http://localhost:8000/partner/request', {
      method: 'POST',
      body: JSON.stringify(form),
      headers: {
        'X-CSRF-TOKEN': csrf,
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });
  
    const data = await response.json();
  
    toastStore.success(data.message, data.title, 5000);
  } catch (error) {
    toastStore.error(error.message, error.title, 5000);
  }


  loading.value = false;

}


onMounted(async () => {
  csrf = await getCsrf()
})
</script>

<template>
  <main class="min-h-screen bg-white">
    <HeroSection /> 

    <section class="px-6 py-16 md:px-10 lg:px-16">
      <div class="mx-auto max-w-5xl">
        <BenefitsSection class="mb-16" /> 

        <div class="  bg-white p-6  md:p-10"> 
          <FormSection 
            :loading="loading"
            @submit-form="submitForm"
          /> 
        </div>
      </div>
    </section>
  </main>
</template>