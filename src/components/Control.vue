<template>
    <!-- Take Control Section -->
    <section class="py-32 md:px-8 px-2 bg-[#F8F6FF]">
        <div
            class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 md:gap-16 gap-8 bg-[#6B4CF5] rounded-3xl md:px-12 px-4 py-20 items-center">
            <div class="pr-0 md:pr-8 w-full md:w-[90%]">
                <h2 class="text-2xl sm:text-[36px] font-semibold text-[#E6E6E6] mb-8">Take Control of Your Bookmarks
                </h2>
                <p class="text-base sm:text-[22px] text-[#E6E6E6] mb-8 leading-relaxed">Save, organize, and access your
                    favorite links
                    anytime, anywhere—across all your browsers and devices.</p>
                <button type="button"
                    class="bg-white text-[#6B4CF5] px-12 py-3 mb-8 md:mb-24 rounded-full font-medium text-base cursor-pointer"
                    @click="openGetStartedModal">
                    Get Started
                </button>
            </div>
            <div class="flex justify-center items-center md:h-full h-[300px]">
                <div class="relative w-full h-full">
                    <img src="@/assets/control.png" alt="Control" class="w-full h-full object-contain">
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { inject } from 'vue'
const openGetStartedModal = inject('openGetStartedModal', () => { })
</script>