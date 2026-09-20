<script setup>
import links from '@/links';
</script>

<template>
  <section class="py-16 md:py-24">
    <div class="container grid grid-cols-1 lg:grid-cols-[450px_1fr] gap-10 md:gap-16 lg:gap-20 items-center">
      <div>
        <img
          src="/images/fondateur_2.jpg"
          alt="Founder"
          class="w-full rounded-3xl shadow-[var(--shadow)]"
        >
      </div>

      <div>
        <p class="text-[var(--gold)] font-bold tracking-[2px] mb-4 text-sm md:text-base">
          FOUNDER
        </p>

        <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--slate)] mb-4">
          Younes El Jaouhari
        </h2>

        <p class="font-semibold text-[var(--slate)] mb-6">
          Founder &amp; Director
        </p>

        <blockquote
          class="text-lg md:text-xl lg:text-[1.4rem] italic mb-8 pl-5 border-l-4 border-[var(--gold)] text-[var(--slate)] leading-relaxed"
        >
          "Every young person deserves the opportunity to discover what they are capable of."
        </blockquote>

        <p class="text-gray-600 leading-relaxed">
          EPANWE was founded with the belief that every child and young adult deserves the
          opportunity to discover their strengths, build confidence, and grow into their full
          potential. What began as a simple vision has grown into a mission dedicated to empowering
          individuals through meaningful experiences, practical learning, and a supportive
          community.<br>
          Guided by the values of inclusion, creativity, and lifelong development, our founder
          envisioned an organization where education goes beyond the classroom and every participant
          is encouraged to explore, collaborate, and lead. Today, that vision continues to shape
          every program, partnership, and initiative we undertake.
        </p>

        <div class="flex flex-wrap gap-5 mt-6">
          <a
            :href="links.founder.facebook"
            target="_blank"
            class="text-[var(--gold)] font-semibold transition-opacity duration-300 hover:opacity-75"
          >Facebook</a>
          <a
            :href="links.founder.instagram"
            target="_blank"
            class="text-[var(--gold)] font-semibold transition-opacity duration-300 hover:opacity-75"
          >Instagram</a>
          <a
            :href="links.founder.linkedin"
            target="_blank"
            class="text-[var(--gold)] font-semibold transition-opacity duration-300 hover:opacity-75"
          >LinkedIn</a>
        </div>
      </div>
    </div>
  </section>
</template>