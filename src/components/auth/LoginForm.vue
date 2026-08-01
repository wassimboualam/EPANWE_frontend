<script setup>
import { onMounted, reactive, ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import Button from '@/components/ui/Button.vue'
import { useToastStore } from '@/stores/toast'
import { useUserStore } from '@/stores/user'

defineProps({
  disabled: Boolean,
})

const showPassword = ref(false)

const toastStore = useToastStore()
const userStore = useUserStore()
const router = useRouter()

const emit = defineEmits(['submit'])

const form = reactive({
  email: '',
  password: '',
})
</script>

<template>
  <form @submit.prevent="login">
    <h2>Welcome Back</h2>

    <p class="subtitle">Sign in to continue.</p>

    <div class="field">
      <label>Email</label>

      <input v-model="form.email" type="email" placeholder="john@email.com" />
    </div>

    <div class="field">
      <label>Password</label>

      <div class="password">
        <input
          v-model="form.password"
          :type="showPassword ? 'text' : 'password'"
          placeholder="••••••••"
        />

        <button type="button" @click="showPassword = !showPassword">
          <span class="material-symbols-outlined">
            {{ showPassword ? 'visibility_off' : 'visibility' }}
          </span>
        </button>
      </div>
    </div>

    <!-- <div class="actions">
      <label>
        <input type="checkbox" />

        Remember me
      </label>

      <RouterLink to="/forgot-password"> Forgot Password? </RouterLink>
    </div> -->

    <Button text="Login" buttonType="submit" @click="emit('submit', form)" :disabled="disabled" />
    <p class="bottom">
      Don't have an account?

      <RouterLink to="/register"> Create one </RouterLink>
    </p>
  </form>
</template>

<style scoped>
h2 {
  font-size: 2rem;

  margin-bottom: 10px;
}

.subtitle {
  margin-bottom: 40px;

  color: #666;
}

.field {
  display: flex;

  flex-direction: column;

  gap: 10px;

  margin-bottom: 25px;
}

input {
  padding: 15px;

  border: 1px solid #ddd;

  border-radius: 14px;

  font-size: 1rem;

  width: 100%;
}

.password {
  position: relative;
}

.password button {
  position: absolute;

  right: 15px;

  top: 50%;

  transform: translateY(-50%);

  background: none;
}

.actions {
  display: flex;

  justify-content: space-between;

  margin-bottom: 35px;

  font-size: 0.9rem;
}

.bottom {
  margin-top: 30px;

  text-align: center;
}
</style>
