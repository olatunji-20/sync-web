<template>
  <aside
    class="hidden w-64 h-screen shrink-0 md:flex flex-col gap-8 py-11 px-4 border-r border-stone-300 bg-[#F9F9FA] overflow-y-auto"
  >
    <!-- Logo -->
    <router-link to="/">
      <Logo class="h-5.5 w-19" />
    </router-link>

    <div class="flex flex-col gap-4">
      <!-- User profile -->
      <router-link to="/settings">
        <div
          class="flex items-center justify-between just gap-1.75 p-3 rounded-xl bg-white border border-black-10 cursor-pointer hover:bg-white/80"
        >
          <div class="flex items-center gap-1.75">
            <img
              src="/assets/dashboard/avatar.png"
              :alt="user?.name ?? 'User'"
              class="size-8 rounded-full"
            />

            <div class="flex flex-col gap-0.5">
              <p class="text-sm leading-4 font-medium text-black-100 truncate">
                {{ user?.name ?? "User" }}
              </p>
              <p class="text-xs text-black-60 truncate">
                {{ user?.email ?? "" }}
              </p>
            </div>
          </div>

          <ChevronDown class="size-4 stroke-black-60" />
        </div>
      </router-link>

      <nav class="flex-1 space-y-1">
        <div class="flex flex-col gap-6.5">
          <LinkContainer name="General" :links="generalLinks" />
          <LinkContainer name="Collections" :links="collectionLinks" />
        </div>

        <hr class="border-stone-200" />

        <button
          class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-stone-600 hover:bg-white/60 w-full text-left"
          @click="$emit('create-folder')"
        >
          <PlusIcon class="size-5 stroke-stone-600" />
          <span>Create folder</span>
        </button>
      </nav>
    </div>

    <!-- Navigation -->

    <PromoCard @upgrade="$emit('upgrade')" />
  </aside>
</template>

<script setup>
import BookmarkIcon from "@/components/icons/BookmarkIcon.vue";
import ChevronDown from "@/components/icons/ChevronDown.vue";
import FolderIcon from "@/components/icons/FolderIcon.vue";
import Logo from "@/components/icons/Logo.vue";
import PlusIcon from "@/components/icons/PlusIcon.vue";
import LinkContainer from "../components/LinkContainer.vue";
import PromoCard from "./PromoCard.vue";

const generalLinks = [
  { name: "All bookmarks", href: "/dashboard", count: 1, icon: BookmarkIcon },
  { name: "Unsorted", href: "/dashboard", count: 1, icon: FolderIcon },
];

const collectionLinks = [
  { name: "Collection", href: "/dashboard", count: 1, icon: FolderIcon },
];

defineProps({
  user: {
    type: Object,
    default: () => ({ name: "Falana Sheriff", email: "sheriff@gmail.com" }),
  },
  counts: {
    type: Object,
    default: () => ({ allBookmarks: 1, unsorted: 1, collection: 1 }),
  },
});

defineEmits(["create-folder", "upgrade"]);
</script>
