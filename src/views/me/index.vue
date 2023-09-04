<script setup lang="ts">
import { initPage } from '@/utils'

initPage('我', false, false, false, false)
</script>

<template>
    <div class="con">
        <div class="circle">

        </div>
    </div>
</template>

<style lang="scss" scoped>
.con {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .circle {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        border: 1px solid #000;
        background: conic-gradient(#000 0%, #000 10%, transparent 10%, transparent 80%, teal 70%, teal 100%);
    }
}
</style>