<template>
    <div>
        <play-video :playInfo="playInfo"></play-video>
    </div>
</template>

<script>
import PlayVideo from '@/views/playVIdeo'
export default {
    components: {
        PlayVideo,
        playInfo: null
    },
    onLoad(){
        this.playInfo = wx.getStorageSync('playInfo')
        console.log(this.playInfo)
        // 标题处理
        if(this.playInfo.videoTitle.indexOf('】')>=0){
            this.playInfo.videoTitle = this.playInfo.videoTitle.split('】')[1]
        }
    }
}
</script>

<style>

</style>
