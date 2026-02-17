<template>
    <div class="font-sans text-gray-800 min-h-screen overflow-x-hidden">
        <!-- Header Navigation -->
        <div class="pt-12 sm:pt-14 md:pt-16 px-4 sm:px-6 md:px-8 bg-[#130E26]">
            <Navbar />
        </div>

        <Pricing />

        <FAQ />

        <Control />

        <Footer />

    </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue';
import Pricing from '@/components/Pricing.vue';
import FAQ from '@/components/FAQ.vue';
import Control from '@/components/Control.vue';
import Footer from '@/components/Footer.vue';

import { ref } from 'vue'

</script>

<style scoped></style>