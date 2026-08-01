<script setup>
import { reactive, ref } from 'vue'

import Button from '@/components/ui/Button.vue'
import { useToastStore } from '@/stores/toast'

const toast = useToastStore()

const loading = ref(false)

const form = reactive({
  name: '',

  email: '',

  subject: '',

  message: '',
})

const errors = reactive({
  name: '',

  email: '',

  subject: '',

  message: '',
})

function validate() {
  let valid = true

  Object.keys(errors).forEach((key) => {
    errors[key] = ''
  })

  if (!form.name.trim()) {
    errors.name = 'Please enter your name.'

    valid = false
  }

  if (!form.email.trim()) {
    errors.email = 'Please enter your email.'

    valid = false
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Please enter a valid email.'

    valid = false
  }

  if (!form.subject.trim()) {
    errors.subject = 'Please enter a subject.'

    valid = false
  }

  if (form.message.trim().length < 20) {
    errors.message = 'Your message must contain at least 20 characters.'

    valid = false
  }

  return valid
}

async function send() {
  if (!validate()) return

  loading.value = true

  try {
    /*
        await fetch(...)
        */

    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast.success('Your message has been sent successfully.')

    form.name = ''
    form.email = ''
    form.subject = ''
    form.message = ''
  } catch {
    toast.error('Unable to send your message.')
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <section class="section">
    <div class="container">
      <div class="intro">
        <span> GET IN TOUCH </span>

        <h2>Send us a Message</h2>

        <p>Complete the form below and our team will reply as soon as possible.</p>
      </div>

      <form class="card" @submit.prevent="send">
        <div class="grid">
          <div class="field">
            <label> Full Name </label>

            <input v-model="form.name" :class="{ invalid: errors.name }" />

            <small v-if="errors.name">
              {{ errors.name }}
            </small>
          </div>

          <div class="field">
            <label> Email Address </label>

            <input v-model="form.email" type="email" :class="{ invalid: errors.email }" />

            <small v-if="errors.email">
              {{ errors.email }}
            </small>
          </div>

          <div class="field full">
            <label> Subject </label>

            <input v-model="form.subject" :class="{ invalid: errors.subject }" />

            <small v-if="errors.subject">
              {{ errors.subject }}
            </small>
          </div>

          <div class="field full">
            <label> Message </label>

            <textarea
              rows="8"
              v-model="form.message"
              :class="{ invalid: errors.message }"
            ></textarea>

            <small v-if="errors.message">
              {{ errors.message }}
            </small>
          </div>
        </div>

        <div class="actions">
          <Button text="Send Message" :loading="loading" buttonType="submit" />
        </div>
      </form>
    </div>
  </section>
</template>

<style scoped>
.section {
  padding: 80px 0;
}

.container {
  width: min(1100px, 90%);

  margin: auto;

  display: grid;

  grid-template-columns: 350px 1fr;

  gap: 50px;

  align-items: start;
}

.intro span {
  color: var(--gold);

  font-weight: 600;

  letter-spacing: 2px;

  font-size: 0.9rem;
}

.intro h2 {
  margin: 20px 0;

  font-size: 2.4rem;
}

.intro p {
  line-height: 1.8;

  color: #666;
}

.card {
  background: white;

  padding: 40px;

  border-radius: 24px;

  box-shadow: var(--shadow);
}

.grid {
  display: grid;

  grid-template-columns: repeat(2, 1fr);

  gap: 22px;
}

.full {
  grid-column: 1/-1;
}

.field {
  display: flex;

  flex-direction: column;

  gap: 8px;
}

label {
  font-weight: 600;
}

input,
textarea {
  padding: 15px;

  border: 1px solid #ddd;

  border-radius: 14px;

  font-family: inherit;

  font-size: 1rem;

  transition: 0.25s;

  resize: vertical;
}

input:focus,
textarea:focus {
  outline: none;

  border-color: var(--gold);
}

.invalid {
  border-color: #dc2626;
}

small {
  color: #dc2626;
}

.actions {
  margin-top: 30px;

  display: flex;

  justify-content: flex-end;
}

@media (max-width: 900px) {
  .container {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 700px) {
  .grid {
    grid-template-columns: 1fr;
  }

  .full {
    grid-column: auto;
  }

  .card {
    padding: 30px;
  }
}
</style>
