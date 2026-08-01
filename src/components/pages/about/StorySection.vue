<script setup></script>

<template>
  <section class="story">
    <div class="container story-grid">
      <div class="image">
        <img src="/images/hero2.jpg" alt="Our Story" />
      </div>

      <div class="content">
        <p class="eyebrow">OUR STORY</p>

        <h2>Every great journey begins with a purpose.</h2>

        <p>
          EPANWE was created from a simple belief: every child and young person deserves
          opportunities to learn, grow and discover their full potential.
        </p>

        <p>
          Through educational, cultural and personal development initiatives, we help young people
          build confidence, develop skills and become active contributors to their communities.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.story {
  background: white;
}

.story-grid {
  display: grid;

  grid-template-columns: 1fr 1fr;

  gap: 80px;

  align-items: center;
}

.image img {
  width: 100%;

  height: 500px;

  object-fit: cover;

  border-radius: 24px;

  box-shadow: var(--shadow);
}

.eyebrow {
  color: var(--gold);

  font-weight: 700;

  letter-spacing: 2px;

  margin-bottom: 15px;
}

.content p {
  margin-bottom: 20px;
}

@media (max-width: 900px) {
  .story-grid {
    grid-template-columns: 1fr;
  }
}
</style>
