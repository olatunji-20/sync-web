<template>
  <Teleport to="body">
    <div v-show="visible" :style="{ left: x + 'px', top: y + 'px' }"
      class="fixed z-30 py-1.5 bg-white rounded-xl border border-stone-200 shadow-lg min-w-[140px]" role="menu">
      <button class="w-full px-4 py-2 text-left flex items-center gap-2 text-sm hover:bg-stone-50"
        @click="onAction('unpin')">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M3.125 3.41695C2.80942 3.49162 2.54167 3.49979 2.24592 3.6847C1.70925 4.02012 1.57975 4.41854 1.718 5.02754C2.215 7.21679 4.2835 9.28529 6.47217 9.7817C7.08175 9.92054 7.48017 9.79162 7.81617 9.25495C7.99117 8.97495 8.00867 8.67162 8.08333 8.37529M5.75 3.30029C5.83695 3.29196 5.92181 3.26867 6.00083 3.23145C6.56667 2.93687 6.87583 1.97845 7.17917 1.43362C7.45975 0.930204 7.60033 0.678787 7.9305 0.559787C8.26067 0.440787 8.45958 0.513121 8.85683 0.656621C9.31416 0.820557 9.7295 1.08374 10.073 1.42727C10.4165 1.77079 10.6797 2.18613 10.8437 2.64345C10.9872 3.0407 11.0595 3.23962 10.9405 3.56979C10.8215 3.89995 10.5701 4.04054 10.0667 4.32112C9.51833 4.62679 8.54708 4.93945 8.2525 5.51112C8.21646 5.58628 8.19414 5.66728 8.18658 5.75029M0.5 11.0003L3.41667 8.08362M0.5 0.500287L11 11.0003"
            stroke="#3A3D52" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        Unpin
      </button>
      <button class="w-full px-4 py-2 text-left flex items-center gap-2 text-sm hover:bg-stone-50"
        @click="onAction('edit')">
        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7.71006 1.71255L8.25069 1.17187C9.14652 0.276042 10.599 0.276042 11.4948 1.17187C12.3906 2.0677 12.3906 3.52012 11.4948 4.41595L10.9541 4.95663M7.71006 1.71255C7.71006 1.71255 7.77761 2.8615 8.79138 3.87527C9.80516 4.88904 10.9541 4.95663 10.9541 4.95663M7.71006 1.71255L2.73931 6.68328C2.40263 7.01998 2.2343 7.18827 2.08952 7.37388C1.91874 7.59287 1.77233 7.82976 1.65286 8.08042C1.55159 8.29293 1.47631 8.51879 1.32574 8.97047L0.687722 10.8846M10.9541 4.95663L5.98339 9.92737C5.64669 10.264 5.4784 10.4324 5.29278 10.5771C5.07381 10.7479 4.8369 10.8944 4.58624 11.0138C4.37374 11.1151 4.14789 11.1903 3.69619 11.3409L1.78212 11.9789M0.687722 10.8846L0.531762 11.3524C0.457667 11.5747 0.515516 11.8198 0.681201 11.9855C0.846885 12.1511 1.09195 12.209 1.31424 12.1349L1.78212 11.9789M0.687722 10.8846L1.78212 11.9789"
            stroke="#3A3D52" />
        </svg>
        Edit</button>
      <button class="w-full px-4 py-2 text-left flex items-center gap-2 text-sm hover:bg-stone-50"
        @click="onAction('select')">
        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M11.4858 7.75833L7.75833 11.4858C6.94167 12.3025 5.60001 12.3025 4.77751 11.4858L1.05 7.75833C0.233333 6.94167 0.233333 5.60001 1.05 4.77751L4.77751 1.05C5.59418 0.233333 6.93583 0.233333 7.75833 1.05L11.4858 4.77751C12.3025 5.60001 12.3025 6.94167 11.4858 7.75833Z"
            stroke="#3A3D52" stroke-width="0.875" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        Select</button>
      <button class="w-full px-4 py-2 text-left flex items-center gap-2 text-sm hover:bg-stone-50"
        @click="onAction('move')">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12.6409 8.3415L12.4075 11.2582C12.32 12.1507 12.25 12.8332 10.6692 12.8332H3.33086C1.75003 12.8332 1.68003 12.1507 1.59253 11.2582L1.35919 8.3415C1.31253 7.85734 1.46419 7.40817 1.73836 7.064C1.74419 7.05817 1.74419 7.05817 1.75003 7.05234C2.07086 6.6615 2.55503 6.4165 3.09753 6.4165H10.9025C11.445 6.4165 11.9234 6.6615 12.2384 7.04067C12.2442 7.0465 12.25 7.05234 12.25 7.05817C12.5359 7.40234 12.6934 7.8515 12.6409 8.3415Z"
            stroke="#3A3D52" stroke-width="0.875" stroke-miterlimit="10" />
          <path
            d="M2.04175 6.6679V3.66374C2.04175 1.6804 2.53758 1.18457 4.52091 1.18457H5.26175C6.00258 1.18457 6.17175 1.40624 6.45175 1.77957L7.19258 2.77124C7.37925 3.01624 7.49008 3.1679 7.98591 3.1679H9.47341C11.4567 3.1679 11.9526 3.66374 11.9526 5.64707V6.69124"
            stroke="#3A3D52" stroke-width="0.875" stroke-miterlimit="10" stroke-linecap="round"
            stroke-linejoin="round" />
          <path d="M5.50073 9.9165H8.49907" stroke="#3A3D52" stroke-width="0.875" stroke-miterlimit="10"
            stroke-linecap="round" stroke-linejoin="round" />
        </svg>

        Move</button>
      <button class="w-full px-4 py-2 text-left flex items-center gap-2 text-sm text-red-600 hover:bg-red-50"
        @click="onAction('delete')">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12.25 3.48844C10.3075 3.29594 8.35333 3.19678 6.405 3.19678C5.25 3.19678 4.095 3.25511 2.94 3.37178L1.75 3.48844"
            stroke="#FF2F00" stroke-width="0.875" stroke-linecap="round" stroke-linejoin="round" />
          <path
            d="M4.95825 2.899L5.08659 2.13484C5.17992 1.58067 5.24992 1.1665 6.23575 1.1665H7.76409C8.74992 1.1665 8.82575 1.604 8.91325 2.14067L9.04159 2.899"
            stroke="#FF2F00" stroke-width="0.875" stroke-linecap="round" stroke-linejoin="round" />
          <path
            d="M10.9958 5.33154L10.6167 11.2057C10.5525 12.1215 10.5 12.8332 8.87248 12.8332H5.12748C3.49998 12.8332 3.44748 12.1215 3.38332 11.2057L3.00415 5.33154"
            stroke="#FF2F00" stroke-width="0.875" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M6.02588 9.625H7.96838" stroke="#FF2F00" stroke-width="0.875" stroke-linecap="round"
            stroke-linejoin="round" />
          <path d="M5.54175 7.2915H8.45841" stroke="#FF2F00" stroke-width="0.875" stroke-linecap="round"
            stroke-linejoin="round" />
        </svg>
        Delete</button>
    </div>
  </Teleport>
</template>

<script setup>
defineProps({
  visible: Boolean,
  x: { type: Number, default: 0 },
  y: { type: Number, default: 0 },
})

const emit = defineEmits(['action', 'close'])

function onAction(action) {
  emit('action', action)
  emit('close')
}
</script>
