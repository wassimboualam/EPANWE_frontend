<script setup>
import { onMounted, reactive, ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import Button from '@/components/ui/Button.vue'
import { useToastStore } from '@/stores/toast'
import { getCsrf } from '@/utilities'
import { useUserStore } from '@/stores/user'

const toastStore = useToastStore()
const userStore = useUserStore()
const router = useRouter()

const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  age: '',
  gender: '',
})

const errors = reactive({
  firstName: '',
  lastName: '',
  email: '',
  age: '',
  gender: '',
})

function validate() {
  let valid = true

  Object.keys(errors).forEach((key) => {
    errors[key] = ''
  })

  if (!form.firstName.trim()) {
    errors.firstName = 'First name is required.'
    valid = false
  }

  if (!form.lastName.trim()) {
    errors.lastName = 'Last name is required.'
    valid = false
  }

  if (!form.email.trim()) {
    errors.email = 'Email is required.'
    valid = false
  }

  if (!form.age) {
    errors.age = 'Please select an age.'
    valid = false
  }

  if (!form.gender) {
    errors.gender = 'Please select a gender.'
    valid = false
  }

  return valid
}

let csrf

const disabled = ref(false)

const register = async () => {
  // If form not valid
  if (!validate()) {
    return
  }
  disabled.value = true
  try {
    const { type, message, title } = await userStore.register(form, csrf)
    disabled.value = false
    toastStore.show({
      title,
      message,
      type,
      duration: 5000,
    })
    router.push('/')
  } catch (error) {
    disabled.value = false
    console.error(error)
  }
}

onMounted(async () => {
  csrf = await getCsrf()
})
</script>

<template>
  <form @submit.prevent="register">
    <h2>Create Account</h2>

    <p class="subtitle">Join the EPANWE community.</p>

    <div class="row">
      <div class="field">
        <label>First Name</label>

        <input v-model="form.firstName" type="text" value="John" />
        <small v-if="errors.firstName" class="error">
          {{ errors.firstName }}
        </small>
      </div>

      <div class="field">
        <label>Last Name</label>

        <input v-model="form.lastName" type="text" value="Doe" />
        <small v-if="errors.lastName" class="error">
          {{ errors.lastName }}
        </small>
      </div>
    </div>

    <div class="row">
      <div class="field">
        <label>Age</label>

        <input v-model="form.age" type="number" value="67" />
        <small v-if="errors.age" class="error">
          {{ errors.age }}
        </small>
      </div>

      <div class="field">
        <label>Gender</label>

        <select v-model="form.gender">
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <small v-if="errors.email" class="error">
          {{ errors.email }}
        </small>
      </div>
    </div>

    <div class="field">
      <label>Email</label>

      <input v-model="form.email" type="email" value="john@email.com" />
      <small v-if="errors.email" class="error">
        {{ errors.email }}
      </small>
    </div>

    <input type="hidden" name="_token" />

    <Button text="Create Account" buttonType="submit" :disabled="disabled" />

    <p class="bottom">
      Already have an account?

      <RouterLink to="/login"> Sign In </RouterLink>
    </p>
  </form>
</template>

<style scoped>
h2 {
  font-size: 2rem;
  margin-bottom: 10px;
}

.subtitle {
  color: #666;
  margin-bottom: 35px;
}

.row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
}

label {
  font-weight: 600;
}

input,
select {
  width: 100%;
  padding: 15px;
  border-radius: 14px;
  border: 1px solid #ddd;
  font-size: 1rem;
}

.password {
  position: relative;
}

.password button {
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
}

.checkbox {
  display: flex;
  gap: 12px;
  align-items: flex-start;
  margin: 30px 0;
}

.checkbox input {
  width: auto;
  margin-top: 4px;
}

.bottom {
  margin-top: 30px;
  text-align: center;
}

.error {
  color: #d32f2f;
  font-size: 0.875rem;
  margin-top: 4px;
}

@media (max-width: 650px) {
  .row {
    grid-template-columns: 1fr;
  }
}
</style>
