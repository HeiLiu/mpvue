<template>
    <div>
      <video id="myVideo" :src="src" :danmu-list="danmuList" enable-danmu danmu-btn controls @click="handleClick"></video>  
    </div>
</template>

<script>
export default {
    props: {
        src: String,
        danmuList: Array,
        videoCtx: Object
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
