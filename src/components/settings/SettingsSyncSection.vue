<template>
  <div>
    <div class="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between mb-6">
      <div class="min-w-0">
        <h2 class="text-lg font-medium text-stone-900">Sync settings</h2>
        <p class="text-sm text-stone-500 mt-0.5">Control how your bookmarks sync across browsers.</p>
      </div>
      <div class="flex items-center gap-2 w-full sm:w-auto shrink-0">
        <button type="button"
          class="flex-1 sm:flex-none px-6 py-2 rounded-full border border-stone-200 bg-stone-100 text-stone-700 font-normal cursor-pointer hover:bg-stone-200"
          @click="$emit('cancel')">Cancel</button>
        <button type="button"
          class="flex-1 sm:flex-none px-6 py-2 rounded-full bg-[#6B4CF5] text-white font-normal cursor-pointer hover:bg-[#6B4CF5]/90"
          @click="$emit('save')">Save</button>
      </div>
    </div>

    <hr class="mt-6 sm:mt-8 mb-8 sm:mb-12 border-stone-200" />

    <div class="mb-8 sm:mb-10">
      <h3 class="text-md font-medium text-stone-900">Browsers connected</h3>
      <p class="text-sm text-stone-500 mt-0.5">Manage the browsers linked to your account</p>
      <ul class="my-6 sm:my-10 space-y-3">
        <li v-for="(browser, i) in browsers" :key="i"
          class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between py-3 px-4 rounded-2xl sm:rounded-full border border-stone-200 bg-white hover:bg-stone-50/50">
          <div class="flex items-center gap-3 min-w-0">
            <div class="w-10 h-10 rounded-full flex items-center justify-center shrink-0 text-lg font-bold"
              :class="browser.iconBg">{{ browser.icon }}</div>
            <div class="min-w-0">
              <p class="font-medium text-stone-900 capitalize">{{ browser.name }}</p>
              <p class="text-sm text-stone-500">Connected {{ browser.connectedAt }}</p>
            </div>
          </div>
          <button type="button"
            class="w-full sm:w-auto shrink-0 px-4 py-2 rounded-full border border-stone-200 bg-white text-stone-700 text-xs cursor-pointer font-medium hover:bg-stone-100"
            @click="$emit('disconnect', i)">Disconnect</button>
        </li>
      </ul>
    </div>

    <hr class="my-8 sm:my-12 border-stone-200" />

    <div class="">
      <h3 class="text-sm font-medium text-stone-900">Sync frequency</h3>
      <p class="text-sm text-stone-500 mt-0.5">Manage the browsers linked to your account and control where your
        bookmarks stay synchronized</p>
    </div>
    <div class="mt-6">
      <div class="w-full">
        <div class="flex overflow-x-auto gap-2 pb-2 -mx-1 px-1 scrollbar-thin">
          <button v-for="opt in frequencyOptions" :key="opt.id" type="button"
            class="shrink-0 whitespace-nowrap px-4 sm:px-6 py-2 rounded-full text-sm font-normal transition-colors cursor-pointer"
            :class="modelValue === opt.id ? 'bg-black text-white' : 'bg-[#F9F9FB] text-stone-700 hover:bg-stone-50'"
            @click="$emit('update:modelValue', opt.id)">
            {{ opt.label }}
            <span v-if="opt.proTag && modelValue === opt.id"
              class="px-1 py-0.5 rounded-full text-[8px] bg-[#6B4CF5]/80 text-white">Go pro</span>
          </button>
        </div>
        <CustomSyncTimePicker v-if="modelValue === 'custom'" class="mt-6 w-full max-w-[280px]" :time="customSchedule?.time"
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

<style scoped>
.scrollbar-thin::-webkit-scrollbar { height: 6px; }
.scrollbar-thin::-webkit-scrollbar-track { background: #f5f5f4; border-radius: 3px; }
.scrollbar-thin::-webkit-scrollbar-thumb { background: #d6d3d1; border-radius: 3px; }
</style>
