<template>
  <div>
    <div class="flex items-center justify-between gap-4 mb-6">
      <div>
        <h2 class="text-lg font-medium text-stone-900">Sync settings</h2>
        <p class="text-sm text-stone-500 mt-0.5">Control how your bookmarks sync across browsers.</p>
      </div>
      <div class="flex items-center gap-2 shrink-0">
        <button type="button"
          class="px-6 py-2 rounded-full border border-stone-200 bg-stone-100 text-stone-700 font-normal cursor-pointer hover:bg-stone-200"
          @click="$emit('cancel')">Cancel</button>
        <button type="button"
          class="px-6 py-2 rounded-full bg-[#6B4CF5] text-white font-normal cursor-pointer hover:bg-[#6B4CF5]/90"
          @click="$emit('save')">Save</button>
      </div>
    </div>

    <hr class="mt-8 mb-12 text-stone-200" />

    <div class="mb-10">
      <h3 class="text-md font-medium text-stone-900">Browsers connected</h3>
      <p class="text-sm text-stone-500 mt-0.5">Manage the browsers linked to your account</p>
      <ul class="my-10 space-y-3">
        <li v-for="(browser, i) in browsers" :key="i"
          class="flex items-center justify-between gap-4 py-3 px-4 rounded-full bg-[#F9F9FB] border border-stone-200 bg-white hover:bg-stone-50/50">
          <div class="flex items-center gap-3 min-w-0">
            <div class="w-10 h-10 rounded-full flex items-center justify-center shrink-0 text-lg font-bold"
              :class="browser.iconBg">{{ browser.icon }}</div>
            <div class="min-w-0">
              <p class="font-medium text-stone-900 capitalize">{{ browser.name }}</p>
              <p class="text-sm text-stone-500">Connected {{ browser.connectedAt }}</p>
            </div>
          </div>
          <button type="button"
            class="shrink-0 px-4 py-2 rounded-full border border-stone-200 bg-white text-stone-700 text-xs cursor-pointer font-medium hover:bg-stone-100"
            @click="$emit('disconnect', i)">Disconnect</button>
        </li>
      </ul>
    </div>

    <hr class="my-12 text-stone-200" />

    <div class="">
      <h3 class="text-sm font-medium text-stone-900">Sync frequency</h3>
      <p class="text-sm text-stone-500 mt-0.5">Manage the browsers linked to your account and control where your
        bookmarks stay synchronized</p>
    </div>
    <div class="flex items-start justify-between mt-6">
      <div class="flex flex-col relative w-full">
        <div class="flex items-center justify-between gap-4">
          <button v-for="opt in frequencyOptions" :key="opt.id" type="button"
            class="items-center px-6 py-2 rounded-full text-sm font-normal transition-colors cursor-pointer"
            :class="modelValue === opt.id ? 'bg-black text-white' : 'bg-[#F9F9FB] text-stone-700 hover:bg-stone-50'"
            @click="$emit('update:modelValue', opt.id)">
            {{ opt.label }}
            <span v-if="opt.proTag && modelValue === opt.id"
              class="px-1 py-0.5 rounded-full text-[8px] bg-[#6B4CF5]/80 text-white">Go pro</span>
          </button>
        </div>
        <CustomSyncTimePicker v-if="modelValue === 'custom'" class="mt-6 absolute right-0" :time="customSchedule?.time"
          :date="customSchedule?.date" :timezone="customSchedule?.timezone"
          @save="$emit('custom-schedule-save', $event)" />
      </div>
    </div>
  </div>
</template>

<script setup>
import CustomSyncTimePicker from './CustomSyncTimePicker.vue'

defineProps({
  modelValue: { type: String, default: 'immediately' },
  browsers: { type: Array, default: () => [] },
  customSchedule: { type: Object, default: () => null },
  frequencyOptions: {
    type: Array,
    default: () => [
      { id: 'immediately', label: 'Immediately', proTag: true },
      { id: '3h', label: 'Every 3 hours' },
      { id: '6h', label: 'Every 6 hours' },
      { id: '12h', label: 'Every 12 hours' },
      { id: 'custom', label: 'Custom' },
    ],
  },
})

defineEmits(['cancel', 'save', 'disconnect', 'update:modelValue', 'custom-schedule-save'])
</script>
