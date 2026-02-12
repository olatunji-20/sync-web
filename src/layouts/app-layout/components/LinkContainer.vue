<script setup lang="ts">
import type { Component } from "vue";

interface LinkItem {
  href: string;
  name: string;
  count: number;
  icon: Component;
}

withDefaults(
  defineProps<{
    name: string;
    links: LinkItem[];
  }>(),
  {
    name: "",
    links: () => [],
  },
);
</script>

<template>
  <div class="flex flex-col gap-3">
    <p class="text-sm text-black-60 leading-4.5 uppercase">{{ name }}</p>

    <div class="flex flex-col gap-0.5">
      <router-link
        v-for="link in links"
        :key="link.href"
        :to="link.href"
        class="flex items-center justify-between px-3 py-3.5 rounded-[5px] hover:bg-white/80"
      >
        <div class="flex items-center gap-1.5">
          <component :is="link.icon" class="size-4 text-black-90" />

          <span class="text-black-90 leading-[100%]">{{ link.name }}</span>
        </div>

        <span class="text-black-90 leading-[100%]">{{ link.count }}</span>
      </router-link>
    </div>
  </div>
</template>
