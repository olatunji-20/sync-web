<template>
  <Teleport to="body">
    <div
      v-show="visible"
      class="fixed inset-0 z-40 flex items-center justify-center p-4 bg-stone-900/50"
      @click.self="$emit('close')"
    >
      <div
        class="w-full max-w-lg bg-white rounded-2xl shadow-xl overflow-hidden max-h-[90vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="invite-modal-title"
      >
        <!-- Header -->
        <div class="flex items-start justify-between gap-4 px-6 pt-6 pb-4">
          <div>
            <h2 id="invite-modal-title" class="text-lg font-bold text-stone-900">Invite collaborators</h2>
            <p class="text-sm text-stone-500 mt-0.5">Share access with teammates or collaborators</p>
          </div>
          <button
            type="button"
            class="p-2 rounded-lg hover:bg-stone-100 text-stone-500 transition-colors"
            aria-label="Close"
            @click="$emit('close')"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Sharable link -->
        <div class="px-6 py-4 border-t border-stone-100">
          <div class="flex items-center justify-between gap-4 p-4 rounded-xl bg-stone-50 border border-stone-200">
            <div class="flex items-center gap-3 min-w-0">
              <div class="w-10 h-10 rounded-lg bg-[#6B4CF5] flex items-center justify-center shrink-0">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </div>
              <div class="min-w-0">
                <p class="font-medium text-stone-900">Sharable link</p>
                <p class="text-sm text-stone-500">Copy link to share publicly</p>
              </div>
            </div>
            <button
              type="button"
              class="shrink-0 px-4 py-2 rounded-lg bg-stone-200 text-stone-700 font-medium hover:bg-stone-300 transition-colors"
              @click="copyLink"
            >
              Copy link
            </button>
          </div>
        </div>

        <!-- Invite by email -->
        <div class="px-6 py-4 border-t border-stone-100">
          <div class="flex flex-wrap items-center gap-2">
            <input
              v-model="emailInput"
              type="email"
              placeholder="Enter email..."
              class="flex-1 min-w-[160px] px-4 py-2.5 rounded-xl border border-stone-200 bg-white focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-400"
              @keydown.enter.prevent="inviteUser"
            />
            <div class="relative" ref="roleDropdownRef">
              <button
                type="button"
                class="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-stone-200 bg-white hover:bg-stone-50 text-stone-700 text-sm"
                @click="roleOpen = !roleOpen"
              >
                {{ selectedRole }}
                <svg class="w-4 h-4 text-stone-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div v-show="roleOpen" class="absolute top-full left-0 mt-1 w-36 py-1 bg-white rounded-xl border border-stone-200 shadow-lg z-10">
                <button
                  v-for="role in roleOptions"
                  :key="role"
                  type="button"
                  class="w-full px-4 py-2 text-left text-sm hover:bg-stone-50 flex items-center gap-2"
                  @click="selectedRole = role; roleOpen = false"
                >
                  <span v-if="selectedRole === role">✓</span> {{ role }}
                </button>
              </div>
            </div>
            <button
              type="button"
              class="px-4 py-2.5 rounded-lg bg-stone-200 text-stone-700 font-medium hover:bg-stone-300 transition-colors"
              @click="inviteUser"
            >
              Invite user
            </button>
          </div>
        </div>

        <!-- Collaborators list -->
        <div class="px-6 py-4 border-t border-stone-100">
          <ul class="space-y-2">
            <li
              v-for="(collab, i) in collaborators"
              :key="i"
              class="flex items-center justify-between gap-3 py-3 px-4 rounded-xl hover:bg-stone-50"
            >
              <div class="flex items-center gap-3 min-w-0">
                <div class="w-10 h-10 rounded-full bg-stone-200 shrink-0 flex items-center justify-center text-stone-600 font-medium">
                  {{ collab.name.charAt(0) }}
                </div>
                <div class="min-w-0">
                  <p class="font-medium text-stone-900 truncate">{{ collab.name }}</p>
                  <p class="text-sm text-stone-500 truncate">{{ collab.email }}</p>
                </div>
                <span v-if="collab.badge" class="shrink-0 px-2 py-0.5 rounded text-xs font-medium bg-emerald-100 text-emerald-800">
                  {{ collab.badge }}
                </span>
              </div>
              <div class="relative shrink-0" :data-collab-index="i">
                <button
                  type="button"
                  class="flex items-center gap-2 px-3 py-2 rounded-lg border border-stone-200 bg-white hover:bg-stone-50 text-stone-700 text-sm"
                  @click="toggleCollabRole(i)"
                >
                  {{ collab.role }}
                  <svg class="w-4 h-4 text-stone-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  v-show="openCollabDropdown === i"
                  class="absolute top-full right-0 mt-1 w-40 py-1 bg-white rounded-xl border border-stone-200 shadow-lg z-10"
                >
                  <button
                    v-for="role in roleOptions"
                    :key="role"
                    type="button"
                    class="w-full px-4 py-2 text-left text-sm hover:bg-stone-50 flex items-center gap-2"
                    @click="setCollabRole(i, role)"
                  >
                    <span v-if="collab.role === role">✓</span> {{ role }}
                  </button>
                  <button
                    type="button"
                    class="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50"
                    @click="removeCollab(i)"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <!-- Add extra security -->
        <div class="px-6 py-5 border-t border-stone-100">
          <div class="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-stone-50 border border-stone-200">
            <div>
              <p class="font-medium text-stone-900">Add extra security to your link</p>
              <p class="text-sm text-stone-500 mt-0.5">Set a password to control who can join via your link</p>
            </div>
            <button
              type="button"
              class="shrink-0 px-4 py-2.5 rounded-xl bg-[#5B21B6] text-white font-medium hover:bg-[#4C1D95] transition-colors"
              @click="$emit('add-password')"
            >
              Add password
            </button>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  visible: Boolean,
  collaborators: {
    type: Array,
    default: () => [],
  },
})

