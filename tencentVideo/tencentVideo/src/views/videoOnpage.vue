<template>
    <div class="videos">
       <section class="section" v-for="(section, index) in sections" :key="index">
           <!-- // 视频播放组件 -->
           <my-video :src="section.videoUrl" :poster="section.imgUrl" id="myVideo" enable-danmu danmu-btn="false" controls="true" />
           <footer>
               <div class="left smallFont">
                   <div class="avatar">
                       <img src="http://p9utic4op.bkt.clouddn.com/18-6-5/71393469.jpg" alt="">
                        <span class="author">{{section.author}}</span>
                   </div>
                <span class="about">{{section.about}}</span>
                </div>
               <div class="right icons">
                   <span class="icon comment smallFont">
                       <img src="../../static/images/icon/comment.png" alt="">2
                   </span>
                   <span class="icon share">
                       <img src="../../static/images/icon/share1.png" alt="">
                   </span>
                   <span class="icon delete">
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
    props:{
        sections: []
    },
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
  background: #fff;
}
footer {
  height: 100rpx;
  width: 100vw;
//   background: red;
  display: flex;
  flex-direction: row;
}
footer .left{
    box-sizing border-box
    // flex: 1;
    width 70vw
    justify-content center;
    align-items: center;
    padding-left 45rpx
}
.left .avatar{
    width: auto ;
    height: 60rpx;
    line-height: 60rpx;
    background: #F7F8F9;
    border-radius: 20rpx;
    display inline-block; 
    padding 0 10rpx
    margin-top 15rpx
}
.avatar img{
    width: 60rpx;
    height: 60rpx;
    border-radius: 50%;
    display: inline-block;
    vertical-align middle
}
.avatar .author{
    // min-width 60rpx
    width auto 
}
.about{
    min-width 60rpx
    width auto
    border-radius 10rpx
    background #F7F8F9
    margin-left 20rpx
    display inline-block
    height 60rpx
    line-height 60rpx
    padding 0 10rpx
    
}

footer .right{
    // flex:  1;
    width 30vw
    display flex
    align-items center
    justify-content space-around
    // margin-left 120rpx
}
.icons img{
    flex 1
    width: 32rpx;
    height: 32rpx;
}
.icons .icon{
    display inline-block
    margin-right 20rpx
}
.comment img{
    padding-right 10rpx
    vertical-align middle
}

.smallFont{
  color: #ccc;
  font-size: 28rpx;
}
</style>
