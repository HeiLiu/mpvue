<template>
    <div>
      <video id="myVideo" :src="src" :poster="poster" :danmu-list="danmuList" :enable-danmu="enable-danmu" 
      :danmu-btn="danmu-btn" :controls="controls" @click="handleClick"></video>  
    </div>
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
