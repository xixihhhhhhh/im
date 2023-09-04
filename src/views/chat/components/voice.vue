<template>
    <div class="mation">
        <div class="ap">
            <div class="box">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
        <div class="ap aps">
            <div class="box">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
}
</script>
<style scoped>
.ap {
    position: relative;
    height: 0;
    width: 1.875rem;
    margin: 0 auto;
}

.aps {
    transform-origin: center center;
    transform: rotate(180deg);
}

.box div {
    display: inline-block;
    position: absolute;
    bottom: 0;
    width: .625rem;
    height: 1.875rem;
    background-color: rgb(78, 176, 255);
    transform-origin: bottom;
    border-radius: .3125rem .3125rem 0 0;
}

.aps .box div {
    background-color: rgb(0, 141, 255);
    bottom: .125rem;
}

.box div:nth-child(1) {
    left: -3.75rem;
    animation: musicWave 0.5s infinite linear both alternate;
}

.box div:nth-child(2) {
    left: -2.5rem;
    animation: musicWave 0.8s infinite linear both alternate;
}

.box div:nth-child(3) {
    left: -1.25rem;
    animation: musicWave 0.6s infinite linear both alternate;
}

.box div:nth-child(4) {
    left: 0px;
    animation: musicWave 0.7s infinite linear both alternate;
}

.box div:nth-child(5) {
    left: 1.25rem;
    animation: musicWave 0.7s infinite linear both alternate;
}

.box div:nth-child(6) {
    left: 2.5rem;
    animation: musicWave 0.6s infinite linear both alternate;
}

.box div:nth-child(7) {
    left: 3.75rem;
    animation: musicWave 0.8s infinite linear both alternate;
}

.box div:nth-child(8) {
    left: 5rem;
    animation: musicWave 0.5s infinite linear both alternate;
}

@keyframes musicWave {
    0% {
        height: .5rem;
    }

    100% {
        height: 1.875rem;
    }
}
</style>
  
