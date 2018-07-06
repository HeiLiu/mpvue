<template>
    <div class="videos">
       <section class="section">
           <!-- // 视频播放组件 -->
           <my-video  id="myVideo" enable-danmu danmu-btn="false" controls />
           <footer>
               <span class="author">
                   <span class="avatar">
                       <img src="" alt="">
                   </span>
                   电影大师</span>
               <span class="about">明星</span>
               <div class="icons">
                   <span class="commont">
                       <img src="" alt="">2
                   </span>
                   <span class="share">
                       <img src="" alt="">
                   </span>
                   <span class="delete">
                       <img src="" alt="">
                   </span>
               </div>
           </footer>
       </section>
    </div>
</template>

<script>
import Video from "@/components/videoPlay";
export default {
  components: {
      MyVideo: Video
  }
};
</script>

<style scoped>
.videos{
    position: absolute;
    top: 100rpx;bottom: 0;left: 0;right: 0;
    width: 100vw;
    height: 100vh;
}
.videos .section{
    position: relative;
    background: burlywood;
}
footer{
    height: 60rpx;
    width: 100vw;
    background: red;
}
</style>
