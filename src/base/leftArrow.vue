<script setup lang="ts">
const emits = defineEmits(['click'])
const onClick = (e: any) => {
    emits('click', e)
}
</script>

<template>
    <div class="leftArrow" @click="onClick">
    </div>
</template>

<style lang="scss" scoped>
.leftArrow {
    position: relative;
    width: 2px;
    height: 10px;
    background: #000;
    rotate: 45deg;
}

.leftArrow::before {
    content: '';
    position: absolute;
    left: 5px;
    top: 5px;
    width: 2px;
    height: 10px;
    background: #000;
    rotate: 90deg;
}
</style>