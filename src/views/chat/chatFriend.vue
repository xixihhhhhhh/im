<script setup lang="ts">
import { initPage } from '@/utils'
import InputFoorer from './components/inputFooter.vue'
import { useMeetingStore } from '@/store/modules/meeting'
const meetingStore = useMeetingStore()
initPage({ title: meetingStore.name, headGoBack: true, showHeader: true })

import { onMounted, ref, watch, reactive, onUpdated } from 'vue'
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

onMounted(() => {
    socket = io('http://localhost:3002'); // 连接后端的 socket.io 方法里面传服务端的ip
    socket.on('connect', () => {
        console.log(socket.id, '监听客户端连接成功-connect');
    });
    socket.on('fresh-message', async (data: any) => {
        // 自定义一个事件来获取，服务端推送回来的消息列表
        chatList.value = data;
    });
    meetingStore.inputActive = false
});

const sendMessage = (value: string) => {
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

const showHistoryMsgFlag = ref(true)
const showHistoryMsg = async () => {
    showHistoryMsgFlag.value = false
    const res = await findFriendChatMsgList(userStore.currentUser.id, meetingStore.friendId)
    chatList.value = res.data
}


import Recorder from 'js-audio-recorder'
const data = reactive({
    //用于存储创建的语音对象
    recorder: null,
    formData: null,
    // 控制录音动画的显示隐藏
    showAnima: false,
    mation: true,
    isHistory: true,
    // 录音时长
    duration: 0,
})
function submit() { // 发送语音的方法
    data.recorder.pause() // 暂停录音
    data.timer = null
    console.log('上传录音')// 上传录音
    var formData = new FormData()
    var blob = data.recorder.getWAVBlob()//获取wav格式音频数据
    //此处获取到blob对象后需要设置fileName满足当前项目上传需求，其它项目可直接传把blob作为		  file塞入formData
    var newbolb = new Blob([blob], { type: 'audio/wav' })
    var fileOfBlob = new File([newbolb], new Date().getTime() + '.wav')
    //formData是传给后端的对象,
    formData.append('file', fileOfBlob)
    //计算出录音时长
    data.duration = Math.ceil((new Date() - data.duration) / 1000)
    console.log(data.duration);
    //发送给后端的方法
    // sendAudio(formData).then(res => {
    //     console.log(res);
    // })
}
// 录音按钮的点击事件
function voice() {
    //实例化语音对象
    data.recorder = new Recorder({
        sampleBits: 16, // 采样位数，支持 8 或 16，默认是16
        sampleRate: 16000, // 采样率，支持 11025、16000、22050、24000、44100、48000，根据浏览器默认值，我的chrome是48000
        numChannels: 1 // 声道，支持 1 或 2， 默认是1
    })
    //记录开始录音的时间
    data.duration = new Date();
    Recorder.getPermission().then(() => {
        console.log('开始录音')
        data.recorder.start() // 开始录音
    }, (error: { name: any; message: any; }) => {
        console.log(`${error.name} : ${error.message}`)
    })
}
function handleStop() {
    console.log('停止录音')
    data.recorder.stop() // 停止录音
    data.mation = false;
}
function handlePlay() {
    console.log('播放录音')
    data.recorder.play() // 播放录音
}
function handleDestroy() {
    console.log('销毁实例')
    if (data.recorder) {
        data.recorder.destroy() // 毁实例
    }
}

function clickActive() {
    meetingStore.changeinputActive(false)
    meetingStore.voiceActive = false
}
</script>

<template>
    <div class="content-wrap" id="box-bd" @click="clickActive" :class="{ active: meetingStore.inputActive }">
        <div class="showHistoryMsg" @click="showHistoryMsg" v-if="showHistoryMsgFlag">展示历史消息</div>
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

    </div>
    <InputFoorer @sendMessage="sendMessage" @voice="voice"></InputFoorer>
</template>

<style lang="scss" scoped>
.content-wrap {
    height: 100%;
    overflow-y: auto;
    padding: 2.125rem .625rem 3.125rem;
    background: #ededed;
    transition: padding .5s linear;

    .showHistoryMsg {
        text-align: center;
        height: 1rem;
        line-height: 1rem;
        color: #999;
    }

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