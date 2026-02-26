<template>
    <div class="font-sans text-gray-800">

        <!-- Hero Section -->
        <div class="bg-[#130E26] hero-container bg-[url('@/assets/Sunshine.png')] bg-cover bg-center bg-no-repeat">
            <section class="py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 text-center relative overflow-hidden">
                <Navbar />
                <div
                    class="border border-[#E4E4EC33] bg-[#1F2132] w-fit max-w-[90vw] px-4 sm:px-6 py-2 mx-auto mt-12 sm:mt-16 md:mt-24 mb-4 sm:mb-6 rounded-full">
                    <span class="text-white text-sm sm:text-base md:text-lg flex items-center gap-1.5">
                        <span class="size-[24px]">
                            <svg width="24" height="24" viewBox="0 0 32 32" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M11 0C11 8.4448 6.43626 16 0 16C6.43626 16 11 23.5557 11 32C11 23.5557 15.5637 16 22 16C15.5637 16 11 8.4448 11 0Z"
                                    fill="#F0E691" />
                                <path
                                    d="M24.0003 16C24.0003 20.2229 21.7192 24 18.5 24C21.7192 24 24.0003 27.7781 24.0003 32C24.0003 27.7781 26.2813 24 29.5005 24C26.2813 24 24.0003 20.2229 24.0003 16Z"
                                    fill="#F0E691" />
                                <path
                                    d="M26.5 0C26.5 4.2224 24.219 8 20.9998 8C24.2184 8 26.5 11.7781 26.5 16C26.5 11.7781 28.7811 8 32.0003 8C28.7811 8 26.5 4.2224 26.5 0Z"
                                    fill="#F0E691" />
                            </svg>
                        </span>
                        Universal bookmark sync, simplified.
                    </span>
                </div>
                <div class="max-w-2xl mx-auto relative z-10 mt-4 mb-12 sm:mb-16 md:mb-24 px-0">
                    <h1
                        class="text-3xl sm:text-4xl md:text-5xl lg:text-[72px] text-white mb-4 sm:mb-6 font-medium leading-[1.3]">
                        Sync Bookmarks Across All
                        Browsers</h1>
                    <p
                        class="text-lg w-[88%] mx-auto md:w-auto font-normal sm:text-lg md:text-[32px] text-[#CCCCCC] mb-6 sm:mb-10">
                        Access
                        and
                        organize your
                        bookmarks across any browser and device
                        with seamless syncing.</p>
                    <div
                        class="flex flex-col w-[60%] md:w-auto sm:flex-row gap-3 sm:gap-4 justify-center items-center mx-auto">
                        <button
                            class="text-[#F0EDFE] bg-[#6B4CF5] border-none px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base cursor-pointer flex items-center justify-center gap-2 transition-transform hover:-translate-y-0.5 w-full sm:w-auto">
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
                            class="bg-[#3A3D52] text-white border border-[#505265] px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base cursor-pointer flex items-center justify-center gap-2 w-full sm:w-auto">
                            <svg width="17" height="17" viewBox="0 0 17 17" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
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
            <section class="pt-6 px-4 sm:px-6 md:px-12">
                <div class="max-w-7xl mx-auto">
                    <img src="../assets/tab.webp" alt="Product Showcase" class="w-full h-auto object-cover" />
                </div>
            </section>
        </div>

        <!-- Smarter Saving & Sharing -->
        <section class="bg-white text-center py-20 sm:py-20 md:py-28 lg:py-32 px-4 sm:px-6 md:px-8">
            <div class="max-w-7xl mx-auto">
                <h2 class="text-2xl sm:text-3xl md:text-[36px] mb-3 sm:mb-4 text-[#3A3D52] font-semibold">Smarter Saving
                    &
                    Sharing</h2>
                <p
                    class="text-base sm:text-lg text-[#505265] mb-6 sm:mb-8 leading-relaxed w-full max-w-2xl mx-auto px-2">
                    Save more than just
                    bookmarks—organize, access,
                    and share your favorite links effortlessly, all in one smart and convenient place.</p>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-12">
                    <div class="text-center p-5 sm:p-6 md:p-8">
                        <div class="size-[72px] sm:size-[88px] mx-auto mb-3 sm:mb-4">
                            <img src="../assets/chrome.webp" alt="Google Chrome" class="w-full h-full object-contain">
                        </div>
                        <h3 class="mb-2 font-semibold text-[#3A3D52]">Google Chrome</h3>
                        <p class="text-[#505265] mb-4 sm:mb-6 text-sm sm:text-base">Install our Chrome extension to
                            start
                            syncing and organizing
                            bookmarks instantly</p>
                        <button
                            class="bg-[linear-gradient(to_right,#25C451,#E1392E,#FAC015,#1A73E9)] text-white border-none px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold cursor-pointer text-sm sm:text-base">
                            Download for Chrome
                        </button>
                    </div>
                    <div class="text-center p-5 sm:p-6 md:p-8">
                        <div class="size-[72px] sm:size-[88px] mx-auto mb-3 sm:mb-4">
                            <img src="../assets/opera.webp" alt="Opera" class="w-full h-full object-contain">
                        </div>
                        <h3 class="mb-2 font-semibold text-[#3A3D52]">Opera</h3>
                        <p class="text-[#505265] mb-4 sm:mb-6 text-sm sm:text-base">Start syncing across devices add the
                            extension directly to Opera
                            from the Chrome Web Store</p>
                        <button
                            class="bg-[#D92F2F] text-white border-none px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold cursor-pointer text-sm sm:text-base">
                            Download for Opera
                        </button>
                    </div>
                    <div class="text-center p-5 sm:p-6 md:p-8">
                        <div class="size-[72px] sm:size-[88px] mx-auto mb-3 sm:mb-4">
                            <img src="../assets/others.webp" alt="Other Browsers" class="w-full h-full object-contain">
                        </div>
                        <h3 class="mb-2 font-semibold text-[#3A3D52]">Other Browsers</h3>
                        <p class="text-[#505265] mb-4 sm:mb-6 text-sm sm:text-base">Install the extension and get
                            instant
                            access to all your
                            bookmarks—everywhere</p>
                        <button
                            class="bg-[#6B4CF5] text-white border-none px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold cursor-pointer text-sm sm:text-base">
                            Download plugin
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <!-- Invite Others, Organize Together -->
        <section class="py-20 sm:py-20 md:py-28 lg:py-32 px-4 sm:px-6 md:px-8 bg-[#F8F6FF]">
            <div class="max-w-7xl mx-auto text-center">
                <p class="leading-relaxed text-[#6B4CF5] font-medium text-sm sm:text-base">BOOKMARKING</p>
                <h2 class="text-2xl sm:text-3xl font-semibold mb-3 sm:mb-4 text-[#3A3D52]">Invite Others, Organize
                    Together</h2>
                <div class="w-full max-w-[700px] relative my-12 sm:my-16 md:my-24 mx-auto">
                    <img src="../assets/invite.webp" alt="Invite Others, Organize Together"
                        class="w-full h-full object-contain">
                    <div class="w-[65%] h-[75%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg">
                        <img src="../assets/sub-invite.webp" alt="Invite Others, Organize Together"
                            class="w-full h-full object-contain">
                    </div>
                </div>
                <p
                    class="text-base sm:text-lg text-[#505265] mb-6 sm:mb-8 leading-relaxed w-full max-w-2xl mx-auto px-2">
                    Create shared folders, manage
                    permissions, and collaborate on your favorite saved links with ease. Whether you're working on a
                    project or sharing resources, it's all possible in one organized space</p>

                <button
                    class="bg-[#6B4CF5] text-white border-none px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold cursor-pointer text-sm sm:text-base">
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
