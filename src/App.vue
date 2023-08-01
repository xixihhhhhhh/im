<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import footerBar from '@/components/footer/index.vue'
import headerBar from '@/components/header/index.vue'
import { useBarStore } from '@/store/modules/bar'
const route = useRoute()
const store = useBarStore()
</script>

<template>
  <div class="main-container">
    <RouterView />
  </div>
  <footerBar v-if="!route.meta.hidden"></footerBar>
  <headerBar v-if="store.showHeader"></headerBar>
</template>

<style lang="scss">
.main-container {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  background: rgba(255, 255, 255, 255);
  margin: 40px 0 65px 0;
}

.main-container::-webkit-scrollbar {
  display: none;
}

html,
body {
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
}

#app {
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}
</style>
