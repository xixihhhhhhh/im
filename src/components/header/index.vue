<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useAppStore } from "@/store/modules/app"
import { useBarStore } from "@/store/modules/bar"
import leftArrow from '@/base/leftArrow.vue';
import moreBox from './components/morebox.vue'
const router = useRouter()

const appStore = useAppStore()
const barStore = useBarStore()
</script>

<template>
    <div class="header-wrap">
        <div class="title">{{ barStore.title }}</div>
        <div class="back"></div>
        <section class="goback" v-if="barStore.headGoBack">
            <leftArrow @click="router.go(-1)"></leftArrow>
        </section>
        <div class="search" v-if="barStore.headerSearch">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" t="1690360298132"
                class="icon" viewBox="0 0 1024 1024" version="1.1" p-id="8403" width="25" height="25">
                <path
                    d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6c3.2 3.2 8.4 3.2 11.6 0l43.6-43.5c3.2-3.2 3.2-8.4 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"
                    fill="#333333" p-id="8404" />
            </svg>
        </div>
        <div class="more" v-if="barStore.headerAddMore">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" t="1690360669247"
                class="icon" viewBox="0 0 1024 1024" version="1.1" p-id="9394" width="25" height="25"
                @click.stop="appStore.toggleMoreBox()">
                <path
                    d="M512 986.156522c-267.130435 0-483.06087-215.930435-483.06087-483.06087S244.869565 22.26087 512 22.26087c264.904348 0 483.06087 215.930435 483.06087 483.06087S776.904348 986.156522 512 986.156522zM512 66.782609C271.582609 66.782609 73.46087 262.678261 73.46087 505.321739c0 240.417391 195.895652 436.313043 438.53913 436.313043 240.417391 0 438.53913-195.895652 438.53913-438.53913C950.53913 262.678261 752.417391 66.782609 512 66.782609zM763.547826 527.582609 260.452174 527.582609c-13.356522 0-22.26087-8.904348-22.26087-22.26087s8.904348-22.26087 22.26087-22.26087l503.095652 0c13.356522 0 22.26087 8.904348 22.26087 22.26087S774.678261 527.582609 763.547826 527.582609zM512 776.904348c-13.356522 0-22.26087-8.904348-22.26087-22.26087L489.73913 253.773913c0-13.356522 8.904348-22.26087 22.26087-22.26087 13.356522 0 22.26087 8.904348 22.26087 22.26087l0 503.095652C534.26087 768 525.356522 776.904348 512 776.904348z"
                    fill="#272636" p-id="9395" />
            </svg>
        </div>
        <moreBox></moreBox>
    </div>
</template> 

<style lang="scss" scoped>
.header-wrap {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 40px;
    width: 100%;
    background: rgba(237, 237, 237, 255);
    display: flex;
    align-items: center;

    .title {
        font-size: 20px;
        font-weight: bold;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }

    .search {
        @include wh(30px);
        right: 20%;
        @include ct();
        font-size: 14px;
    }

    .goback {
        margin-left: 20px;
        margin-bottom: 10px;
        font-weight: bold;
    }

    .more {
        @include wh(30px);
        right: 5%;
        @include ct();
        font-size: 14px;
    }
}

.block {
    height: 40px;
}
</style>