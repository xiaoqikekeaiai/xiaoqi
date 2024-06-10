<template>
    <div class="song-view-item">
        <div class="song-view-item-img">
            <img :src="props.img" alt="">
        </div>
        <div class="song-view-item-text van-multi-ellipsis--l2">
            {{ props.text }}
        </div>
        <div class="song-view-item-count">
            {{ props.count }}
        </div>
    </div>
</template>

<script setup lang='ts'>
import { defineProps } from 'vue';

const props = defineProps({
    img: String,
    text: String,
    count: Number
})
</script>

<style lang="less" scoped>
.song-view-item {
    width: 120px;
    // padding-left: 12px;
    // height: 120px;

    img {
        width: 120px;
        height: 120px;
        border-radius: 8px;
    }

    &-text {
        padding-top: 5px;

    }

}
</style>