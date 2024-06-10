<script setup lang="ts">
import { useRoute, RouterView, useRouter } from 'vue-router'
import stores, { CircleType, musicElement } from './stores';
import { onMounted } from 'vue';
const route = useRoute()
const router = useRouter()
onMounted(() => {


  musicElement.value.addEventListener('timeupdate', () => {
    // console.log(musicElement.value.currentTime);
    if (!stores.musicInfo.isTouch) {
      stores.musicInfo.startTime = musicElement.value.currentTime
      stores.musicInfo.progress = stores.musicInfo.startTime / stores.musicInfo.endTime * 100
    }

  })
  musicElement.value.addEventListener('loadedmetadata', () => {
    // console.log(e, 999);
    stores.musicInfo.endTime = musicElement.value.duration
  })

  musicElement.value.addEventListener('ended', () => {
    if (stores.musicInfo.circleType !== CircleType.once) {
      stores.musicInfo.currentIdx = (stores.musicInfo.currentIdx + 1) % stores.musicInfo.playList.length
      router.push({
        path: '/musicDetail',
        query: {
          idx: stores.musicInfo.currentIdx,
          id: stores.musicInfo.playList[stores.musicInfo.currentIdx].id
        }
      })
    } else {
      musicElement.value.currentTime = 0
      musicElement.value.play()
    }
    // console.log(e, 999);
    // stores.musicInfo.endTime = musicElement.value.duration
  })
})


</script>

<template>

  <audio ref="musicElement" :src="stores.musicInfo.url">
    <!-- <source
                src="https://m701.music.126.net/20240609194149/298296958a7afa7b14ea93649474c7c9/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/33507042271/490a/1c9a/683d/f4f0f3c7695c7ef8d8c3d98b4051ee89.mp3"
                type="audio/mpeg"> -->
  </audio>
  <RouterView :key="route.fullPath" />



</template>

<style>
* {
  padding: 0;
  margin: 0;
}
</style>