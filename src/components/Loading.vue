<template>
    <div class="loading" v-if="!props.show">
        <van-loading size="24px" color="#0094ff">加载中...</van-loading>
    </div>
</template>

<script setup lang='ts'>
import { defineProps } from 'vue'
const props = defineProps({
    show: Boolean
})
</script>

<style></style>