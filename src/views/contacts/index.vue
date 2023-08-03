<script setup lang="ts">
import { initPage } from '@/utils'
initPage('通讯录', true, true, false, true)
import contactMan from '@/components/contactMan/index.vue'

</script>

<template>
    <contactMan></contactMan>
</template>
