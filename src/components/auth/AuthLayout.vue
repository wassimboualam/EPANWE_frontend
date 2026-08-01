<script setup>
defineProps({
  title: String,
  subtitle: String,
  image: {
    type: String,
    default: '/images/auth.jpg',
  },
})
</script>

<template>
  <section class="auth">
    <div class="left">
      <div class="overlay">
        <a
          href="/"
          style="color: var(--slate)"
          class="mb-4 hover:bg-slate-500 w-fit px-4 py-2 rounded-full active:bg-slate-600"
        >
          <span> <- Go back to home page</span>
        </a>
        <span class="badge"> EPANWE </span>

        <h1>
          {{ title }}
        </h1>

        <p>
          {{ subtitle }}
        </p>
      </div>

      <img :src="image" alt="" />
    </div>

    <div class="right">
      <div class="form-container">
        <slot />
      </div>
    </div>
  </section>
</template>

<style scoped>
.auth {
  display: grid;

  grid-template-columns: 1fr 520px;

  min-height: 100vh;

  padding-top: 0%;
  padding-bottom: 0%;

  background: #fff;
}

.left {
  position: relative;

  overflow: hidden;
}

.left img {
  width: 100%;

  height: 100%;

  object-fit: cover;
}

.overlay {
  position: absolute;

  inset: 0;

  background: rgba(0, 0, 0, 0.45);

  display: flex;

  flex-direction: column;

  justify-content: center;

  padding: 80px;

  color: white;

  z-index: 2;
}

.badge {
  display: inline-block;

  width: fit-content;

  padding: 8px 18px;

  border-radius: 999px;

  background: rgba(255, 255, 255, 0.15);

  backdrop-filter: blur(10px);

  margin-bottom: 30px;
}

.overlay h1 {
  font-size: 3rem;

  margin-bottom: 20px;
}

.overlay p {
  font-size: 1.1rem;

  line-height: 1.8;

  max-width: 420px;
}

.right {
  display: flex;

  justify-content: center;

  align-items: center;

  padding: 60px;
}

.form-container {
  width: 100%;

  max-width: 420px;
}

@media (max-width: 950px) {
  .auth {
    grid-template-columns: 1fr;
  }

  .left {
    display: none;
  }

  .right {
    padding: 40px 20px;
  }
}
</style>
