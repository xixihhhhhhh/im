<script setup lang="ts">
import myInput from '@/base/myInput.vue'
import FuncItemList from './componnets/funcItemList.vue'
import Erweima from './componnets/erweima.vue'
import { initPage } from '@/utils'
import { useRouter } from 'vue-router'
import { useOtherStore } from '@/store/modules/other'
initPage({ title: '添加朋友', headGoBack: true, showHeader: true })
const router = useRouter()
const otherStore = useOtherStore()
const wechatNumber = 'kaerweinuomilan'
const click = () => {
    router.push('/searchFriend')
}
</script>

<template>
    <div class="addFriend-wrap">
        <div class="search-wrap">
            <!-- <myInput @pass-content="getContent"></myInput> -->
            <!-- 可以使用 CellGroup 作为容器 -->
            <input class="input" placeholder="账号 / 手机号" @click="click">
            <div class="preix-icon">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" t="1690454548697"
                    class="icon" viewBox="0 0 1024 1024" version="1.1" p-id="17544" width="16" height="16">
                    <path
                        d="M953.504 908.256l-152.608-163.296c61.856-74.496 95.872-167.36 95.872-265.12 0-229.344-186.624-415.968-416.032-415.968-229.344 0-415.968 186.592-415.968 415.968s186.624 415.968 416 415.968c60.096-0.032 118.048-12.576 172.224-37.248 16.096-7.328 23.2-26.304 15.872-42.368-7.328-16.128-26.4-23.264-42.368-15.872-45.856 20.864-94.88 31.456-145.76 31.488-194.08 0-351.968-157.888-351.968-351.968 0-194.048 157.888-351.968 351.968-351.968 194.112 0 352.032 157.888 352.032 351.968 0 91.36-34.848 177.92-98.08 243.744-12.256 12.736-11.84 32.992 0.864 45.248 0.96 0.928 2.208 1.28 3.296 2.08 0.864 1.28 1.312 2.752 2.4 3.904l165.504 177.088c6.272 6.752 14.816 10.144 23.36 10.144 7.84 0 15.68-2.848 21.856-8.64C964.864 941.408 965.568 921.152 953.504 908.256z"
                        p-id="17545" fill="#999" />
                </svg>
            </div>
        </div>
        <div class="wechatNumber">
            我的微信号： {{ wechatNumber }}&nbsp
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" t="1690509456624"
                class="icon" viewBox="0 0 1024 1024" version="1.1" p-id="2465" width="20" height="20"
                @click="otherStore.openErweima">
                <path
                    d="M384 64l-249.6 0c-51.2 0-89.6 41.6-89.6 89.6l0 227.2c0 51.2 41.6 89.6 89.6 89.6l249.6 0c51.2 0 89.6-41.6 89.6-89.6l0-227.2C473.6 105.6 435.2 64 384 64zM428.8 380.8c0 25.6-19.2 44.8-44.8 44.8l-249.6 0c-25.6 0-44.8-19.2-44.8-44.8l0-227.2c0-25.6 19.2-44.8 44.8-44.8l249.6 0c25.6 0 44.8 19.2 44.8 44.8L428.8 380.8z"
                    p-id="2466" />
                <path d="M192 192l134.4 0 0 134.4-134.4 0 0-134.4Z" p-id="2467" />
                <path
                    d="M377.6 544l-243.2 0c-48 0-86.4 38.4-86.4 89.6l0 220.8c0 48 38.4 89.6 86.4 89.6l243.2 0c48 0 86.4-38.4 86.4-89.6l0-220.8C467.2 582.4 425.6 544 377.6 544zM422.4 851.2c0 25.6-19.2 44.8-44.8 44.8l-243.2 0c-25.6 0-44.8-19.2-44.8-44.8l0-220.8c0-25.6 19.2-44.8 44.8-44.8l243.2 0c25.6 0 44.8 19.2 44.8 44.8L422.4 851.2z"
                    p-id="2468" />
                <path d="M192 668.8l131.2 0 0 131.2-131.2 0 0-131.2Z" p-id="2469" />
                <path
                    d="M633.6 470.4l249.6 0c51.2 0 89.6-41.6 89.6-89.6l0-227.2c0-51.2-41.6-89.6-89.6-89.6l-249.6 0c-51.2 0-89.6 41.6-89.6 89.6l0 227.2C544 432 585.6 470.4 633.6 470.4zM588.8 153.6c0-25.6 19.2-44.8 44.8-44.8l249.6 0c25.6 0 44.8 19.2 44.8 44.8l0 227.2c0 25.6-19.2 44.8-44.8 44.8l-249.6 0c-25.6 0-44.8-19.2-44.8-44.8L588.8 153.6z"
                    p-id="2470" />
                <path d="M700.8 192l134.4 0 0 134.4-134.4 0 0-134.4Z" p-id="2471" />
                <path
                    d="M572.8 716.8l137.6 0c12.8 0 22.4-9.6 22.4-22.4l0-137.6c0-12.8-9.6-22.4-22.4-22.4l-137.6 0c-12.8 0-22.4 9.6-22.4 22.4l0 137.6C550.4 707.2 560 716.8 572.8 716.8z"
                    p-id="2472" />
                <path
                    d="M886.4 563.2l0 38.4c0 12.8 12.8 25.6 25.6 25.6l38.4 0c12.8 0 25.6-12.8 25.6-25.6l0-38.4c0-12.8-12.8-25.6-25.6-25.6l-38.4 0C899.2 537.6 886.4 547.2 886.4 563.2z"
                    p-id="2473" />
                <path
                    d="M582.4 944l48 0c12.8 0 22.4-9.6 22.4-22.4l0-48c0-12.8-9.6-22.4-22.4-22.4l-48 0c-12.8 0-22.4 9.6-22.4 22.4l0 48C560 934.4 569.6 944 582.4 944z"
                    p-id="2474" />
                <path
                    d="M944 704l-99.2 0c-16 0-28.8 12.8-28.8 28.8l0 44.8-48 0c-19.2 0-32 12.8-32 32l0 99.2c0 16 12.8 28.8 28.8 28.8l179.2 3.2c16 0 28.8-12.8 28.8-28.8l0-179.2C972.8 716.8 960 704 944 704z"
                    p-id="2475" />
            </svg>
        </div>
        <FuncItemList></FuncItemList>
    </div>
    <Erweima></Erweima>
</template>

<style lang="scss" scoped>
.addFriend-wrap {
    height: 100%;
    background: rgb(237, 237, 237);
    padding: 3rem 0 4.0625rem 0;

    .search-wrap {
        display: flex;
        justify-content: center;

        .input {
            height: 1.2rem;
            width: 80%;
            margin: 0 auto .625rem;
            padding: 0 0 0 10px;
            @include borderRadius(.4rem);
            box-shadow: 0 0 .1rem #fff;
            background: #fff;
            border: none;
            outline: none;
        }

        .input::-webkit-input-placeholder {
            text-align: center;
            color: #999;
        }

        .input::-ms-input-placeholder {
            text-align: center;
        }

        .preix-icon {
            width: 30px;
            height: 30px;
            position: absolute;
            left: 33%;
            top: 8%;
            pointer-events: none;
        }
    }

    .wechatNumber {
        margin: 0px auto 10px;
        display: flex;
        justify-content: center;
        color: #999;

        .icon {
            fill: #999;
        }
    }
}
</style>