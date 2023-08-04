<script setup lang="ts">
import { initPage, debounce } from '@/utils'
import { useRouter } from 'vue-router'
import { ref, watch } from 'vue'

const router = useRouter()
initPage('我', false, false, false, false)
const clickErweima = (e: any) => {
    if (e.target.className === 'searchFriedn-wrap' || e.target.className === 'cancel') {
        router.go(-1)
    }
}
const showIcon = ref<boolean>(true)
const content = ref<string>('')
watch(
    content,
    (newVal) => {
        if (newVal.length === 0) {
            showIcon.value = true
        }
    }
)
const throttleInput = debounce(() => {
    if (content.value.length > 0) {
        showIcon.value = false
        showCard.value = true
    }
}, 100)
const inputChinese = () => {
    showIcon.value = false
}
const showCard = ref<boolean>(false)
</script>

<template>
    <div class="searchFriedn-wrap" @click="clickErweima">
        <div class="fir-col">
            <div class="input-wrap">
                <input type="text" class="input" placeholder="账号 / 手机号 " v-model="content" @input="throttleInput"
                    @compositionstart="inputChinese" maxlength="20">
                <div class="preix-icon" v-show="showIcon">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" t="1690454548697"
                        class="icon" viewBox="0 0 1024 1024" version="1.1" p-id="17544" width="16" height="16">
                        <path
                            d="M953.504 908.256l-152.608-163.296c61.856-74.496 95.872-167.36 95.872-265.12 0-229.344-186.624-415.968-416.032-415.968-229.344 0-415.968 186.592-415.968 415.968s186.624 415.968 416 415.968c60.096-0.032 118.048-12.576 172.224-37.248 16.096-7.328 23.2-26.304 15.872-42.368-7.328-16.128-26.4-23.264-42.368-15.872-45.856 20.864-94.88 31.456-145.76 31.488-194.08 0-351.968-157.888-351.968-351.968 0-194.048 157.888-351.968 351.968-351.968 194.112 0 352.032 157.888 352.032 351.968 0 91.36-34.848 177.92-98.08 243.744-12.256 12.736-11.84 32.992 0.864 45.248 0.96 0.928 2.208 1.28 3.296 2.08 0.864 1.28 1.312 2.752 2.4 3.904l165.504 177.088c6.272 6.752 14.816 10.144 23.36 10.144 7.84 0 15.68-2.848 21.856-8.64C964.864 941.408 965.568 921.152 953.504 908.256z"
                            p-id="17545" fill="#999" />
                    </svg>
                </div>
                <div class="close-icon" @click="content = ''">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" t="1691134775689"
                        class="icon" viewBox="0 0 1024 1024" version="1.1" p-id="2586" width="20" height="20">
                        <path
                            d="M512 128C300.8 128 128 300.8 128 512s172.8 384 384 384 384-172.8 384-384S723.2 128 512 128zM512 832c-179.2 0-320-140.8-320-320s140.8-320 320-320 320 140.8 320 320S691.2 832 512 832z"
                            p-id="2587" fill="#999" />
                        <path
                            d="M672 352c-12.8-12.8-32-12.8-44.8 0L512 467.2 396.8 352C384 339.2 364.8 339.2 352 352S339.2 384 352 396.8L467.2 512 352 627.2c-12.8 12.8-12.8 32 0 44.8s32 12.8 44.8 0L512 556.8l115.2 115.2c12.8 12.8 32 12.8 44.8 0s12.8-32 0-44.8L556.8 512l115.2-115.2C684.8 384 684.8 364.8 672 352z"
                            p-id="2588" fill="#999" />
                    </svg>
                </div>
            </div>
            <div class="cancel">取消</div>
        </div>
        <div class="second-col" @click="router.push('/personalCard')" v-show="showCard">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" t="1691135382495"
                class="icon" viewBox="0 0 1024 1024" version="1.1" p-id="3596">
                <path
                    d="M325.301127 391.897803a179.04 179.04 0 1 0 253.196377-253.205215 179.04 179.04 0 1 0-253.196377 253.205215Z"
                    fill="#1C7A01" p-id="3597" />
                <path
                    d="M701.12 681.92v-45.76c-3.84-7.52-7.68-14.88-12-21.92H636.8a40.768 40.768 0 0 1-16.16-78.24c-47.68-38.56-106.08-61.44-168.64-61.44-156.8 0-292.32 143.04-284 318.88 7.2 149.92 127.2 144.16 284 144.16s279.2 5.76 284-144.16c0.8-25.12-1.44-49.28-5.92-72.8a40.56 40.56 0 0 1-28.96-38.72z"
                    fill="#1C7A01" p-id="3598" />
                <path
                    d="M837.92 554.88h-76v-76a20 20 0 0 0-40 0v76h-84a20 20 0 0 0 0 40h84v84a20 20 0 0 0 40 0v-84h76a20 20 0 0 0 0-40z"
                    fill="#1C7A01" p-id="3599" />
            </svg>
            <span class="search">搜素：<span class="color">{{ content }}</span></span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.searchFriedn-wrap {
    height: 100%;
    background: #eee;
    padding: .625rem 0;

    .fir-col {
        display: flex;
        margin: 0 .625rem;

        .input-wrap {
            flex: 1;
            height: 1.2rem;

            .input {
                height: 1.2rem;
                width: 100%;
                margin: 0 auto .625rem;
                padding: 0 0 0 10px;
                @include borderRadius(.4rem);
                box-shadow: 0 0 .1rem #fff;
                background: #fff;
                border: none;
                outline: none;
            }

            .input::-webkit-input-placeholder {
                position: relative;
                left: 1.25rem;
                color: #999;
            }

            .preix-icon {
                width: 30px;
                height: 30px;
                position: absolute;
                left: 5%;
                top: 15%;
                pointer-events: none;
            }

            .close-icon {
                position: absolute;
                right: 2%;
                top: 15%;
            }
        }

        .cancel {
            height: 1.2rem;
            width: 2rem;
            text-align: center;
            color: #1862da;
        }
    }

    .second-col {
        height: 2rem;
        width: 100%;
        margin: .625rem 0;
        background: #fff;
        display: flex;
        align-items: center;

        .icon {
            width: 2.5rem;
            height: 90%;
        }

        .search {
            font-size: 16px;

            .color {
                color: #1eb06b;
            }
        }
    }


}
</style>