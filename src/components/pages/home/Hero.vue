<script setup>
import Button from '../../ui/Button.vue'
</script>

<template>
  <section>
    <div class="container hero">
      <div>
        <p class="badge">Empowering The Next Generation</p>
        <h1>
          Helping Every Young Person Discover Their
          <span>Full Potential</span>
        </h1>
        <p>
          Educational, cultural and sports programs designed to help children and youth flourish.
        </p>

        <div class="buttons">
          <a href="howtojoin">
            <Button text="Join Us" />
          </a>
          <a href="#whyus">
            <Button text="Learn More" color="secondary" variant="outline" />
          </a>
        </div>
      </div>
      <div>
        <img src="/images/hero.jpg" alt="" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.badge {
  display: inline-block;
  padding: 8px 16px;
  background: var(--gold-soft);
  border-radius: 100px;
  margin-bottom: 20px;
  font-weight: 600;
  color: var(--gold);
}

span {
  color: var(--gold);
}

.buttons {
  display: flex;
  gap: 20px;
  margin-top: 40px;
}

img {
  border-radius: 30px;
  box-shadow: var(--shadow);
}
</style>
