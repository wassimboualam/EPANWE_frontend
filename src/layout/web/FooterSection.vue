<script setup>
import links from "@/links.js";

const explore = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'About',
    path: '/about',
  },
  {
    name: 'Join Us',
    path: '/howtojoin',
  },
  {
    name: 'Contact',
    path: '/contact',
  },
]

// const programs = [
//     "Arts",
//     "Sports",
//     "Leadership",
//     "Digital Skills"
// ]

const resources = [
  // "Blog",
  // "FAQ",
  // 'Privacy Policy',
  {
    name: 'Terms of Service',
    path: '/terms',
  },
]
</script>

<template>
  <footer class="bg-[var(--slate)] text-white pt-8 md:pt-[90px] pb-4 md:pb-[30px]">
    <div class="container px-4">
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.2fr] gap-4 md:gap-10 lg:gap-[50px] mb-4 md:mb-10 lg:mb-[50px]"
      >
        <!-- Brand -->
        <div>
          <h2 class="text-white mb-2 md:mb-5 text-2xl font-bold">EPANWE</h2>

          <p class="text-gray-300 mb-3 md:mb-[30px] leading-[1.8]">
            Helping every young person flourish through education, sports, culture and personal
            development.
          </p>

          <div class="flex gap-2 md:gap-[15px]">
            <a
              :href="links.founder.facebook"
              target="_blank"
              class="w-[45px] h-[45px] flex justify-center items-center rounded-full bg-white/[0.08] transition duration-300 hover:bg-[var(--gold)] hover:text-white hover:-translate-y-1"
            >
              <i class="fab fa-facebook-f" />
            </a>
            <a
              :href="links.founder.instagram"
              target="_blank"
              class="w-[45px] h-[45px] flex justify-center items-center rounded-full bg-white/[0.08] transition duration-300 hover:bg-[var(--gold)] hover:text-white hover:-translate-y-1"
            >
              <i class="fab fa-instagram" />
            </a>
            <a
              :href="links.founder.linkedin"
              target="_blank"
              class="w-[45px] h-[45px] flex justify-center items-center rounded-full bg-white/[0.08] transition duration-300 hover:bg-[var(--gold)] hover:text-white hover:-translate-y-1"
            >
              <i class="fab fa-linkedin-in" />
            </a>
          </div>
        </div>

        <!-- Explore -->
        <div>
          <h3 class="text-white mb-2 md:mb-[25px] text-[1.1rem] font-semibold">Explore</h3>

          <ul class="list-none p-0 m-0">
            <li
              v-for="item in explore"
              :key="item.path"
              class="mb-1 md:mb-[15px]"
            >
              <a
                :href="item.path"
                class="text-gray-300 transition duration-300 hover:text-[var(--gold)]"
              >
                {{ item.name }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Programs -->
        <!-- <div>
          <h3 class="text-white mb-2 md:mb-[25px] text-[1.1rem] font-semibold">Programs</h3>

          <ul class="list-none p-0 m-0">
            <li v-for="item in programs" :key="item" class="mb-1 md:mb-[15px]">
              <a href="#" class="text-gray-300 transition duration-300 hover:text-[var(--gold)]">
                {{ item }}
              </a>
            </li>
          </ul>
        </div> -->

        <!-- Resources -->
        <div>
          <h3 class="text-white mb-2 md:mb-[25px] text-[1.1rem] font-semibold">Resources</h3>

          <ul class="list-none p-0 m-0">
            <li
              v-for="item in resources"
              :key="item.path"
              class="mb-1 md:mb-[15px]"
            >
              <a
                :href="item.path"
                class="text-gray-300 transition duration-300 hover:text-[var(--gold)]"
              >
                {{ item.name }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h3 class="text-white mb-2 md:mb-[25px] text-[1.1rem] font-semibold">Contact</h3>

          <ul class="list-none p-0 m-0">
            <li class="mb-1 md:mb-[15px] text-gray-300">📞 ++212 669 951 116</li>

            <li class="mb-1 md:mb-[15px] text-gray-300">✉ contact@epanwe.ma</li>

            <li class="mb-1 md:mb-[15px] text-gray-300">📍 Rabat, Morocco</li>
          </ul>
        </div>
      </div>

      <hr class="border-none h-px bg-white/[0.12] mb-3 md:mb-[25px]">

      <div
        class="flex flex-col items-center gap-2 md:gap-5 text-center lg:flex-row lg:justify-between lg:items-center lg:gap-0 lg:text-left"
      >
        <p class="text-gray-400 text-sm md:text-base">
          © {{ new Date().getFullYear() }}
          EPANWE. All rights reserved.
        </p>

        <div class="flex gap-3 md:gap-6">
          <!-- <a href="#"> Privacy </a> -->

          <a
            href="/terms"
            class="text-gray-300 transition duration-300 hover:text-[var(--gold)] text-sm md:text-base"
          >
            Terms of Service
          </a>

          <!-- <a href="#"> Cookies </a> -->
        </div>
      </div>
    </div>
  </footer>
</template>