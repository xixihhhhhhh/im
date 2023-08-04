<script setup lang="ts">
import { initPage } from '@/utils'
initPage('通讯录', true, true, false, true)
import contactMan from '@/components/contactMan/index.vue'

</script>

<template>
    <div class="contacts-con">
        <contactMan></contactMan>
    </div>
</template>

<style lang="scss" scoped>
.contacts-con {
    padding: 3rem 0 4.0625rem 0;
}
</style>