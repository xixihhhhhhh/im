<script setup lang="ts">
import rightArrow from '@/base/rightArrow.vue';

</script>

<template>
    <div class="funcItem-wrap">
        <div class="funcItem">
            <div class="img-wrap">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" t="1690510111422"
                    class="icon" viewBox="0 0 1024 1024" version="1.1" p-id="1738">
                    <path d="M246.9 920L83 415.7 512 104l429 311.7L777.1 920z" fill="#FFFFFF" p-id="1739" />
                    <path d="M246.9 920L83 415.7 512 104l429 311.7L777.1 920z" fill="#FFFFFF" p-id="1740" />
                    <path d="M512 104l-48.8 35.4L871 435.7 713.6 920h63.5L941 415.7z" fill="#EEEEEE" p-id="1741" />
                    <path
                        d="M777.1 940H246.9c-8.7 0-16.3-5.6-19-13.8L64 421.9c-2.7-8.2 0.3-17.3 7.3-22.4l429-311.7c7-5.1 16.5-5.1 23.5 0l429 311.7c7 5.1 9.9 14.1 7.3 22.4L796.2 926.2c-2.7 8.2-10.4 13.8-19.1 13.8z m-515.7-40h501.2l154.9-476.7L512 128.7 106.5 423.3 261.4 900z"
                        fill="#202D47" p-id="1742" />
                    <path d="M304.5 831.7l-80-384.3L512 238.6l287.5 208.8-109.8 338z" fill="#227CE5" p-id="1743" />
                    <path d="M515 233.6l-60.6 44 268.1 194.8-102.9 316.8 73.1-8.8 109.8-338z" fill="#2571CB" p-id="1744" />
                    <path
                        d="M304.5 851.7c-9.4 0-17.6-6.6-19.6-15.9l-80-384.3c-1.6-7.7 1.5-15.6 7.8-20.3L500.2 222.4c7-5.1 16.5-5.1 23.5 0l287.5 208.9c7 5.1 9.9 14.1 7.3 22.4l-109.8 338c-2.4 7.4-8.9 12.7-16.6 13.7l-385.2 46.3h-2.4zM246.7 456l73.6 353.6L674.6 767 776 455 512 263.3 246.7 456z"
                        fill="#202D47" p-id="1745" />
                    <path d="M394.4 714.6l5.8-223.1L512 368.1l126.6 142-32 138.5z" fill="#2DCD54" p-id="1746" />
                    <path d="M512 368.1l-26.3 29 82.9 93-32 138.5-141.1 43.9-1.1 42.1 212.2-66 32-138.5z" fill="#31B952"
                        p-id="1747" />
                    <path
                        d="M394.4 734.6c-4.3 0-8.6-1.4-12.1-4.1-5.1-3.9-8.1-10-7.9-16.5l5.9-223c0.1-4.8 2-9.4 5.2-12.9l111.8-123.4c3.8-4.2 9.3-6.6 14.9-6.6 5.7 0 11.1 2.5 14.9 6.7l126.6 142c4.3 4.8 6 11.5 4.6 17.8l-32.1 138.5c-1.6 6.9-6.8 12.5-13.5 14.6l-212.2 66c-2.2 0.6-4.2 0.9-6.1 0.9zM420 499.5l-4.9 187.7 174.6-54.3 27.1-117.2L511.9 398 420 499.5z"
                        fill="#202D47" p-id="1748" />
                    <path
                        d="M265.9 906.9l-33.1-22.4 258.9-382c2.8-4.2 7.2-7.2 12.1-8.3l432.8-98 8.8 39-425.1 96.2-254.4 375.5z"
                        fill="#202D47" p-id="1749" />
                    <path
                        d="M744.2 917.8L495.8 531.3l-402.4-96.1 9.3-38.9 410.2 98c5 1.2 9.4 4.3 12.2 8.6l252.8 393.3-33.7 21.6z"
                        fill="#202D47" p-id="1750" />
                    <path d="M492 104h40v409.7h-40z" fill="#202D47" p-id="1751" />
                </svg>
            </div>
            <div class="mid-wrap">
                <div class="title">
                    雷达加朋友
                </div>
                <div class="tip">
                    添加身边的朋友
                </div>
            </div>
            <div class="rightArr">
                <rightArrow></rightArrow>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.funcItem-wrap {
    background: #fff;

    .funcItem {
        display: flex;
        height: 60px;
        align-items: center;

        .img-wrap {
            @include img-wrap(40px);
            margin: 0 10px 0 30px;
        }

        .mid-wrap {
            display: flex;
            flex-direction: column;
            justify-content: space-around;

            .title {
                position: relative;
                top: 5px;
                font-weight: bold;
                font-size: 18px;
            }

            .tip {
                color: #999;
                font-size: 12px;
            }
        }
    }

    .rightArr {
        @include wh(30px);
        position: absolute;
        right: 10px;
    }
}
</style>