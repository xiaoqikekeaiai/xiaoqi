<template>
    <van-tabs v-model:active="data.tabsActive" line-width="0">
        <van-tab v-for="(item, idx) in data.tabsType" :title="item.title" :key="idx" :to="item.to"
            :title-style="idx === data.tabsActive ? { backgroundColor: 'rgb(128, 128, 128,0.2)', height: '24px', borderRadius: '12px', margin: '10px', boxSizing: 'border-box', color: 'black', fontWeight: 600 } : {}">

        </van-tab>
    </van-tabs>
    <!-- <router-view> -->
    <!-- <keep-alive>
            <component :is="Component" />
        </keep-alive> -->
    <router-view />


</template>

<script setup lang='ts'>
import { reactive } from 'vue';
import { RouterView } from 'vue-router'

const data = reactive({
    tabsActive: 0,
    tabsType: [{
        title: '精选',
        to: '/home/find/music/select'
    }, {
        title: '排行榜',
        to: '/home/find/music/rate'
    },
    {
        title: '歌单',
        to: '/home/find/music/songs'
    },
    {
        title: '欧美',
        to: '/home/find/music/songs'
    },
    {
        title: '原创',
        to: '/home/find/music/songs'
    },
    {
        title: '经典',
        to: '/home/find/music/songs'
    }]
})
</script>

<style></style>