<script setup>
import { onMounted, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useToastStore } from '@/stores/toast'
import Hero from '@/components/pages/partner_join/Hero.vue'
import Benefits from '@/components/pages/partner_join/Benefits.vue'
import Form from '@/components/pages/partner_join/Form.vue'
import { getCsrf } from '@/utilities'

const router = useRouter()
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

    <Hero /> 

    <section class="px-6 py-16 md:px-10 lg:px-16"> 

      <div class="mx-auto max-w-5xl"> 

        <Benefits class="mb-16" /> 

        <div class="  bg-white p-6  md:p-10" > 
          <Form :loading="loading" @submit-form="submitForm"/> 
        </div> 

      </div> 

    </section> 

  </main>
 
</template>