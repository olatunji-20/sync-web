<template>
  <div>
    <div class="flex items-start justify-between gap-4 mb-6">
      <div>
        <h2 class="text-lg font-medium text-stone-900">Notifications</h2>
        <p class="text-sm text-stone-500 mt-0.5">Bookmark management</p>
      </div>
      <div class="flex items-center gap-2 shrink-0">
        <button type="button"
          class="px-6 py-2 rounded-full border border-stone-200 bg-stone-100 text-stone-700 cursor-pointer hover:bg-stone-200"
          @click="$emit('cancel')">Cancel</button>
        <button type="button"
          class="px-6 py-2 rounded-full bg-[#6B4CF5] text-white cursor-pointer hover:bg-[#6B4CF5]/90"
          @click="$emit('save')">Save</button>
      </div>
    </div>


    <hr class="my-10 text-stone-200" />

    <div class="space-y-3">
      <div class="flex items-center justify-between gap-4">
        <div>
          <h3 class="text-md font-medium text-stone-900">Notify on new member</h3>
          <p class="text-sm text-stone-500 mt-0.5">Auto merge duplicate</p>
        </div>
        <button type="button" role="switch" :aria-checked="notifyOnNewMember"
          class="relative inline-flex h-6 w-11 shrink-0 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#6B4CF5]/30 focus:ring-offset-2"
          :class="notifyOnNewMember ? 'bg-[#6B4CF5]' : 'bg-stone-200'"
          @click="$emit('update:notifyOnNewMember', !notifyOnNewMember)">
          <span
            class="pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow ring-0 transition-transform mt-0.5"
            :class="notifyOnNewMember ? 'translate-x-5 ml-0.5' : 'translate-x-0.5'" />
        </button>
      </div>

      <hr class="my-10 text-stone-200" />

      <div class="flex items-center justify-between gap-4">
        <div>
          <h3 class="text-md font-medium text-stone-900">Notify on new bookmark</h3>
          <p class="text-sm text-stone-500 mt-0.5">Auto merge duplicate</p>
        </div>
        <button type="button" role="switch" :aria-checked="notifyOnNewBookmark"
          class="relative inline-flex h-6 w-11 shrink-0 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#6B4CF5]/30 focus:ring-offset-2"
          :class="notifyOnNewBookmark ? 'bg-[#6B4CF5]' : 'bg-stone-200'"
          @click="$emit('update:notifyOnNewBookmark', !notifyOnNewBookmark)">
          <span
            class="pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow ring-0 transition-transform mt-0.5"
            :class="notifyOnNewBookmark ? 'translate-x-5 ml-0.5' : 'translate-x-0.5'" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  notifyOnNewMember: { type: Boolean, default: true },
  notifyOnNewBookmark: { type: Boolean, default: false },
})

defineEmits(['cancel', 'save', 'update:notifyOnNewMember', 'update:notifyOnNewBookmark'])
</script>
