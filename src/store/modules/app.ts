import { ref } from "vue"
import { defineStore } from "pinia"
import store from "@/store"

export const useAppStore = defineStore("app", () => {
    // moreBox状态
    const moreBox = ref<boolean>(false)

    // 关闭moreBox
    const closeMoreBox = () => {
        moreBox.value = false
    }

    // 打开moreBoX
    const openMoreBox = () => {
        moreBox.value = true
    }

    // 切换moreBox状态
    const toggleMoreBox = () => {
        moreBox.value = !moreBox.value
    }

    return { moreBox, openMoreBox, closeMoreBox, toggleMoreBox }
},
    {
        persist: true,
    })

export function useAppStoreHook() {
    return useAppStore(store)
}