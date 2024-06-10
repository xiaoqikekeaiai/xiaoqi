<template>
    <div class="song-view">
        <div class="song-view-title"> {{ props.title }}</div>
        <slot></slot>
    </div>

</template>

<script setup lang='ts'>

import { defineProps } from 'vue'
const props = defineProps({
    title: String
})
</script>

<style lang="less" scoped>
.song-view {
    padding: 20px 12px;

    padding-bottom: 0;

    &-title {
        font-weight: 700;
        font-size: 20px;
        height: 40px;
        line-height: 40px;
        padding-bottom: 10px;
    }

    // &-list {
    //     display: flex;
    // }
}
</style>