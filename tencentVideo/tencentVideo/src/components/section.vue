<template>
    <div class="sections">
        <view class="section" v-for="(section, index) in sections" :key="index">
            <view class="section_title">{{section.section_title}}</view>
            <view class="section_poster" v-if="section.posterImgUrl">
            <img class="poster_img" :src="section.posterImgUrl"/>
            <view class="poster_detail">{{section.posterDetail}}</view>
            <text class="poster_title">{{section.posterTitle}}</text>
            </view>
            <view class="section_videos">
            <block v-for="(video, wa) in section.videos" :key="wa">
                <view class="video" @click.native="playClick">
                <image mode="aspectFill" :src="video.imgUrl"/>
                <view class="detail_info">{{video.videoInfo}}</view>
                <view class="video_detail">
                    <text class="video_title">{{video.videoTitle}}</text>
                    <text class="video_content smallFont">{{video.videoContent}}</text>
                </view>
                </view>
            </block>
            <view class="line"></view>
            <view class="section_ft" bindtap="refreshTap">
                <image class="refresh" src="/static/images/icon/refresh.png"/>
                <text class="refresh_info smallFont" @click="refresh">换一批试试</text>
            </view>
            </view>
        </view>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: 'section'
        }
    },
    props: {
        sections: Array
    },
    methods: {
        refresh(){
            console.log('刷新？不不不，还没做呢');
        }
    },
    mounted(){
        console.log(this.sections)
    }

}
</script>

<style scoped>
.sections{
    /* position: relative; */
    display: block;
    padding-top: 570rpx;
}
.section{
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  /* margin: 10rpx 20rpx; */
  overflow: hidden;
  padding-bottom: 20rpx;
}
.section .section_title{
  padding:20rpx 0;
  /* text-align: left; */
  font-weight: bold;
}
.section_ft{
  width: 100%;
  padding-top: 10rpx;
  text-align: center;
}
.video_content{
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
.refresh{
  width: 32rpx;
  height: 32rpx;
  vertical-align: middle;
}
.line{
  height: 1px;
  width: 100%;
  background-color: rgba(204, 204, 204, .3);
}
.section_poster{
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
  /* background:yellowgreen; */
  position: relative;
}
.section_poster .poster_img{
  /* display: block; */
  width: 100%;
  height: 400rpx;
  /* padding: 20rpx; */
}
.section_poster .poster_detail{
  background: rgba(224, 200, 200, 0.7);
  color: #F4F6F8;
  position: absolute;
  right: 12rpx;
  bottom: 120rpx;
  width: auto;
  height:30rpx;
  line-height: 30rpx;
  font-size: 24rpx;
}
.section_poster .poster_title{
  display: inline-block;
  padding: 20rpx 0;
  font-size: 34rpx;
}
.section_videos{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
}
.video{
  box-sizing: border-box;
  width:338rpx;
  margin: 10rpx 0rpx;
  overflow: hidden;
  position: relative;
}
/* .video+.video{
  margin-left: 20rpx;
} */
.video image{
  height: 200rpx;
}
.detail_info{
  background: red;
  position: absolute;
  right: 12rpx;
  bottom: 100rpx;
  width: auto;
  height:30rpx;
  line-height: 30rpx;
  font-size: 24rpx;
  background: rgba(224, 200, 200, 0.7);
  color: #F4F6F8;
}
.video_title{
  display: block;
  line-height: 28rpx;
  font-size: 32rpx;
}
.smallFont{
  color: #ccc;
  font-size: 28rpx;
}
</style>
