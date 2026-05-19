<template>
  <button
    type="button"
    class="lg:hidden p-2 rounded-lg text-stone-600 hover:bg-stone-100 shrink-0"
    aria-label="Open menu"
    @click="toggleSidebar"
  >
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  </button>
</template>

<script setup>
import { inject } from 'vue'

const toggleSidebar = inject('toggleSidebar', () => {})
</script>
