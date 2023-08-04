<script setup lang="ts">
import msgItemList from './components/indexItem.vue'
import { initPage } from '@/utils'

initPage('true出', true, true, false, true)

</script>

<template>
    <div class="index-wrap">
        <msgItemList></msgItemList>
    </div>
</template>

<style lang="scss" scoped>
.index-wrap {
    padding: 3rem 0 4.0625rem 0;
}
</style>