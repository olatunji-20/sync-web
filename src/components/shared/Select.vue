<script setup lang="ts">
import { cn } from "@/lib/utils";
import { onMounted, onUnmounted, ref } from "vue";
import ChevronDown from "../icons/ChevronDown.vue";

const props = withDefaults(
  defineProps<{
    modelValue?: string;
    options: { label: string; value: string }[];
    placeholder?: string;
    classNames?: { trigger?: string; content?: string; item?: string };
  }>(),
  {
    modelValue: "",
    options: () => [],
    placeholder: "",
  },
);

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
  (e: "change", option: string): void;
}>();

const isOpen = ref(false);
const dropdownRef = ref<HTMLElement | null>(null);

function handleSelect(option: { label: string; value: string }) {
  isOpen.value = false;
  emit("update:modelValue", option.value);
  emit("change", option.value);
}

function handleClickOutside(event: MouseEvent) {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
    isOpen.value = false;
  }
}

onMounted(() => document.addEventListener("click", handleClickOutside));
onUnmounted(() => document.removeEventListener("click", handleClickOutside));
</script>

<template>
  <div class="relative" ref="dropdownRef">
    <button
      @click.stop="isOpen = !isOpen"
      type="button"
      :class="
        cn(
          'flex items-center justify-between text-xs font-dm-sans text-black-90 gap-2 px-3 py-2 rounded-full bg-[#F8F8F9] hover:bg-stone-100 transition-colors cursor-pointer',
          classNames?.trigger,
        )
      "
    >
      {{ options.find((o) => o.value === modelValue)?.label || placeholder }}
      <ChevronDown
        :class="
          cn('size-3.5 stroke-black-90 transition-transform duration-200', {
            'rotate-180': isOpen,
          })
        "
      />
    </button>

    <div
      v-show="isOpen"
      :class="
        cn(
          'absolute top-full right-0 mt-1 bg-white rounded-xl z-20 overflow-hidden shadow-[0px_4px_25px_0px_#0000001A]',
          classNames?.content,
        )
      "
    >
      <button
        v-for="opt in options"
        :key="opt.value"
        @click="handleSelect(opt)"
        :class="
          cn(
            'w-full px-4 py-3 text-left text-xs font-dm-sans leading-[100%] text-black-90 hover:bg-stone-50 flex items-center gap-1.5',
            classNames?.item,
          )
        "
      >
        <span
          :class="
            cn({
              'text-white': modelValue !== opt.value,
              'text-inherit': modelValue === opt.value,
            })
          "
          >✓</span
        >
        {{ opt.label }}
      </button>
    </div>
  </div>
</template>
