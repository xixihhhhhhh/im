import { ref } from "vue"
import { defineStore } from "pinia"
import store from "@/store"

export const useMeetingStore = defineStore("meeting", () => {
    // 对话人名字,id
    const name = ref<string>('')
    const friendId = ref<number>(0)

    // 聊天信息结构
    interface message {
        send_id: string | number,
        content: string | number,
    }

    const messageArr = ref<message[]>([])

    const push = (message: message) => {
        messageArr.value.push(message)
    }

    const inputActive = ref<boolean>(false)
    const changeinputActive = (flag: boolean) => {
        inputActive.value = flag
    }

    const voiceActive = ref<boolean>(false)

    return { name, messageArr, push, friendId, inputActive, changeinputActive, voiceActive }
},
    {
        persist: true,
    })

export function useAppStoreHook() {
    return useMeetingStore(store)
}