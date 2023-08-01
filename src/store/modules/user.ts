import { defineStore } from "pinia"
import { ref } from "vue"
import store from "@/store"

export const useUserStore = defineStore("user", () => {

})

export function useUserStoreHook() {
    return useUserStore(store)
}