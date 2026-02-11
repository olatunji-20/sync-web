<template>
  <div class="w-full max-w-[280px] p-4 rounded-2xl bg-white border border-stone-200 shadow-sm space-y-4">
    <!-- Set custom time -->
    <div class="space-y-1.5">
      <label class="block text-xs font-medium text-stone-700">Set custom time</label>
      <div class="flex items-center gap-1.5">
        <input v-model="localTime.hours" type="text" inputmode="numeric" maxlength="2" placeholder="07"
          class="w-11 px-2 py-2 text-sm rounded-full border border-stone-200 bg-white text-center text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#6B4CF5]/30 focus:border-[#6B4CF5]"
          @input="clampHours" />
        <span class="text-stone-400 text-sm">:</span>
        <input v-model="localTime.minutes" type="text" inputmode="numeric" maxlength="2" placeholder="00"
          class="w-11 px-2 py-2 text-sm rounded-full border border-stone-200 bg-white text-center text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#6B4CF5]/30 focus:border-[#6B4CF5]"
          @input="clampMinutes" />
        <div class="flex rounded-full border border-stone-200 overflow-hidden shrink-0">
          <button type="button" class="px-3 py-2 text-xs font-medium transition-colors"
            :class="localTime.amPm === 'AM' ? 'bg-stone-200 text-stone-900' : 'bg-white text-stone-600 hover:bg-stone-50'"
            @click="localTime.amPm = 'AM'">
            AM
          </button>
          <button type="button" class="px-3 py-2 text-xs font-medium transition-colors"
            :class="localTime.amPm === 'PM' ? 'bg-stone-200 text-stone-900' : 'bg-white text-stone-600 hover:bg-stone-50'"
            @click="localTime.amPm = 'PM'">
            PM
          </button>
        </div>
      </div>
    </div>

    <!-- Set custom date -->
    <div class="space-y-1.5">
      <label class="block text-xs font-medium text-stone-700">Set custom date</label>
      <div class="flex items-center gap-1.5">
        <input :value="formattedDate" type="text" readonly placeholder="Select date"
          class="min-w-0 flex-1 px-3 py-2 text-sm rounded-full border border-stone-200 bg-white text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#6B4CF5]/30 focus:border-[#6B4CF5]"
          @click="showDatePicker = true" />
        <button type="button"
          class="shrink-0 p-2 rounded-full border border-stone-200 bg-white text-stone-500 hover:bg-stone-50 cursor-pointer"
          aria-label="Open calendar" @click="showDatePicker = true">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </button>
      </div>
      <input v-if="showDatePicker" v-model="localDate" type="date"
        class="mt-1.5 w-full px-3 py-2 text-sm rounded-lg border border-stone-200" @change="showDatePicker = false" />
    </div>

    <!-- Timezone -->
    <div class="space-y-1.5">
      <label for="custom-sync-timezone" class="block text-xs font-medium text-stone-700">Timezone</label>
      <div class="relative">
        <select id="custom-sync-timezone" v-model="localTimezone"
          class="w-full appearance-none px-3 py-2 pr-9 text-sm rounded-full border border-stone-200 bg-white text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#6B4CF5]/30 focus:border-[#6B4CF5] cursor-pointer">
          <option v-for="tz in timezoneOptions" :key="tz.value" :value="tz.value">{{ tz.label }}</option>
        </select>
        <svg class="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400 pointer-events-none" fill="none"
          stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>

    <button type="button"
      class="w-full py-2.5 text-sm rounded-full bg-black text-white hover:bg-[#6B4CF5]/90 transition-colors cursor-pointer"
      @click="onSave">
      Save
    </button>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

function toDateInputValue(d) {
  return d.toISOString().slice(0, 10)
}

const props = defineProps({
  time: { type: Object, default: () => ({ hours: '07', minutes: '00', amPm: 'AM' }) },
  date: { type: String, default: () => new Date().toISOString().slice(0, 10) },
  timezone: { type: String, default: 'Africa/Lagos' },
  timezoneOptions: {
    type: Array,
    default: () => [
      { value: 'Africa/Lagos', label: 'WAT Lagos' },
      { value: 'America/New_York', label: 'EST New York' },
      { value: 'Europe/London', label: 'GMT London' },
      { value: 'Asia/Tokyo', label: 'JST Tokyo' },
    ],
  },
})

const emit = defineEmits(['save'])

const localTime = ref({ ...props.time })
const localDate = ref(props.date || toDateInputValue(new Date()))
const localTimezone = ref(props.timezone)
const showDatePicker = ref(false)

watch(() => props.time, (v) => { localTime.value = { ...v } }, { deep: true })
watch(() => props.date, (v) => { localDate.value = v || toDateInputValue(new Date()) })
watch(() => props.timezone, (v) => { localTimezone.value = v })

const formattedDate = computed(() => {
  if (!localDate.value) return ''
  const d = new Date(localDate.value + 'T12:00:00')
  return d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' })
})

function clampHours() {
  const v = localTime.value.hours.replace(/\D/g, '').slice(0, 2)
  const n = parseInt(v, 10)
  if (v === '' || isNaN(n)) localTime.value.hours = v
  else localTime.value.hours = String(Math.min(12, Math.max(1, n)))
}

function clampMinutes() {
  const v = localTime.value.minutes.replace(/\D/g, '').slice(0, 2)
  const n = parseInt(v, 10)
  if (v === '' || isNaN(n)) localTime.value.minutes = v
  else localTime.value.minutes = String(Math.min(59, Math.max(0, n))).padStart(2, '0')
}

function onSave() {
  emit('save', {
    time: { ...localTime.value },
    date: localDate.value,
    timezone: localTimezone.value,
  })
}
</script>
