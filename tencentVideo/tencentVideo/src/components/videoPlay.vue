<template>
    <div>
      <video id="myVideo" :src="src" :poster="poster" :danmu-list="danmuList" :enable-danmu="enable-danmu" 
      :danmu-btn="danmu-btn" :controls="controls" @click="handleClick"></video>  
    </div>
    <!-- 视频播放的箭头 我的老天爷 -->
    <!-- <svg id="txp_svg_play_lg" viewBox="0 0 100 100" width="100%" height="100%">   <circle cx="50" cy="50" r="50" style="fill:#222;fill-opacity:0.75"></circle>   <path transform="translate(36, 33)" d="M0.6,2C0.6,2,0,3.5,0,16.9C0,30.3,0.6,32,0.6,32c0,1.5,1.6,2.5,2.9,1.8c0,0,3-0.5,15.2-6.6c12.2-6.1,14.2-8.4,14.2-8.4c1.5-0.7,1.5-2.8,0-3.6c0,0-3.3-3.1-14.2-8.6C7.9,1.1,3.5,0.2,3.5,0.2C2.1-0.5,0.6,0.5,0.6,2z" style="   fill:#fff;"></path>  </svg> -->
</template>

<script>
export default {
    props: {
        src: String,
        poster: String,
        danmuList: Array,
        "enable-danmu": {
            type: Boolean,
            default: false
        } ,
        videoCtx: Object,
        "danmu-btn": {
            type: Boolean,
            default: false
        } ,
        controls: {
            type: Boolean,
            default: true
        }
    },
    mounted() {
        // console.log(this.playUrl);
    },
    methods: {
        handleClick(e){
            // console.log('这个方法呢 测试代码执行');
            console.log(this.src);
            this.$emit('click', 'sdf')
            // var seek=e.detail.value; 
            // console.log(this.videoCtx)
        }
    }
}
</script>

<style>
#myVideo{
    width: 100%;
}
</style>
