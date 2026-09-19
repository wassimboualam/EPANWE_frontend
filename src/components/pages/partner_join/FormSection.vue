<script setup>
import { reactive } from 'vue'

import BaseButton from '@/components/ui/BaseButton.vue'
import BaseInput from '@/components/ui/BaseInput.vue'
import BaseSelect from '@/components/ui/BaseSelect.vue'
import BaseTextarea from '@/components/ui/BaseTextarea.vue'


defineProps({
  loading: {
    type: Boolean,
    default: false
  }
})


const emit = defineEmits(['submitForm'])

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
      @submit.prevent="emit('submitForm', form)"
    >
      <slot
        v-for="field in fields"
        :v-key="field"
      >
        <BaseInput
          v-if="field.fieldType === 'input'" 
          :id="field.id" 
          :label="field.label" 
          :model-value="field.modelValue" 
          :type="field.type" 
          :placeholder="field.placeholder != false || field.placeholder === '' ? field.placeholder:field.label" 
          :required="false" 
          :autocomplete="field.autocomplete" 
          :min="field.min" 
          :max="field.max" 
          :disabled="field.disabled"
        />
        <BaseSelect
          v-else-if="field.fieldType === 'select'" 
          :id="field.id"  
          :label="field.label"  
          :model-value="field.modelValue"  
          :placeholder="field.placeholder != false || field.placeholder === '' ? field.placeholder:field.label"  
          :options="field.options"  
          :required="false"  
          :disabled="field.disabled"
        />
        <BaseTextarea
          v-else-if="field.fieldType === 'textarea'" 
          :id="field.id"  
          :label="field.label"  
          :model-value="field.modelValue"  
          :placeholder="field.placeholder != false || field.placeholder === '' ? field.placeholder:field.label"  
          :required="false"  
          :disabled="field.disabled"  
          :rows="field.rows"  
          :maxlength="field.maxlength"
        />
      </slot>

      <!-- Submit -->

      <div class="pt-2">
        <BaseButton
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
        <a
          href="/terms"
          class=" underline hover:font-medium"
        >terms of use</a>.
      </p>
    </form>
  </div>
</template>