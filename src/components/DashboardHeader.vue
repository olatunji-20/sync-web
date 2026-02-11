<template>
  <header class="border-b border-stone-200 bg-white py-4">
    <div class="">
      <div class="flex items-center justify-between px-6">
        <h1 class="text-2xl font-semibold text-stone-900">{{ title }}</h1>
        <div class="flex items-center gap-2">
          <div class="relative" ref="notificationPanelRef">
            <button type="button"
              class="relative p-2 border border-stone-200 bg-stone-100 rounded-full hover:bg-stone-200 cursor-pointer text-stone-600"
              title="Notifications" @click="notificationsOpen = !notificationsOpen">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9.0149 15.3974C7.2674 15.3974 5.5199 15.1199 3.8624 14.5649C3.2324 14.3474 2.7524 13.9049 2.5424 13.3274C2.3249 12.7499 2.3999 12.1124 2.7449 11.5424L3.6074 10.1099C3.7874 9.80994 3.9524 9.20994 3.9524 8.85744V6.68994C3.9524 3.89994 6.2249 1.62744 9.0149 1.62744C11.8049 1.62744 14.0774 3.89994 14.0774 6.68994V8.85744C14.0774 9.20244 14.2424 9.80994 14.4224 10.1174L15.2774 11.5424C15.5999 12.0824 15.6599 12.7349 15.4424 13.3274C15.2249 13.9199 14.7524 14.3699 14.1599 14.5649C12.5099 15.1199 10.7624 15.3974 9.0149 15.3974ZM9.0149 2.75244C6.8474 2.75244 5.0774 4.51494 5.0774 6.68994V8.85744C5.0774 9.40494 4.8524 10.2149 4.5749 10.6874L3.7124 12.1199C3.5474 12.3974 3.5024 12.6899 3.5999 12.9374C3.6899 13.1924 3.9149 13.3874 4.2224 13.4924C7.3574 14.5424 10.6799 14.5424 13.8149 13.4924C14.0849 13.4024 14.2949 13.1999 14.3924 12.9299C14.4899 12.6599 14.4674 12.3674 14.3174 12.1199L13.4549 10.6874C13.1699 10.1999 12.9524 9.39744 12.9524 8.84994V6.68994C12.9524 4.51494 11.1899 2.75244 9.0149 2.75244Z"
                  fill="#24273F" />
                <path
                  d="M10.41 2.95477C10.3575 2.95477 10.305 2.94727 10.2525 2.93227C10.035 2.87227 9.82496 2.82727 9.62246 2.79727C8.98496 2.71477 8.36996 2.75977 7.79246 2.93227C7.58246 2.99977 7.35746 2.93227 7.21496 2.77477C7.07246 2.61727 7.02746 2.39227 7.10996 2.18977C7.41746 1.40227 8.16746 0.884766 9.02246 0.884766C9.87746 0.884766 10.6275 1.39477 10.935 2.18977C11.01 2.39227 10.9725 2.61727 10.83 2.77477C10.7175 2.89477 10.56 2.95477 10.41 2.95477Z"
                  fill="#24273F" />
                <path
                  d="M9.01514 17.1074C8.27264 17.1074 7.55264 16.8074 7.02764 16.2824C6.50264 15.7574 6.20264 15.0374 6.20264 14.2949H7.32764C7.32764 14.7374 7.50764 15.1724 7.82264 15.4874C8.13764 15.8024 8.57264 15.9824 9.01514 15.9824C9.94514 15.9824 10.7026 15.2249 10.7026 14.2949H11.8276C11.8276 15.8474 10.5676 17.1074 9.01514 17.1074Z"
                  fill="#24273F" />
              </svg>
              <span v-if="hasUnreadNotifications"
                class="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-red-500"></span>
            </button>

            <!-- Notifications dropdown -->
            <div v-show="notificationsOpen"
              class="absolute top-full right-0 mt-2 w-[380px] max-h-[420px] flex flex-col bg-white rounded-xl border border-stone-200 shadow-lg z-30">
              <div class="flex items-center justify-between px-4 py-3 border-b border-stone-200 shrink-0">
                <h3 class="text-base font-medium text-stone-900">Notifications</h3>
                <button type="button" class="text-sm font-medium text-[#6B4CF5] hover:underline" @click="markAllRead">
                  Mark all read
                </button>
              </div>
              <div class="overflow-y-auto flex-1 min-h-0">
                <div v-for="(n, idx) in notifications" :key="n.id"
                  class="px-4 py-3 border-b border-stone-100 last:border-b-0">
                  <div class="flex gap-3">
                    <div
                      class="w-10 h-10 rounded-full shrink-0 flex items-center justify-center text-white text-sm font-semibold"
                      :class="n.avatarBg">
                      {{ n.avatarInitial }}
                    </div>
                    <div class="min-w-0 flex-1">
                      <p class="font-semibold text-stone-900">{{ n.title }}</p>
                      <p class="text-sm text-stone-500 mt-0.5">{{ n.description }}</p>
                      <p class="text-xs text-stone-400 mt-1">{{ n.timeAgo }}</p>
                      <div v-if="n.actions" class="flex gap-2 mt-3 justify-between">
                        <button type="button"
                          class="w-1/2 px-3 py-1.5 rounded-full text-sm cursor-pointer bg-stone-100 text-stone-700 hover:bg-stone-200"
                          @click="onNotificationAction(n.id, 'decline')">
                          Decline
                        </button>
                        <button type="button"
                          class="w-1/2 px-3 py-1.5 rounded-full text-sm cursor-pointer bg-[#24273F] text-white hover:bg-[#24273F]/90"
                          @click="onNotificationAction(n.id, 'accept')">
                          Accept
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <router-link to="/settings"
            class="p-2 border border-stone-200 bg-stone-100 rounded-full hover:bg-stone-200 cursor-pointer text-stone-600 inline-flex"
            title="Settings">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9.00018 16.9726C8.49768 16.9726 7.98768 16.8601 7.59018 16.6276L3.46518 14.2501C1.78518 13.1176 1.68018 12.9451 1.68018 11.1676V6.8326C1.68018 5.0551 1.77768 4.8826 3.42768 3.7651L7.58268 1.3651C8.37018 0.907598 9.60768 0.907598 10.3952 1.3651L14.5352 3.7501C16.2152 4.8826 16.3202 5.0551 16.3202 6.8326V11.1601C16.3202 12.9376 16.2227 13.1101 14.5727 14.2276L10.4177 16.6276C10.0127 16.8601 9.50268 16.9726 9.00018 16.9726ZM9.00018 2.1526C8.68518 2.1526 8.37768 2.2126 8.16018 2.3401L4.03518 4.7251C2.81268 5.5501 2.81268 5.5501 2.81268 6.8326V11.1601C2.81268 12.4426 2.81268 12.4426 4.06518 13.2901L8.16018 15.6526C8.60268 15.9076 9.40518 15.9076 9.84768 15.6526L13.9727 13.2676C15.1877 12.4426 15.1877 12.4426 15.1877 11.1601V6.8326C15.1877 5.5501 15.1877 5.5501 13.9352 4.7026L9.84018 2.3401C9.62268 2.2126 9.31518 2.1526 9.00018 2.1526Z"
                fill="#24273F" />
              <path
                d="M9 11.8125C7.4475 11.8125 6.1875 10.5525 6.1875 9C6.1875 7.4475 7.4475 6.1875 9 6.1875C10.5525 6.1875 11.8125 7.4475 11.8125 9C11.8125 10.5525 10.5525 11.8125 9 11.8125ZM9 7.3125C8.07 7.3125 7.3125 8.07 7.3125 9C7.3125 9.93 8.07 10.6875 9 10.6875C9.93 10.6875 10.6875 9.93 10.6875 9C10.6875 8.07 9.93 7.3125 9 7.3125Z"
                fill="#24273F" />
            </svg>
          </router-link>
        </div>
      </div>
      <hr class="border-stone-200 my-6">
      <div class="flex items-center justify-between px-6">
        <div class="flex-1 max-w-[300px]">
          <div class="relative">
            <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7.66659 14.5002C3.89992 14.5002 0.833252 11.4335 0.833252 7.66683C0.833252 3.90016 3.89992 0.833496 7.66659 0.833496C11.4333 0.833496 14.4999 3.90016 14.4999 7.66683C14.4999 11.4335 11.4333 14.5002 7.66659 14.5002ZM7.66659 1.8335C4.44659 1.8335 1.83325 4.4535 1.83325 7.66683C1.83325 10.8802 4.44659 13.5002 7.66659 13.5002C10.8866 13.5002 13.4999 10.8802 13.4999 7.66683C13.4999 4.4535 10.8866 1.8335 7.66659 1.8335Z"
                fill="#24273F" />
              <path
                d="M14.6666 15.1666C14.54 15.1666 14.4133 15.12 14.3133 15.02L12.98 13.6866C12.7866 13.4933 12.7866 13.1733 12.98 12.98C13.1733 12.7866 13.4933 12.7866 13.6866 12.98L15.02 14.3133C15.2133 14.5066 15.2133 14.8266 15.02 15.02C14.92 15.12 14.7933 15.1666 14.6666 15.1666Z"
                fill="#24273F" />
            </svg>

            <input v-model="searchQuery" type="text" :placeholder="searchPlaceholder"
              class="w-full pl-10 pr-4 py-2.5 rounded-full bg-stone-100 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-400"
              @input="$emit('search', $event.target.value)" />
          </div>
        </div>
        <div class="flex items-center gap-2">
          <div class="bg-stone-200 rounded-full py-1 px-2">
            <div class="flex items-center -space-x-2">
              <div v-for="(_, i) in 3" :key="i" class="w-8 h-8 rounded-full border-2 border-white shrink-0"
                :class="['bg-amber-200', 'bg-blue-200', 'bg-green-200'][i]"></div>
            </div>
          </div>
          <button
            class="flex items-center gap-2 px-4 py-2 rounded-full bg-[#6B4CF5] cursor-pointer text-white hover:bg-[#6B4CF5]/80"
            @click="$emit('share')">
            Share
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
            </svg>
          </button>
        </div>
      </div>
      <hr class="border-stone-200 my-6">
      <div class="flex items-center justify-between px-6">
        <BrowserFilters :filters="browserFilters" @select="onBrowserSelect" />
        <div class="flex items-center gap-2">
          <div class="relative" ref="sortDropdownRef">
            <button @click="sortOpen = !sortOpen"
              class="flex items-center gap-2 px-3 py-2 rounded-full bg-stone-50 border border-stone-200 hover:bg-stone-50/30 text-stone-700 text-sm">
              {{ sort }}
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div v-show="sortOpen"
              class="absolute top-full right-0 mt-1 w-40 py-1 bg-white rounded-xl border border-stone-200 shadow-lg z-20">
              <button v-for="opt in sortOptions" :key="opt"
                @click="sortOpen = false; $emit('update:sort', opt); $emit('sort', opt)"
                class="w-full px-4 py-2 text-left text-sm hover:bg-stone-50 flex items-center gap-2">
                <span v-if="sort === opt">✓</span> {{ opt }}
              </button>
            </div>
          </div>
          <div class="relative" ref="viewDropdownRef">
            <button @click="viewOpen = !viewOpen"
              class="flex items-center gap-2 px-3 py-2 rounded-full bg-stone-50 border border-stone-200 hover:bg-stone-50/30 text-stone-700 text-sm">
              {{ view }}
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div v-show="viewOpen"
              class="absolute top-full right-0 mt-1 w-32 py-1 bg-white rounded-xl border border-stone-200 shadow-lg z-20">
              <button v-for="mode in viewModes" :key="mode"
                @click="viewOpen = false; $emit('update:view', mode); $emit('view', mode)"
                class="w-full px-4 py-2 text-left text-sm hover:bg-stone-50 flex items-center gap-2">
                <span v-if="view === mode">✓</span> {{ mode }}
              </button>
            </div>
          </div>
        </div>


      </div>


      <div class="flex items-center gap-2 ml-auto">

      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import BrowserFilters from './BrowserFilters.vue'

