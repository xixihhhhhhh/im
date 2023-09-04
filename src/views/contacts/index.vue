<script setup lang="ts">
import { initPage } from '@/utils'
initPage('通讯录', true, true, false, true)
import contactMan from '@/components/contactMan/index.vue'

import { onMounted, ref } from 'vue'
import { useUserStore } from '@/store/modules/user';
interface friend {
    friend_name: string,
    friend_id: number
}
const friendList = ref<friend[]>([])
const userStrore = useUserStore()
import { findMyFriends } from '@/api'
onMounted(async () => {
    const res = await findMyFriends(userStrore.currentUser.id)
    friendList.value = res.data
})
</script>

<template>
    <div class="contacts-con">
        <contactMan v-for="friend in friendList" :name="friend.friend_name" :id="friend.friend_id"></contactMan>
    </div>
</template>

<style lang="scss" scoped>
.contacts-con {
    padding: 3rem 0 4.0625rem 0;
}
</style>