<script setup>
defineProps({
  id: {
    type: String,
    required: true,
  },

  label: {
    type: String,
    required: true,
  },

  modelValue: {
    type: [String, Number],
    default: '',
  },

  type: {
    type: String,
    default: 'text',
  },

  placeholder: {
    type: String,
    default: '',
  },

  required: {
    type: Boolean,
    default: false,
  },

  autocomplete: {
    type: String,
    default: '',
  },

  min: {
    type: [String, Number],
    default: undefined,
  },

  max: {
    type: [String, Number],
    default: undefined,
  },

  disabled: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <div>
    <label
      :for="id"
      class="mb-2 block text-sm font-medium text-slate-700"
    >
      {{ label }} {{ required? "*":"" }}
    </label>

    <input
      :id="id"
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      :required="(required? true: false)"
      :autocomplete="autocomplete"
      :min="min"
      :max="max"
      :disabled="disabled"
      class="w-full rounded-xl border border-slate-200
             bg-slate-50 px-4 py-3 text-slate-800 outline-none
             transition focus:border-[#B08A2F]
             focus:ring-2 focus:ring-[#B08A2F]/20
             disabled:cursor-not-allowed disabled:opacity-60"
      @input="emit('update:modelValue', $event.target.value)"
    >
  </div>
</template>