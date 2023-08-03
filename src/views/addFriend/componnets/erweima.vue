<script setup lang="ts">
import { useOtherStore } from '@/store/modules/other'
import { ref } from 'vue'
const otherStore = useOtherStore()
const name = 'robot'
const address = '广东 汕头'
const clickErweima = (e: any) => {
    if (e.target.className === 'erweima-wrap') {
        otherStore.closeErweima()
    }
}
</script>

<template>
    <div class="erweima-wrap" v-show="otherStore.showErweima" @click="clickErweima">
        <div class="inner-wrap" data-index="erweima">
            <div class="personMsg" data-index="erweima">
                <div class="img-wrap">
                    <img src="@/assets/img/footerImg/wechat.png" alt="">
                </div>
                <div class="wrap">
                    <div class="name">
                        {{ name }}
                    </div>
                    <div class="address">
                        {{ address }}
                    </div>
                </div>
            </div>
            <div class="personErweima" data-index="erweima">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" t="1690509456624"
                    class="icon" viewBox="0 0 1024 1024" version="1.1" p-id="2465">
                    <path
                        d="M384 64l-249.6 0c-51.2 0-89.6 41.6-89.6 89.6l0 227.2c0 51.2 41.6 89.6 89.6 89.6l249.6 0c51.2 0 89.6-41.6 89.6-89.6l0-227.2C473.6 105.6 435.2 64 384 64zM428.8 380.8c0 25.6-19.2 44.8-44.8 44.8l-249.6 0c-25.6 0-44.8-19.2-44.8-44.8l0-227.2c0-25.6 19.2-44.8 44.8-44.8l249.6 0c25.6 0 44.8 19.2 44.8 44.8L428.8 380.8z"
                        p-id="2466" fill="#ffffff" />
                    <path d="M192 192l134.4 0 0 134.4-134.4 0 0-134.4Z" p-id="2467" fill="#ffffff" />
                    <path
                        d="M377.6 544l-243.2 0c-48 0-86.4 38.4-86.4 89.6l0 220.8c0 48 38.4 89.6 86.4 89.6l243.2 0c48 0 86.4-38.4 86.4-89.6l0-220.8C467.2 582.4 425.6 544 377.6 544zM422.4 851.2c0 25.6-19.2 44.8-44.8 44.8l-243.2 0c-25.6 0-44.8-19.2-44.8-44.8l0-220.8c0-25.6 19.2-44.8 44.8-44.8l243.2 0c25.6 0 44.8 19.2 44.8 44.8L422.4 851.2z"
                        p-id="2468" fill="#ffffff" />
                    <path d="M192 668.8l131.2 0 0 131.2-131.2 0 0-131.2Z" p-id="2469" fill="#ffffff" />
                    <path
                        d="M633.6 470.4l249.6 0c51.2 0 89.6-41.6 89.6-89.6l0-227.2c0-51.2-41.6-89.6-89.6-89.6l-249.6 0c-51.2 0-89.6 41.6-89.6 89.6l0 227.2C544 432 585.6 470.4 633.6 470.4zM588.8 153.6c0-25.6 19.2-44.8 44.8-44.8l249.6 0c25.6 0 44.8 19.2 44.8 44.8l0 227.2c0 25.6-19.2 44.8-44.8 44.8l-249.6 0c-25.6 0-44.8-19.2-44.8-44.8L588.8 153.6z"
                        p-id="2470" fill="#ffffff" />
                    <path d="M700.8 192l134.4 0 0 134.4-134.4 0 0-134.4Z" p-id="2471" fill="#ffffff" />
                    <path
                        d="M572.8 716.8l137.6 0c12.8 0 22.4-9.6 22.4-22.4l0-137.6c0-12.8-9.6-22.4-22.4-22.4l-137.6 0c-12.8 0-22.4 9.6-22.4 22.4l0 137.6C550.4 707.2 560 716.8 572.8 716.8z"
                        p-id="2472" fill="#ffffff" />
                    <path
                        d="M886.4 563.2l0 38.4c0 12.8 12.8 25.6 25.6 25.6l38.4 0c12.8 0 25.6-12.8 25.6-25.6l0-38.4c0-12.8-12.8-25.6-25.6-25.6l-38.4 0C899.2 537.6 886.4 547.2 886.4 563.2z"
                        p-id="2473" fill="#ffffff" />
                    <path
                        d="M582.4 944l48 0c12.8 0 22.4-9.6 22.4-22.4l0-48c0-12.8-9.6-22.4-22.4-22.4l-48 0c-12.8 0-22.4 9.6-22.4 22.4l0 48C560 934.4 569.6 944 582.4 944z"
                        p-id="2474" fill="#ffffff" />
                    <path
                        d="M944 704l-99.2 0c-16 0-28.8 12.8-28.8 28.8l0 44.8-48 0c-19.2 0-32 12.8-32 32l0 99.2c0 16 12.8 28.8 28.8 28.8l179.2 3.2c16 0 28.8-12.8 28.8-28.8l0-179.2C972.8 716.8 960 704 944 704z"
                        p-id="2475" fill="#ffffff" />
                </svg>
            </div>
            <div class="tip" data-index="erweima">
                扫一扫上面的二维码图案，加我为朋友。
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.erweima-wrap {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, .5);
    display: flex;
    justify-content: center;
    align-items: center;

    .inner-wrap {
        width: 90%;
        height: 60%;
        padding: 40px;
        background-color: #999;
        box-shadow: 0 0 2px #000;

        .personMsg {
            display: flex;

            .img-wrap {
                @include img-wrap(60px);
            }

            .wrap {
                margin-left: 10px;

                .name {
                    color: #fff;
                    font-size: 20px;
                }

                .address {
                    color: #ccc;
                    font-size: 12px;
                }
            }
        }

        .personErweima {
            width: 100%;
            height: 66%;
        }

        .tip {
            color: #ccc;
            font-size: 12px;
            text-align: center;
        }
    }
}
</style>