<template>
    <div class="overflow-hidden">

        <!-- Personalized Collection -->
        <section class="bg-white py-32 md:px-8 px-4">
            <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div class="pr-2 md:pr-8 h-[480px]">
                    <p class="text-[#6B4CF5] font-semibold mb-6 uppercase text-sm">BOOKMARKING</p>
                    <h2 class="text-3xl font-semibold mb-4 text-[#505265]">A Personalized Collection of All My Saved
                        Bookmarks in One
                        Convenient Place</h2>
                    <button type="button"
                        class="bg-[#6B4CF5] text-white border-none px-12 py-3 mt-3 rounded-full text-base cursor-pointer transition-transform hover:-translate-y-0.5"
                        @click="openGetStartedModal">
                        Get Started
                    </button>
                    <hr class="mb-3 md:mt-48 mt-16 border-[#F4F4F5]" />
                    <p class="text-lg text-[#505265] leading-relaxed">Easily store, organize, and access all your
                        saved links in one central location, ensuring that your important websites, articles, and
                        resources are always at your fingertips whenever you need them</p>
                </div>
                <div class="flex justify-center items-center md:h-[480px] h-[300px] bg-[#F8F6FF] relative rounded-xl">
                    <img data-aos="slide-up" src="@/assets/bookmark.webp" alt="sharing Image"
                        class="w-full h-full object-contain">
                </div>
            </div>
        </section>

        <!-- Sync Bookmarks from Multiple Browsers -->
        <section class="bg-white py-32 md:px-8 px-4">
            <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div class="order-2 md:order-1 h-[300px] md:h-[480px] bg-[#F8F6FF] rounded-xl">
                    <img data-aos="slide-up" src="@/assets/folders.webp" alt="folders Image"
                        class="w-full h-full object-contain">
                </div>
                <div class="order-1 md:order-2">
                    <div class="text-[#6B4CF5] font-semibold mb-6 uppercase text-sm">FOLDERS</div>
                    <h2 class="text-3xl font-semibold mb-4 text-[#505265]">Sync Bookmarks from Multiple Browsers</h2>
                    <button type="button"
                        class="bg-[#6B4CF5] text-white border-none px-12 py-3 mt-3 rounded-full text-base cursor-pointer transition-transform hover:-translate-y-0.5"
                        @click="openGetStartedModal">
                        Get Started
                    </button>
                    <hr class="md:mt-64 mt-16 mb-3 border-[#F4F4F5]" />
                    <p class="text-lg text-[#505265] leading-relaxed">Import and synchronize bookmarks from all
                        your connected browsers in one place.</p>
                </div>
            </div>
        </section>

        <!-- Bookmark, Link, and Collect -->
        <section class="bg-white py-32 md:px-8 px-4">
            <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div class="pr-0 md:pr-8">
                    <p class="text-[#6B4CF5] font-semibold mb-6 uppercase text-sm">SHARING</p>
                    <h2 class="text-3xl font-semibold mb-4 text-[#505265]">Bookmarks, links, and collections that have
                        been
                        shared with me by others for easy access and collaboration.</h2>
                    <button type="button"
                        class="bg-[#6B4CF5] text-white border-none px-12 py-3 mt-3 rounded-full text-base cursor-pointer transition-transform hover:-translate-y-0.5"
                        @click="openGetStartedModal">
                        Get Started
                    </button>
                    <hr class="md:mt-38 mt-16 mb-3 border-[#F4F4F5]" />
                    <p class="text-lg text-[#505265] leading-relaxed">A comprehensive collection of bookmarks and
                        organized folders that have been shared with you by others, allowing for seamless collaboration
                        and easy access to important links.</p>
                </div>
                <div class="flex justify-center items-center relative md:h-[480px] h-[300px] bg-[#F8F6FF] rounded-xl">
                    <img data-aos="slide-up" src="@/assets/sharing.webp" alt="bookmarking Image"
                        class="w-full h-full object-contain">
                </div>
            </div>
        </section>

        <!-- How It Works -->
        <section class="py-32 md:px-8 px-2 bg-[#F8F6FF]">
            <div class="max-w-7xl text-center mx-auto">
                <h2 class="text-4xl font-semibold mb-4 text-[#505265]">How It Works</h2>
                <p class="text-lg text-[#505265] md:w-[55%] w-full mx-auto mb-8 leading-relaxed">Save, organize, and
                    access your
                    favorite links
                    effortlessly with smart collections, seamless sharing, and automatic backups</p>

                <div
                    class="my-16 mx-auto flex flex-col md:flex-row justify-center items-center md:items-end pt-12 md:gap-0 gap-8">
                    <div
                        class="border rounded-[50px] flex items-center justify-center border-[#65558F12] bg-white w-[95%] md:w-[450px] md:h-[370px] h-[320px] shrink-0 z-10">
                        <img data-aos="slide-up" src="@/assets/how-1.webp" alt="install Image"
                            class="w-full h-full object-cover">
                    </div>
                    <div
                        class="border rounded-[50px] flex items-center justify-center border-[#65558F12] bg-white w-[95%] md:w-[450px] md:h-[370px] h-[320px] shrink-0 relative  bottom-0 md:bottom-16 mx-0 md:-mx-10">
                        <img data-aos="slide-down" src="@/assets/how-2.webp" alt="install Image"
                            class="w-full h-full object-cover">
                    </div>
                    <div
                        class="border rounded-[50px] flex items-center justify-center border-[#65558F12] bg-white w-[95%] md:w-[450px] md:h-[370px] h-[320px] shrink-0  z-10">
                        <img data-aos="slide-up" src="@/assets/how-3.webp" alt="install Image"
                            class="w-full h-full object-cover">
                    </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 mt-12 text-left">
                    <div class="p-2 md:p-6">
                        <h3 class="mb-4 font-semibold text-xl text-[#3A3D52]">Install the Extension</h3>
                        <p class="text-[#505265] leading-relaxed text-xl">Add our extension to your browser and start
                            saving
                            bookmarks instantly.</p>
                    </div>
                    <div class="p-2 md:p-6">
                        <h3 class="mb-4 font-semibold text-xl text-[#3A3D52]">Sign Up</h3>
                        <p class="text-[#505265] leading-relaxed text-xl">Create your account in just a few clicks
                            and start
                            saving, organizing, and sharing your favorite links effortlessly.</p>
                    </div>
                    <div class="p-2 md:p-6">
                        <h3 class="mb-4 font-semibold text-xl text-[#3A3D52]">Start Organizing</h3>
                        <p class="text-[#505265] leading-relaxed text-xl">Sort your bookmarks into easy-to-navigate
                            folders.</p>
                    </div>
                </div>
            </div>
        </section>


    </div>
</template>

<script setup>
import { inject } from 'vue'
const openGetStartedModal = inject('openGetStartedModal', () => { });

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
    duration: 700,
});
</script>