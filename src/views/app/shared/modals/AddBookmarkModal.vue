<template>
  <Teleport to="body">
    <div
      v-show="visible"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/50"
      @click.self="$emit('close')"
    >
      <div
        class="w-full max-w-lg bg-white rounded-2xl shadow-xl overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="add-bookmark-title"
      >
        <!-- Header -->
        <div class="text-center gap-4 p-6">
          <div>
            <div
              class="size-10 rounded-full mb-3 flex items-center justify-center mx-auto bg-stone-100"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5 14.75H10C9.59 14.75 9.25 14.41 9.25 14C9.25 13.59 9.59 13.25 10 13.25H12.5C15.12 13.25 17.25 11.12 17.25 8.5C17.25 5.88 15.12 3.75 12.5 3.75H7.5C4.88 3.75 2.75 5.88 2.75 8.5C2.75 9.6 3.14 10.67 3.84 11.52C4.1 11.84 4.06 12.31 3.74 12.58C3.42 12.84 2.95 12.8 2.68 12.48C1.76 11.36 1.25 9.95 1.25 8.5C1.25 5.05 4.05 2.25 7.5 2.25H12.5C15.95 2.25 18.75 5.05 18.75 8.5C18.75 11.95 15.95 14.75 12.5 14.75Z"
                  fill="#24273F"
                />
                <path
                  d="M16.5 21.75H11.5C8.05 21.75 5.25 18.95 5.25 15.5C5.25 12.05 8.05 9.25 11.5 9.25H14C14.41 9.25 14.75 9.59 14.75 10C14.75 10.41 14.41 10.75 14 10.75H11.5C8.88 10.75 6.75 12.88 6.75 15.5C6.75 18.12 8.88 20.25 11.5 20.25H16.5C19.12 20.25 21.25 18.12 21.25 15.5C21.25 14.4 20.86 13.33 20.16 12.48C19.9 12.16 19.94 11.69 20.26 11.42C20.58 11.15 21.05 11.2 21.32 11.52C22.25 12.64 22.76 14.05 22.76 15.5C22.75 18.95 19.95 21.75 16.5 21.75Z"
                  fill="#24273F"
                />
              </svg>
            </div>
            <h2
              id="add-bookmark-title"
              class="text-lg font-semibold text-stone-900"
            >
              Add bookmark manually
            </h2>
            <p class="text-sm text-stone-500 mt-0.5">{{ stepLabel }}</p>
          </div>
          <!-- <button type="button" class="p-2 rounded-lg hover:bg-stone-100 text-stone-500 transition-colors"
            aria-label="Close" @click="$emit('close')">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button> -->
        </div>

        <!-- URL input + Import -->
        <div class="px-6 pb-6 pt-1 flex items-center gap-3">
          <input
            v-model="url"
            type="url"
            placeholder="Enter URL..."
            class="flex-1 min-w-0 px-4 py-2 rounded-full border border-stone-200 bg-white text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#6B4CF5]/30 focus:border-[#6B4CF5]"
            @keydown.enter.prevent="onImport"
          />
          <button
            type="button"
            class="shrink-0 px-5 py-2 rounded-full bg-[#6B4CF5] text-white hover:bg-[#6B4CF5]/80 transition-colors cursor-pointer"
            @click="onImport"
          >
            Import
          </button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { computed, ref, watch } from "vue";

const props = defineProps({
  visible: { type: Boolean, default: false },
});

const emit = defineEmits(["close", "import"]);

const url = ref("");
const isFetching = ref(false);

const stepLabel = computed(() =>
  isFetching.value
    ? "Input link > Fetching link details"
    : "Add the URL and we’ll handle the logo and meta tags for you",
);

watch(
  () => props.visible,
  (v) => {
    if (v) url.value = "";
  },
);

function onImport() {
  const value = url.value?.trim();
  if (!value) return;
  isFetching.value = true;
  emit("import", { url: value });
  // Reset after a short delay for demo; parent can close modal when done
  setTimeout(() => {
    isFetching.value = false;
  }, 1500);
}
</script>
