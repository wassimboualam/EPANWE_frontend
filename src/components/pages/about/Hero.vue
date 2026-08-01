<script setup></script>

<template>
  <section class="hero">
    <div class="container hero-grid">
      <div>
        <span class="badge"> ABOUT US </span>

        <h1>
          Growing Together.
          <span>Building Tomorrow.</span>
        </h1>

        <p>
          EPANWE empowers children and young adults through education, sports, creativity and
          personal development.
        </p>
      </div>

      <div>
        <img src="/images/vision.jpg" alt="About EPANWE" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding: 100px 0;
}

.hero-grid {
  display: grid;

  grid-template-columns: 1fr 1fr;

  gap: 80px;

  align-items: center;
}

.badge {
  background: var(--gold-soft);

  padding: 10px 18px;

  border-radius: 100px;

  color: var(--gold);

  font-weight: 600;

  display: inline-block;

  margin-bottom: 25px;
}

span {
  color: var(--gold);
}

img {
  border-radius: 28px;

  box-shadow: var(--shadow);
}
</style>
