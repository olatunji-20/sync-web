<template>
  <div class="flex h-screen overflow-hidden bg-stone-100">
    <AppSidebar
      :user="user"
      :counts="counts"
      @create-folder="$emit('create-folder')"
      @upgrade="$emit('upgrade')"
    />

    <main class="flex-1 min-w-0 min-h-0 bg-white overflow-auto">
      <slot />
    </main>
  </div>
</template>

<script setup>
import AppSidebar from "./sections/AppSidebar.vue";

defineProps({
  user: {
    type: Object,
    default: () => ({ name: "", email: "" }),
  },
  counts: {
    type: Object,
    default: () => ({ allBookmarks: 0, unsorted: 0, collection: 0 }),
  },
});

defineEmits(["create-folder", "upgrade"]);
</script>
