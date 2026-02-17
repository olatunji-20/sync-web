<template>
    <!-- Take Control Section -->
    <section class="py-32 px-8 bg-[#F8F6FF] border-2 border-red-400">
        <div
            class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 bg-[#6B4CF5] rounded-3xl px-12 py-20 items-center border-2 border-blue-400">
            <div class="pr-8 w-[80%] border-2 border-green-400">
                <h2 class="text-5xl font-medium mb-8 text-white">Take Control of Your Bookmarks</h2>
                <p class="text-xl text-white mb-8 leading-relaxed">Save, organize, and access your favorite links
                    anytime, anywhere—across all your browsers and devices.</p>
                <button class="bg-white text-[#6B4CF5] px-8 py-3 mb-24 rounded-full text-base cursor-pointer">
                    Get Started
                </button>
            </div>
            <div class="flex justify-center items-center border-2 h-full border-yellow-400">
                <div class="relative w-full h-full bg-[url('@/assets/dew.svg')] bg-contain bg-center bg-no-repeat">
                    <div class="absolute top-28 left-8 w-[350px] h-[286px] rounded-2xl rotate-[10deg]">
                        <img src="@/assets/cont-2.svg" alt="Control" class="w-full h-full rotate-[-10deg] object-cover">
                    </div>
                    <div class="absolute top-5 right-0 w-[315px] h-[280px] bg-[#FFF] rounded-2xl -rotate-[10deg]">
                        <img src="@/assets/insta.svg" alt="Control" class="w-full h-full object-cover">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>