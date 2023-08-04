<script setup lang="ts">
import { initPage } from '@/utils'
import leftArrow from '@/base/leftArrow.vue'
initPage('', false, false, false, false)
</script>

<template>
    <div class="personal-card-con">
        <div class="header-wrap">
            <leftArrow class="left"></leftArrow>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.personal-card-con {
    height: 100%;
    background: #eee;
    .header-wrap {
        height: 2rem;
        background: #fff;
        .left {
            position: relative;
            left: .5rem;
            top: .3125rem;
        }
    }
}
</style>