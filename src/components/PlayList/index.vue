<template>
    <div class="playList-container">
        <div class="playList-container-title">
            <div class="playList-container-title-img">
                <img src="/src/assets/player-icon.svg" alt="">
            </div>
            <div class="playList-container-title-text">播放全部 <span>({{ props.playCount }})</span></div>
        </div>
        <div class="playList-container-body">
            <slot></slot>
        </div>

    </div>

</template>

<script setup lang='ts'>
import { defineProps } from 'vue'
const props = defineProps({
    playCount: Number
})
</script>

<style lang="less" scoped>
.playList-container {
    padding: 10px;
    background-color: white;
    display: flex;
    flex-direction: column;

    &-title {
        display: flex;
        height: 40px;
        align-items: center;

        &-img {
            img {
                width: 24px;

            }
        }

        &-text {
            padding-left: 10px;
            font-weight: 700;
            font-size: 18px;

            span {
                font-size: 12px;
                color: #909399;
                padding-left: 4px;
            }
        }
    }

    &-body {
        flex: 1;
        overflow: scroll;
    }
}
</style>