<script setup lang="ts">
const itemList = [
    {
        msgImgUrl: 'src/assets/img/footerImg/wechat.png',
        msgTitle: '梅州梅州',
        msgTip: '15产品设计吴江铭:[动画表情]',
        time: '09:56',
        isMute: true
    },
    {
        msgImgUrl: 'src/assets/img/footerImg/wechat.png',
        msgTitle: '梅州梅州',
        msgTip: '15产品设计吴江铭:[动画表情]',
        time: '09:56',
        isMute: true
    },
    {
        msgImgUrl: 'src/assets/img/footerImg/wechat.png',
        msgTitle: '梅州梅州',
        msgTip: '15产品设计吴江铭:[动画表情]',
        time: '09:56',
        isMute: true
    },
    {
        msgImgUrl: 'src/assets/img/footerImg/wechat.png',
        msgTitle: '梅州梅州',
        msgTip: '15产品设计吴江铭:[动画表情]',
        time: '09:56',
        isMute: true
    },
    {
        msgImgUrl: 'src/assets/img/footerImg/wechat.png',
        msgTitle: '梅州梅州',
        msgTip: '15产品设计吴江铭:[动画表情]',
        time: '09:56',
        isMute: true
    },
    {
        msgImgUrl: 'src/assets/img/footerImg/wechat.png',
        msgTitle: '梅州梅州',
        msgTip: '15产品设计吴江铭:[动画表情]',
        time: '09:56',
        isMute: true
    }, {
        msgImgUrl: 'src/assets/img/footerImg/wechat.png',
        msgTitle: '梅州梅州',
        msgTip: '15产品设计吴江铭:[动画表情]',
        time: '09:56',
        isMute: true
    }, {
        msgImgUrl: 'src/assets/img/footerImg/wechat.png',
        msgTitle: '梅州梅州',
        msgTip: '15产品设计吴江铭:[动画表情]',
        time: '09:56',
        isMute: true
    }, {
        msgImgUrl: 'src/assets/img/footerImg/wechat.png',
        msgTitle: '梅州梅州',
        msgTip: '15产品设计吴江铭:[动画表情]',
        time: '09:56',
        isMute: true
    }, {
        msgImgUrl: 'src/assets/img/footerImg/wechat.png',
        msgTitle: '梅州梅州',
        msgTip: '15产品设计吴江铭:[动画表情]',
        time: '09:56',
        isMute: true
    },
]
</script>

<template>
    <div class="item-wrap" v-for="(item, index) in itemList" :key="index">
        <div class="left-wrap">
            <img :src="item.msgImgUrl" alt="">
        </div>
        <div class="middle-wrap">
            <div class="title">
                {{ item.msgTitle }}
            </div>
            <div class="tip">
                {{ item.msgTip }}
            </div>
        </div>
        <div class="right-wrap">
            <div class="time">
                {{ item.time }}
            </div>
            <div class="mute" v-if="item.isMute">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" t="1690423676640"
                    class="icon" viewBox="0 0 1024 1024" version="1.1" p-id="2290" width="20" height="20">
                    <path
                        d="M611.547429 470.918095v358.253715c0 49.859048-61.561905 74.044952-96.060953 37.741714l-156.793905-143.164953 51.760762-51.760761 127.951238 116.784761V544.085333l73.142858-73.142857z m209.92-209.944381a353.01181 353.01181 0 0 1 127.951238 241.371429v64.048762c-10.800762 120.539429-82.115048 223.646476-183.344762 278.723047l-33.767619-64.902095A280.30781 280.30781 0 0 0 877.714286 534.381714a279.893333 279.893333 0 0 0-108.251429-221.354666l52.028953-52.053334z m-108.495239-63.878095l51.736381 51.712L213.016381 800.475429l-51.712-51.687619L712.97219 197.071238z m11.532191 160.865524a218.819048 218.819048 0 0 1 79.286857 168.96 218.819048 218.819048 0 0 1-105.618286 187.684571l-33.889523-65.097143a145.700571 145.700571 0 0 0 66.364952-122.563047c0-47.957333-22.918095-90.453333-58.221714-116.906667l52.077714-52.077714z m-112.956952-152.868572v24.478477l-73.142858 73.142857V249.417143l-149.894095 157.817905-229.205333-3.82781v243.980191l34.425905-0.024381-65.999238 66.023619a73.142857 73.142857 0 0 1-41.569524-65.999238V403.407238a73.142857 73.142857 0 0 1 68.827428-73.020952l4.924953-0.121905 197.680762 3.291429 157.915428-166.229334c34.474667-36.327619 96.060952-12.117333 96.060953 37.741714z"
                        p-id="2291" fill="#999" />
                </svg>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.item-wrap {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: .625rem 0;

    .left-wrap {
        @include img-wrap(2.5rem);
    }

    .middle-wrap {
        position: relative;

        .title {
            font-weight: bold;
            font-size: .8rem;
        }

        .tip {
            font-size: .75rem;
            color: #666;
        }
    }

    .right-wrap {
        .time {
            color: #666;
            font-weight: 300;
        }

        .mute {
            position: relative;
            left: 0.25rem;
        }
    }
}
</style>