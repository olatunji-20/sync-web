<template>
  <div class="p-4">
    <div class="rounded-2xl bg-linear-to-br from-violet-600 via-purple-600 to-indigo-700 p-4 text-white relative overflow-hidden">
      <div class="absolute inset-0 opacity-20">
        <div class="absolute top-0 right-0 w-24 h-24 rounded-full bg-white -translate-y-1/2 translate-x-1/2"></div>
        <div class="absolute bottom-0 left-0 w-16 h-16 rounded-full bg-white -translate-x-1/2 translate-y-1/2"></div>
      </div>
      <h3 class="font-semibold relative">Step Into Pro Mode</h3>
      <p class="text-sm text-white/90 mt-1 relative">
        Level up with tools and benefits designed to help you do more, faster.
      </p>
      <button
        class="mt-3 w-full py-2.5 rounded-xl bg-white/20 hover:bg-white/30 font-medium flex items-center justify-center gap-2 relative"
        @click="$emit('upgrade')"
      >
        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">★</svg>
        Upgrade to pro
      </button>
    </div>
  </div>
</template>

<script setup>
defineEmits(['upgrade'])
</script>
