<script setup lang="ts">
import { reactive, ref } from 'vue'
import { initPage } from '@/utils'

initPage('发现', true, true, false, false)
const Tabs = ['登录', '注册']

const onChangeTab = (index: number) => {
    activeIndex.value = index
}

const activeIndex = ref<number>(0)
const loginForm = reactive({
    userName: '',
    password: ''
})
const onSubmitLogin = () => {

}
const registerForm = reactive({
    userName: '',
    password: ''
})
const onSubmitRegister = () => {

}
</script>

<template>
    <div class="login-con">
        <div class="img-wrap">
            <img src="@/assets/mihoyo.jpg" alt="">
        </div>
        <ul class="tab">
            <li :key="index" @click="onChangeTab(index)" class="tab-item" v-for="(tab, index) in Tabs"
                :class="{ active: index === activeIndex }">
                {{ tab }}
            </li>
        </ul>
        <van-form @submit="onSubmitLogin" v-if="activeIndex === 0">
            <van-cell-group inset>
                <van-field v-model="loginForm.userName" name="用户名" label="用户名" placeholder="用户名"
                    :rules="[{ required: true, message: '请填写用户名' }]" />
                <van-field v-model="loginForm.password" type="password" name="密码" label="密码" placeholder="密码"
                    :rules="[{ required: true, message: '请填写密码' }]" />
            </van-cell-group>
            <div style="margin: 16px;">
                <van-button round block type="primary" native-type="submit">
                    登录
                </van-button>
            </div>
        </van-form>

        <van-form @submit="onSubmitRegister" v-else>
            <van-cell-group inset>
                <van-field v-model="registerForm.userName" name="用户名" label="用户名" placeholder="请输入用户名"
                    :rules="[{ required: true, message: '请填写用户名' }]" />
                <van-field v-model="registerForm.password" type="password" name="密码" label="密码" placeholder="请输入密码"
                    :rules="[{ required: true, message: '请填写密码' }]" />
            </van-cell-group>
            <div style="margin: 16px;">
                <van-button round block type="primary" native-type="submit">
                    注册
                </van-button>
            </div>
        </van-form>

        <div>
            
        </div>
    </div>
</template>

<style lang="scss" scoped>
.login-con {
    height: 100%;
    background: linear-gradient(transparent, #f39);

    .img-wrap {
        @include img-wrap(100px);
        @include borderRadius(50%);
        margin: 100px auto 0;
        overflow: hidden;
    }

    .tab {
        padding: 22px 30px;
        display: flex;
        color: #000;

        .tab-item {
            margin: 10px 50px;
            white-space: nowrap;
            cursor: pointer;
            list-style: none;
            font-size: 20px;
            font-family: Arial, Helvetica, sans-serif;
            user-select: none;

            &.active {
                color: #f00;
            }
        }


    }
}
</style>