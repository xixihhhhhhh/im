<script setup lang="ts">
import { initPage } from '@/utils'
import inputFoorer from './components/inputFooter.vue'
import { useMeetingStore } from '@/store/modules/meeting'
const meetingStore = useMeetingStore()
initPage(meetingStore.name, false, false, true, true)

import { onMounted, ref, watch, nextTick, onUpdated } from 'vue'
import { useUserStore } from '@/store/modules/user';
const userStore = useUserStore()
interface msg {
    user_id: number,
    message: string,
    name: string
}
import io from 'socket.io-client';
let socket: any;
const chatList = ref<msg[]>([])
const chatMsg = ref<string>('')
import { findFriendChatMsgList } from '@/api'

onMounted(async () => {
    socket = io('http://localhost:3002'); // 连接后端的 socket.io 方法里面传服务端的ip
    socket.on('connect', () => {
        console.log(socket.id, '监听客户端连接成功-connect');
    });
    socket.on('fresh-message', (data: any) => {
        // 自定义一个事件来获取，服务端推送回来的消息列表
        chatList.value = data;
    });
    meetingStore.inputActive = false
    console.log(meetingStore.friendId)
    const res = await findFriendChatMsgList(userStore.currentUser.id, meetingStore.friendId)
});

const sendMessage = (value: string) => {
    console.log(value, 'hhh')
    if (value === '') {
        return
    }
    chatMsg.value = value
    socket.emit('send-message', userStore.currentUser.id, meetingStore.friendId, chatMsg.value, userStore.currentUser.name);
    chatMsg.value = '';
}

import emojiList from '@/assets/icomNames.js';
function formatMsg(text: string) {
    text = text + ''
    text = text.replace(/\[[\u4e00-\u9fa5]+\]/g, replaceEmoji);
    // debugger;
    return text;
    function replaceEmoji(param: any) {
        let target = emojiList.find((emoji: any) => param.includes(emoji.CN + ""));
        if (target) {
            return `<img 
                                style="display: inline-block; width: 1rem; height: 1rem; margin:0 4px;" 
                                src=${target.url}
                            />`;
        }
        return param;
    }
}

const occupancy = ref(null)

onUpdated(() => {
    const div = document.getElementById("box-bd") as HTMLElement
    div.scrollTop = Number(div?.scrollHeight)
})
watch(() => meetingStore.inputActive,
    (newVal) => {
        if (newVal) {
            setTimeout(() => {
                const div = document.getElementById("box-bd") as HTMLElement
                div.scrollTop = Number(div?.scrollHeight)
            })
        }
    })
</script>

<template>
    <div class="content-wrap" id="box-bd" @click="meetingStore.changeinputActive(false)"
        :class="{ active: meetingStore.inputActive }">
        <div v-for="chat in chatList">
            <div class=" me" v-if="chat.user_id === userStore.currentUser.id">
                <div class="content">
                    <div class="top">
                        {{ chat.name }}
                    </div>
                    <div class="bottom" v-html="formatMsg(chat.message)">
                    </div>
                </div>
                <div class="img-wrap">
                    <img src="../../assets/img/mihoyo.jpg" alt="">
                </div>
            </div>
            <div class="you" v-else>
                <div class="img-wrap">
                    <img src="../../assets/img/mihoyo.jpg" alt="">
                </div>
                <div class="content">
                    <div class="top">
                        {{ chat.name }}
                    </div>
                    <div class="bottom" v-html="formatMsg(chat.message)">
                    </div>
                </div>
            </div>
        </div>
        <div ref="occupancy"></div>
    </div>
    <inputFoorer @sendMessage="sendMessage"></inputFoorer>
</template>

<style lang="scss" scoped>
.content-wrap {
    height: 100%;
    overflow-y: auto;
    padding: 2.125rem .625rem 3.125rem;
    background: #eee;
    transition: padding .5s linear;

    .me {
        display: flex;
        align-items: center;
        justify-content: flex-end;

        .img-wrap {
            @include img-wrap(2rem);
            @include borderRadius(15%);
            overflow: hidden;
        }

        .content {
            display: flex;
            flex-direction: column;
            margin-right: .625rem;
            height: auto;
            max-width: 60%;

            .top {
                color: #000;
                font-weight: bold;
                text-align: right;
            }

            .bottom {
                position: relative;
                height: 50%;
                padding: .1rem;
                background-color: #fff;
                word-wrap: break-all;
                // &::after {
                //     content: '';
                //     position: absolute;
                //     border: 10px solid transparent;
                //     border-right: 10px solid #fff;

                // }
            }
        }
    }

    .you {
        display: flex;
        align-items: center;
        justify-content: flex-start;

        .img-wrap {
            @include img-wrap(2rem);
            @include borderRadius(15%);
            overflow: hidden;
        }

        .content {
            display: flex;
            flex-direction: column;
            margin-left: .625rem;
            height: auto;
            max-width: 60%;

            .top {
                color: #000;
                font-weight: bold;
                text-align: left;
            }

            .bottom {
                position: relative;
                height: 50%;
                padding: .1rem;
                background-color: #fff;
                word-wrap: break-all;
                // &::after {
                //     content: '';
                //     position: absolute;
                //     border: 10px solid transparent;
                //     border-right: 10px solid #fff;

                // }
            }
        }
    }

    &.active {
        padding-bottom: 10rem;
    }
}
</style>