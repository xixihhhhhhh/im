<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import FooterBar from '@/components/footer/index.vue'
import HeaderBar from '@/components/header/index.vue'
import { useBarStore } from '@/store/modules/bar'
const route = useRoute()
const store = useBarStore()
</script>

<template>
  <div class="main-container">
    <RouterView />
  </div>
  <FooterBar v-if="!route.meta.hidden"></FooterBar>
  <HeaderBar v-if="store.showHeader"></HeaderBar>
</template>

<style lang="scss">
.main-container {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  background: rgba(255, 255, 255, 255);
}

.main-container::-webkit-scrollbar {
  display: none;
}

html,
body {
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
}

#app {
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
