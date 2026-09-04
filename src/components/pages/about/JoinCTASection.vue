<script setup>
import Button from '../../ui/Button.vue'
</script>

<template>
  <section>
    <div class="container">
      <div class="join-box">
        <p>JOIN OUR MISSION</p>

        <h2>Become Part of the Story</h2>

        <p class="text">
          Whether you're a parent, educator, institution or volunteer, your support helps create
          opportunities for young people to flourish.
        </p>

        <div class="buttons">
          <a href="/howtojoin">
            <Button text="Join Us" />
          </a>

          <a href="/contact">
            <Button text="Contact Us" color="secondary" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.join-box {
  background: linear-gradient(135deg, #d4af37, #e2c45b);

  padding: 80px;

  border-radius: 32px;

  text-align: center;

  color: white;
}

.join-box p:first-child {
  font-weight: 700;

  letter-spacing: 2px;

  margin-bottom: 15px;
}

.join-box h2 {
  color: white;

  margin-bottom: 20px;
}

.text {
  max-width: 700px;

  margin: auto;

  margin-bottom: 35px;
}

.buttons {
  display: flex;

  justify-content: center;

  gap: 20px;
}

@media (max-width: 700px) {
  .buttons {
    flex-direction: column;
  }
}
</style>
