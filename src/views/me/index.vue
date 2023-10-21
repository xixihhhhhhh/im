<script setup lang="ts">
import { initPage } from '@/utils'

initPage({ title: '我', searchIcon: false, addMoreIcon: false, headGoBack: false, showHeader: false })

import { useUserStore } from '@/store/modules/user';
const userStore = useUserStore()

import RightArrow from '@/base/rightArrow.vue';

import { useRouter } from 'vue-router';
const router = useRouter()
</script>

<template>
    <div class="con">
        <div class="one">
            <div class="left">
                <img src="https://aliyuncdn.antdv.com/logo.png" alt="" @click="router.push('/personalMsg')">
            </div>
            <div class="middle">
                <div class="top">
                    {{ userStore.currentUser.name }}
                </div>
                <div class="mid">
                    <div>微信号: {{ undefined || 'aaa' }}</div>
                    <div class="right">
                        <RightArrow color="#ccc" class="arrow" :width="3" :height="10"></RightArrow>
                    </div>
                </div>
                <div class="bottom">

                </div>

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
            width: 100%;

            .top {
                font-size: 1rem;
                font-weight: bold;
            }

            .mid {
                display: flex;

                .right {
                    flex: 1;

                    .arrow {
                        float: right;
                    }
                }
            }
        }
    }

}
</style>