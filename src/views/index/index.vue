<script setup lang="ts">
import MsgItemList from './components/indexItem.vue'
import { initPage } from '@/utils'

initPage({ title: 'true出', searchIcon: true, addMoreIcon: true, headGoBack: false, showHeader: true })

</script>

<template>
    <div class="index-wrap">
        <MsgItemList></MsgItemList>
    </div>
</template>

<style lang="scss" scoped>
.index-wrap {
    @include padding();
}
</style>