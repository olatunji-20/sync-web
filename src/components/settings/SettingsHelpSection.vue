<template>
  <div>
    <div class="mb-6">
      <h2 class="text-lg font-bold text-stone-900">Help And Support</h2>
      <p class="text-sm text-stone-500 mt-0.5">Bookmark management</p>
    </div>

    <div class="space-y-4 max-w-2xl">
      <div class="flex items-center justify-between gap-4 py-4 px-4 rounded-xl border border-stone-200 bg-white">
        <div class="min-w-0">
          <p class="text-sm font-medium text-stone-900">Email</p>
          <p class="text-sm text-stone-600 mt-0.5 truncate">{{ email }}</p>
        </div>
        <button type="button" class="shrink-0 px-4 py-2.5 rounded-xl bg-[#6B4CF5] text-white text-sm font-medium hover:bg-[#6B4CF5]/90" @click="$emit('copy-email')">Copy address</button>
      </div>
      <div class="flex items-center justify-between gap-4 py-4 px-4 rounded-xl border border-stone-200 bg-white">
        <div class="min-w-0">
          <p class="text-sm font-medium text-stone-900">Phone</p>
          <p class="text-sm text-stone-600 mt-0.5">{{ phone }}</p>
        </div>
        <a :href="'tel:' + phoneE164" class="shrink-0 px-4 py-2.5 rounded-xl bg-[#6B4CF5] text-white text-sm font-medium hover:bg-[#6B4CF5]/90 inline-block">Call</a>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  email: { type: String, default: '' },
  phone: { type: String, default: '' },
  phoneE164: { type: String, default: '' },
})

defineEmits(['copy-email'])
</script>