const searchQuery = ref('')
const sortOpen = ref(false)
const viewOpen = ref(false)
const notificationsOpen = ref(false)
const sortDropdownRef = ref(null)
const viewDropdownRef = ref(null)
const notificationPanelRef = ref(null)
const sortOptions = ['Newest', 'Oldest', 'A-Z', 'Z-A']
const viewModes = ['List', 'Grid']

const notifications = ref([
  {
    id: '1',
    title: 'New Member Joined',
    description: 'Your request has been accepted your invitation and are now part of the unsorted workspace',
    timeAgo: '3 mins ago',
    avatarInitial: 'A',
    avatarBg: 'bg-amber-500',
    read: false,
    actions: null,
  },
  {
    id: '2',
    title: 'New Member request',
    description: 'Abayomi has sent a request to be part of unsorted, click below to choose an option',
    timeAgo: '3 mins ago',
    avatarInitial: 'A',
    avatarBg: 'bg-amber-500',
    read: false,
    actions: true,
  },
  {
    id: '3',
    title: 'New invite request',
    description: "Johnson has requested your access to the folder 'Unsorted'. Join to begin collaborating.",
    timeAgo: '3 mins ago',
    avatarInitial: 'J',
    avatarBg: 'bg-emerald-500',
    read: false,
    actions: true,
  },
  {
    id: '4',
    title: 'New Entry Added',
    description: "Kamara has added a new entry to 'Unsorted' Take a look to stay updated.",
    timeAgo: '3 mins ago',
    avatarInitial: 'K',
    avatarBg: 'bg-[#6B4CF5]',
    read: false,
    actions: null,
  },
])

