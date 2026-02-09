<template>
  <LayoutWithSidebar :user="user" :counts="counts" @create-folder="onCreateFolder" @upgrade="onUpgrade">
    <div class="px-6 py-8">
      <h1 class="text-2xl font-bold text-stone-900">Settings</h1>

      <div class="flex gap-8 mt-8">
        <SettingsNav v-model="activeSection" :items="settingsNav" />

        <div class="flex-1 min-w-0">
          <SettingsAccountSection
            v-if="activeSection === 'account'"
            :form="form"
            :profile-image="profileImage"
            @cancel="onCancel"
            @save="onAccountSave"
          />

          <SettingsSyncSection
            v-else-if="activeSection === 'sync'"
            v-model="selectedSyncFrequency"
            :browsers="connectedBrowsers"
            :frequency-options="syncFrequencyOptions"
            @cancel="onSyncCancel"
            @save="onSyncSave"
            @disconnect="disconnectBrowser"
          />

          <SettingsBookmarksSection
            v-else-if="activeSection === 'bookmarks'"
            v-model="autoMergeDuplicate"
            @cancel="onBookmarkMgmtCancel"
            @save="onBookmarkMgmtSave"
          />

          <SettingsNotificationsSection
            v-else-if="activeSection === 'notifications'"
            :notify-on-new-member="notifyOnNewMember"
            :notify-on-new-bookmark="notifyOnNewBookmark"
            @cancel="onNotificationsCancel"
            @save="onNotificationsSave"
            @update:notify-on-new-member="notifyOnNewMember = $event"
            @update:notify-on-new-bookmark="notifyOnNewBookmark = $event"
          />

          <SettingsHelpSection
            v-else-if="activeSection === 'help'"
            :email="supportEmail"
            :phone="supportPhone"
            :phone-e164="supportPhoneE164"
            @copy-email="copyEmail"
          />

          <div v-else class="py-12 text-center text-stone-500">
            <p class="text-sm">This section is coming soon.</p>
          </div>
        </div>
      </div>
    </div>
  </LayoutWithSidebar>
</template>

<script setup>
import { ref } from 'vue'
import LayoutWithSidebar from '../components/LayoutWithSidebar.vue'
import SettingsNav from '../components/settings/SettingsNav.vue'
import SettingsAccountSection from '../components/settings/SettingsAccountSection.vue'
import SettingsSyncSection from '../components/settings/SettingsSyncSection.vue'
import SettingsBookmarksSection from '../components/settings/SettingsBookmarksSection.vue'
import SettingsNotificationsSection from '../components/settings/SettingsNotificationsSection.vue'
import SettingsHelpSection from '../components/settings/SettingsHelpSection.vue'

const user = ref({ name: 'Amao tolulope', email: 'ad@gmail.com' })
const counts = ref({ allBookmarks: 1, unsorted: 1, collection: 1 })
const profileImage = ref(null)
const activeSection = ref('account')

const settingsNav = [
  { id: 'account', label: 'Account information' },
  { id: 'sync', label: 'Sync settings' },
  { id: 'bookmarks', label: 'Bookmark Management' },
  { id: 'notifications', label: 'Notifications' },
  { id: 'help', label: 'Help & Support' },
]

const form = ref({
  firstName: 'Amao',
  lastName: 'tolulope',
  email: 'ad@gmail.com',
  location: '',
})

const connectedBrowsers = ref([
  { name: 'Operamini', connectedAt: '2 days ago', icon: 'O', iconBg: 'bg-red-500 text-white' },
  { name: 'Microsoft edge', connectedAt: '2 days ago', icon: 'E', iconBg: 'bg-emerald-500 text-white' },
  { name: 'Google chrome', connectedAt: '2 days ago', icon: 'C', iconBg: 'bg-blue-500 text-white' },
  { name: 'Arc browser', connectedAt: '2 days ago', icon: 'A', iconBg: 'bg-purple-500 text-white' },
  { name: 'Brave browser', connectedAt: '2 days ago', icon: 'B', iconBg: 'bg-amber-500 text-white' },
])

const syncFrequencyOptions = [
  { id: 'immediately', label: 'Immediately', proTag: true },
  { id: '3h', label: 'Every 3 hours' },
  { id: '6h', label: 'Every 6 hours' },
  { id: '12h', label: 'Every 12 hours' },
  { id: 'custom', label: 'Custom' },
]
const selectedSyncFrequency = ref('immediately')
const autoMergeDuplicate = ref(true)
const notifyOnNewMember = ref(true)
const notifyOnNewBookmark = ref(false)
const supportEmail = ref('aj@gmail.com')
const supportPhone = ref('+234 905 905 9055')
const supportPhoneE164 = ref('+2349059059055')

function onCreateFolder() {}
function onUpgrade() {}

function onCancel() {
  form.value = { firstName: 'Amao', lastName: 'tolulope', email: 'ad@gmail.com', location: form.value.location }
}

function onAccountSave(payload) {
  form.value = { ...payload }
  user.value.name = `${payload.firstName} ${payload.lastName}`.trim()
  user.value.email = payload.email
}

function onSyncCancel() {
  selectedSyncFrequency.value = 'immediately'
}

function onSyncSave() {
  // Persist sync frequency when ready
}

function disconnectBrowser(index) {
  connectedBrowsers.value = connectedBrowsers.value.filter((_, i) => i !== index)
}

function onBookmarkMgmtCancel() {
  autoMergeDuplicate.value = true
}

function onBookmarkMgmtSave() {
  // Persist auto merge setting when ready
}

function onNotificationsCancel() {
  notifyOnNewMember.value = true
  notifyOnNewBookmark.value = false
}

function onNotificationsSave() {
  // Persist notification settings when ready
}

function copyEmail() {
  navigator.clipboard?.writeText(supportEmail.value)
}
</script>
