<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
const props = defineProps({
    name: {
        type: String,
        defaule: '新的朋友'
    }
})
const name = '新的朋友'

const gotoFriend = () => {
    router.push('/chat')
}
</script>

<template>
    <div class="con" @click="gotoFriend">
        <div class="left">
            <img src="@/assets/img/mihoyo.jpg" alt="">
        </div>
        <div class="right">
            {{ name }}
        </div>
    </div>
</template>

<style lang="scss" scoped>
.con {
    height: 40px;
    display: flex;
    margin: 10px 0 0 25px;
    box-sizing: border-box;

    .left {
        @include img-wrap(40px);
        margin-right: 20px;
    }

    .right {
        flex: 1;
        height: 100%;
    }

    .right::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 1px;
        background: #ddd;
        bottom: 0;
        left: 0;
    }
}
</style>