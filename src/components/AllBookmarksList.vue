<template>
  <section class="flex flex-col gap-5 pb-8 pt-7">
    <div class="flex items-center justify-between px-6">
      <h2 class="text-lg font-semibold text-stone-900">All Bookmarks</h2>
      <router-link
        href="#"
        class="text-primary-100 hover:underline flex items-center gap-1.5 text-sm"
        @click.prevent="$emit('add-bookmark')"
      >
        <PlusIcon class="size-3.5 stroke-primary-100" />
        Add bookmark
      </router-link>
    </div>

    <ul class="space-y-1">
      <li
        v-for="(item, i) in bookmarks"
        :key="i"
        class="flex items-center justify-between gap-4 py-8 px-6.5 border-b border-[#292D321A] hover:bg-[#FBFBFF] group"
      >
        <div class="flex items-center gap-4">
          <input
            type="checkbox"
            class="rounded border-stone-300 text-purple-600 focus:ring-purple-500"
          />

          <div class="flex items-center gap-2.5">
            <div
              class="size-13 rounded-full flex items-center justify-center shrink-0 text-lg"
              :class="item.iconBg ?? 'bg-blue-100'"
            >
              {{ item.icon }}
            </div>
            <div class="flex flex-col gap-1">
              <p class="text-xl font-medium text-black-80 leading-7">
                {{ item.title }}
              </p>
              <p class="text-base text-black-70 leading-[100%]">
                {{ item.url }} | {{ item.folder }} | {{ item.time }}
              </p>
              <p
                v-if="item.tags"
                class="text-xs text-primary-90 leading-[100%]"
              >
                {{ item.tags }}
              </p>
            </div>
          </div>
        </div>

        <div
          class="flex items-center gap-5 opacity-0 group-hover:opacity-100 transition-opacity"
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
import EyeIcon from "./icons/EyeIcon.vue";
import Penicon from "./icons/Penicon.vue";
import PinIcon from "./icons/PinIcon.vue";
import PlusIcon from "./icons/PlusIcon.vue";
import TrashIcon from "./icons/TrashIcon.vue";

defineProps({
  bookmarks: {
    type: Array,
    default: () => [],
  },
});

defineEmits(["add-bookmark", "item-menu", "edit", "delete"]);
</script>
