import { defineStore } from "pinia"
import { ref, reactive } from "vue"
import store from "@/store"

interface User {
    id: 0,
    name: string,
    password: string,
    avatarUrl: string
}

export const useUserStore = defineStore("user", () => {
    const currentUser = ref<User>({
        id: 0,
        name: '',
        password: '',
        avatarUrl: ''
    })

    const setCurrentUser = (user: any) => {
        currentUser.value = user
    }

    const searchUser = ref<User>({
        id: 0,
        name: '',
        password: '',
        avatarUrl: ''
    })

    const setSearchUser = (user: any) => {
        searchUser.value = user
    }

    const Name = ref<string>("")
    const setName = (name: string) => {
        Name.value = name
    }

    return { currentUser, searchUser, setCurrentUser, setSearchUser, Name, setName }
},
    {
        persist: true,
    })

export function useUserStoreHook() {
    return useUserStore(store)
}