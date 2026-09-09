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
    type: String,
    default: '',
  },

  placeholder: {
    type: String,
    default: 'Select an option',
  },

  options: {
    type: Array,
    required: true,
  },

  required: {
    type: Boolean,
    default: false,
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

    <select
      :id="id"
      :value="modelValue"
      :required="required"
      :disabled="disabled"
      class="w-full rounded-xl border border-slate-200
             bg-slate-50 px-4 py-3 text-slate-800 outline-none
             transition focus:border-[#B08A2F]
             focus:ring-2 focus:ring-[#B08A2F]/20
             disabled:cursor-not-allowed disabled:opacity-60"
      @change="emit('update:modelValue', $event.target.value)"
    >
      <option
        value=""
        disabled
      >
        {{ placeholder }}
      </option>

      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
  </div>
</template>