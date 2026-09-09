<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'

import Button from '@/components/ui/Button.vue'
import Input from '@/components/ui/Input.vue'
import Select from '@/components/ui/Select.vue'
import Textarea from '@/components/ui/Textarea.vue'

import { useToastStore } from '@/stores/toast'

const router = useRouter()
const toastStore = useToastStore()

const form = reactive({
  company_name: "",
  ice: "",
  address: "",
  phone_number: "",
  email: "",
  website: "",
  legal_form: "",
  activity_field: "",
  description: "",
  contact_name: "",
  contact_email: "",
  contact_phone_number: "",
  age_range: "",
  number_of_users: 0,
})


const fields = [
    {
        id: "company_name",
        label: "Company name",
        type: "text",
        isRequired: true,
        modelValue: form.company_name,
        fieldType: "input"
    },
    {
        id: "ice",
        label: "ICE",
        type: "text",
        isRequired: true,
        modelValue: form.ice,
        fieldType: "input"
    },
    {
        id: "address",
        label: "Address",
        placeholder: "Apt 441, 5692, Avenue des FAR, Tangier",
        type: "text",
        isRequired: true,
        modelValue: form.address,
        fieldType: "input"
    },
    {
        id: "phone_number",
        label: "Phone number",
        placeholder: "+212 XXXXXXXXX",
        type: "text",
        isRequired: true,
        modelValue: form.phone_number,
        fieldType: "input"
    },
    {
        id: "email",
        label: "E-mail",
        placeholder: "mycompany@mail.com",
        type: "email",
        isRequired: true,
        modelValue: form.email,
        fieldType: "input"
    },
    {
        id: "website",
        label: "Website",
        placeholder: "mycompany.com",
        type: "text",
        isRequired: false,
        modelValue: form.website,
        fieldType: "input"
    },
    {
        id: "legal_form",
        label: "Legal form",
        isRequired: true,
        options: [{"value":"Entreprise privée","label":"Entreprise privée"},{"value":"Association","label":"Association"},{"value":"Coopérative","label":"Coopérative"},{"value":"Personne physique","label":"Personne physique"},{"value":"Institution publique","label":"Institution publique"}],
        modelValue: form.legal_form,
        fieldType: "select"
    },
    {
        id: "activity_field",
        label: "Activity field",
        isRequired: true,
        options: [{"value":"Achats & Approvisionnement","label":"Achats & Approvisionnement"},{"value":"Art & Design","label":"Art & Design"},{"value":"Banque & Assurance","label":"Banque & Assurance"},{"value":"Biologie & Agroalimentaire","label":"Biologie & Agroalimentaire"},{"value":"BTP et Construction","label":"BTP et Construction"},{"value":"Commerce & Vente","label":"Commerce & Vente"},{"value":"Comptabilité, Audit & Finance","label":"Comptabilité, Audit & Finance"},{"value":"Droit & Justice","label":"Droit & Justice"},{"value":"Édition & Journalisme","label":"Édition & Journalisme"},{"value":"Éducation","label":"Éducation"},{"value":"Électrique","label":"Électrique"},{"value":"Énergies renouvelables","label":"Énergies renouvelables"},{"value":"Fonction Publique","label":"Fonction Publique"},{"value":"Gestion & Organisation","label":"Gestion & Organisation"},{"value":"Hôtellerie & Tourisme","label":"Hôtellerie & Tourisme"},{"value":"Informatique & Système d'information","label":"Informatique & Système d'information"},{"value":"Intelligence économique","label":"Intelligence économique"},{"value":"Social","label":"Social"},{"value":"Marketing & Communication","label":"Marketing & Communication"},{"value":"Mécanique","label":"Mécanique"},{"value":"Mode","label":"Mode"},{"value":"Production & Industrialisation","label":"Production & Industrialisation"},{"value":"Qualité & Sécurité","label":"Qualité & Sécurité"},{"value":"Recherche & Développement","label":"Recherche & Développement"},{"value":"Réseau & Télécom","label":"Réseau & Télécom"},{"value":"Ressources Humaines","label":"Ressources Humaines"},{"value":"Sciences de la Santé","label":"Sciences de la Santé"},{"value":"Sport","label":"Sport"}],
        modelValue: form.activity_field,
        fieldType: "select"
    },
    {
        id: "description",
        label: "Description",
        placeholder: "Description",
        rows: 10,
        modelValue: form.description,
        fieldType: "textarea"
    },
    {
        id: "contact_name",
        label: "Contact name",
        placeholder: "First name and last name",
        type: "text",
        isRequired: true,
        modelValue: form.contact_name,
        fieldType: "input"
    },
    // {
    //     id: "fonction_contact",
    //     label: "Fonction contact",
    //     placeholder: "Fonction contact",
    //     type: "text",
    //     isRequired: true,
    //     modelValue: form.fonction_contact,
    //     fieldType: "input"
    // },
    {
        id: "contact_email",
        label: "Contact e-mail",
        placeholder: "mycompany.contact@mail.com",
        type: "email",
        isRequired: true,
        modelValue: form.contact_email,
        fieldType: "input"
    },
    {
        id: "contact_phone_number",
        label: "Phone number",
        placeholder: "+212 XXXXXXXXX",
        type: "text",
        isRequired: true,
        modelValue: form.contact_phone_number,
        fieldType: "input"
    },
    {
        id: "age_range",
        label: "Age range",
        isRequired: false,
        options: [{"value":"8- 12","label":"8- 12"},{"value":"13- 17","label":"13- 17"},{"value":"18- 25","label":"18- 25"},{"value":"26- 100","label":"26- 100"}],
        modelValue: form.age_range,
        fieldType: "select"
    },
    {
        id: "number_of_users",
        label: "For the benefit of (number of users)",
        placeholder: "Number of users",
        type: "number",
        min: 0,
        isRequired: false,
        modelValue: form.number_of_users,
        fieldType: "input"
    }
]

