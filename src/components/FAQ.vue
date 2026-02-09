<template>
    <div>
        <!-- FAQ Section -->
        <section class="bg-white py-16 px-8">
            <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
                <!-- Left Column - Information -->
                <div>
                    <h2 class="text-4xl font-bold text-gray-900 mb-4">Frequently asked questions</h2>
                    <p class="text-lg text-gray-600 leading-relaxed">
                        Find answers to common questions about saving, organizing, and sharing your bookmarks, plus tips
                        on getting the most out of our features.
                    </p>
                </div>

                <!-- Right Column - Accordion -->
                <div class="space-y-0">
                    <div v-for="(faq, index) in faqs" :key="index" class="border-b border-gray-200">
                        <button @click="toggleFaq(index)"
                            class="w-full flex justify-between items-center py-6 text-left hover:text-purple-medium transition">
                            <h4 class="font-semibold text-gray-900 pr-4">{{ faq.question }}</h4>
                            <svg :class="['w-5 h-5 text-purple-medium transition-transform flex-shrink-0', expandedFaqs.includes(index) ? 'rotate-180' : '']"
                                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <div v-show="expandedFaqs.includes(index)" class="pb-6 text-gray-600 leading-relaxed">
                            {{ faq.answer }}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref } from 'vue'

// const isAnnually = ref(false)
const expandedFaqs = ref([0]) // First FAQ expanded by default

const faqs = [
    {
        question: "What is UI Wiki?",
        answer: "Ul Wiki is a platform where users can purchase high-quality design templates and resources to enhance their projects"
    },
    {
        question: "How can I sign up for UI Wiki?",
        answer: "You can sign up for UI Wiki by clicking the 'Get Started' button in the header or any call-to-action button on the page. The registration process is quick and straightforward."
    },
    {
        question: "Is UI Wiki free to use?",
        answer: "UI Wiki offers a free tier with basic features. For advanced features and unlimited access, you can choose from our Basic or Standard plans."
    },
    {
        question: "How do I reset my UI Wiki password?",
        answer: "You can reset your password by clicking on the 'Forgot Password' link on the login page. You'll receive an email with instructions to reset your password."
    },
    {
        question: "Can I get a refund if I'm not satisfied with my purchase?",
        answer: "Yes, we offer a 30-day money-back guarantee. If you're not satisfied with your purchase, contact our support team for a full refund."
    }
]

const toggleFaq = (index) => {
    const idx = expandedFaqs.value.indexOf(index)
    if (idx > -1) {
        expandedFaqs.value.splice(idx, 1)
    } else {
        expandedFaqs.value.push(index)
    }
}
</script>

<style scoped>
.toggle-checkbox {
    opacity: 0;
    width: 0;
    height: 0;
}

.toggle-label {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 30px;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 30px;
    cursor: pointer;
    transition: 0.3s;
}

.toggle-label:before {
    position: absolute;
    content: "";
    height: 22px;
    width: 22px;
    left: 4px;
    top: 4px;
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