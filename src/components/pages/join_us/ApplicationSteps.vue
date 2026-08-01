<script setup>
const steps = [
  {
    number: '01',
    title: 'Sign up to the service',
    text: "Sign up and make an account on this website. You'll receive a e-mail indicating your password",
  },

  {
    number: '02',
    title: 'Login here and access the dashboard',
    text: 'After acquiring the password from the e-mail, you must login here to get to the dashboard.',
  },

  {
    number: '03',
    title: 'Make a joining request',
    text: 'From there, after seeing the dashboard, make a request to join our back-office.',
  },

  {
    number: '04',
    title: "We'll Contact you",
    text: 'Our team will review your request and get in touch as soon as possible.',
  },
]
</script>

<template>
  <section class="steps">
    <div class="container">
      <div class="heading">
        <p>APPLICATION PROCESS</p>

        <h2>Joining is Simple</h2>
      </div>

      <div class="timeline">
        <div class="step" v-for="step in steps" :key="step.number">
          <div class="number">
            {{ step.number }}
          </div>

          <h3>
            {{ step.title }}
          </h3>

          <p>
            {{ step.text }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.steps {
  background: white;
  border-radius: 2%;
  box-shadow: 0px 2px 5px rgb(216, 216, 216);
  margin-bottom: 10px;
}

.heading {
  text-align: center;

  margin-bottom: 70px;
}

.heading p {
  color: var(--gold);

  font-weight: 700;

  letter-spacing: 2px;
}

.timeline {
  display: grid;

  grid-template-columns: repeat(4, 1fr);

  gap: 30px;
}

.step {
  padding: 35px;

  text-align: center;
}

.number {
  width: 70px;

  height: 70px;

  border-radius: 50%;

  background: var(--gold);

  color: white;

  display: flex;

  justify-content: center;

  align-items: center;

  font-size: 1.3rem;

  font-weight: 700;

  margin: 0 auto 25px;
}

.step h3 {
  margin-bottom: 15px;
}

@media (max-width: 900px) {
  .timeline {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .timeline {
    grid-template-columns: 1fr;
  }
}
</style>
