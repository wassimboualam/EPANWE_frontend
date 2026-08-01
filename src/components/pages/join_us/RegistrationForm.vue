<script setup>
import { reactive } from 'vue'
import Button from '@/components/ui/Button.vue'

const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  ageGroup: '',
  interest: '',
  message: '',
  accepted: false,
})

const submit = () => {
  console.log(form)
}
</script>

<template>
  <section class="registration">
    <div class="container">
      <div class="heading">
        <p>APPLICATION FORM</p>

        <h2>Tell Us About Yourself</h2>
      </div>

      <form class="card form" @submit.prevent="submit">
        <div class="row">
          <div class="field">
            <label>First Name</label>

            <input v-model="form.firstName" type="text" placeholder="John" />
          </div>

          <div class="field">
            <label>Last Name</label>

            <input v-model="form.lastName" type="text" placeholder="Doe" />
          </div>
        </div>

        <div class="row">
          <div class="field">
            <label>Email</label>

            <input v-model="form.email" type="email" placeholder="john@email.com" />
          </div>

          <div class="field">
            <label>Phone</label>

            <input v-model="form.phone" type="tel" placeholder="+212 ..." />
          </div>
        </div>

        <div class="row">
          <div class="field">
            <label>Age Group</label>

            <select v-model="form.ageGroup">
              <option value="">Choose...</option>
              <option>8-12</option>
              <option>13-17</option>
              <option>18-25</option>
              <option>26+</option>
            </select>
          </div>

          <div class="field">
            <label>I Want To...</label>

            <select v-model="form.interest">
              <option value="">Choose...</option>
              <option>Join a Program</option>
              <option>Volunteer</option>
              <option>Become a Partner</option>
              <option>Support the Organization</option>
            </select>
          </div>
        </div>

        <div class="field">
          <label>Message</label>

          <textarea
            rows="6"
            v-model="form.message"
            placeholder="Tell us a little about yourself..."
          ></textarea>
        </div>

        <label class="checkbox">
          <input type="checkbox" v-model="form.accepted" />

          <span> I agree to the processing of my information. </span>
        </label>

        <Button text="Submit Application" buttonType="submit" />
      </form>
    </div>
  </section>
</template>

<style scoped>
.registration {
  background: #fff;
}

.heading {
  text-align: center;

  margin-bottom: 60px;
}

.heading p {
  color: var(--gold);

  font-weight: 700;

  letter-spacing: 2px;
}

.form {
  padding: 50px;

  max-width: 900px;

  margin: auto;
}

.row {
  display: grid;

  grid-template-columns: repeat(2, 1fr);

  gap: 25px;

  margin-bottom: 25px;
}

.field {
  display: flex;

  flex-direction: column;

  gap: 10px;
}

label {
  font-weight: 600;
}

input,
select,
textarea {
  padding: 16px;

  border-radius: 14px;

  border: 1px solid #ddd;

  font-size: 1rem;

  font-family: inherit;
}

textarea {
  resize: vertical;
}

.checkbox {
  display: flex;

  gap: 12px;

  align-items: center;

  margin: 30px 0;

  font-weight: 400;
}

@media (max-width: 700px) {
  .row {
    grid-template-columns: 1fr;
  }

  .form {
    padding: 30px;
  }
}
</style>
