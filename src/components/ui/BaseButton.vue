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

  justifyContent: {
    type: String,
    default: 'center',
  },
})

const SIZE_CLASSES = {
  sm: 'px-[18px] py-2.5 text-[0.9rem]',
  md: 'px-7 py-3.5 text-base',
  lg: 'px-[34px] py-[18px] text-[1.05rem]',
}

const classes = computed(() => [
  'btn',
  props.variant,
  props.color,
  SIZE_CLASSES[props.size] ?? SIZE_CLASSES.md,
  { 'w-full': props.fullWidth },
])
</script>

<template>
  <button
    :type="buttonType"
    :class="classes"
    :style="{ justifyContent }"
    :disabled="disabled || loading"
  >
    <span
      v-if="loading"
      class="material-symbols-outlined text-[18px] animate-spin"
    >
      progress_activity
    </span>
    <span
      v-else-if="icon"
      class="material-symbols-outlined"
    >
      {{ icon }}
    </span>

    <slot>
      {{ loading ? 'Loading...' : text }}
    </slot>
  </button>
</template>

<style scoped>
@reference "tailwindcss";

.btn {
  @apply inline-flex items-center justify-center gap-2
         rounded-[14px] font-semibold cursor-pointer
         border-2 border-transparent font-[inherit]
         transition duration-200;
}

/* ---------------- Color tokens ---------------- */
.primary   { --btn-color: var(--gold);   --btn-dim-color: var(--gold-soft); }
.secondary { --btn-color: var(--slate);  --btn-dim-color: var(--slate-soft); }
.success   { --btn-color: #16a34a;       --btn-dim-color: #ddfeea; }
.danger    { --btn-color: #dc2626;       --btn-dim-color: #fff5f5; }
.warning   { --btn-color: #f59e0b;       --btn-dim-color: #fcefda; }
.info      { --btn-color: #2563eb;       --btn-dim-color: #e0eaff; }
.white     { --btn-color: white;         --btn-dim-color: #f0f0f0; --alt-color: #141414; }

/* ---------------- Filled ---------------- */
.filled {
  background: var(--btn-color);
  border-color: var(--btn-color);
  color: white;
}
.filled.white { color: var(--gold); }
.filled:not(:disabled):hover {
  filter: brightness(1.06);
  transform: translateY(-2px);
}

/* ---------------- Outline ---------------- */
.outline {
  background: transparent;
  border-color: var(--btn-color);
  color: var(--btn-color);
}
.outline:not(:disabled):hover {
  background: var(--btn-color);
  color: white;
}
.outline.white:not(:disabled):hover {
  color: var(--gold);
}

/* ---------------- Dimmed ---------------- */
.dimmed {
  background: var(--btn-dim-color);
  border-color: var(--btn-dim-color);
  color: var(--btn-color);
}
.dimmed:not(:disabled):hover {
  background: var(--btn-color);
  color: white;
}
.dimmed.white { color: var(--alt-color); }
.dimmed.white:not(:disabled):hover {
  background: var(--alt-color);
  color: var(--btn-color);
}

/* ---------------- Ghost ---------------- */
.ghost {
  background: transparent;
  border-color: transparent;
  color: var(--btn-color);
}
.ghost:not(:disabled):hover { background: rgba(0, 0, 0, 0.05); }
.ghost.white:not(:disabled):hover { background: rgba(255, 255, 255, 0.15); }

/* ---------------- Text ---------------- */
.text {
  padding: 0;
  background: none;
  border: none;
  border-radius: 0;
  color: var(--btn-color);
}
.text:not(:disabled):hover { text-decoration: underline; }

/* ---------------- Disabled ---------------- */
.btn:disabled {
  background: #d1d5db !important;
  border-color: #d1d5db !important;
  color: #6b7280 !important;
  cursor: not-allowed;
  opacity: 0.75;
  transform: none;
  filter: none;
}
</style>