<script setup lang="ts">
import msgItemList from './components/indexItem.vue'
import { initPage } from '@/utils'

initPage('true出', true, true, false, true)

</script>

<template>
    <div>
        <msgItemList></msgItemList>
    </div>
</template>