const loading = ref(false)


const submitRequest = async () => {
  loading.value = true
  console.log("form")
  console.log(form)

//   try {
//     const response = await fetch(
//       'http://localhost:8000/partner/register',
//       {
//         method: 'POST',

//         headers: {
//           'Content-Type': 'application/json',
//         },

//         credentials: 'include',

//         body: JSON.stringify(form),
//       }
//     )

//     const data = await response.json()

    toastStore.info("request submitted");

//     if (response.ok && data.type === 'success') {
//       router.push('/login')
//     }
//   } catch (error) {
//     toastStore.show({
//       title: 'Something went wrong',
//       message:
//         'Your request could not be sent. Please try again.',
//       type: 'error',
//     })
//   } finally {
//     loading.value = false
//   }
}
</script>

<template>
  <div
    class="rounded-3xl bg-white p-6 shadow-sm
           ring-1 ring-slate-200 md:p-10"
  >

    <!-- Header -->

    <div class="mb-8">
      <h2 class="text-2xl font-bold text-[#263238]">
        Partnership request
      </h2>

      <p class="mt-2 text-sm leading-6 text-slate-500">
        Tell us about your organization and provide your contact
        information to submit your partnership request.
      </p>
    </div>

    <form
      class="space-y-6"
      @submit.prevent="submitRequest"
    >

      <!-- Organization -->

      <slot v-for="field in fields" :v-key="field">
        <Input v-if="field.fieldType === 'input'" 
          :id="field.id" :label="field.label" :modelValue="field.modelValue" :type="field.type" 
          :placeholder="field.placeholder != false || field.placeholder === '' ? field.placeholder:field.label" :required="field.isRequired" :autocomplete="field.autocomplete" 
          :min="field.min" :max="field.max" :disabled="field.disabled"/>
        <Select v-else-if="field.fieldType === 'select'" :id="field.id"  :label="field.label"  :modelValue="field.modelValue"  
          :placeholder="field.placeholder != false || field.placeholder === '' ? field.placeholder:field.label"  :options="field.options"  
          :required="field.isRequired"  :disabled="field.disabled" />
        <Textarea v-else-if="field.fieldType === 'textarea'" :id="field.id"  :label="field.label"  :modelValue="field.modelValue"  
          :placeholder="field.placeholder != false || field.placeholder === '' ? field.placeholder:field.label"  :required="field.isRequired"  :disabled="field.disabled"  
          :rows="field.rows"  :maxlength="field.maxlength"/>
      </slot>

      <Input
        id="organizationName"
        v-model="form.organizationName"
        label="Organization name"
        type="text"
        placeholder="Your organization's name"
        required
      />

      <!-- Contact -->

      <div>
        <h3 class="mb-4 text-sm font-semibold text-[#263238]">
          Request contact person
        </h3>

        <div class="grid gap-5 sm:grid-cols-2">

          <Input
            id="firstName"
            v-model="form.firstName"
            label="First name"
            type="text"
            placeholder="Your first name"
            autocomplete="given-name"
            required
          />

          <Input
            id="lastName"
            v-model="form.lastName"
            label="Last name"
            type="text"
            placeholder="Your last name"
            autocomplete="family-name"
            required
          />

        </div>
      </div>

      <!-- Contact information -->

      <div class="grid gap-5 sm:grid-cols-2">

        <Input
          id="email"
          v-model="form.email"
          label="Email address"
          type="email"
          placeholder="you@organization.com"
          autocomplete="email"
          required
        />

        <Input
          id="phone"
          v-model="form.phone"
          label="Phone number"
          type="tel"
          placeholder="+212 6 XX XX XX XX"
          autocomplete="tel"
          required
        />

      </div>

      <!-- Organization type -->

      <Select
        id="organizationType"
        v-model="form.organizationType"
        label="Organization type"
        placeholder="Organization type"
        required
        :options="[
          {
            value: 'company',
            label: 'Company',
          },
          {
            value: 'institution',
            label: 'Institution',
          },
          {
            value: 'association',
            label: 'Association',
          },
          {
            value: 'educational',
            label: 'Educational institution',
          },
          {
            value: 'other',
            label: 'Other',
          },
        ]"
      />

      <!-- Submit -->

      <div class="pt-2">
        <Button
          :text="
            loading
              ? 'Sending...'
              : 'Submit my request'
          "
          button-type="submit"
          :disabled="loading"
          style-type="primary"
          class="w-full"
        />
      </div>

      <p class="text-center text-xs leading-5 text-slate-500">
        By submitting this request, you agree to the platform's
        <a href="/terms" class=" underline hover:font-medium">terms of use</a>.
      </p>

    </form>
  </div>
</template>