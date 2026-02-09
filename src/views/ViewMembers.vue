<template>
  <LayoutWithSidebar :user="user" :counts="counts" @create-folder="onCreateFolder" @upgrade="onUpgrade">
    <div class="border-b border-stone-200 bg-white px-6 py-4">
      <div class="flex items-center justify-between">
        <router-link to="/dashboard"
          class="inline-flex items-center gap-2 text-stone-600 hover:text-stone-900 font-medium">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </router-link>
        <div class="flex items-center gap-2">
          <button class="relative p-2 rounded-full hover:bg-stone-100 text-stone-600" title="Notifications"
            aria-label="Notifications">
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
            <span class="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-red-500" />
          </button>
          <router-link to="/settings" class="p-2 rounded-full hover:bg-stone-100 text-stone-600 inline-flex"
            title="Settings" aria-label="Settings">
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
    </div>

    <div class="px-6 py-6">
      <div class="relative max-w-md mb-6">
        <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" fill="none" stroke="currentColor"
          viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input v-model="searchQuery" type="text" placeholder="Search members"
          class="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-200 bg-stone-50 focus:outline-none focus:ring-2 focus:ring-[#6B4CF5]/30 focus:border-[#6B4CF5]" />
      </div>

      <p class="text-sm text-stone-500">Unsorted</p>
      <h2 class="text-2xl font-bold text-stone-900 mt-0.5">{{ filteredMembers.length }} members</h2>

      <ul class="mt-6 space-y-1">
        <li v-for="(member, i) in filteredMembers" :key="i"
          class="flex items-center justify-between gap-4 py-4 px-4 rounded-xl border border-stone-200 hover:bg-stone-50/50">
          <div class="flex items-center gap-4 min-w-0">
            <div
              class="w-12 h-12 rounded-full shrink-0 flex items-center justify-center text-lg font-semibold text-white"
              :class="member.avatarBg">
              {{ member.initial }}
            </div>
            <div class="min-w-0">
              <div class="flex items-center gap-2 flex-wrap">
                <p class="font-medium text-stone-900 truncate">{{ member.name }}</p>
                <span v-if="member.roleTag"
                  class="shrink-0 px-2 py-0.5 rounded text-xs font-medium bg-emerald-100 text-emerald-800">
                  {{ member.roleTag }}
                </span>
              </div>
              <p class="text-sm text-stone-500 truncate">{{ member.email }}</p>
            </div>
          </div>
          <div class="relative shrink-0" :data-member-index="i">
            <button type="button"
              class="flex items-center gap-2 px-4 py-2 rounded-xl border border-stone-200 bg-white hover:bg-stone-50 text-stone-700 text-sm font-medium min-w-[120px] justify-between"
              @click="toggleRoleDropdown(i)">
              {{ member.role }}
              <svg class="w-4 h-4 text-stone-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div v-show="openRoleDropdown === i"
              class="absolute top-full right-0 mt-1 w-40 py-1 bg-white rounded-xl border border-stone-200 shadow-lg z-10">
              <button v-for="role in roleOptions" :key="role" type="button"
                class="w-full px-4 py-2 text-left text-sm hover:bg-stone-50 flex items-center gap-2"
                @click="setMemberRole(member, role)">
                <span v-if="member.role === role">✓</span> {{ role }}
              </button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </LayoutWithSidebar>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import LayoutWithSidebar from '../components/LayoutWithSidebar.vue'

const user = ref({ name: 'Amao tolulope', email: 'ad@gmail.com' })
const counts = ref({ allBookmarks: 1, unsorted: 1, collection: 1 })
const searchQuery = ref('')
const openRoleDropdown = ref(null)

const roleOptions = ['Owner', 'Editor', 'Can view']

const members = ref([
  { name: 'Johnson Joshua', email: 'JJ@gmail.com', role: 'Owner', roleTag: 'Admin', initial: 'J', avatarBg: 'bg-amber-500' },
  { name: 'Teller Kamil', email: 'tk@gmail.com', role: 'Can view', roleTag: '', initial: 'T', avatarBg: 'bg-stone-400' },
  { name: 'Dee Smoke', email: 'JJ@gmail.com', role: 'Can view', roleTag: '', initial: 'D', avatarBg: 'bg-emerald-500' },
  { name: 'Jane Doe', email: 'jane@example.com', role: 'Editor', roleTag: '', initial: 'J', avatarBg: 'bg-purple-500' },
  { name: 'John Smith', email: 'john@example.com', role: 'Can view', roleTag: '', initial: 'J', avatarBg: 'bg-rose-500' },
  { name: 'Alex Brown', email: 'alex@example.com', role: 'Editor', roleTag: '', initial: 'A', avatarBg: 'bg-teal-500' },
  { name: 'Sam Wilson', email: 'sam@example.com', role: 'Can view', roleTag: '', initial: 'S', avatarBg: 'bg-indigo-500' },
  { name: 'Maria Garcia', email: 'maria@example.com', role: 'Editor', roleTag: 'Admin', initial: 'M', avatarBg: 'bg-pink-500' },
  { name: 'Chris Lee', email: 'chris@example.com', role: 'Can view', roleTag: '', initial: 'C', avatarBg: 'bg-cyan-500' },
  { name: 'Emma Davis', email: 'emma@example.com', role: 'Can view', roleTag: '', initial: 'E', avatarBg: 'bg-orange-500' },
  { name: 'Ryan Taylor', email: 'ryan@example.com', role: 'Editor', roleTag: '', initial: 'R', avatarBg: 'bg-lime-600' },
  { name: 'Olivia Martinez', email: 'olivia@example.com', role: 'Can view', roleTag: '', initial: 'O', avatarBg: 'bg-violet-500' },
  { name: 'James Anderson', email: 'james@example.com', role: 'Can view', roleTag: '', initial: 'J', avatarBg: 'bg-amber-600' },
  { name: 'Sophie Clark', email: 'sophie@example.com', role: 'Editor', roleTag: '', initial: 'S', avatarBg: 'bg-rose-400' },
  { name: 'Noah White', email: 'noah@example.com', role: 'Can view', roleTag: '', initial: 'N', avatarBg: 'bg-sky-500' },
  { name: 'Ava Harris', email: 'ava@example.com', role: 'Can view', roleTag: '', initial: 'A', avatarBg: 'bg-fuchsia-500' },
  { name: 'Liam King', email: 'liam@example.com', role: 'Can view', roleTag: '', initial: 'L', avatarBg: 'bg-emerald-600' },
  { name: 'Isabella Scott', email: 'isabella@example.com', role: 'Can view', roleTag: '', initial: 'I', avatarBg: 'bg-amber-400' },
])

const filteredMembers = computed(() => {
  const q = searchQuery.value?.toLowerCase().trim() || ''
  if (!q) return members.value
  return members.value.filter(
    (m) => m.name.toLowerCase().includes(q) || m.email.toLowerCase().includes(q)
  )
})

function onCreateFolder() { }
function onUpgrade() { }

function toggleRoleDropdown(index) {
  openRoleDropdown.value = openRoleDropdown.value === index ? null : index
}

function setMemberRole(member, role) {
  member.role = role
  openRoleDropdown.value = null
}

function handleClickOutside(e) {
  if (openRoleDropdown.value !== null && !e.target.closest(`[data-member-index="${openRoleDropdown.value}"]`)) {
    openRoleDropdown.value = null
  }
}

onMounted(() => document.addEventListener('click', handleClickOutside))
onUnmounted(() => document.removeEventListener('click', handleClickOutside))
</script>
