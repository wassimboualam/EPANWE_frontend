<script setup>
import { computed } from 'vue'

const props = defineProps({
  text: {
    type: String,
    default: '',
  },

  icon: {
    type: String,
    default: '',
  },

  variant: {
    type: String,
    default: 'filled',
  },

  color: {
    type: String,
    default: 'primary',
  },

  size: {
    type: String,
    default: 'md',
  },

  buttonType: {
    type: String,
    default: 'button',
  },

  disabled: {
    type: Boolean,
    default: false,
  },

  loading: {
    type: Boolean,
    default: false,
  },

  fullWidth: {
    type: Boolean,
    default: false,
  },
  class: {
    type: Array,
    default: [],
  },
  justifyContent: {
    type: String,
    default: 'center',
  },
})

const classes = computed(() => [
  props.variant,
  props.color,
  props.size,
  {
    full: props.fullWidth,
    loading: props.loading,
  },
  props.class,
])
</script>

<template>
  <button
    :type="buttonType"
    :class="classes"
    :style="{ justifyContent: justifyContent }"
    :disabled="disabled || loading"
  >
    <span v-if="loading" class="material-symbols-outlined spinner"> progress_activity </span>
    <span v-else class="material-symbols-outlined" :class="icon == '' || !icon ? 'd-none' : ''">
      {{ icon }}
    </span>

    <slot>
      {{ loading ? 'Loading...' : text }}
    </slot>
  </button>
</template>

<style scoped>
button {
  display: inline-flex;

  align-items: center;

  justify-content: center;

  gap: 8px;

  border-radius: 14px;

  font-weight: 600;

  cursor: pointer;

  transition: 0.25s;

  border: 2px solid transparent;

  font-family: inherit;
}

.d-none {
  display: none;
}

/* ---------------- Sizes ---------------- */

.sm {
  padding: 10px 18px;

  font-size: 0.9rem;
}

.md {
  padding: 14px 28px;

  font-size: 1rem;
}

.lg {
  padding: 18px 34px;

  font-size: 1.05rem;
}

.full {
  width: 100%;
}

/* ---------------- Colors ---------------- */

.primary {
  --btn-color: var(--gold);
  --btn-dim-color: var(--gold-soft);
}

.secondary {
  --btn-color: var(--slate);
  --btn-dim-color: var(--slate-soft);
}

.success {
  --btn-color: #16a34a;
  --btn-dim-color: #ddfeea;
}

.danger {
  --btn-color: #dc2626;
  --btn-dim-color: #fff5f5;
}

.warning {
  --btn-color: #f59e0b;
  --btn-dim-color: #fcefda;
}

.info {
  --btn-color: #2563eb;
  --btn-dim-color: #e0eaff;
}

.white {
  --btn-color: white;
  --btn-dim-color: rgb(240, 240, 240);
  --alt-color: rgb(20, 20, 20);
}

/* ---------------- Filled ---------------- */

.filled {
  background: var(--btn-color);

  border-color: var(--btn-color);

  color: var(--white);
}

.filled.white {
  color: var(--gold);
}

.filled:hover {
  filter: brightness(1.06);

  transform: translateY(-2px);
}

/* ---------------- Outline ---------------- */

.outline {
  background: transparent;

  border-color: var(--btn-color);

  color: var(--btn-color);
}

.outline:hover {
  background: var(--btn-color);
}

.outline.primary:hover,
.outline.secondary:hover,
.outline.success:hover,
.outline.danger:hover,
.outline.warning:hover,
.outline.info:hover {
  color: white;
}

.outline.white:hover {
  color: var(--gold);
}

/* --------------- Dimmed ---------------- */

.dimmed {
  background: var(--btn-dim-color);

  border-color: var(--btn-dim-color);

  color: var(--btn-color);
}

.dimmed:hover {
  background: var(--btn-color);
  color: var(--white);
}

.dimmed.white {
  color: var(--alt-color);
}

.dimmed.white:hover {
  background: var(--alt-color);
  color: var(--btn-color);
}

/* ---------------- Ghost ---------------- */

.ghost {
  background: transparent;

  border-color: transparent;

  color: var(--btn-color);
}

.ghost:hover {
  background: rgba(0, 0, 0, 0.05);
}

.ghost.white:hover {
  background: rgba(255, 255, 255, 0.15);
}

/* ---------------- Text ---------------- */

.text {
  padding: 0;

  background: none;

  border: none;

  color: var(--btn-color);

  border-radius: 0;
}

.text:hover {
  text-decoration: underline;
}

/* ---------------- Disabled ---------------- */

button:disabled {
  background: #d1d5db !important;

  border-color: #d1d5db !important;

  color: #6b7280 !important;

  cursor: not-allowed;

  opacity: 0.75;

  transform: none;

  filter: none;
}

button:disabled:hover {
  background: #d1d5db !important;

  transform: none;

  filter: none;
}

/* ---------------- Spinner ---------------- */

.spinner {
  font-size: 18px;

  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>
