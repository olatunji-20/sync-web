<template>
  <div>
    <div class="flex items-center justify-between gap-4 mb-6">
      <div>
        <h2 class="text-lg font-medium text-stone-900">Account information</h2>
        <p class="text-sm text-stone-500 mt-0.5">
          Manage your personal details, login credentials, and security settings
        </p>
      </div>
      <div class="flex items-center gap-2 shrink-0">
        <button type="button"
          class="px-6 py-2 rounded-full cursor-pointer border border-stone-200 bg-stone-100 text-stone-700 font-normal hover:bg-stone-200"
          @click="$emit('cancel')">
          Cancel
        </button>
        <button type="button"
          class="px-6 py-2 rounded-full cursor-pointer bg-[#6B4CF5] text-white font-normal hover:bg-[#6B4CF5]/90"
          @click="onSave">
          Save
        </button>
      </div>
    </div>

    <hr class="mt-8 mb-12 text-stone-200" />
    <!-- Profile picture -->
    <div class="my-12 flex items-start justify-between">
      <div class="">
        <h3 class="text-md font-medium text-stone-900">Profile picture</h3>
        <p class="text-sm text-stone-500 mt-0.5">Upload your picture</p>
      </div>
      <div class="relative inline-block">
        <div
          class="w-36 h-36 rounded-full bg-stone-200 border-2 border-stone-300 flex items-center justify-center overflow-hidden">
          <span v-if="!profileImage" class="text-4xl">🖌️</span>
          <img v-else :src="profileImage" alt="Profile" class="w-full h-full object-cover" />
        </div>
        <input ref="fileInputRef" type="file" accept="image/*" class="hidden" aria-hidden="true"
          @change="onFileSelected" />
        <button type="button"
          class="absolute cursor-pointer border-2 bottom-0 right-0 w-9 h-9 rounded-full bg-[#6B4CF5] flex items-center justify-center text-white shadow hover:bg-[#6B4CF5]/90"
          aria-label="Upload picture"
          @click="triggerFileInput">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M13.9737 18.4386H5.4798C3.21044 18.4386 1.76777 17.0851 1.6381 14.8239L1.21664 8.13735C1.15181 7.12425 1.50031 6.15166 2.19733 5.41412C2.88624 4.67658 3.85883 4.25513 4.86383 4.25513C5.12319 4.25513 5.37444 4.10113 5.49601 3.85799L6.07956 2.69899C6.55775 1.75073 7.75726 1.01318 8.80279 1.01318H10.6588C11.7043 1.01318 12.8957 1.75073 13.3739 2.69089L13.9575 3.8742C14.0791 4.10113 14.3222 4.25513 14.5897 4.25513C15.5947 4.25513 16.5672 4.67658 17.2562 5.41412C17.9532 6.15977 18.3017 7.12425 18.2368 8.13735L17.8154 14.832C17.6695 17.1256 16.2674 18.4386 13.9737 18.4386ZM8.80279 2.22891C8.20303 2.22891 7.44118 2.69899 7.16561 3.24202L6.58206 4.40912C6.24166 5.06561 5.58516 5.47086 4.86383 5.47086C4.18302 5.47086 3.55084 5.74642 3.08076 6.24082C2.61878 6.73521 2.38374 7.3836 2.43237 8.05631L2.85383 14.7509C2.95108 16.3881 3.83451 17.2229 5.4798 17.2229H13.9737C15.6109 17.2229 16.4943 16.3881 16.5997 14.7509L17.0211 8.05631C17.0616 7.3836 16.8347 6.73521 16.3727 6.24082C15.9026 5.74642 15.2705 5.47086 14.5897 5.47086C13.8683 5.47086 13.2118 5.06561 12.8714 4.42533L12.2798 3.24202C12.0123 2.7071 11.2505 2.23702 10.6507 2.23702H8.80279V2.22891Z"
              fill="white" />
            <path
              d="M10.9417 7.09171H8.51021C8.17791 7.09171 7.90234 6.81614 7.90234 6.48384C7.90234 6.15154 8.17791 5.87598 8.51021 5.87598H10.9417C11.274 5.87598 11.5495 6.15154 11.5495 6.48384C11.5495 6.81614 11.274 7.09171 10.9417 7.09171Z"
              fill="white" />
            <path
              d="M9.72632 15.1968C7.93514 15.1968 6.48438 13.746 6.48438 11.9548C6.48438 10.1637 7.93514 8.71289 9.72632 8.71289C11.5175 8.71289 12.9683 10.1637 12.9683 11.9548C12.9683 13.746 11.5175 15.1968 9.72632 15.1968ZM9.72632 9.92862C8.60785 9.92862 7.7001 10.8364 7.7001 11.9548C7.7001 13.0733 8.60785 13.981 9.72632 13.981C10.8448 13.981 11.7525 13.0733 11.7525 11.9548C11.7525 10.8364 10.8448 9.92862 9.72632 9.92862Z"
              fill="white" />
          </svg>
        </button>
      </div>
    </div>

    <hr class="mt-8 mb-12 text-stone-200" />

    <!-- Form fields -->
    <div class="space-y-6">
      <div class="flex items-center justify-between">
        <div class="">
          <h3 class="text-md font-medium text-stone-900">Full name</h3>
          <p class="text-sm text-stone-500 mt-0.5">Tell us your name</p>
        </div>
        <div class="flex gap-3 w-4/6">
          <div class="flex-1 flex flex-col gap-1">
            <label for="account-first-name" class="text-sm font-medium text-stone-700">Enter first name</label>
            <input id="account-first-name" v-model="localForm.firstName" type="text" placeholder="Enter first name"
              class="px-4 py-2 rounded-full border border-stone-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#6B4CF5]/30 focus:border-[#6B4CF5]" />
          </div>
          <div class="flex-1 flex flex-col gap-1">
            <label for="account-last-name" class="text-sm font-medium text-stone-700">Enter last name</label>
            <input id="account-last-name" v-model="localForm.lastName" type="text" placeholder="Enter last name"
              class="px-4 py-2 rounded-full border border-stone-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#6B4CF5]/30 focus:border-[#6B4CF5]" />
          </div>
        </div>
      </div>

      <hr class="my-12 text-stone-200" />

      <div class="flex items-center justify-between">
        <div class="">
          <h3 class="text-md font-medium text-stone-900">Email address</h3>
          <p class="text-sm text-stone-500 mt-0.5">Tell us your email address</p>
        </div>
        <div class="w-4/6 flex flex-col gap-1">
          <label for="account-email" class="text-sm font-medium text-stone-700">Enter email address</label>
          <input id="account-email" v-model="localForm.email" type="email" placeholder="Enter email address"
            class="px-4 py-2.5 rounded-full border border-stone-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#6B4CF5]/30 focus:border-[#6B4CF5]" />
        </div>
      </div>

      <hr class="my-12 text-stone-200" />

      <div class="flex items-center justify-between mb-40">
        <div>
          <h3 class="text-md font-medium text-stone-900">Location</h3>
          <p class="text-sm text-stone-500 mt-0.5">Tell us your location</p>
        </div>
        <div class="w-4/6 flex flex-col gap-1">
          <label for="account-location" class="text-sm font-medium text-stone-700">Enter location</label>
          <input id="account-location" v-model="localForm.location" type="text" placeholder="Enter location"
            class="px-4 py-2.5 rounded-full border border-stone-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#6B4CF5]/30 focus:border-[#6B4CF5]" />
        </div>
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

const emit = defineEmits(['cancel', 'save', 'update:profileImage'])

const localForm = ref({ ...props.form })
const fileInputRef = ref(null)

function triggerFileInput() {
  fileInputRef.value?.click()
}

function onFileSelected(event) {
  const file = event.target.files?.[0]
  if (!file || !file.type.startsWith('image/')) return
  const reader = new FileReader()
  reader.onload = () => {
    emit('update:profileImage', reader.result)
  }
  reader.readAsDataURL(file)
  event.target.value = ''
}

watch(
  () => props.form,
  (v) => { localForm.value = { ...v } },
  { deep: true }
)

function onSave() {
  emit('save', { ...localForm.value })
}
</script>
