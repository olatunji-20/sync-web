<template>
  <Teleport to="body">
    <div
      v-show="visible"
      class="fixed inset-0 z-40 flex items-center justify-center p-4 bg-stone-900/50"
      @click.self="$emit('close')"
    >
      <div
        class="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="edit-bookmark-title"
      >
        <!-- Header -->
        <div class="flex items-start justify-between gap-4 px-6 pt-6 pb-4">
          <div>
            <h2
              id="edit-bookmark-title"
              class="text-lg font-medium text-stone-900"
            >
              Edit bookmark
            </h2>
            <p class="text-sm text-stone-500 mt-0.5">
              Customize the saved bookmark information
            </p>
          </div>
          <button
            type="button"
            class="p-2 rounded-lg hover:bg-stone-100 text-stone-500 transition-colors"
            aria-label="Close"
            @click="$emit('close')"
          >
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <!-- Bookmark preview -->
        <div
          class="flex items-center gap-4 px-6 py-4 border-y border-stone-100"
        >
          <div
            class="w-14 h-14 rounded-full bg-stone-200 border border-stone-300 flex items-center justify-center shrink-0 overflow-hidden"
          >
            <span v-if="form.icon" class="text-2xl">{{ form.icon }}</span>
            <svg
              v-else
              class="w-7 h-7 text-stone-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
          <div class="min-w-0 flex-1">
            <p class="font-semibold text-stone-900 truncate">
              {{ form.title || "Website title tag" }}
            </p>
            <p class="text-sm text-stone-500 truncate">
              {{ form.description || "Website title description" }}
            </p>
          </div>
        </div>

        <!-- Form -->
        <form class="py-5 space-y-4" @submit.prevent="onSubmit">
          <div class="px-6">
            <label
              for="edit-collection"
              class="block text-sm font-medium text-stone-700 mb-1.5"
              >Collection</label
            >
            <div class="relative">
              <input
                id="edit-collection"
                v-model="form.collection"
                type="text"
                placeholder="Enter text"
                class="w-full px-4 py-2 rounded-full border border-stone-200 bg-stone-50 focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-400"
              />
              <svg
                class="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400 pointer-events-none"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
          <div class="px-6">
            <label
              for="edit-tags"
              class="block text-sm font-medium text-stone-700 mb-1.5"
              >Tags</label
            >
            <input
              id="edit-tags"
              v-model="form.tags"
              type="text"
              placeholder="Enter text"
              class="w-full px-4 py-2 rounded-full border border-stone-200 bg-stone-50 focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-400"
            />
          </div>
          <div class="px-6">
            <label
              for="edit-url"
              class="block text-sm font-medium text-stone-700 mb-1.5"
              >URL</label
            >
            <input
              id="edit-url"
              v-model="form.url"
              type="text"
              placeholder="Enter text"
              class="w-full px-4 py-2 rounded-full border border-stone-200 bg-stone-50 focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-400"
            />
          </div>

          <hr class="my-4 border-stone-200" />

          <div class="flex justify-end pt-2 px-6">
            <button
              type="submit"
              class="px-8 py-2 cursor-pointer rounded-full bg-[#6B4CF5] text-white hover:bg-[#6B4CF5]/90 transition-colors"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  visible: Boolean,
  bookmark: {
    type: Object,
    default: () => ({}),
  },
});

const emit = defineEmits(["close", "save"]);

const form = ref({
  title: "",
  description: "",
  url: "",
  collection: "",
  tags: "",
  icon: "",
});

watch(
  () => [props.visible, props.bookmark],
  () => {
    if (props.visible && props.bookmark) {
      const b = props.bookmark;
      form.value = {
        title: b.title ?? "",
        description: b.description ?? b.title ?? "",
        url: b.url ?? "",
        collection: b.collection ?? b.folder ?? "",
        tags: typeof b.tags === "string" ? b.tags : "",
        icon: b.icon ?? "",
      };
    }
  },
  { immediate: true },
);

function onSubmit() {
  emit("save", { ...form.value });
  emit("close");
}
</script>
