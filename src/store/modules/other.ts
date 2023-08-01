import { defineStore } from "pinia"
import { ref } from "vue"
import store from "@/store"

export const useOtherStore = defineStore("other", () => {

})


export function useOtherStoreHook() {
    return useOtherStore(store)
}