<template>
    <div class="font-sans text-gray-800">

        <!-- Hero Section -->
        <section
            class="bg-linear-to-br from-purple-dark to-purple-medium py-16 px-8 text-center relative overflow-hidden">
            <Navbar />
            <!-- <div
                class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.1),transparent_70%)] pointer-events-none">
            </div> -->
            <div class="border border-gray-400 bg-[#1F2132] w-fit px-6 py-2 mx-auto mt-24 mb-6 rounded-full">
                <p class="text-white text-lg"> <span class="text-xl">✨</span> Universal bookmark sync, simplified.</p>
            </div>
            <div class="max-w-xl mx-auto relative z-10 mt-4 mb-24 border">
                <h1 class="text-5xl md:text-6xl text-white mb-6 font-medium leading-[1.3]">Sync Bookmarks Across All
                    Browsers</h1>
                <p class="text-xl text-white/90 mb-10">Access and organize your bookmarks across any browser and device
                    with seamless syncing.</p>
                <div class="flex gap-4 justify-center">
                    <button
                        class="text-white bg-[#6B4CF5] border-none px-8 py-4 rounded-full font-semibold text-base cursor-pointer flex items-center gap-2 transition-transform hover:-translate-y-0.5">
                        Download plugin
                        <span class="text-base">
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8.89925 0.545588L0.420991 8.73295L8.89925 0.545588ZM8.77458 7.688L8.89925 0.545588L8.77458 7.688ZM1.75684 0.420917L8.89925 0.545588L1.75684 0.420917Z"
                                    fill="#F0EDFE" />
                                <path
                                    d="M8.89925 0.545588L0.420991 8.73295M8.89925 0.545588L8.77458 7.688M8.89925 0.545588L1.75684 0.420917"
                                    stroke="#F0EDFE" stroke-width="0.841869" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>

                        </span>
                    </button>
                    <button
                        class="bg-[#3A3D52] text-white border border-gray-600 px-8 py-4 rounded-full font-semibold text-base cursor-pointer flex items-center gap-2">
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10.7354 7.71823L8.04397 5.92336C7.91707 5.83869 7.76954 5.7901 7.61716 5.78277C7.46478 5.77545 7.31327 5.80966 7.17883 5.88177C7.04438 5.95387 6.93206 6.06116 6.85387 6.19215C6.77567 6.32314 6.73454 6.47292 6.73487 6.62548V10.2144C6.73484 10.3668 6.7762 10.5163 6.85452 10.6471C6.93284 10.7778 7.04518 10.8849 7.17957 10.9568C7.31396 11.0287 7.46534 11.0628 7.61758 11.0554C7.76981 11.048 7.91719 10.9994 8.04397 10.9148L10.7354 9.11994C10.8507 9.04306 10.9453 8.9389 11.0107 8.81671C11.076 8.69452 11.1102 8.55809 11.1102 8.4195C11.1102 8.28092 11.076 8.14448 11.0107 8.02229C10.9453 7.90011 10.8507 7.79511 10.7354 7.71823Z"
                                stroke="#CCCCCC" stroke-width="1.68374" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path
                                d="M15.9954 8.41868C15.9954 9.41368 15.7995 10.3989 15.4187 11.3182C15.0379 12.2375 14.4798 13.0727 13.7762 13.7763C13.0727 14.4799 12.2374 15.038 11.3181 15.4188C10.3989 15.7995 9.41362 15.9955 8.41862 15.9955C7.42362 15.9955 6.43836 15.7995 5.51909 15.4188C4.59983 15.038 3.76457 14.4799 3.061 13.7763C2.35742 13.0727 1.79932 12.2375 1.41855 11.3182C1.03778 10.3989 0.841797 9.41368 0.841797 8.41868C0.841797 6.40918 1.64007 4.48199 3.061 3.06106C4.48193 1.64013 6.40912 0.841858 8.41862 0.841858C10.4281 0.841858 12.3553 1.64013 13.7762 3.06106C15.1972 4.48199 15.9954 6.40918 15.9954 8.41868Z"
                                stroke="#CCCCCC" stroke-width="1.68374" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>

                        How it works
                    </button>
                </div>
            </div>
        </section>

        <!-- Product Showcase -->
        <section class="bg-gradient-to-br from-purple-dark to-purple-medium pt-16 px-8">
            <div class="max-w-7xl mx-auto border-4 border-red-500">
                <img src="../assets/ipad.svg" alt="Product Showcase" class="w-full h-full object-cover" />
            </div>
        </section>

        <!-- Smarter Saving & Sharing -->
        <section class="bg-white text-center py-32 px-8 border-4 border-blue-500">
            <div class="max-w-7xl mx-auto">
                <h2 class="text-4xl mb-4 text-gray-900 font-semibold">Smarter Saving & Sharing</h2>
                <p class="text-lg text-gray-600 mb-8 leading-relaxed w-[58%] mx-auto">Save more than just
                    bookmarks—organize, access,
                    and share your favorite links effortlessly, all in one smart and convenient place.</p>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                    <div class="text-center p-8 rounded-xl bg-gray-50">
                        <div class="size-[88px] mx-auto mb-4 border border-yellow-700"></div>
                        <h3 class="mb-2 font-semibold">Google Chrome</h3>
                        <p class="text-gray-600 mb-6">Install our Chrome extension to start syncing and organizing
                            bookmarks instantly</p>
                        <button
                            class="bg-gradient-to-r from-[#4285F4] via-[#34A853] via-[#FBBC05] to-[#EA4335] text-white border-none px-6 py-3 rounded-full font-semibold cursor-pointer">
                            Download for Chrome
                        </button>
                    </div>
                    <div class="text-center p-8 rounded-xl bg-gray-50">
                        <div class="size-[88px] mx-auto mb-4 border border-yellow-700"></div>
                        <h3 class="mb-2 font-semibold">Opera</h3>
                        <p class="text-gray-600 mb-6">Start syncing across devices add the extension directly to Opera
                            from the Chrome Web Store</p>
                        <button
                            class="bg-[#FF1B2D] text-white border-none px-6 py-3 rounded-full font-semibold cursor-pointer">
                            Download for Opera
                        </button>
                    </div>
                    <div class="text-center p-8 rounded-xl bg-gray-50">
                        <div class="size-[88px] mx-auto mb-4 border border-yellow-700"></div>
                        <h3 class="mb-2 font-semibold">Other Browsers</h3>
                        <p class="text-gray-600 mb-6">Install the extension and get instant access to all your
                            bookmarks—everywhere</p>
                        <button
                            class="bg-gradient-to-br from-purple-medium to-purple-light text-white border-none px-6 py-3 rounded-full font-semibold cursor-pointer">
                            Download plugin
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <!-- Invite Others, Organize Together -->
        <section class="bg-white border-2 border-green-400 py-32 px-8">
            <div class="max-w-7xl mx-auto text-center">
                <p class="leading-relaxed text-[#6B4CF5] font-medium">BOOKMARKING</p>
                <h2 class="text-3xl font-semibold mb-4 text-gray-900">Invite Others, Organize Together</h2>
                <div class="border-2 border-purple-400 w-[700px] h-[600px] my-24 mx-auto"></div>
                <p class="text-lg text-gray-600 mb-8 leading-relaxed w-[55%] mx-auto">Create shared folders, manage
                    permissions, and collaborate on your favorite saved links with ease. Whether you’re working on a
                    project or sharing resources, it’s all possible in one organized space</p>

                <button class="bg-[#6B4CF5] text-white border-none px-6 py-3 rounded-full font-semibold cursor-pointer">
                    Download plugin
                </button>
            </div>
        </section>


        <Mid />
        <Pricing />

        <!-- FAQ Section -->
        <FAQ />

        <!-- Control Section -->
        <Control />

        <!-- Footer -->
        <Footer />
    </div>
</template>

<script setup>
// Component logic can be added here if needed
import Navbar from '../components/Navbar.vue'
import Mid from '../components/Mid.vue'
import Pricing from '../components/Pricing.vue'
import FAQ from '../components/FAQ.vue'
import Control from '../components/Control.vue'
import Footer from '../components/Footer.vue'
</script>

<style scoped>
.toggle-checkbox {
    opacity: 0;
    width: 0;
    height: 0;
}

.toggle-label {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 30px;
    transition: 0.3s;
}

.toggle-label:before {
    position: absolute;
    content: "";
    height: 22px;
    width: 22px;
    left: 4px;
    bottom: 4px;
    background: white;
    border-radius: 50%;
    transition: 0.3s;
}

.toggle-checkbox:checked+.toggle-label {
    background: rgba(255, 255, 255, 0.5);
}

.toggle-checkbox:checked+.toggle-label:before {
    transform: translateX(30px);
}
</style>
