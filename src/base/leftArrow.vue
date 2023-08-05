<script setup lang="ts">
const emits = defineEmits(['click'])
const onClick = (e: any) => {
    emits('click', e)
}
const props = defineProps({
    width: {
        type: Number,
        default: 2
    },
    height: {
        type: Number,
        default: 10
    },
    color: {
        type: String,
        default: '#000'
    }
})
const style = {
    '--width': props.width + 'px',
    '--height': props.height + 'px',
    '--background': props.color,
    '--topAndLeft': props.height / 2 + 'px'
}
</script>

<template>
    <div class="leftArrow" @click="onClick" :style="style">
    </div>
</template>

<style lang="scss" scoped>
.leftArrow {
    position: relative;
    width: var(--width);
    height: var(--height);
    background: var(--background);
    rotate: 45deg;
}

.leftArrow::before {
    content: '';
    position: absolute;
    left: var(--topAndLeft);
    top: var(--topAndLeft);
    width: var(--width);
    height: var(--height);
    background: var(--background);
    rotate: 90deg;
}
</style>