<template>
    <van-tabs v-model:active="data.tabActive" animated title-active-color="black" color="red" line-width="20">
        <template #nav-left>
            <div class="nav-icon">
                <van-icon name="search" size="32" />
            </div>
        </template>

        <van-tab v-for="(item, key) in data.tabInfo" :title="item.title" :to="item.to" :key="key"> </van-tab>

        <template #nav-right>
            <div class="nav-icon">
                <van-icon name="search" size="32" />
            </div>
        </template>


    </van-tabs>
    <!-- <RouterView> -->
    <!-- <keep-alive>
            <component :is=" Component" />
    </keep-alive> -->
    <RouterView />


</template>

<script setup lang='ts'>
import { reactive } from 'vue';
import { RouterView } from 'vue-router'

const data = reactive({
    tabActive: 0,
    tabInfo: [
        {
            title: '音乐',
            to: '/home/find/music'
        },
        {
            title: '播客',
            to: '/home/find/player'
        },
        { title: '听书', to: '/home/find/listenBook' },
        { title: '直播', to: '/home/find/liveVideo' }
    ]
})
</script>

<style scoped>
.nav-icon {
    line-height: 60px;
    /* background: red; */
    width: 60px;
    height: 44px;
    text-align: center;
}
</style>