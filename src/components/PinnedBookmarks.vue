<template>
  <section class="px-6 py-6">
    <h2 class="text-lg font-semibold text-stone-900 mb-4">Pinned Bookmarks</h2>
    <div class="flex gap-4 overflow-x-auto pb-2 -mx-6 px-6 scrollbar-thin">
      <div v-for="(card, i) in bookmarks" :key="i"
        class="shrink-0 w-64 rounded-2xl overflow-hidden shadow-sm border border-stone-200 relative group">
        <div :class="card.bg" class="h-28 flex items-center justify-center">
          <span class="text-4xl">{{ card.icon }}</span>
        </div>
        <div class="p-4 border-t border-stone-200 bg-white">
          <div class="flex items-start justify-between gap-2">
            <div class="min-w-0 flex-1">
              <p class="font-medium text-stone-900 truncate">{{ card.title }}</p>
              <p class="text-xs text-stone-500 truncate">{{ card.url }} | {{ card.folder }}</p>
              <p class="text-xs text-stone-400 mt-0.5">{{ card.time }}</p>
            </div>
            <div class="flex items-center gap-1">
              <!-- <div class="w-6 h-6 rounded-full bg-amber-200 shrink-0"></div> -->
              <button
                class="p-1 rounded hover:bg-stone-100 text-stone-500 transition-opacity cursor-pointer opacity-0 group-hover:opacity-100"
                aria-label="More options" @click.stop="openContextMenu($event, card)">
                <svg width="13" height="24" viewBox="0 0 13 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="11.5" cy="12" r="1.5" transform="rotate(-180 11.5 12)" fill="#92939F" />
                  <circle cx="6.5" cy="12" r="1.5" transform="rotate(-180 6.5 12)" fill="#92939F" />
                  <circle cx="1.5" cy="12" r="1.5" transform="rotate(-180 1.5 12)" fill="#92939F" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <BookmarkContextMenu
      :visible="contextMenu.visible"
      :x="contextMenu.x"
      :y="contextMenu.y"
      @action="onContextAction"
      @close="contextMenu.visible = false"
    />
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import BookmarkContextMenu from './BookmarkContextMenu.vue'

defineProps({
  bookmarks: {
    type: Array,
    default: () => [],
  },
})

const emit = defineEmits(['context-action', 'edit', 'delete', 'move'])

const contextMenu = ref({ visible: false, x: 0, y: 0 })
const selectedBookmark = ref(null)

function openContextMenu(e, card) {
  selectedBookmark.value = card
  contextMenu.value = { visible: true, x: e.clientX, y: e.clientY }
}

function onContextAction(action) {
  emit('context-action', action, selectedBookmark.value)
  if (action === 'edit' && selectedBookmark.value) {
    emit('edit', selectedBookmark.value)
  }
  if (action === 'delete' && selectedBookmark.value) {
    emit('delete', selectedBookmark.value)
  }
  if (action === 'move' && selectedBookmark.value) {
    emit('move', selectedBookmark.value)
  }
}

function handleClickOutside() {
  contextMenu.value.visible = false
}

onMounted(() => document.addEventListener('click', handleClickOutside))
onUnmounted(() => document.removeEventListener('click', handleClickOutside))
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
