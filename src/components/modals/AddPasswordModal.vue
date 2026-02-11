<template>
  <Teleport to="body">
    <div v-show="visible" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/50"
      @click.self="$emit('close')">
      <div class="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden" role="dialog" aria-modal="true"
        aria-labelledby="add-password-title">
        <!-- Header -->
        <div class="flex items-start justify-between gap-4 px-6 pt-6 pb-4">
          <div>
            <h2 id="add-password-title" class="text-lg font-medium text-stone-800">Add a password for security</h2>
            <p class="text-sm text-stone-500 mt-0.5">Restrict access by setting a password</p>
          </div>
          <button type="button" class="p-2 rounded-lg hover:bg-stone-100 text-stone-500 transition-colors"
            aria-label="Close" @click="$emit('close')">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <hr class="my-4 border-stone-200">
        <!-- Form -->
        <form class="pb-6 space-y-4" @submit.prevent="onSubmit">
          <div class="px-6">
            <label for="add-password-enter" class="block text-sm font-medium text-stone-700 mb-1.5">Enter
              password</label>
            <div class="relative">
              <input id="add-password-enter" v-model="password" :type="showPassword ? 'text' : 'password'"
                placeholder="Enter text"
                class="w-full px-4 py-2 pr-11 rounded-full border border-stone-200 bg-stone-50 focus:outline-none focus:ring-2 focus:ring-[#6B4CF5]/30 focus:border-[#6B4CF5]" />
              <button type="button"
                class="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded text-stone-400 hover:text-stone-600"
                aria-label="Toggle password visibility" @click="showPassword = !showPassword">
                <svg v-if="showPassword" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a9.98 9.98 0 01-1.563 3.029m5.858-.908a3 3 0 10-4.243-4.243m-5.878 5.878L3.31 9.877m12.132 12.132L9.878 9.878" />
                </svg>
                <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </button>
            </div>
          </div>
          <div class="px-6">
            <label for="add-password-reenter" class="block text-sm font-medium text-stone-700 mb-1.5">Re-enter
              password</label>
            <div class="relative">
              <input id="add-password-reenter" v-model="passwordConfirm"
                :type="showPasswordConfirm ? 'text' : 'password'" placeholder="Enter text"
                class="w-full px-4 py-2 pr-11 rounded-full border border-stone-200 bg-stone-50 focus:outline-none focus:ring-2 focus:ring-[#6B4CF5]/30 focus:border-[#6B4CF5]" />
              <button type="button"
                class="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded text-stone-400 hover:text-stone-600"
                aria-label="Toggle password visibility" @click="showPasswordConfirm = !showPasswordConfirm">
                <svg v-if="showPasswordConfirm" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a9.98 9.98 0 01-1.563 3.029m5.858-.908a3 3 0 10-4.243-4.243m-5.878 5.878L3.31 9.877m12.132 12.132L9.878 9.878" />
                </svg>
                <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </button>
            </div>
            <p v-if="mismatch" class="text-sm text-red-500 mt-1">Passwords do not match</p>
          </div>
          <hr class="my-4 border-stone-200">
          <div class="flex justify-end pt-2 px-6">
            <button type="submit"
              class="px-8 py-2 rounded-full text-sm cursor-pointer bg-[#24273F] text-white hover:bg-[#24273F]/80 transition-colors">
              Save Password
            </button>
          </div>
        </form>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  visible: Boolean,
})

const emit = defineEmits(['close', 'save'])

const password = ref('')
const passwordConfirm = ref('')
const showPassword = ref(false)
const showPasswordConfirm = ref(false)
const mismatch = ref(false)

watch(
  () => [password.value, passwordConfirm.value],
  () => { mismatch.value = false },
  { deep: true }
)

watch(
  () => props.visible,
  (v) => {
    if (!v) {
      password.value = ''
      passwordConfirm.value = ''
      mismatch.value = false
    }
  }
)

function onSubmit() {
  mismatch.value = false
  if (password.value !== passwordConfirm.value) {
    mismatch.value = true
    return
  }
  emit('save', { password: password.value })
  emit('close')
}
</script>
