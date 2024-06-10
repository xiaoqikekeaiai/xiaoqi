<template>
    <!-- <van-nav-bar left-text="歌单" left-arrow @click-left="onClickLeft" /> -->
    <div class="song-detail-container">
        <div class="song-detail-container-header">
            <div class="song-detail-container-header-arrow">
                <div class="song-detail-container-header-arrow-img">
                    <img src="/src/assets/arrow.svg" alt="">
                </div>
                <div class="song-detail-container-header-arrow-text">歌单</div>
            </div>
            <div class="song-detail-container-main">
                <div class="song-detail-container-main-img">
                    <img :src="data.playListDetail.coverImgUrl" alt="">
                </div>
                <div class="song-detail-container-main-textarea">
                    <div class="song-detail-container-main-textarea-title van-multi-ellipsis--l2">{{
                        data.playListDetail.name }}</div>
                    <div class="song-detail-container-main-textarea-description van-multi-ellipsis--l3">
                        {{ data.playListDetail.description }}
                    </div>
                </div>
            </div>
        </div>
        <PlayList :playCount="data.playListDetail?.tracks?.length" class="song-detail-container-playlist">
            <PlayListItem @click="toMusicDetail(index, item.id)" v-for="(item, index) in data.playListDetail.tracks"
                :key="index" :order="index + 1" :songName="item.name"
                :singerName="item.ar.map(i => i.name).join(' & ')">
            </PlayListItem>
        </PlayList>
    </div>

</template>

<script setup lang='ts'>
import PlayList from '../components/PlayList/index.vue'
import { reactive } from 'vue';
import PlayListItem from '../components/PlayList/PlaylistItem.vue'
import http from '../requests/index'
import { useRoute, useRouter } from 'vue-router'
import stores from '@/stores';
const route = useRoute()
const router = useRouter()
function onClickLeft() { }
const data = reactive({
    playListDetail: {} as {
        tracks: { id: number, name: string, ar: { name: string }[] }[],
        name: string,
        coverImgUrl: string,
        description: string

    }

})

function toMusicDetail(idx: number, id: number) {
    router.push({
        path: '/musicDetail',
        query: {
            id, idx
        }
    })
    stores.musicInfo.playList = data.playListDetail?.tracks || []
}


async function getData() {
    console.log(route);
    const { id } = route.query
    const playListRet = await http.getPlayList(Number(id))
    data.playListDetail = playListRet.playlist
    console.log(`playList->`, playListRet)
}
getData()
</script>

<style lang="less" scoped>
.song-detail-container {
    display: flex;
    flex-direction: column;
    height: 100vh;

    &-header {
        // height: 160px;
        background-color: #5f3939;

        &-arrow {
            display: flex;
            height: 40px;
            // justify-content: center;
            align-items: center;

            &-text {
                color: white;
            }

            &-img {
                img {
                    width: 24px;
                }

                padding: 0 8px;
            }
        }
    }

    &-main {
        display: flex;
        padding-bottom: 10px;

        &-img {
            padding: 0 10px;

            img {
                width: 100px;
                height: 100px;
            }

        }

        &-textarea {
            color: white;

            &-title {
                padding-right: 18px;
                font-size: 22px;
                font-weight: 700;
            }

            &-description {
                // height: 40px;
                // padding: 8px 18px;
                padding-left: 0;
                font-size: 12px;
                overflow: hidden;
                margin-top: 8px;

            }
        }
    }

    &-playlist {
        flex: 1;
        // height: 300px;
        overflow: scroll;
    }
}
</style>