<template>
  <div class="flex items-center gap-2 py-2 px-2.5 bg-[#F8F8F9] rounded-full">
    <button
      v-for="filter in filters"
      :key="filter.id"
      :class="
        cn(
          'rounded-full min-w-20.75 w-fit h-7.25 flex items-center gap-2.5 px-2 py-1 text-xs font-medium transition-colors cursor-pointer',
          {
            'bg-black-100 text-white font-inter -tracking-[2%]': filter.active,
            'hover:bg-black-80/5 text-black-80 font-dm-sans': !filter.active,
            'justify-center': filter.label === 'All',
          },
        )
      "
      :title="filter.label"
      @click="$emit('select', filter.id)"
    >
      <span
        v-if="filter.label !== 'All'"
        :class="[
          'border border-yellow-500 size-4 rounded-full flex items-center justify-center',
        ]"
      />
      {{ filter.label }}
    </button>
  </div>
</template>

<script setup>
import { cn } from "@/lib/utils";

defineProps({
  filters: {
    type: Array,
    default: () => [
      { id: "all", label: "All", active: true },
      { id: "chrome", label: "Chrome", active: false },
      { id: "arc", label: "Arc", active: false },
      { id: "firefox", label: "Firefox", active: false },
      { id: "opera", label: "Opera", active: false },
      { id: "brave", label: "Brave", active: false },
      { id: "edge", label: "Edge", active: false },
    ],
  },
});

defineEmits(["select"]);
</script>
