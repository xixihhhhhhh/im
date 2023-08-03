import { defineStore } from "pinia"
import { ref } from "vue"
import store from "@/store"

export const useOtherStore = defineStore("other", () => {
    const showErweima = ref<boolean>(false)

    const closeErweima = () => {
        showErweima.value = false
    }

    const openErweima = () => {
        showErweima.value = true
    }
    return { showErweima, closeErweima, openErweima }
})


export function useOtherStoreHook() {
    return useOtherStore(store)
}