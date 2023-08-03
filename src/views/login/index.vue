<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { initPage } from '@/utils'
import { enroll } from '@/api'

const router = useRouter()
initPage('发现', true, true, false, false)
const Tabs = ['登录', '注册']
interface Form {
    name: string,
    password: string,
}
const onChangeTab = (index: number) => {
    activeIndex.value = index
}

const activeIndex = ref<number>(0)
const loginForm = reactive({
    name: '',
    password: ''
})
const onSubmitLogin = (valid: Form) => {
    console.log(valid);

    router.push('/index')
}
const registerForm = reactive({
    name: '',
    password: ''
})
const onSubmitRegister = async () => {
    const res = await enroll(registerForm.name, registerForm.password)
    console.log(res)

}

const checked = ref<boolean>(false)
</script>

<template>
    <div class="login-con">
        <div class="img-wrap">
            <img src="@/assets/img/mihoyo.jpg" alt="">
        </div>
        <ul class="tab">
            <li :key="index" @click="onChangeTab(index)" class="tab-item" v-for="(tab, index) in Tabs"
                :class="{ active: index === activeIndex }">
                {{ tab }}
            </li>
        </ul>
        <van-form @submit="onSubmitLogin" v-if="activeIndex === 0">
            <van-cell-group inset>
                <van-field v-model="loginForm.name" name="用户名" label="用户名" placeholder="用户名"
                    :rules="[{ required: true, message: '请填写用户名' }]" />
                <van-field v-model="loginForm.password" type="password" name="密码" label="密码" placeholder="密码"
                    :rules="[{ required: true, message: '请填写密码' }]" />
            </van-cell-group>
            <div class="xieyi" @click="checked = !checked">
                <van-checkbox v-model="checked" class="agree"></van-checkbox>
                <div class="text">
                    请勾选阅读并同意<span class="blue">《用户服务协议》</span>和
                    <span class="blue">《隐私政策》</span>
                </div>
            </div>
            <div style="margin: 36px;margin-top: 0;">
                <van-button round block type="primary" native-type="submit">
                    登录
                </van-button>
            </div>
        </van-form>

        <van-form @submit="onSubmitRegister" v-else>
            <van-cell-group inset>
                <van-field v-model="registerForm.name" name="用户名" label="用户名" placeholder="请输入用户名"
                    :rules="[{ required: true, message: '请填写用户名' }]" />
                <van-field v-model="registerForm.password" type="password" name="密码" label="密码" placeholder="请输入密码"
                    :rules="[{ required: true, message: '请填写密码' }]" />
            </van-cell-group>
            <div style="margin: 36px; ">
                <van-button round block type="primary" native-type="submit">
                    注册
                </van-button>
            </div>
        </van-form>

    </div>
</template>

<style lang="scss" scoped>
.xieyi {
    margin: 20px;
    display: flex;

    .agree {
        margin-right: 10px
    }

    .circle {
        @include wh(15px);
        margin-right: 10px;
        @include borderRadius(50%);
        background: #000;
        display: flex;
        justify-content: center;
        align-items: center;

        &::after {
            content: '';
            position: absolute;
            @include wh(13px);
            @include borderRadius(50%);
            background: #fff;
        }
    }

    .text {
        font-size: 12px;

        .blue {
            color: blue;
        }
    }
}

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