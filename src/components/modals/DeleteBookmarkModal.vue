<template>
  <Teleport to="body">
    <div
      v-show="visible"
      class="fixed inset-0 z-40 flex items-center justify-center p-4 bg-stone-900/50"
      @click.self="$emit('cancel')"
    >
      <div
        class="w-full max-w-sm bg-white rounded-2xl shadow-xl overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="delete-bookmark-title"
      >
        <div class="px-6 pt-8 pb-6 text-center">
          <!-- Trash icon (orange outline) -->
          <div class="flex justify-center mb-4">
            <svg class="w-14 h-14 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>
          </div>
          <h2 id="delete-bookmark-title" class="text-lg font-bold text-stone-900">Delete bookmark</h2>
          <p class="text-sm text-stone-500 mt-2 px-2">
            Are you sure you want to delete this bookmark, you won't be able to restore it after this action has been completed
          </p>
          <div class="flex items-center justify-center gap-3 mt-6">
            <button
              type="button"
              class="flex-1 px-4 py-2.5 rounded-xl border border-stone-200 bg-stone-100 text-stone-700 font-medium hover:bg-stone-200 transition-colors"
              @click="$emit('cancel')"
            >
              No, don't delete
            </button>
            <button
              type="button"
              class="flex-1 px-4 py-2.5 rounded-xl bg-red-500 text-white font-medium hover:bg-red-600 transition-colors"
              @click="$emit('confirm')"
            >
              Yes, delete
            </button>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
defineProps({
  visible: Boolean,
})

defineEmits(['cancel', 'confirm'])
</script>
