<script setup lang="ts">
import { initPage } from '@/utils'
import leftArrow from '@/base/leftArrow.vue'
initPage('', false, false, false, false)
</script>

<template>
    <div class="personal-card-con">
        <div class="header-wrap">
            <leftArrow class="left" :color="'#f00'" :width="2" :height="16"></leftArrow>
            <div class="more">...</div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.personal-card-con {
    height: 100%;
    background: #eee;

    .header-wrap {
        height: 2rem;
        display: flex;
        justify-content: space-between;
        background: #fff;

        .left {
            position: relative;
            left: .5rem;
            top: .3125rem;
        }

        .more {
            font-size: 40px;
            position: relative;
            bottom: 20px;
            right: 10px;
        }
    }
}
</style>