import {reactive,ref} from 'vue'
export enum CircleType {
    order,
    once,
    random
}

export default reactive({
    musicInfo:{
        isMusicUrlReady:false,
        playStatus:false,
        url:'',
        circleType:CircleType.order,
        playList:[] as any[],
        currentIdx:0,
        progress:0,
        startTime:0,
        endTime:0,
        isTouch:false
    }
})
export const  musicElement = ref(null)