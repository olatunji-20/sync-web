<template>
    <Teleport to="body">
        <Transition name="modal">
            <div v-if="modelValue"
                class="fixed inset-0 bg-black/50 flex items-center justify-center z-9999 p-3 sm:p-4 md:p-6 lg:p-8"
                role="dialog" aria-modal="true" aria-labelledby="get-started-title" @click.self="close">
                <div
                    class="modal-inner relative bg-white rounded-xl sm:rounded-2xl w-[90vw] max-w-[90vw] h-[90vh] max-h-[90vh] overflow-y-auto shadow-2xl p-4 sm:p-6 md:p-8 lg:p-10">
                    <button type="button"
                        class="absolute top-3 right-3 sm:top-4 sm:right-4 md:top-6 md:right-6 p-2 text-[#3A3D52] hover:bg-gray-100 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#6B4CF5] focus:ring-offset-2"
                        aria-label="Close" @click="close">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <!-- Form view -->
                    <div v-if="!submitted" class="pt-8 sm:pt-10 px-2 sm:px-4 pb-6 sm:pb-8">
                        <h2 id="get-started-title"
                            class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-2 leading-tight">
                            Talk to us about your organization need
                        </h2>
                        <p class="text-sm sm:text-base md:text-lg text-[#505265] mb-4 sm:mb-6 md:mb-8 leading-relaxed">
                            Our Enterprise solution is best for large companies with advanced security and support
                            requirements.
                        </p>
                        <form class="w-full" @submit.prevent="onSubmit">
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6 md:gap-x-12">
                                <div class="flex flex-col gap-1.5 mt-3 sm:mt-4">
                                    <label for="business-name" class="text-sm sm:text-base font-medium text-[#3A3D52]">
                                        Business name
                                    </label>
                                    <input id="business-name" v-model="form.businessName" type="text"
                                        placeholder="e.g. Acme Inc"
                                        class="w-full px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base text-gray-900 bg-white border border-gray-200 rounded-lg placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6B4CF5] focus:border-[#6B4CF5]" />
                                </div>
                                <div class="flex flex-col gap-1.5 mt-3 sm:mt-4">
                                    <label for="support" class="text-sm sm:text-base font-medium text-[#3A3D52]">
                                        How can we support you?
                                    </label>
                                    <input id="support" v-model="form.support" type="text"
                                        placeholder="e.g. Enterprise sync & SSO"
                                        class="w-full px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base text-gray-900 bg-white border border-gray-200 rounded-lg placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6B4CF5] focus:border-[#6B4CF5]" />
                                </div>
                                <div class="flex flex-col gap-1.5 mt-3 sm:mt-4">
                                    <label for="first-name" class="text-sm sm:text-base font-medium text-[#3A3D52]">
                                        First name
                                    </label>
                                    <input id="first-name" v-model="form.firstName" type="text" placeholder="e.g. John"
                                        class="w-full px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base text-gray-900 bg-white border border-gray-200 rounded-lg placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6B4CF5] focus:border-[#6B4CF5]" />
                                </div>
                                <div class="flex flex-col gap-1.5 mt-3 sm:mt-4">
                                    <label for="last-name" class="text-sm sm:text-base font-medium text-[#3A3D52]">
                                        Last name
                                    </label>
                                    <input id="last-name" v-model="form.lastName" type="text" placeholder="e.g. Doe"
                                        class="w-full px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base text-gray-900 bg-white border border-gray-200 rounded-lg placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6B4CF5] focus:border-[#6B4CF5]" />
                                </div>
                                <div class="flex flex-col gap-1.5 mt-3 sm:mt-4">
                                    <label for="company" class="text-sm sm:text-base font-medium text-[#3A3D52]">
                                        Company
                                    </label>
                                    <input id="company" v-model="form.company" type="text" placeholder="e.g. Acme Inc"
                                        class="w-full px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base text-gray-900 bg-white border border-gray-200 rounded-lg placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6B4CF5] focus:border-[#6B4CF5]" />
                                </div>
                                <div class="flex flex-col gap-1.5 mt-3 sm:mt-4">
                                    <label for="country" class="text-sm sm:text-base font-medium text-[#3A3D52]">
                                        Country
                                    </label>
                                    <input id="country" v-model="form.country" type="text"
                                        placeholder="e.g. United States"
                                        class="w-full px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base text-gray-900 bg-white border border-gray-200 rounded-lg placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6B4CF5] focus:border-[#6B4CF5]" />
                                </div>
                            </div>
                            <button type="submit"
                                class="w-full mt-4 sm:mt-6 md:mt-10 px-4 py-3 sm:px-6 sm:py-3.5 text-sm sm:text-base md:text-lg font-semibold text-white bg-[#6B4CF5] rounded-full cursor-pointer hover:brightness-110 transition-[filter]">
                                Contact Sales
                            </button>
                        </form>
                    </div>
                    <!-- Success view -->
                    <div v-else
                        class="flex flex-col items-center justify-center min-h-full text-center px-4 sm:px-6 py-8 sm:py-12">
                        <div class="flex flex-col items-center gap-4 sm:gap-6 w-full">
                            <div class="w-14 h-14 sm:w-16 sm:h-16 md:w-32 md:h-32 rounded-full bg-[#6B4CF5] flex items-center justify-center shrink-0"
                                aria-hidden="true">
                                <svg class="w-7 h-7 sm:w-8 sm:h-8 md:w-16 md:h-16 text-white" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <path d="M20 6L9 17l-5-5" />
                                </svg>
                            </div>
                            <h2
                                class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-900 leading-tight">
                                We've gotten your response
                            </h2>
                            <p class="text-sm sm:text-[20px] text-[#505265] leading-relaxed w-[60%] mx-auto">
                                Thanks for reaching out! We've got your enquiry and will be in touch soon to help you
                                get started.
                            </p>
                            <router-link to="/"
                                class="w-full py-3 sm:py-3.5 mt-8 font-semibold text-white bg-[#6B4CF5] rounded-full text-center no-underline hover:brightness-110 transition-[filter] mt-2"
                                @click="close">
                                Go to home
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
    modelValue: { type: Boolean, default: false }
})

const emit = defineEmits(['update:modelValue'])

const submitted = ref(false)

const form = ref({
    businessName: '',
    support: '',
    firstName: '',
    lastName: '',
    company: '',
    country: ''
})

function close() {
    emit('update:modelValue', false)
}

function onSubmit() {
    // Placeholder: could POST to an API
    submitted.value = true
}

// Reset success state and body scroll when modal opens/closes
watch(() => props.modelValue, (open) => {
    if (open) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = ''
        submitted.value = false
    }
})
</script>

<style scoped>
/* Vue Transition: overlay fade + modal scale */
.modal-enter-active,
.modal-leave-active {
    transition: opacity 0.2s ease;
}

.modal-enter-active .modal-inner,
.modal-leave-active .modal-inner {
    transition: transform 0.2s ease;
}

.modal-enter-from,
.modal-leave-to {
    opacity: 0;
}

.modal-enter-from .modal-inner,
.modal-leave-to .modal-inner {
    transform: scale(0.96) translateY(-8px);
}
</style>
