<script setup>
const sections = [
  {
    id: 'introduction',
    number: '01',
    title: 'Introduction',
    content: [
      `EPANWE is a digital platform dedicated to personal development and, in particular, to the development of children and young people. The platform provides access to a range of educational, sporting, extracurricular and socio-cultural development programs.`,
      `These programs are intended for companies, public institutions, educational establishments, young people and individuals or organizations working in the field of capacity development and personal growth.`
    ]
  },
  {
    id: 'duration',
    number: '02',
    title: 'Duration and Acceptance',
    content: [
      `These Terms of Service remain applicable for as long as the user accesses or uses the EPANWE platform and its services.`,
      `By accessing, browsing or using the platform, the User acknowledges having read and accepted these Terms of Service without reservation.`
    ]
  },
  {
    id: 'service',
    number: '03',
    title: 'Description of the Service',
    content: [
      `The EPANWE platform provides users with access to different development programs and services adapted to their age, needs and interests.`
    ],
    list: [
      'Access, consultation and search among published programs and announcements.',
      'Educational, sporting, cultural and personal development programs.',
      'Development of customized programs according to the needs of partners.',
      'Implementation and management of development programs.',
      'Coaching and support services.',
      'Expertise and consulting services.'
    ]
  },
  {
    id: 'use',
    number: '04',
    title: 'Use of the Platform',
    content: [
      `The User agrees to use the platform responsibly and in accordance with applicable laws and these Terms of Service.`,
      `All information, content and materials made available through the platform may be protected by intellectual property rights.`
    ],
    list: [
      'Not infringe upon EPANWE’s intellectual property rights or those of its authorized partners.',
      'Not reproduce or attempt to recreate the platform or its databases for the purpose of providing a similar service.',
      'Not use the EPANWE name, trademarks or protected designations for commercial or advertising purposes without prior authorization.',
      'Not publish defamatory, insulting or degrading content concerning other users, partners or EPANWE.'
    ]
  },
  {
    id: 'user-rights',
    number: '05',
    title: 'User Rights',
    content: [
      `Users have rights regarding their personal data processed through the platform. These rights include access to their personal information and the ability to request its correction or deletion.`
    ],
    list: [
      'The right to access their personal data.',
      'The right to request correction of inaccurate data.',
      'The right to request deletion of their data.',
      'The right to request restriction of processing.',
      'The right to object to certain uses of their data.',
      'The right to define instructions concerning the retention and deletion of their personal data after death, where applicable.'
    ]
  },
  {
    id: 'evolution',
    number: '06',
    title: 'Evolution of the Service',
    content: [
      `EPANWE reserves the right to modify the features, content and characteristics of the platform and its services at any time.`,
      `Any updated version of these Terms of Service will become effective once published on the platform. Users are responsible for reviewing the Terms periodically.`
    ]
  },
  {
    id: 'external',
    number: '07',
    title: 'External Providers and Services',
    content: [
      `EPANWE may provide access to programs, products or services offered by external experts and authorized providers.`,
      `EPANWE acts as a platform connecting users with these providers and does not necessarily provide or directly sell the services offered by external providers.`
    ],
    list: [
      'External providers remain responsible for the services they provide.',
      'EPANWE does not guarantee the availability or content of external programs.',
      'Links to external services may redirect users away from the EPANWE platform.',
      'EPANWE cannot be held responsible for content, products or services provided by external websites or providers.'
    ]
  },
  {
    id: 'responsibility',
    number: '08',
    title: 'Limitation of Responsibility',
    content: [
      `EPANWE's responsibility is limited to matters directly attributable to the platform itself.`,
      `EPANWE cannot be held responsible for damages or losses resulting from the use of external services, websites or providers accessed through the platform.`
    ]
  },
]
</script>

<template>
  <main class="bg-[#f8f8f6] min-h-screen">

    <!-- Hero -->
    <section class="bg-(--slate) text-white">
      <div class="max-w-5xl mx-auto px-6 py-20 md:py-24">

        <p
          class="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-(--gold)"
        >
          EPANWE
        </p>

        <h1 class="mb-6 text-4xl font-bold md:text-5xl text-white">
          Terms of Service
        </h1>

        <p class="max-w-2xl text-base leading-8 text-gray-300 md:text-lg">
          Please read these terms carefully before using the EPANWE platform
          and its services.
        </p>

      </div>
    </section>

    <!-- Content -->
    <section class="px-6 py-12 md:py-16">

      <div class="mx-auto max-w-5xl">

        <!-- Intro card -->
        <div
          class="mb-10 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8"
        >
          <p class="leading-8 text-gray-600">
            These Terms of Service define the conditions under which users may
            access and use the EPANWE platform. By using the platform, you agree
            to comply with these terms.
          </p>
        </div>

        <!-- Sections -->
        <div class="space-y-6">

          <article
            v-for="section in sections"
            :key="section.id"
            :id="section.id"
            class="scroll-mt-24 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8"
          >

            <div class="mb-6 flex items-start gap-4">

              <span
                class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-(--gold) text-sm font-bold text-white"
              >
                {{ section.number }}
              </span>

              <h2 class="text-2xl font-bold text-(--slate)">
                {{ section.title }}
              </h2>

            </div>

            <div class="space-y-4">

              <p
                v-for="paragraph in section.content"
                :key="paragraph"
                class="leading-8 text-gray-600"
              >
                {{ paragraph }}
              </p>

              <ul
                v-if="section.list"
                class="mt-5 space-y-3 pl-1"
              >
                <li
                  v-for="item in section.list"
                  :key="item"
                  class="flex gap-3 leading-7 text-gray-600"
                >
                  <span class="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-(--gold)"></span>
                  <span>{{ item }}</span>
                </li>
              </ul>

            </div>

          </article>

          <!-- Contact -->
          <article
            id="contact"
            class="scroll-mt-24 rounded-2xl bg-(--slate) p-6 text-white md:p-8"
          >

            <div class="mb-6 flex items-start gap-4">

              <span
                class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-(--gold) text-sm font-bold"
              >
                09
              </span>

              <h2 class="text-2xl font-bold text-white">
                Contact
              </h2>

            </div>

            <p class="mb-6 leading-8 text-gray-300">
              For any question regarding these Terms of Service or the use of
              the platform, you can contact EPANWE using the information below.
            </p>

            <div class="space-y-3 text-gray-300">

              <p>
                <span class="font-semibold text-white">Address:</span>
                119, Boulevard Abdelmoumen, Appt 18, Casablanca, Morocco
              </p>

              <p>
                <span class="font-semibold text-white">Email:</span>
                contact@epanwe.ma
              </p>

            </div>

          </article>

        </div>

        <!-- Last update -->
        <p class="mt-8 text-center text-sm text-gray-500">
          These Terms of Service may be updated from time to time.
        </p>

      </div>

    </section>

  </main>
</template>