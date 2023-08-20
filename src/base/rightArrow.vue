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
    '--top': (props.height / 2 ) + 'px',
    '--left': (props.height / -2 ) + 'px',
}
</script>

<template>
    <div class="rightArrow" @click="onClick" :style="style">
    </div>
</template>

<style lang="scss" scoped>
.rightArrow {
    position: relative;
    width: var(--width);
    height: var(--height);
    background: var(--background);
    rotate: -45deg;
}

.rightArrow::before {
    content: '';
    position: absolute;
    left: var(--left);
    top: var(--top);
    width: var(--width);
    height: var(--height);
    background: var(--background);
    rotate: 90deg;
}
</style>