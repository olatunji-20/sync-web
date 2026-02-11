<template>
  <Teleport to="body">
    <div v-show="visible" class="fixed inset-0 z-40 flex items-center justify-center p-4 bg-stone-900/50"
      @click.self="$emit('close')">
      <div class="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden" role="dialog" aria-modal="true"
        aria-labelledby="move-bookmarks-title">
        <!-- Header -->
        <div class="flex items-start justify-between gap-4 px-6 pt-6 pb-4">
          <div>
            <h2 id="move-bookmarks-title" class="text-lg font-medium text-stone-800">Move bookmarks</h2>
            <p class="text-sm text-stone-500 mt-0.5">Choose a collection to move your bookmarks to.</p>
          </div>
          <button type="button" class="p-2 rounded-lg hover:bg-stone-100 text-stone-500 transition-colors"
            aria-label="Close" @click="$emit('close')">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <hr class="my-2 border-stone-200">
        <!-- Collection list -->
        <div class="px-4 max-h-64 overflow-y-auto">
          <button v-for="col in collections" :key="col.id" type="button"
            class="w-full flex items-center gap-4 p-2 cursor-pointer mb-2 text-left transition-colors"
            :class="selectedId === col.id ? 'border-[#6B4CF5] bg-[#6B4CF5]/5' : 'border-stone-200 hover:bg-stone-50'"
            @click="selectedId = col.id">
            <div class="w-12 h-12 rounded-lg shrink-0 flex items-center justify-center text-xl"
              :class="col.thumbnailClass">
              {{ col.icon }}
            </div>
            <div class="min-w-0 flex-1">
              <p class="font-medium text-stone-700">{{ col.name }}</p>
              <p class="text-xs text-stone-500 mt-0.5">{{ col.updated }}</p>
            </div>
            <span class="text-sm font-medium text-stone-700 shrink-0">{{ col.items }} items</span>
          </button>
        </div>

        <!-- Footer -->
        <div class="flex justify-end px-6 py-4 border-t border-stone-100">
          <button type="button"
            class="px-6 py-2 rounded-full text-sm cursor-pointer bg-[#24273F] text-white hover:bg-[#24273F]/90 transition-colors"
            @click="onMove">
            Move
          </button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  visible: Boolean,
  bookmark: { type: Object, default: null },
  collections: {
    type: Array,
    default: () => [
      { id: 'all', name: 'All bookmarks', updated: 'Updated 2 mins ago', items: 23, icon: '📚', thumbnailClass: 'bg-amber-100' },
      { id: 'unsorted', name: 'Unsorted', updated: 'Updated 2 mins ago', items: 23, icon: '📄', thumbnailClass: 'bg-stone-200' },
      { id: 'collections', name: 'Collections', updated: 'Updated 2 mins ago', items: 23, icon: '📁', thumbnailClass: 'bg-purple-100' },
    ],
  },
})

const emit = defineEmits(['close', 'move'])

const selectedId = ref(props.collections[0]?.id ?? '')

watch(
  () => props.visible,
  (visible) => {
    if (visible) {
      const currentFolder = props.bookmark?.folder
      const match = props.collections.find((c) => c.id === currentFolder || c.name.toLowerCase().replace(/\s/g, '') === (currentFolder || '').toLowerCase().replace(/\s/g, ''))
      selectedId.value = match?.id ?? props.collections[0]?.id ?? ''
    }
  },
  { immediate: true }
)

watch(
  () => props.collections,
  (cols) => {
    if (cols?.length && !selectedId.value) selectedId.value = cols[0].id
  },
  { immediate: true }
)

function onMove() {
  const collection = props.collections.find((c) => c.id === selectedId.value)
  emit('move', { targetCollectionId: selectedId.value, targetCollectionName: collection?.name })
  emit('close')
}
</script>
