<template>
  <section class="px-6 pb-8">
    <div class="flex items-center justify-between mb-4">
      <h2 class="text-lg font-semibold text-stone-900">All Bookmarks</h2>
      <a href="#" class="text-[#6B4CF5] hover:underline flex items-center gap-1.5 text-sm font-medium"
        @click.prevent="$emit('add-bookmark')">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
        </svg>
        Add bookmark
      </a>
    </div>
    <ul class="space-y-1">
      <li v-for="(item, i) in bookmarks" :key="i"
        class="flex items-center gap-4 p-3 rounded-xl hover:bg-stone-50 group">
        <input type="checkbox" class="rounded border-stone-300 text-purple-600 focus:ring-purple-500" />
        <div class="w-10 h-10 rounded-full flex items-center justify-center shrink-0 text-lg"
          :class="item.iconBg ?? 'bg-blue-100'">
          {{ item.icon }}
        </div>
        <div class="min-w-0 flex-1">
          <p class="font-medium text-stone-900">{{ item.title }}</p>
          <p class="text-sm text-stone-500">{{ item.url }} | {{ item.folder }} | {{ item.time }}</p>
          <p v-if="item.tags" class="text-xs text-[#795DF6] mt-0.5">{{ item.tags }}</p>
        </div>
        <div class="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label="More options">
          <div class="flex items-center justify-center size-5 cursor-pointer">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M15.5799 11.9999C15.5799 13.9799 13.9799 15.5799 11.9999 15.5799C10.0199 15.5799 8.41992 13.9799 8.41992 11.9999C8.41992 10.0199 10.0199 8.41992 11.9999 8.41992C13.9799 8.41992 15.5799 10.0199 15.5799 11.9999Z"
                stroke="#666879" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path
                d="M11.9998 20.2702C15.5298 20.2702 18.8198 18.1902 21.1098 14.5902C22.0098 13.1802 22.0098 10.8102 21.1098 9.40021C18.8198 5.80021 15.5298 3.72021 11.9998 3.72021C8.46984 3.72021 5.17984 5.80021 2.88984 9.40021C1.98984 10.8102 1.98984 13.1802 2.88984 14.5902C5.17984 18.1902 8.46984 20.2702 11.9998 20.2702Z"
                stroke="#666879" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>

          <div class="flex items-center justify-center size-5 cursor-pointer">
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0.75 18.75L5.75 13.75M11.009 16.621C7.265 15.771 3.729 12.235 2.879 8.49105C2.744 7.89905 2.677 7.60305 2.872 7.12205C3.066 6.64205 3.305 6.49205 3.781 6.19505C4.857 5.52305 6.023 5.30905 7.232 5.41505C8.929 5.56605 9.778 5.64105 10.202 5.42005C10.625 5.20005 10.912 4.68405 11.488 3.65305L12.216 2.34605C12.696 1.48605 12.936 1.05505 13.501 0.852049C14.066 0.649049 14.406 0.772049 15.086 1.01805C15.8675 1.29866 16.5772 1.74865 17.1643 2.33577C17.7514 2.92288 18.2014 3.6326 18.482 4.41405C18.728 5.09405 18.851 5.43405 18.648 5.99905C18.445 6.56305 18.015 6.80305 17.154 7.28405L15.817 8.02905C14.787 8.60305 14.273 8.89105 14.052 9.31805C13.832 9.74605 13.912 10.576 14.072 12.236C14.19 13.456 13.987 14.63 13.306 15.72C13.008 16.196 12.859 16.434 12.378 16.629C11.898 16.823 11.602 16.756 11.009 16.621Z"
                stroke="#666879" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
          <button type="button"
            class="flex items-center justify-center size-5 cursor-pointer rounded hover:bg-stone-100" aria-label="Edit"
            @click.stop="$emit('edit', item)">
            <svg width="16" height="16" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M13.1101 2.82866L14.0369 1.90178C15.5726 0.366073 18.0625 0.366073 19.5982 1.90178C21.1339 3.43748 21.1339 5.92735 19.5982 7.46306L18.6713 8.38993M13.1101 2.82866C13.1101 2.82866 13.2259 4.79828 14.9638 6.53618C16.7017 8.27407 18.6713 8.38993 18.6713 8.38993M13.1101 2.82866L4.58882 11.3499C4.01166 11.9271 3.72308 12.2156 3.4749 12.5338C3.18213 12.9092 2.93114 13.3153 2.72634 13.745C2.55273 14.1093 2.42368 14.4965 2.16556 15.2708L1.07181 18.5521M18.6713 8.38993L10.1501 16.9112C9.5729 17.4883 9.2844 17.7769 8.9662 18.0251C8.59082 18.3179 8.18469 18.5689 7.75498 18.7737C7.3907 18.9473 7.00352 19.0763 6.22918 19.3344L2.94792 20.4282M1.07181 18.5521L0.804449 19.3542C0.677429 19.7352 0.776599 20.1553 1.06063 20.4394C1.34466 20.7234 1.76478 20.8226 2.14584 20.6956L2.94792 20.4282M1.07181 18.5521L2.94792 20.4282"
                stroke="#666879" stroke-width="1.5" />
            </svg>
          </button>
          <button type="button"
            class="flex items-center justify-center size-5 cursor-pointer rounded hover:bg-stone-100"
            aria-label="Delete" @click.stop="$emit('delete', item)">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M21 5.97998C17.67 5.64998 14.32 5.47998 10.98 5.47998C9 5.47998 7.02 5.57998 5.04 5.77998L3 5.97998"
                stroke="#666879" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M8.5 4.97L8.72 3.66C8.88 2.71 9 2 10.69 2H13.31C15 2 15.13 2.75 15.28 3.67L15.5 4.97"
                stroke="#666879" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path
                d="M18.8504 9.14014L18.2004 19.2101C18.0904 20.7801 18.0004 22.0001 15.2104 22.0001H8.79039C6.00039 22.0001 5.91039 20.7801 5.80039 19.2101L5.15039 9.14014"
                stroke="#666879" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M10.3301 16.5H13.6601" stroke="#666879" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
              <path d="M9.5 12.5H14.5" stroke="#666879" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
          </button>
        </div>
      </li>
    </ul>
  </section>
</template>

<script setup>
defineProps({
  bookmarks: {
    type: Array,
    default: () => [],
  },
})

defineEmits(['add-bookmark', 'item-menu', 'edit', 'delete'])
</script>
