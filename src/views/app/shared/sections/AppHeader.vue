<template>
  <header class="border-b border-stone-200 bg-white">
    <div class="">
      <div
        class="flex items-center justify-between px-6.5 py-5 md:border-b border-[#292D321A]"
      >
        <h1
          class="text-lg leading-6 -tracking-[1%] font-semibold text-black-90"
        >
          {{ title }}
        </h1>

        <div class="hidden md:flex items-center gap-2">
          <div class="relative" ref="notificationPanelRef">
            <button
              type="button"
              class="flex relative p-2 border border-stone-200 bg-stone-100 rounded-full hover:bg-stone-200 cursor-pointer text-stone-600"
              title="Notifications"
              @click="notificationsOpen = !notificationsOpen"
            >
              <NotificationIcon class="size-4.5 fill-black-100" />
              <span
                v-if="hasUnreadNotifications"
                class="absolute -top-1 right-0 size-3 rounded-full bg-[#D54524]"
              />
            </button>

            <!-- Notifications dropdown -->
            <div
              v-show="notificationsOpen"
              class="absolute top-full right-0 mt-2 w-95 max-h-105 flex flex-col bg-white rounded-xl border border-stone-200 shadow-lg z-30"
            >
              <div
                class="flex items-center justify-between px-4 py-3 border-b border-stone-200 shrink-0"
              >
                <h3 class="text-base font-medium text-stone-900">
                  Notifications
                </h3>
                <button
                  type="button"
                  class="text-sm font-medium text-[#6B4CF5] hover:underline"
                  @click="markAllRead"
                >
                  Mark all read
                </button>
              </div>
              <div class="overflow-y-auto flex-1 min-h-0">
                <div
                  v-for="n in notifications"
                  :key="n.id"
                  class="px-4 py-3 border-b border-stone-100 last:border-b-0"
                >
                  <div class="flex gap-3">
                    <div
                      class="w-10 h-10 rounded-full shrink-0 flex items-center justify-center text-white text-sm font-semibold"
                      :class="n.avatarBg"
                    >
                      {{ n.avatarInitial }}
                    </div>
                    <div class="min-w-0 flex-1">
                      <p class="font-semibold text-stone-900">{{ n.title }}</p>
                      <p class="text-sm text-stone-500 mt-0.5">
                        {{ n.description }}
                      </p>
                      <p class="text-xs text-stone-400 mt-1">{{ n.timeAgo }}</p>
                      <div
                        v-if="n.actions"
                        class="flex gap-2 mt-3 justify-between"
                      >
                        <button
                          type="button"
                          class="w-1/2 px-3 py-1.5 rounded-full text-sm cursor-pointer bg-stone-100 text-stone-700 hover:bg-stone-200"
                          @click="onNotificationAction(n.id, 'decline')"
                        >
                          Decline
                        </button>
                        <button
                          type="button"
                          class="w-1/2 px-3 py-1.5 rounded-full text-sm cursor-pointer bg-[#24273F] text-white hover:bg-[#24273F]/90"
                          @click="onNotificationAction(n.id, 'accept')"
                        >
                          Accept
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <router-link
            to="/settings"
            class="inline-flex p-2 border border-stone-200 bg-stone-100 rounded-full hover:bg-stone-200 cursor-pointer text-stone-600"
            title="Settings"
          >
            <SettingsIcon class="size-4.5 fill-black-100" />
          </router-link>
        </div>
      </div>

      <div
        class="flex items-center justify-between px-6.5 pt-6 md:py-6 md:border-b border-[#292D321A]"
      >
        <div class="relative flex-1 w-full md:max-w-75">
          <SearchIcon
            class="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-black-100"
          />

          <input
            v-model="searchQuery"
            type="text"
            :placeholder="searchPlaceholder"
            class="w-full text-sm leading-4.5 font-normal text-black-100 placeholder:text-black-80 pl-10 pr-4 py-2.5 rounded-full bg-[#F8F8F9] border border-stone-200 focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-400"
            @input="$emit('search', $event.target.value)"
          />
        </div>

        <div class="hidden md:flex items-center gap-3">
          <div class="bg-tertiary-background rounded-full py-1.75 px-4">
            <div class="flex items-center">
              <div
                v-for="(_, i) in 3"
                :key="i"
                class="size-6 rounded-full border-2 border-white shrink-0 first:ml-0 -ml-2"
                :class="['bg-amber-200', 'bg-blue-200', 'bg-green-200'][i]"
              />
            </div>
          </div>

          <button
            class="h-9.5 flex items-center gap-2 px-4 py-3 rounded-full bg-primary-100 cursor-pointer text-primary-10 text-sm font-medium leading-[100%] hover:bg-primary-100/90"
            @click="$emit('share')"
          >
            Share
            <ShareIcon class="size-4 stroke-primary-10" />
          </button>
        </div>
      </div>

      <div class="flex items-center justify-between px-6.5 py-5">
        <BrowserFilters :filters="browserFilters" @select="onBrowserSelect" />

        <div class="hidden md:flex items-center gap-2">
          <Select
            v-model="selectedSort"
            :options="sort_options"
            :class-names="{ content: 'w-[117px]' }"
          />

          <Select
            v-model="selectedDisplay"
            :options="display_options"
            :class-names="{ content: 'w-[108px]' }"
          />
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import NotificationIcon from "@/components/icons/NotificationIcon.vue";
import SearchIcon from "@/components/icons/SearchIcon.vue";
import SettingsIcon from "@/components/icons/SettingsIcon.vue";
import ShareIcon from "@/components/icons/ShareIcon.vue";
import Select from "@/components/shared/Select.vue";
import { computed, onMounted, onUnmounted, ref } from "vue";
import BrowserFilters from "../components/BrowserFilters.vue";

