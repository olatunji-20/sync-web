<template>
  <section class="flex flex-col gap-6 px-6.5 py-7 border-b border-[#292D321A]">
    <h2 class="text-lg font-medium text-black-80 leading-[100%]">
      Pinned Bookmarks
    </h2>

    <div
      class="flex gap-3.5 pb-px overflow-x-auto -mx-6 px-6 scrollbar-thin scrollbar-none"
    >
      <div
        v-for="(card, i) in bookmarks"
        :key="i"
        class="shrink-0 w-67.5 rounded-2xl overflow-hidden shadow-sm border border-white/90 relative group"
      >
        <div :class="card.bg" class="h-28 flex items-center justify-center">
          <span class="text-4xl">{{ card.icon }}</span>
        </div>
        <div class="p-3 pt-3.5 border-t border-stone-200 bg-white">
          <div class="flex items-start justify-between gap-2">
            <div class="flex flex-col gap-1">
              <p class="font-medium text-lg text-black-90 truncate">
                {{ card.title }}
              </p>
              <p class="text-sm leading-4.5 text-black-90 truncate">
                {{ card.url }} | {{ card.folder }}
              </p>
              <p class="text-sm text-black-50">{{ card.time }}</p>
            </div>

            <button
              class="p-1 rounded hover:bg-stone-100 text-stone-500 transition-opacity cursor-pointer opacity-0 group-hover:opacity-100"
              aria-label="More options"
              @click.stop="openContextMenu($event, card)"
            >
              <HorizontalEllipses class="fill-black-50 size-4" />
            </button>
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
import { onMounted, onUnmounted, ref } from "vue";
import BookmarkContextMenu from "./BookmarkContextMenu.vue";
import HorizontalEllipses from "./icons/HorizontalEllipses.vue";

defineProps({
  bookmarks: {
    type: Array,
    default: () => [],
  },
});

const emit = defineEmits(["context-action", "edit", "delete", "move"]);

const contextMenu = ref({ visible: false, x: 0, y: 0 });
const selectedBookmark = ref(null);

function openContextMenu(e, card) {
  selectedBookmark.value = card;
  contextMenu.value = { visible: true, x: e.clientX, y: e.clientY };
}

function onContextAction(action) {
  emit("context-action", action, selectedBookmark.value);
  if (action === "edit" && selectedBookmark.value) {
    emit("edit", selectedBookmark.value);
  }
  if (action === "delete" && selectedBookmark.value) {
    emit("delete", selectedBookmark.value);
  }
  if (action === "move" && selectedBookmark.value) {
    emit("move", selectedBookmark.value);
  }
}

function handleClickOutside() {
  contextMenu.value.visible = false;
}

onMounted(() => document.addEventListener("click", handleClickOutside));
onUnmounted(() => document.removeEventListener("click", handleClickOutside));
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