const emit = defineEmits(['close', 'add-password', 'copy-link', 'invite', 'update-role', 'remove'])

const emailInput = ref('')
const selectedRole = ref('Can edit')
const roleOpen = ref(false)
const roleDropdownRef = ref(null)
const openCollabDropdown = ref(null)
const roleOptions = ['Owner', 'Can edit', 'Can view']

const defaultCollaborators = [
  { name: 'Johnson Joshua', email: 'JJ@gmail.com', badge: 'Admin', role: 'Owner' },
  { name: 'Teller Kamil', email: 'JJ@gmail.com', badge: 'Admin', role: 'Owner' },
  { name: 'Dee Smoke', email: 'JJ@gmail.com', badge: '', role: 'Owner' },
]

const collaborators = ref([...defaultCollaborators])

watch(
  () => props.visible,
  (v) => {
    if (v && props.collaborators?.length) collaborators.value = [...props.collaborators]
    else if (v) collaborators.value = [...defaultCollaborators]
  },
  { immediate: true }
)

watch(
  () => props.collaborators,
  (list) => {
    if (list?.length) collaborators.value = [...list]
  },
  { deep: true }
)


function copyLink() {
  emit('copy-link')
  roleOpen.value = false
  openCollabDropdown.value = null
}

function inviteUser() {
  const email = emailInput.value?.trim()
  if (email) {
    emit('invite', { email, role: selectedRole.value })
    collaborators.value = [...collaborators.value, { name: email.split('@')[0], email, badge: '', role: selectedRole.value }]
    emailInput.value = ''
  }
  roleOpen.value = false
}

function toggleCollabRole(i) {
  openCollabDropdown.value = openCollabDropdown.value === i ? null : i
  roleOpen.value = false
}

function setCollabRole(i, role) {
  collaborators.value[i].role = role
  emit('update-role', { index: i, role })
  openCollabDropdown.value = null
}

function removeCollab(i) {
  collaborators.value.splice(i, 1)
  emit('remove', i)
  openCollabDropdown.value = null
}

function handleClickOutside(e) {
  if (!roleDropdownRef.value?.contains(e.target)) roleOpen.value = false
  if (openCollabDropdown.value !== null && !e.target.closest(`[data-collab-index="${openCollabDropdown.value}"]`)) {
    openCollabDropdown.value = null
  }
}

onMounted(() => document.addEventListener('click', handleClickOutside))
onUnmounted(() => document.removeEventListener('click', handleClickOutside))
</script>
