<script setup>
const benefits = [
  {
    number: '01',
    title: 'Become a partner',
    description:
      'Tell us about your organization and your project so that we can understand your needs and objectives.',
  },
  {
    number: '02',
    title: 'Wait for confirmation',
    description:
      'Once your request has been approved, you will be contacted directly through email to confirm the approval.',
  },
  {
    number: '03',
    title: 'Take action for your community',
    description:
      'Implement fulfillment pathways adapted to the needs of your community and develop your own initiatives.',
  },
]
</script>

<template>
  <div class="flex flex-col justify-center">

    <h2 class="text-2xl font-bold text-[#263238] md:text-3xl">
      Why become a partner?
    </h2>

    <p class="mt-4 leading-7 text-slate-600">
      EPANWE supports its partners in implementing fulfillment pathways
      designed to develop people's skills and personalities.
    </p>

    <div class="mt-8 space-y-7">

      <div
        v-for="benefit in benefits"
        :key="benefit.number"
        class="flex gap-4"
      >
        <div
          class="flex h-10 w-10 shrink-0 items-center justify-center
                 rounded-full bg-[#B08A2F]/10 font-semibold
                 text-[#B08A2F]"
        >
          {{ benefit.number }}
        </div>

        <div>
          <h3 class="font-semibold text-[#263238]">
            {{ benefit.title }}
          </h3>

          <p class="mt-1 text-sm leading-6 text-slate-500">
            {{ benefit.description }}
          </p>
        </div>
      </div>

    </div>

  </div>
</template>
