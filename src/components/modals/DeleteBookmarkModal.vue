<template>
  <Teleport to="body">
    <div v-show="visible" class="fixed inset-0 z-40 flex items-center justify-center p-4 bg-stone-900/50"
      @click.self="$emit('cancel')">
      <div class="w-full max-w-sm bg-white rounded-2xl shadow-xl overflow-hidden" role="dialog" aria-modal="true"
        aria-labelledby="delete-bookmark-title">
        <div class="pt-8 pb-6 text-center">
          <!-- Trash icon (orange outline) -->
          <div class="flex justify-center items-center mx-auto mb-4 size-12 bg-orange-50 rounded-full">
            <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M24.4639 6.96625C20.5846 6.58183 16.6821 6.38379 12.7913 6.38379C10.4847 6.38379 8.17814 6.50028 5.87158 6.73327L3.49512 6.96625"
                stroke="#FF2F00" stroke-width="1.7474" stroke-linecap="round" stroke-linejoin="round" />
              <path
                d="M9.90234 5.78992L10.1586 4.26386C10.345 3.15718 10.4848 2.33008 12.4535 2.33008H15.5057C17.4744 2.33008 17.6258 3.20378 17.8006 4.27551L18.0569 5.78992"
                stroke="#FF2F00" stroke-width="1.7474" stroke-linecap="round" stroke-linejoin="round" />
              <path
                d="M21.9586 10.6475L21.2014 22.3783C21.0732 24.2073 20.9684 25.6285 17.7182 25.6285H10.2394C6.98921 25.6285 6.88437 24.2073 6.75623 22.3783L5.99902 10.6475"
                stroke="#FF2F00" stroke-width="1.7474" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M12.0342 19.2212H15.9134" stroke="#FF2F00" stroke-width="1.7474" stroke-linecap="round"
                stroke-linejoin="round" />
              <path d="M11.0664 14.5615H16.8911" stroke="#FF2F00" stroke-width="1.7474" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
          </div>
          <h2 id="delete-bookmark-title" class="text-lg font-medium text-stone-900">Delete bookmark</h2>
          <p class="text-sm text-stone-500 mt-2 px-6">
            Are you sure you want to delete this bookmark, you won't be able to restore it after this action has been
            completed
          </p>
          <hr class="my-4 border-stone-200">
          <div class="flex items-center justify-center gap-3 mt-6 px-6">
            <button type="button"
              class="flex-1 px-4 py-2 rounded-full cursor-pointer bg-stone-100 text-stone-700 font-medium hover:bg-stone-200 transition-colors"
              @click="$emit('cancel')">
              No, don't delete
            </button>
            <button type="button"
              class="flex-1 px-4 py-2 rounded-full cursor-pointer bg-red-500 text-white hover:bg-red-600/90 transition-colors"
              @click="$emit('confirm')">
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
