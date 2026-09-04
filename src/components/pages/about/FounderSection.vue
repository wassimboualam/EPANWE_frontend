<script setup>
import links from '@/links';

</script>

<template>
  <section>
    <div class="container founder">
      <div>
        <img src="/images/fondateur_2.jpg" alt="Founder" />
      </div>

      <div>
        <p class="eyebrow">FOUNDER</p>

        <h2>Younes El Jaouhari</h2>

        <p class="role">Founder & Director</p>

        <blockquote>
          "Every young person deserves the opportunity to discover what they are capable of."
        </blockquote>

        <p>
          EPANWE was founded with the belief that every child and young adult deserves the
          opportunity to discover their strengths, build confidence, and grow into their full
          potential. What began as a simple vision has grown into a mission dedicated to empowering
          individuals through meaningful experiences, practical learning, and a supportive
          community.<br />
          Guided by the values of inclusion, creativity, and lifelong development, our founder
          envisioned an organization where education goes beyond the classroom and every participant
          is encouraged to explore, collaborate, and lead. Today, that vision continues to shape
          every program, partnership, and initiative we undertake.
        </p>

        <div class="socials">
          <a :href="links.founder.facebook" target="_blank">Facebook</a>
          <a :href="links.founder.instagram" target="_blank">Instagram</a>
          <a :href="links.founder.linkedin" target="_blank">LinkedIn</a>

        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.founder {
  display: grid;

  grid-template-columns: 450px 1fr;

  gap: 80px;

  align-items: center;
}

img {
  width: 100%;

  border-radius: 24px;

  box-shadow: var(--shadow);
}

.eyebrow {
  color: var(--gold);

  font-weight: 700;

  letter-spacing: 2px;

  margin-bottom: 15px;
}

.role {
  font-weight: 600;

  margin-bottom: 25px;
}

blockquote {
  font-size: 1.4rem;

  font-style: italic;

  margin-bottom: 30px;

  padding-left: 20px;

  border-left: 4px solid var(--gold);
}

.socials {
  display: flex;

  gap: 20px;

  margin-top: 25px;
}

.socials a {
  color: var(--gold);

  font-weight: 600;
}

@media (max-width: 900px) {
  .founder {
    grid-template-columns: 1fr;
  }
}
</style>
