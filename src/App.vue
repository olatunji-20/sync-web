<script setup>
import { ref, provide } from 'vue'
import { RouterView } from 'vue-router'
import GetStartedModal from './components/GetStartedModal.vue'

const getStartedModalOpen = ref(false)

function openGetStartedModal() {
  getStartedModalOpen.value = true
}

provide('openGetStartedModal', openGetStartedModal)
</script>

<template>
  <RouterView />
  <GetStartedModal v-model="getStartedModalOpen" />
</template>

<style scoped>
* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0px !important;
  padding: 0px !important;
}
</style>
