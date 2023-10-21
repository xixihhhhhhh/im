import { ref } from "vue"
import { defineStore } from "pinia"
import store from "@/store"

export const useBarStore = defineStore("bar", () => {
    // moreBox状态
    const showHeader = ref<boolean>(true)
    // 搜索放大镜状态
    const headerSearch = ref<boolean>(true)

    // 标题
    const title = ref<string>('')

    // 控制header组件的展示
    const setHeader = (falg: boolean) => {
        showHeader.value = falg
    }
    // 控制header组件的展示
    const setSearch = (falg: boolean) => {
        headerSearch.value = falg
    }
    const headerAddMore = ref<boolean>(true)
    // 控制AddMore的展示
    const setAddMore = (falg: boolean) => {
        headerAddMore.value = falg
    }
    const headGoBack = ref<boolean>(true)
    const setheadGoBack = (falg: boolean) => {
        headGoBack.value = falg
    }

    // saveBtn状态
    const showSaveBtn = ref<boolean>(false)
    const setshowSaveBtn = (falg: boolean) => {
        showSaveBtn.value = falg
    }
    // 控制保存按钮的禁用状态
    const saveBtnDisabled = ref(true)
    const setsaveBtnDisabled = (falg: boolean) => {
        saveBtnDisabled.value = falg
    }


    return {
        showHeader, setHeader, title, headerSearch, setSearch, headerAddMore, setAddMore, headGoBack, setheadGoBack,
        saveBtnDisabled, setsaveBtnDisabled, showSaveBtn, setshowSaveBtn
    }
},
    {
        persist: true,
    })

export function useBarStoreHook() {
    return useBarStore(store)
}