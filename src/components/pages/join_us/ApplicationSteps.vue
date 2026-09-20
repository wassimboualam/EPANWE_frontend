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
  <section
    id="steps"
    class="steps bg-white py-16 md:py-24"
  >
    <div class="container">
      <div class="text-center mb-12 md:mb-[70px]">
        <p class="text-[var(--gold)] font-bold tracking-[2px] mb-3 text-sm md:text-base">
          APPLICATION PROCESS
        </p>

        <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--slate)]">
          Joining is Simple
        </h2>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-[30px]">
        <div
          v-for="step in steps"
          :key="step.number"
          class="step p-8 md:p-9 text-center"
        >
          <div
            class="w-[70px] h-[70px] rounded-full bg-[var(--gold)] text-white flex justify-center items-center text-[1.3rem] font-bold mx-auto mb-6"
          >
            {{ step.number }}
          </div>

          <h3 class="text-lg md:text-xl font-semibold text-[var(--slate)] mb-4">
            {{ step.title }}
          </h3>

          <p class="text-gray-600 leading-relaxed">
            {{ step.text }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>