const searchQuery = ref("");
const notificationsOpen = ref(false);
const notificationPanelRef = ref(null);

const selectedSort = computed({
  get: () => props.sort,
  set: (val) => emit("update:sort", val),
});

const selectedDisplay = computed({
  get: () => props.view,
  set: (val) => emit("update:view", val),
});

const sort_options = ref([
  { value: "newest", label: "Newest" },
  { value: "oldest", label: "Oldest" },
  { value: "a-z", label: "A - Z" },
  { value: "z-a", label: "Z - A" },
]);

const display_options = ref([
  { value: "list", label: "List" },
  { value: "grid", label: "Grid" },
]);

const notifications = ref([
  {
    id: "1",
    title: "New Member Joined",
    description:
      "Your request has been accepted your invitation and are now part of the unsorted workspace",
    timeAgo: "3 mins ago",
    avatarInitial: "A",
    avatarBg: "bg-amber-500",
    read: false,
    actions: null,
  },
  {
    id: "2",
    title: "New Member request",
    description:
      "Abayomi has sent a request to be part of unsorted, click below to choose an option",
    timeAgo: "3 mins ago",
    avatarInitial: "A",
    avatarBg: "bg-amber-500",
    read: false,
    actions: true,
  },
  {
    id: "3",
    title: "New invite request",
    description:
      "Johnson has requested your access to the folder 'Unsorted'. Join to begin collaborating.",
    timeAgo: "3 mins ago",
    avatarInitial: "J",
    avatarBg: "bg-emerald-500",
    read: false,
    actions: true,
  },
  {
    id: "4",
    title: "New Entry Added",
    description:
      "Kamara has added a new entry to 'Unsorted' Take a look to stay updated.",
    timeAgo: "3 mins ago",
    avatarInitial: "K",
    avatarBg: "bg-[#6B4CF5]",
    read: false,
    actions: null,
  },
]);

const hasUnreadNotifications = computed(() =>
  notifications.value.some((n) => !n.read),
);

const props = defineProps({
  title: { type: String, default: "All bookmarks" },
  searchPlaceholder: { type: String, default: "Search all bookmarks" },
  hasNotifications: { type: Boolean, default: true },
  sort: { type: String, default: "newest" },
  view: { type: String, default: "list" },
  browserFilters: {
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

const emit = defineEmits([
  "search",
  "share",
  "sort",
  "view",
  "update:sort",
  "update:view",
  "browser-select",
  "notification-action",
]);

function onBrowserSelect(id) {
  emit("browser-select", id);
}

function markAllRead() {
  notifications.value.forEach((n) => {
    n.read = true;
  });
}

function onNotificationAction(notificationId, action) {
  const n = notifications.value.find((x) => x.id === notificationId);
  if (n) n.actions = null;
  emit("notification-action", { id: notificationId, action });
}

function handleClickOutside(e) {
  if (!notificationPanelRef.value?.contains(e.target))
    notificationsOpen.value = false;
}

onMounted(() => document.addEventListener("click", handleClickOutside));
onUnmounted(() => document.removeEventListener("click", handleClickOutside));
</script>