const hasUnreadNotifications = computed(() => notifications.value.some((n) => !n.read))

const props = defineProps({
  title: { type: String, default: 'All bookmarks' },
  searchPlaceholder: { type: String, default: 'Search all bookmarks' },
  hasNotifications: { type: Boolean, default: true },
  sort: { type: String, default: 'Newest' },
  view: { type: String, default: 'List' },
  browserFilters: {
    type: Array,
    default: () => [
      { id: 'all', label: 'All', active: true },
      { id: 'chrome', label: 'Chrome', active: false },
      { id: 'arc', label: 'Arc', active: false },
      { id: 'firefox', label: 'Firefox', active: false },
      { id: 'opera', label: 'Opera', active: false },
      { id: 'brave', label: 'Brave', active: false },
      { id: 'edge', label: 'Edge', active: false },
    ],
  },
})

const emit = defineEmits(['search', 'share', 'sort', 'view', 'update:sort', 'update:view', 'browser-select'])

function onBrowserSelect(id) {
  emit('browser-select', id)
}

function markAllRead() {
  notifications.value.forEach((n) => { n.read = true })
}

function onNotificationAction(notificationId, action) {
  const n = notifications.value.find((x) => x.id === notificationId)
  if (n) n.actions = null
  emit('notification-action', { id: notificationId, action })
}

function handleClickOutside(e) {
  if (!sortDropdownRef.value?.contains(e.target)) sortOpen.value = false
  if (!viewDropdownRef.value?.contains(e.target)) viewOpen.value = false
  if (!notificationPanelRef.value?.contains(e.target)) notificationsOpen.value = false
}

onMounted(() => document.addEventListener('click', handleClickOutside))
onUnmounted(() => document.removeEventListener('click', handleClickOutside))
</script>
