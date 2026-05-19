<template>
  <div class="flex items-center gap-1.5 overflow-x-auto pb-1 -mx-1 px-1 scrollbar-thin">
    <button
      v-for="filter in filters"
      :key="filter.id"
      :class="[
        filter.label === 'All' ? 'px-6 py-1.5' : '',
        'shrink-0 rounded-full flex items-center justify-center gap-1 px-2 py-1 text-sm font-medium transition-colors',
        filter.active
          ? 'bg-stone-800 text-white'
          : 'bg-stone-100 hover:bg-stone-200 text-stone-600',
      ]"
      :title="filter.label"
      @click="$emit('select', filter.id)"
    >
      <span
        v-if="filter.label !== 'All'"
        class="border border-yellow-500 size-6 rounded-full flex items-center justify-center shrink-0"
      ></span>
      <span v-if="filter.label === 'All'">All</span>
      <span v-else class="hidden sm:inline">{{ filter.label }}</span>
    </button>
  </div>
</template>

<script setup>
defineProps({
  filters: {
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

defineEmits(['select'])
</script>

<style scoped>
.scrollbar-thin::-webkit-scrollbar {
  height: 6px;
}

.scrollbar-thin::-webkit-scrollbar-track {
  background: #f5f5f4;
  border-radius: 3px;
}

.scrollbar-thin::-webkit-scrollbar-thumb {
  background: #d6d3d1;
  border-radius: 3px;
}
</style>
