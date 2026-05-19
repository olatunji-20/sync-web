<template>
  <nav
    class="w-full shrink-0 flex flex-row gap-2 overflow-x-auto pb-2 -mx-1 px-1 scrollbar-thin lg:flex-col lg:gap-0.5 lg:overflow-visible lg:pb-0 lg:w-52 lg:mx-0 lg:px-0"
  >
    <button
      v-for="item in items"
      :key="item.id"
      type="button"
      class="shrink-0 whitespace-nowrap text-left px-4 py-2.5 rounded-full cursor-pointer text-sm transition-colors lg:w-full"
      :class="modelValue === item.id ? 'bg-stone-100 text-stone-900 font-[500]' : 'text-stone-600 hover:bg-stone-50 font-[400]'"
      @click="$emit('update:modelValue', item.id)"
    >
      {{ item.label }}
    </button>
  </nav>
</template>

<script setup>
defineProps({
  modelValue: { type: String, default: 'account' },
  items: {
    type: Array,
    default: () => [
      { id: 'account', label: 'Account information' },
      { id: 'sync', label: 'Sync settings' },
      { id: 'bookmarks', label: 'Bookmark Management' },
      { id: 'notifications', label: 'Notifications' },
      { id: 'help', label: 'Help & Support' },
    ],
  },
})

defineEmits(['update:modelValue'])
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
