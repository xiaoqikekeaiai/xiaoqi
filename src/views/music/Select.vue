<template>
    <Loading :show="data.show"></Loading>
    <div class="select-container" v-if="data.show">
        <van-swipe class="my-swipe" :autoplay="1500" indicator-color="red" :loop="true">
            <van-swipe-item v-for="(item, key) in data.banner" :key="key">
                <div class="swipe-image">
                    <img :src="item.pic" alt="">
                </div>
            </van-swipe-item>

        </van-swipe>
        <SongView title="甄选歌单">
            <van-swipe class="my-swipe" :show-indicators="false" :width="140" :loop="false">
                <van-swipe-item v-for="(item, key) in data.selectSongs" :key="key">
                    <SongViewItem :text="item.name" :img="item.coverImgUrl" :count="item.playCount"
                        @click="toSongsDetail(item.id)">
                    </SongViewItem>
                </van-swipe-item>

            </van-swipe>
        </SongView>

        <SongView title="一起听新歌">
            <van-swipe class="my-swipe" :show-indicators="false" :width="140" :loop="false">
                <van-swipe-item v-for="(item, key) in data.newSongs" :key="key">
                    <SongViewItem :text="item.name" :img="item.coverImgUrl" :count="item.playCount"
                        @click="toSongsDetail(item.id)"> </SongViewItem>
                </van-swipe-item>

            </van-swipe>
        </SongView>
        <SongView title="假期快乐">
            <van-swipe class="my-swipe" :show-indicators="false" :width="140" :loop="false">
                <van-swipe-item v-for="(item, key) in data.happySongs" :key="key">
                    <SongViewItem :text="item.name" :img="item.coverImgUrl" :count="item.playCount"
                        @click="toSongsDetail(item.id)"></SongViewItem>
                </van-swipe-item>

            </van-swipe>
        </SongView>
        <SongView title="宝藏音乐人">
            <van-swipe class="my-swipe" :show-indicators="false" :width="140" :loop="false">
                <van-swipe-item v-for="(item, key) in data.singerSongs" :key="key">
                    <SongViewItem :text="item.name" :img="item.coverImgUrl" :count="item.playCount"
                        @click="toSongsDetail(item.id)"></SongViewItem>
                </van-swipe-item>

            </van-swipe>
        </SongView>
    </div>
</template>

<script setup lang='ts'>
import { reactive } from 'vue';
import http from '../../requests'
import SongView from '../../components/Songs/SongView.vue'
import SongViewItem from '../../components/Songs/SongViewItem.vue'
import { useRouter } from 'vue-router'
import Loading from '../../components/Loading.vue'
type ISongs = { name: string, playCount: number, coverImgUrl: string, id: number }
const data = reactive({
    show: false,
    banner: [],
    selectSongs: [
    ] as ISongs[],
    newSongs: [
    ] as ISongs[],
    happySongs: [
    ] as ISongs[],
    singerSongs: [
    ] as ISongs[]


})
const router = useRouter()
const getBanner = async function () {
    const bannerRet = await http.getBanner()
    data.banner = bannerRet.banners
}

const getNewSongs = async function () {
    const songs = await http.getSongs()
    // data.banner = bannerRet.banners
    data.newSongs = songs.playlists
}
const getHappySongs = async function () {
    const songs = await http.getSongs(6, 2)
    // data.banner = bannerRet.banners
    data.happySongs = songs.playlists
}
const getSingerSongs = async function () {
    const songs = await http.getSongs(6, 3)
    // data.banner = bannerRet.banners
    data.singerSongs = songs.playlists
}
const getSelectSongs = async function () {
    const songs = await http.getSongs(6, 4)
    // data.banner = bannerRet.banners
    data.selectSongs = songs.playlists
}

const toSongsDetail = async function (id: number) {
    router.push({
        query: {
            id: id
        },
        path: '/songDetail'
    })
}
async function getData() {

    await Promise.all([getBanner(), getSelectSongs(), getNewSongs(), getSingerSongs(), getHappySongs()])
    data.show = true
}

getData()

</script>

<style lang="less" scoped>
.swipe-image {
    padding: 0px 3vw;
    padding-top: 15px;

    img {
        border-radius: 20px;
        width: 94vw;
        height: 150px;
    }
}

.loading {
    text-align: center;
    height: 80vh;
    line-height: 80vh;
}
</style>