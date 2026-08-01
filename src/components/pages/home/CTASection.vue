<script setup>
import Button from '../../ui/Button.vue'
</script>

<template>
  <section class="cta">
    <div class="container">
      <div class="cta-box">
        <div class="content">
          <span class="badge"> JOIN OUR COMMUNITY </span>

          <h2>Ready to Help Shape the Future?</h2>

          <p>
            Whether you're a parent, educator, volunteer, or future participant, EPANWE welcomes
            everyone who believes in helping young people discover their full potential.
          </p>

          <div class="buttons">
            <Button text="Join EPANWE" color="white" />

            <!-- <Button text="Explore Programs" color="secondary" /> -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cta {
  padding: 120px 0;
}

.cta-box {
  position: relative;

  overflow: hidden;

  background: linear-gradient(135deg, #d4af37, #e2c45b);

  border-radius: 32px;

  padding: 90px 80px;

  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.12);
}

.content {
  max-width: 700px;

  position: relative;

  z-index: 2;
}

.badge {
  display: inline-block;

  padding: 8px 18px;

  border-radius: 999px;

  background: rgba(255, 255, 255, 0.18);

  color: white;

  font-weight: 600;

  margin-bottom: 25px;

  letter-spacing: 1px;
}

h2 {
  color: white;

  font-size: 3rem;

  margin-bottom: 25px;
}

p {
  color: white;

  font-size: 1.1rem;

  line-height: 1.8;

  margin-bottom: 40px;

  opacity: 0.95;
}

.buttons {
  display: flex;

  gap: 20px;
}

/* decorative circles */

.cta-box::before {
  content: '';

  position: absolute;

  width: 320px;

  height: 320px;

  border-radius: 50%;

  background: rgba(255, 255, 255, 0.08);

  right: -100px;

  top: -120px;
}

.cta-box::after {
  content: '';

  position: absolute;

  width: 180px;

  height: 180px;

  border-radius: 50%;

  background: rgba(255, 255, 255, 0.12);

  bottom: -70px;

  right: 180px;
}

@media (max-width: 900px) {
  .cta-box {
    padding: 60px 40px;
  }

  .buttons {
    flex-direction: column;
  }

  h2 {
    font-size: 2.2rem;
  }
}
</style>
