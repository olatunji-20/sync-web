<template>
    <div class="font-sans text-gray-800 min-h-screen">
        <!-- Header Navigation -->
        <div class="border border-red-400 pt-16 px-8 bg-[#130E26]">
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