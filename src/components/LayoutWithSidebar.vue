<template>
  <div class="flex h-screen bg-stone-100" :class="{ 'overflow-hidden': sidebarOpen }">
    <div
      v-show="sidebarOpen"
      class="fixed inset-0 z-30 bg-stone-900/40 lg:hidden"
      aria-hidden="true"
      @click="closeSidebar"
    />

    <div
      class="fixed inset-y-0 left-0 z-40 w-64 shrink-0 transition-transform duration-200 ease-out lg:static lg:translate-x-0"
      :class="sidebarOpen ? 'translate-x-0' : '-translate-x-full'"
    >
      <DashboardSidebar
        :user="user"
        :counts="counts"
        @create-folder="onCreateFolder"
        @upgrade="onUpgrade"
      />
    </div>

    <main class="flex-1 min-w-0 min-h-0 bg-white overflow-auto">
      <slot />
    </main>
  </div>
</template>

<script setup>
import { ref, provide } from 'vue'
import DashboardSidebar from './DashboardSidebar.vue'

defineProps({
  user: {
    type: Object,
    default: () => ({ name: '', email: '' }),
  },
  counts: {
    type: Object,
    default: () => ({ allBookmarks: 0, unsorted: 0, collection: 0 }),
  },
})

const emit = defineEmits(['create-folder', 'upgrade'])

const sidebarOpen = ref(false)

function toggleSidebar() {
  sidebarOpen.value = !sidebarOpen.value
}

function closeSidebar() {
  sidebarOpen.value = false
}

provide('toggleSidebar', toggleSidebar)
provide('closeSidebar', closeSidebar)

function onCreateFolder() {
  closeSidebar()
  emit('create-folder')
}

function onUpgrade() {
  closeSidebar()
  emit('upgrade')
}
</script>
