<template>
  <div>
    <div class="flex items-start justify-between gap-4 mb-6">
      <div>
        <h2 class="text-lg font-bold text-stone-900">Account information</h2>
        <p class="text-sm text-stone-500 mt-0.5">
          Manage your personal details, login credentials, and security settings
        </p>
      </div>
      <div class="flex items-center gap-2 shrink-0">
        <button
          type="button"
          class="px-4 py-2.5 rounded-xl border border-stone-200 bg-stone-100 text-stone-700 font-medium hover:bg-stone-200"
          @click="$emit('cancel')"
        >
          Cancel
        </button>
        <button
          type="button"
          class="px-4 py-2.5 rounded-xl bg-[#6B4CF5] text-white font-medium hover:bg-[#6B4CF5]/90"
          @click="onSave"
        >
          Save
        </button>
      </div>
    </div>

    <!-- Profile picture -->
    <div class="mb-8">
      <h3 class="text-sm font-medium text-stone-900">Profile picture</h3>
      <p class="text-sm text-stone-500 mt-0.5">Upload your picture</p>
      <div class="mt-3 relative inline-block">
        <div
          class="w-28 h-28 rounded-full bg-stone-200 border-2 border-stone-300 flex items-center justify-center overflow-hidden"
        >
          <span v-if="!profileImage" class="text-4xl">🖌️</span>
          <img v-else :src="profileImage" alt="Profile" class="w-full h-full object-cover" />
        </div>
        <button
          type="button"
          class="absolute bottom-0 right-0 w-9 h-9 rounded-full bg-[#6B4CF5] flex items-center justify-center text-white shadow hover:bg-[#6B4CF5]/90"
          aria-label="Upload picture"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 13v7a2 2 0 01-2 2H7a2 2 0 01-2-2v-7" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Form fields -->
    <div class="space-y-6 max-w-xl">
      <div>
        <h3 class="text-sm font-medium text-stone-900">Full name</h3>
        <p class="text-sm text-stone-500 mt-0.5">Tell us your name</p>
        <div class="mt-2 flex gap-3">
          <input
            v-model="localForm.firstName"
            type="text"
            placeholder="Enter first name"
            class="flex-1 px-4 py-2.5 rounded-xl border border-stone-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#6B4CF5]/30 focus:border-[#6B4CF5]"
          />
          <input
            v-model="localForm.lastName"
            type="text"
            placeholder="Enter last name"
            class="flex-1 px-4 py-2.5 rounded-xl border border-stone-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#6B4CF5]/30 focus:border-[#6B4CF5]"
          />
        </div>
      </div>

      <div>
        <h3 class="text-sm font-medium text-stone-900">Email address</h3>
        <p class="text-sm text-stone-500 mt-0.5">Tell us your email address</p>
        <input
          v-model="localForm.email"
          type="email"
          placeholder="Enter email address"
          class="mt-2 w-full px-4 py-2.5 rounded-xl border border-stone-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#6B4CF5]/30 focus:border-[#6B4CF5]"
        />
      </div>

      <div>
        <h3 class="text-sm font-medium text-stone-900">Location</h3>
        <p class="text-sm text-stone-500 mt-0.5">Tell us your location</p>
        <input
          v-model="localForm.location"
          type="text"
          placeholder="Enter location"
          class="mt-2 w-full px-4 py-2.5 rounded-xl border border-stone-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#6B4CF5]/30 focus:border-[#6B4CF5]"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  form: {
    type: Object,
    default: () => ({ firstName: '', lastName: '', email: '', location: '' }),
  },
  profileImage: { type: String, default: null },
})

const emit = defineEmits(['cancel', 'save'])

const localForm = ref({ ...props.form })

watch(
  () => props.form,
  (v) => { localForm.value = { ...v } },
  { deep: true }
)

function onSave() {
  emit('save', { ...localForm.value })
}
</script>
