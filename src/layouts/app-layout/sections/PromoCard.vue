<template>
  <div
    class="flex flex-col gap-3 pt-6 px-3 pb-4 rounded-[20px] bg-linear-to-br from-violet-600 via-purple-600 to-indigo-700"
  >
    <div
      class="size-10.75 bg-[linear-gradient(132deg,#EBE239_12.73%,#4CF5A3_48.28%,#6CCDED_83.84%)] shadow-[0px_4px_4px_0px_#00000040_inset] rounded-full"
    />

    <div class="flex flex-col gap-1">
      <h3 class="font-medium text-white leading-5.5 -tracking-[1%]">
        Step Into Pro Mode
      </h3>
      <p class="text-xs text-white/90">
        Level up with tools and benefits designed to help you do more, faster.
      </p>
    </div>

    <button
      class="w-full h-9.5 py-2 rounded-full bg-white hover:bg-white/90 font-medium flex items-center justify-center gap-2 relative text-xs text-primary-100 font-inter-tight leading-[100%] cursor-pointer"
      @click="$emit('upgrade')"
    >
      Upgrade to pro
    </button>
  </div>
</template>

<script setup>
defineEmits(["upgrade"]);
</script>
