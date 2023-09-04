<script setup lang="ts">
import { ref, watch, onMounted, nextTick } from 'vue'
import emojiList from '@/assets/icomNames.js';
import { useMeetingStore } from '@/store/modules/meeting'
const meetingStore = useMeetingStore()
defineProps(['content',])
const emits = defineEmits(['sendMessage', 'voice'])
const message = ref<string>('')
const sendMessage = () => {
    const inputPannel = document.getElementsByClassName('input-panel') as any
    meetingStore.inputActive = false
    message.value = manageMsg(inputPannel[0].innerText)
    arr = []
    emits('sendMessage', message.value)
    inputPannel[0].innerText = ''
    message.value = ''
}
let arr: string[] = []
const pushImg = (emoji: any) => {
    const imgTag = `<img src="${emoji.url}" width="16" height="16" >`;
    document.execCommand("insertHTML", false, imgTag);
    const inputPannel = document.getElementsByClassName('input-panel') as any
    const index = inputPannel[0].innerText.length
    if (arr[index]) {
        arr[index] += `[${emoji.CN}]`
    } else {
        arr[index] = `[${emoji.CN}]`
    }
}

const keydown = (e: { key: string; }) => {
    if (e.key === 'Backspace') {
        const inputPannel = document.getElementsByClassName('input-panel') as any
        const index = inputPannel[0].innerText.length
        arr[index] = ''
    }
}
function insertStr(source: string, start: number, newStr: string) {
    return source.slice(0, start) + newStr + source.slice(start)
}
function manageMsg(msg: string) {
    let count = 0
    arr.forEach((item, index) => {
        if (item.length > 0) {
            msg = insertStr(msg, index + 4 * count, item)
            count++
        }
    })
    // console.log(msg)
    return msg
}

const voiceActive = ref(false)
function voice() {
    emits('voice')
    meetingStore.voiceActive = !meetingStore.voiceActive
}
import voiceCom from './voice.vue'
</script>

