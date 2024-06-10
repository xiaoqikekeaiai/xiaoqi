<template>

    <van-tabbar v-model="data.tabBarActive" active-color="red">
        <van-tabbar-item to="/home/recommend" name="recommend" :icon="data.tabBarActive === 'recommend' ? '/src/assets/active-music.svg' : '/src/assets/music.svg'
            ">推荐</van-tabbar-item>
        <van-tabbar-item name="find" icon="/src/assets/find.svg" to="/home/find">发现</van-tabbar-item>
        <van-tabbar-item name="explore" icon="/src/assets/explore.svg" to="/home/explore">探索</van-tabbar-item>
        <van-tabbar-item name="dynamic" :icon="data.tabBarActive === 'dynamic' ? '/src/assets/dynamic.svg' : '/src/assets/dynamic.svg'
            " to="/home/dynamic">动态</van-tabbar-item>
        <van-tabbar-item name="my" icon="contact-o" to="/home/my">我的</van-tabbar-item>
    </van-tabbar>
    <div class="margin">
        <!-- <router-view> -->
        <!-- <keep-alive>
                <component :is="Component" />
            </keep-alive> -->
        <router-view />

    </div>

</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { RouterView } from 'vue-router'

const data = reactive({
    tabBarActive: 'find',
})
</script>



<style>
.van-tab__text {
    font-size: 18px;
}

.container {
    display: flex;
}

.margin {
    margin-bottom: 50px;
    height: 100%;
}
</style>
