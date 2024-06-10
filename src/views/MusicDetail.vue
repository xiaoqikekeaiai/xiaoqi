<template>
    <div class="music-detail">
        <div class="music-detail-navbar">
            <div class="music-detail-navbar-arraw">
                <img src="" alt="">
            </div>
            <div class="music-detail-navbar-des">
                {{ stores.musicInfo.playList[stores.musicInfo.currentIdx].name }}
            </div>
        </div>
        <div class="music-detail-body"></div>
        <div class="music-detail-textarea">
            <div class="music-detail-textarea-songName">{{ stores.musicInfo.playList[stores.musicInfo.currentIdx].name
                }}</div>

            <div class="music-detail-textarea-singerName">{{
                stores.musicInfo.playList[stores.musicInfo.currentIdx].ar.map(i => i.name).join(' & ') }}</div>

        </div>
        <div class="music-detail-progress">
            <van-slider @change="changeProgress" @drag-start="startTouch" v-model="stores.musicInfo.progress"
                bar-height="2px" active-color="rgba(255,255,255,0.6)" inactive-color="rgba(255,255,255,0.2)"
                button-size="8" />
            <div class="music-detail-progress-time">
                <div class="music-detail-progress-time-start">{{ numberToTime(stores.musicInfo.startTime) }}</div>
                <div class="music-detail-progress-time-end">{{ numberToTime(stores.musicInfo.endTime) }}</div>
            </div>
        </div>
        <div class="music-detail-controler">
            <div class="music-detail-controler-playType" @click="changeCricleType">
                <img :src="stores.musicInfo.circleType === CircleType.order ? '/src/assets/order-cricle.svg' : stores.musicInfo.circleType === CircleType.once ? '/src/assets/once-cricle.svg' : '/src/assets/random-circle.svg'"
                    alt="">
            </div>
            <div class="music-detail-controler-last">
                <img src="/src/assets/play-last.svg" alt="">
            </div>
            <div class="music-detail-controler-play" @click="chanegPlayStatus"><img
                    :src="!stores.musicInfo.playStatus ? '/src/assets/play-start.svg' : '/src/assets/play-pause.svg'"
                    alt=""></div>
            <div class="music-detail-controler-next"><img src="/src/assets/play-next.svg" alt="" @click="nextMusic">
            </div>
            <div class="music-detail-controler-menu"><img src="/src/assets/menu.svg" alt=""></div>
        </div>
        <div class="music-detail-background" ref="musicBac">
        </div>
    </div>
</template>

<script setup lang='ts'>
import { reactive, ref, nextTick, onMounted } from 'vue';
import http from '../requests/index'
import stores, { CircleType, musicElement } from '@/stores';
import { numberToTime } from '../utils'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const musicBac = ref(null)
const router = useRouter()
async function getData() {
    const { id } = route.query
    // const musicInfo = await http.getMusicInfo(Number(id))

    const musicUrlInfo = await http.getMusicUrlInfo(Number(id))
    stores.musicInfo.url = musicUrlInfo.data?.[0]?.url
    stores.musicInfo.isMusicUrlReady = true
    chanegPlayStatus()

}
function initMusic() {
    stores.musicInfo.currentIdx = Number(idx)
    stores.musicInfo.isMusicUrlReady = false
    stores.musicInfo.playStatus = false
    stores.musicInfo.url = '';
    stores.musicInfo.startTime = 0
    stores.musicInfo.endTime = 0
    stores.musicInfo.progress = 0
    getData()
    // console.log(`output2121->`, currentMusicInfo);
}
const { idx, id } = route.query

if (Number(stores.musicInfo.playList[stores.musicInfo.currentIdx].id) !== Number(id)) {
    initMusic()
}
function changeProgress(value: number) {
    stores.musicInfo.progress = value
    stores.musicInfo.startTime = stores.musicInfo.endTime * (value / 100)
    musicElement.value.currentTime = stores.musicInfo.startTime
    stores.musicInfo.isTouch = false
}


function startTouch() {
    stores.musicInfo.isTouch = true
}

function changeCricleType() {
    stores.musicInfo.circleType = (stores.musicInfo.circleType + 1) % 3
    if (stores.musicInfo.circleType === CircleType.random) {
        stores.musicInfo.playList.sort(() => Math.random() - 0.5)
    }

}
function chanegPlayStatus() {
    nextTick(() => {
        stores.musicInfo.playStatus = !stores.musicInfo.playStatus
        //@ts-ignore
        stores.musicInfo.playStatus ? musicElement.value.play() : musicElement.value.pause()
    })
    // setTimeout(() => {
    //     console.log(stores.musicInfo.ele);
    // }, 3000);


}

function nextMusic() {
    const nextIndex = (stores.musicInfo.currentIdx + 1) % stores.musicInfo.playList.length
    router.push({
        path: '/musicDetail',
        query: {
            idx: nextIndex,
            id: stores.musicInfo.playList[nextIndex].id
        }

    })
}


</script>

<style lang="less" scoped>
.music-detail {
    position: relative;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;

    &-body {
        flex: 1;
        // background-color: red;
    }

    &-progress {
        padding: 20px;

        &-time {
            color: rgba(255, 255, 255, 0.2);
            height: 40px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }

    &-textarea {
        padding-left: 20px;

        &-songName {
            font-size: 22px;
            font-weight: 700;
            color: rgba(255, 255, 255, 0.8);
            ;
            padding-bottom: 4px;
        }

        &-singerName {
            color: rgba(255, 255, 255, 0.4);
            font-weight: 600;
        }
    }

    &-navbar {
        display: flex;
        height: 44px;
        align-items: center;
        color: rgba(255, 255, 255, 0.4);
        // color: white;
    }

    &-background {
        width: 100vw;
        height: 100vh;
        position: absolute;
        z-index: -1;
        background-size: cover;
        background-size: 100vw 100vh; // background: pink;
        background-color: rgb(80, 111, 111, 0.6);

        filter: blur(5px);
    }


    &-controler {
        display: flex;
        // position: absolute;
        position: relative;
        bottom: 0;
        left: 0;
        right: 0;
        text-align: center;
        align-items: center;
        height: 60px;
        z-index: 99;
        padding-bottom: 16px;

        &-play {
            flex: 1;

            img {
                width: 48px;
                height: 48px;
            }
        }

        &-menu {
            flex: 1;

            img {
                width: 36px;
                height: 36px;
            }
        }


        &-last,
        &-next,
        &-playType {
            flex: 1;

            img {
                width: 32px;
                height: 32px;
            }
        }
    }
}
</style>
