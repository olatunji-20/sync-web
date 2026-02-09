<template>
  <nav class="w-52 shrink-0 space-y-0.5">
    <button
      v-for="item in items"
      :key="item.id"
      type="button"
      class="w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors"
      :class="modelValue === item.id ? 'bg-stone-100 text-stone-900' : 'text-stone-600 hover:bg-stone-50'"
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
