<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { hasParent } from '../utils/dom'
import { useAppStore } from "@/store/modules/app"
const appStore = useAppStore()
const slotRef = ref(null)
const setSlotRef = (el: any) => {
    slotRef.value = el
}
const clickEvent = (e: any) => {
    const triggerElement = e.target
    // 触发点击事件的dom是否是playlist的子节点
    const firstChildElm = [slotRef.value]
    if (!hasParent(
        triggerElement,
        firstChildElm as unknown as HTMLElement[]
    )) {
        appStore.closeMoreBox()
    }
}

const bindClick = () => {
    document.addEventListener('mousedown', clickEvent)
}
const removeClick = () => {
    document.removeEventListener('mousedown', clickEvent)
}

watchEffect(() => {
    if (appStore.moreBox) {
        bindClick()
    } else {
        removeClick()
    }
})
</script>

<template>
    <slot name="edit" :setSlotRef="setSlotRef"> edit </slot>
</template>