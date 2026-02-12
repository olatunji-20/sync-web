<template>
  <section class="flex flex-col gap-5 pb-8 pt-7 max-md:px-4">
    <div class="flex items-center justify-between md:px-6">
      <h2
        class="text-sm font-medium md:text-lg md:font-semibold text-stone-900"
      >
        All Bookmarks
      </h2>
      <router-link
        to="#"
        class="text-primary-100 hover:underline hidden md:flex items-center gap-1.5 text-sm"
        @click.prevent="$emit('add-bookmark')"
      >
        <PlusIcon class="size-3.5 stroke-primary-100" />
        Add bookmark
      </router-link>
    </div>

    <ul class="space-y-6 md:space-y-1">
      <li
        v-for="(item, i) in bookmarks"
        :key="i"
        class="flex items-center justify-between gap-4 md:py-8 md:px-6.5 md:border-b border-[#292D321A] hover:bg-[#FBFBFF] group"
      >
        <div class="flex items-center gap-4">
          <input
            type="checkbox"
            class="hidden md:flex rounded border-stone-300 text-purple-600 focus:ring-purple-500"
          />

          <div class="flex items-center gap-2.5">
            <div
              class="w-14 h-16.5 rounded-[10px] md:size-13 md:rounded-full flex items-center justify-center shrink-0 text-lg"
              :class="item.iconBg ?? 'bg-blue-100'"
            >
              {{ item.icon }}
            </div>
            <div class="flex flex-col gap-1">
              <p class="md:text-xl font-medium text-black-80 md:leading-7">
                {{ item.title }}
              </p>
              <p class="text-base text-black-70 leading-[100%]">
                {{ item.url }}
                <span class="max-md:hidden"
                  >| {{ item.folder }} | {{ item.time }}</span
                >
              </p>
              <p class="md:hidden text-xs text-black-50 leading-[100%]">
                {{ item.time }}
              </p>
              <p
                v-if="item.tags"
                class="max-md:hidden text-xs text-primary-90 leading-[100%]"
              >
                {{ item.tags }}
              </p>
            </div>
          </div>
        </div>

        <div
          class="hidden md:flex items-center gap-5 opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label="More options"
        >
          <button
            class="w-fit h-fit flex items-center justify-center size-5 cursor-pointer py-0.5 px-1 rounded-sm hover:bg-black-70/10"
          >
            <EyeIcon class="size-5 stroke-black-70 shrink-0" />
          </button>

          <button
            class="w-fit h-fit flex items-center justify-center size-5 cursor-pointer py-1 px-1 rounded-sm hover:bg-black-70/10"
          >
            <PinIcon class="size-4 stroke-black-70 shrink-0" />
          </button>

          <button
            type="button"
            aria-label="Delete"
            @click.stop="$emit('delete', item)"
            class="w-fit h-fit flex items-center justify-center size-5 cursor-pointer py-1 px-1 rounded-sm hover:bg-black-70/10"
          >
            <Penicon class="size-4 stroke-black-70 shrink-0" />
          </button>

          <button
            type="button"
            aria-label="Edit"
            @click.stop="$emit('edit', item)"
            class="w-fit h-fit flex items-center justify-center size-5 cursor-pointer py-1 px-1 rounded-sm hover:bg-black-70/10"
          >
            <TrashIcon class="size-4 stroke-black-70 shrink-0" />
          </button>
        </div>
      </li>
    </ul>
  </section>
</template>

<script setup>
import EyeIcon from "@/components/icons/EyeIcon.vue";
import Penicon from "@/components/icons/Penicon.vue";
import PinIcon from "@/components/icons/PinIcon.vue";
import PlusIcon from "@/components/icons/PlusIcon.vue";
import TrashIcon from "@/components/icons/TrashIcon.vue";

defineProps({
  bookmarks: {
    type: Array,
    default: () => [],
  },
});

defineEmits(["add-bookmark", "item-menu", "edit", "delete"]);
</script>
