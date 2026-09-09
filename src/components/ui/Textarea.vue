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
    default: '',
  },

  required: {
    type: Boolean,
    default: false,
  },

  disabled: {
    type: Boolean,
    default: false,
  },

  rows: {
    type: [String, Number],
    default: 5,
  },

  maxlength: {
    type: [String, Number],
    default: undefined,
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

    <textarea
      :id="id"
      :value="modelValue"
      :placeholder="placeholder"
      :required="required"
      :disabled="disabled"
      :rows="rows"
      :maxlength="maxlength"
      class="w-full resize-y rounded-xl border border-slate-200
             bg-slate-50 px-4 py-3 text-slate-800 outline-none
             transition placeholder:text-slate-400
             focus:border-[#B08A2F]
             focus:ring-2 focus:ring-[#B08A2F]/20
             disabled:cursor-not-allowed disabled:opacity-60"
      @input="emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>
