<script setup lang="ts">
import { initPage } from '@/utils'
import inputFoorer from './components/inputFooter.vue'
initPage('true出', false, false, true, true)
</script>

<template>
    <div class="content-wrap">

    </div>
    <inputFoorer></inputFoorer>
</template>

<style lang="scss" scoped>
.content-wrap {
    height: 100%;
    overflow-y: auto;
 }
</style>