<template>
    <footer class="footer-wrap" :class="{ active: meetingStore.inputActive, voiceActive: meetingStore.voiceActive }">
        <div class="inner-wrap" v-if="!meetingStore.voiceActive">
            <div class="volumne" @click="voice">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" t="1691043348371"
                    class="icon" viewBox="0 0 1025 1024" version="1.1" p-id="3161" width="22" height="20">
                    <path
                        d="M213.333333 341.333333l213.333333-213.333333 0 768-213.333333-213.333333-85.333333 0q-52.992 0-90.496-37.504t-37.504-90.496l0-83.669333q0-52.992 37.504-91.349333t90.496-38.314667l85.333333 0zM341.333333 690.005333l0-357.674667-92.672 94.336-120.661333 0q-17.322667 0-29.994667 13.184t-12.672 31.146667l0 83.669333q0 17.664 12.501333 30.165333t30.165333 12.501333l120.661333 0zM619.989333 369.664q12.330667 0 23.168 6.997333t16.170667 18.986667q23.338667 56.32 23.338667 116.352 0 61.013333-23.338667 115.669333-4.992 11.989333-15.829333 19.157333t-23.509333 7.168q-15.658667 0-29.184-11.818667t-13.482667-30.848q0-7.68 3.328-16.682667 16.682667-39.338667 16.682667-82.688 0-43.008-16.682667-82.986667-3.328-7.68-3.328-16.682667 0-18.986667 12.842667-30.848t29.824-11.818667zM750.336 250.666667q24.021333 0 36.650667 20.992 32.981333 54.997333 48.981333 113.664 17.322667 62.677333 17.322667 126.677333 0 63.658667-17.322667 127.018667-16.341333 59.349333-48.981333 113.664-12.330667 20.650667-36.650667 20.650667-16.682667 0-29.653333-11.989333t-13.013333-30.677333q0-11.648 6.314667-22.016 25.984-43.349333 39.68-92.672 14.336-50.005333 14.336-104.021333 0-53.674667-14.336-103.68-13.653333-49.322667-39.68-93.013333-6.314667-9.685333-6.314667-21.674667 0-18.005333 13.184-30.506667t29.482667-12.501333zM877.994667 133.674667q22.997333 0 35.328 18.688 54.314667 79.658667 82.517333 171.349333t28.16 188.330667-28.16 188.330667-82.517333 171.349333q-11.989333 18.688-35.328 18.688-17.322667 0-29.824-11.989333t-12.501333-30.677333q0-13.312 7.338667-24.021333 95.658667-140.330667 95.658667-311.68 0-84.010667-24.32-163.328t-71.338667-148.352q-7.338667-10.666667-7.338667-24.021333 0-18.688 12.501333-30.677333t29.824-11.989333z"
                        fill="#000000" p-id="3162" />
                </svg>
            </div>
            <div class="input-panel" @keydown.enter.exact="sendMessage()" contenteditable="true" spellcheck="false"
                @click="meetingStore.changeinputActive(true)" @keydown="keydown"></div>
            <div class="emoij" @click="meetingStore.changeinputActive(!meetingStore.inputActive)">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" t="1691046246367"
                    class="icon" viewBox="0 0 1024 1024" version="1.1" p-id="4456" width="22" height="22">
                    <path
                        d="M512 832c-176.448 0-320-143.552-320-320S335.552 192 512 192s320 143.552 320 320-143.552 320-320 320m0-704C300.256 128 128 300.256 128 512s172.256 384 384 384 384-172.256 384-384S723.744 128 512 128"
                        fill="#000" p-id="4457" />
                    <path
                        d="M700.64 580.288a32 32 0 0 0-43.712 11.68A160.608 160.608 0 0 1 518.304 672a160.576 160.576 0 0 1-138.592-80 32 32 0 0 0-55.424 32.032 224.896 224.896 0 0 0 194.016 112 224.768 224.768 0 0 0 194.016-112 32 32 0 0 0-11.68-43.744M384 512a32 32 0 0 0 32-32v-96a32 32 0 0 0-64 0v96a32 32 0 0 0 32 32M640 512a32 32 0 0 0 32-32v-96a32 32 0 0 0-64 0v96a32 32 0 0 0 32 32"
                        fill="#000" p-id="4458" />
                </svg>
            </div>
            <div class="more" v-show="!meetingStore.inputActive">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" t="1690360669247"
                    class="icon" viewBox="0 0 1024 1024" version="1.1" p-id="9394" width="20" height="20">
                    <path
                        d="M512 986.156522c-267.130435 0-483.06087-215.930435-483.06087-483.06087S244.869565 22.26087 512 22.26087c264.904348 0 483.06087 215.930435 483.06087 483.06087S776.904348 986.156522 512 986.156522zM512 66.782609C271.582609 66.782609 73.46087 262.678261 73.46087 505.321739c0 240.417391 195.895652 436.313043 438.53913 436.313043 240.417391 0 438.53913-195.895652 438.53913-438.53913C950.53913 262.678261 752.417391 66.782609 512 66.782609zM763.547826 527.582609 260.452174 527.582609c-13.356522 0-22.26087-8.904348-22.26087-22.26087s8.904348-22.26087 22.26087-22.26087l503.095652 0c13.356522 0 22.26087 8.904348 22.26087 22.26087S774.678261 527.582609 763.547826 527.582609zM512 776.904348c-13.356522 0-22.26087-8.904348-22.26087-22.26087L489.73913 253.773913c0-13.356522 8.904348-22.26087 22.26087-22.26087 13.356522 0 22.26087 8.904348 22.26087 22.26087l0 503.095652C534.26087 768 525.356522 776.904348 512 776.904348z"
                        fill="#000" p-id="9395" />
                </svg>
            </div>
            <van-button type="success" size="small" v-show="meetingStore.inputActive" @click="sendMessage">发送</van-button>
        </div>
        <voiceCom v-if="meetingStore.voiceActive" class="voice"></voiceCom>
        <div class="emoji-container" :class="{ active: meetingStore.inputActive }" @click.stop>
            <img class="emoji" v-for="(emoji, i) in emojiList" :key="i" :src="emoji.url" @click.stop="pushImg(emoji)" />
        </div>
    </footer>
</template>

<style lang="scss" scoped>
.footer-wrap {
    position: fixed;
    bottom: 0;
    left: 0;
    background: #eee;
    @include wh(100%, 3.125rem);
    align-items: center;
    transition: height .5s linear;

    .inner-wrap {
        margin-top: 10px;
        display: flex;

        .volumne {
            margin: 0 .2rem;
        }

        .emoij {
            margin: 0 .2rem;
        }

        .input-panel {
            flex: 1;
            min-height: 1.5rem;
            max-height: 3rem;
            overflow-y: scroll;
            padding: 0 .625rem;
            background: #fff;
        }
    }

    &.active {
        height: 10rem;
    }

    &.voiceActive {
        height: 6rem;
    }

    .emoji-container {
        position: absolute;
        box-sizing: border-box;
        padding: 10px;
        display: flex;
        justify-content: flex-start;
        align-content: flex-start;
        flex-wrap: wrap;
        height: 160px;
        overflow-y: scroll;
        transition: opacity .5s linear;
        opacity: 0;

        .emoji {
            margin-left: 0.3rem;
            flex-grow: 0;
            flex-shrink: 0;
            display: inline-block;
            width: 1rem;
            height: 1rem;
            cursor: pointer;
        }

        &.active {
            opacity: 1;
        }
    }

    .voice {
        position: relative;
        top: 2rem;
    }
}
</style>