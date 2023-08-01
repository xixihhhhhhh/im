<script setup lang="ts">
const emits = defineEmits(['click'])
const onClick = (e: any) => {
    emits('click', e)
}
</script>

<template>
    <div class="rightArrow" @click="onClick">
    </div>
</template>

<style lang="scss" scoped>
.rightArrow {
    position: relative;
    width: 2px;
    height: 20px;
    background: #999;
    rotate: -45deg;
}

.rightArrow::before {
    content: '';
    position: absolute;
    right: 10px;
    top: 10px;
    width: 2px;
    height: 20px;
    background: #999;
    rotate: 90deg;
}
</style>