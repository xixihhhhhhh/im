<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { initPage } from '@/utils'
import { useRouter } from 'vue-router'
import leftArrow from '@/base/leftArrow.vue'
import rightArrow from '@/base/rightArrow.vue'
import { addTxl } from '@/api'
initPage('', false, false, false, false)

const router = useRouter()

import { useUserStore } from '@/store/modules/user'
import { showToast } from 'vant'
const searchUser = useUserStore().searchUser
const currentUser = useUserStore().currentUser
const address = ref<string>('广东 梅州')
console.log(searchUser.avatarUrl, 'hhh')
const AddTxl = async () => {
    const res = await addTxl(currentUser.id, searchUser.id, searchUser.name, currentUser.name)
    showToast(res.msg)
}
</script>

<template>
    <div class="personal-card-con">
        <div class="header-wrap">
            <leftArrow class="left" :color="'#f00'" :width="2" :height="16" @click="router.go(-2)"></leftArrow>
            <div class="more">...</div>
        </div>
        <div class="second-row">
            <div class="avatar-wrap">
                <img :src="searchUser.avatarUrl" alt="">
            </div>
            <div class="userMsg-wrap">
                <div class="name"> {{ searchUser.name }} <svg xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink" t="1691372039528" class="icon" viewBox="0 0 1024 1024"
                        version="1.1" p-id="3154" width="16" height="16">
                        <path
                            d="M648.452 644.995c-12.057-6.029-19.505-18.087-19.505-33.103V596.76c0-10.521 4.49-21.043 13.476-28.612 66.077-51.19 107.925-138.556 107.925-237.983C750.348 173.399 643.842 46.9 511.92 46.9S273.61 174.937 273.61 331.583c0 98.009 41.964 183.838 104.85 235.148 9.103 6.03 13.596 16.552 13.596 28.61v19.508c0 13.595-7.567 27.19-19.506 33.22C230.11 718.886 47.124 821.268 47.124 899.768v76.611h929.477v-76.611c0-78.5-184.407-182.537-328.15-254.772z"
                            p-id="3155" fill="blue" />
                    </svg></div>
                <div class="address">地区： {{ address }}</div>
            </div>
        </div>
        <div class="third-row">
            <div class="left">设置备注和标签</div>
            <rightArrow :color="'#aaa'"></rightArrow>
        </div>
        <div class="forth-row">
            <div class="left">个性签名</div>
            <div class="personmotto">阳光</div>
        </div>
        <div class="fifth-row">
            <div class="left">来源</div>
            <div class="source">来自手机号搜素</div>
        </div>
        <div class="sixth-row" @click="AddTxl" v-if="currentUser.id !== searchUser.id">
            <text class="tx">添加到通讯录</text>
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

    .second-row {
        display: flex;
        padding: .625rem;
        background: #fff;

        .avatar-wrap {
            @include img-wrap(3.125rem);
            @include borderRadius(.625rem);
            overflow: hidden;
        }

        .userMsg-wrap {
            margin-left: 1.25rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            .name {
                font-size: 20px;
                font-weight: bold;
            }
        }
    }

    .third-row {
        display: flex;
        padding: .625rem;
        justify-content: space-between;
        background: #fff;
    }

    .forth-row {
        margin: .625rem 0 0 0;
        padding: .625rem;
        display: flex;
        background: #fff;
        align-items: center;

        .left {
            font-size: 1rem;
            font-weight: bold;
        }

        .personmotto {
            color: #666;
            margin-left: .625rem;
            font-size: .875rem;
        }
    }

    .fifth-row {
        padding: .625rem;
        display: flex;
        background: #fff;
        align-items: center;

        .left {
            font-size: 1rem;
            font-weight: bold;
        }

        .source {
            color: #666;
            margin-left: 2.5rem;
            font-size: .875rem;
        }
    }

    .sixth-row {
        padding: .625rem;
        margin: .625rem 0;
        background: #fff;
        text-align: center;

        .tx {
            color: skyblue;
            font-size: .875rem;
        }
    }
}
</style>