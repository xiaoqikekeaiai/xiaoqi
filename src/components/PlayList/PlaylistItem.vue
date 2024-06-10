<template>
    <div class="play-list-item">
        <div class="play-list-item-order">{{ props.order }}</div>
        <div class="play-list-item-textarea">
            <div class="play-list-item-textarea-songname van-ellipsis">{{ props.songName }}</div>
            <div class="play-list-item-textarea-singername van-ellipsis">
                {{ props.singerName }}
            </div>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { defineProps } from 'vue'
const props = defineProps({
    order: Number,
    singerName: String,
    songName: String
})
</script>

<style lang="less" scoped>
.play-list-item {
    display: flex;
    height: 60px;
    align-items: center;
    padding: 5px 10px;

    &-order {
        color: #909399;
        font-size: 20px;
    }

    &-textarea {
        &-singername {
            font-size: 16px;
            color: #909399;
            width: 60vw;
        }

        &-songname {
            font-size: 20px;
            width: 60vw;
        }

        padding-left: 16px;
    }
}
</style>