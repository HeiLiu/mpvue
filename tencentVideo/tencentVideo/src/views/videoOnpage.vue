<template>
    <div class="videos">
       <section class="section">
           <!-- // 视频播放组件 -->
           <my-video  id="myVideo" enable-danmu danmu-btn="false" controls />
           <footer>
               <div class="left">
                   <div class="avatar">
                       <img src="http://p9utic4op.bkt.clouddn.com/18-6-5/71393469.jpg" alt="">
                   电影大师
                   </div>
                    <span class="about">明星</span>
                </div>
               <div class="right icons">
                   <span class="commont">
                       <img src="../../static/images/icon/comment.png" alt="">2
                   </span>
                   <span class="share">
                       <img src="../../static/images/icon/share1.png" alt="">
                   </span>
                   <span class="delete">
                       <img src="../../static/images/icon/delete.png" alt="">
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

<style lang="stylus" scoped>
.videos {
  position: absolute;
  top: 100rpx;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
}
.videos .section {
  /* position: relative; */
  background: burlywood;
}
footer {
  height: 100rpx;
  width: 100vw;
  background: red;
  display: flex;
  flex-direction: row;
}
footer .left{
    flex: 1;
    align-items: center;
}
.left .avatar{
    width: 30vw;
    height: 50rpx;
    line-height: 50rpx;
    background: #bdbdbd;
    border-radius: 4rpx 
}
.avatar img{
    width: 50rpx;
    height: 50rpx;
    border-radius: 50%;
    display: inline-block;
}
.icons img{
    width: 32rpx;
    height: 32rpx;

}
footer .right{
    flex:  1;
    align-items: center;
    justify-content: center;
}
</style>
