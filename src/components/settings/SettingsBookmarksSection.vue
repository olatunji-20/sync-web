<template>
  <div>
    <div class="flex items-start justify-between gap-4 mb-6">
      <div>
        <h2 class="text-lg font-bold text-stone-900">Bookmark management</h2>
        <p class="text-sm text-stone-500 mt-0.5">Bookmark management</p>
      </div>
      <div class="flex items-center gap-2 shrink-0">
        <button
          type="button"
          class="px-4 py-2.5 rounded-xl border border-stone-200 bg-white text-stone-700 font-medium hover:bg-stone-100"
          @click="$emit('cancel')"
        >
          Cancel
        </button>
        <button
          type="button"
          class="px-4 py-2.5 rounded-xl bg-[#6B4CF5] text-white font-medium hover:bg-[#6B4CF5]/90"
          @click="$emit('save')"
        >
          Save
        </button>
      </div>
    </div>

    <!-- Auto merge duplicate -->
    <div class="flex items-center justify-between gap-4 py-4 px-4 rounded-xl border border-stone-200 bg-white max-w-2xl">
      <div>
        <h3 class="text-sm font-medium text-stone-900">Auto merge duplicate</h3>
        <p class="text-sm text-stone-500 mt-0.5">Auto merge duplicate</p>
      </div>
      <button
        type="button"
        role="switch"
        :aria-checked="modelValue"
        class="relative inline-flex h-6 w-11 shrink-0 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#6B4CF5]/30 focus:ring-offset-2"
        :class="modelValue ? 'bg-[#6B4CF5]' : 'bg-stone-200'"
        @click="$emit('update:modelValue', !modelValue)"
      >
        <span
          class="pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow ring-0 transition-transform mt-0.5"
          :class="modelValue ? 'translate-x-5 ml-0.5' : 'translate-x-0.5'"
        />
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
