<script setup lang="ts">
import { initPage } from '@/utils'

initPage('我', false, false, false, false)

import { useUserStore } from '@/store/modules/user';
const userStore = useUserStore()

import rightArrow from '@/base/rightArrow.vue';
</script>

<template>
    <div class="con">
        <div class="one">
            <div class="left">
                <img src="https://aliyuncdn.antdv.com/logo.png" alt="">
            </div>
            <div class="middle">
                <div class="top">
                    {{ userStore.currentUser.name }}
                </div>
                <div class="mid">
                    微信号: {{ undefined || 'aaa' }}
                </div>
                <div class="bottom">

                </div>
            </div>
            <div class="right">
                <rightArrow color="#ccc" class="arrow"></rightArrow>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.con {
    height: 100%;
    display: flex;
    padding-top: 1rem;

    .one {
        width: 100%;
        padding: 1rem;
        display: flex;

        .left {
            @include img-wrap(2.5rem);
        }

        .middle {
            margin-left: .5rem;

            .top {
                font-size: 1rem;
                font-weight: bold;
            }

            .mid {}
        }

        .right {
            flex: 1;

            .arrow {
                float: right;
                transform: translateY(1rem);
            }
        }
    }

}
</style>