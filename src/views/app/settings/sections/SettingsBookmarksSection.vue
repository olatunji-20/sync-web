<template>
  <div>
    <div class="flex items-start justify-between gap-4 mb-6">
      <div>
        <h2 class="text-lg font-medium text-stone-900">Bookmark management</h2>
        <p class="text-sm text-stone-500 mt-0.5">Bookmark management</p>
      </div>
      <div class="flex items-center gap-2 shrink-0">
        <button type="button"
          class="px-6 py-2 rounded-full bg-stone-100 text-stone-700 cursor-pointer hover:bg-stone-100/20"
          @click="$emit('cancel')">
          Cancel
        </button>
        <button type="button"
          class="px-6 py-2 rounded-full bg-[#6B4CF5] text-white cursor-pointer hover:bg-[#6B4CF5]/90"
          @click="$emit('save')">
          Save
        </button>
      </div>
    </div>

    <hr class="my-8 text-stone-200" />

    <!-- Auto merge duplicate -->
    <div class="flex items-center justify-between gap-4">
      <div>
        <h3 class="text-md font-medium text-stone-900">Auto merge duplicate</h3>
        <p class="text-sm text-stone-500 mt-0.5">Auto merge duplicate</p>
      </div>
      <button type="button" role="switch" :aria-checked="modelValue"
        class="relative inline-flex h-6 w-11 shrink-0 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#6B4CF5]/30 focus:ring-offset-2"
        :class="modelValue ? 'bg-[#6B4CF5]' : 'bg-stone-200'" @click="$emit('update:modelValue', !modelValue)">
        <span
          class="pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow ring-0 transition-transform mt-0.5"
          :class="modelValue ? 'translate-x-5 ml-0.5' : 'translate-x-0.5'" />
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  modelValue: { type: Boolean, default: true },
})

defineEmits(['cancel', 'save', 'update:modelValue'])
</script>
