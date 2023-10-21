<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { initPage } from '@/utils'

initPage({ title: '更改名字', headGoBack: true, showHeader: true, showSaveBtn: true })

import { useUserStore } from '@/store/modules/user'

const userStore = useUserStore()
const name = ref(userStore.currentUser.name)
import { useBarStore } from '@/store/modules/bar'
const barStore = useBarStore()

import { useDebounceFn } from '@vueuse/core'

const debouncedFn = useDebounceFn((flag: boolean) => {
    barStore.setsaveBtnDisabled(flag)
}, 500)

watchEffect(() => {
    if (name.value === userStore.currentUser.name) {
        debouncedFn(true)
    } else {
        debouncedFn(false)
    }
})
</script>

<template>
    <div class="index-wrap">
        <div class="name">
            <van-field v-model="name" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.index-wrap {
    @include padding();
    height: 100%;
    background: rgba(237, 237, 237, 255);

    .name {
        margin-top: 1rem;
    }
}
</style>