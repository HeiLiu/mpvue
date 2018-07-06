<template>
    <div>
        <scroll-view class="category_bottom" scroll-x :scroll-into-view="toView" scroll-with-animation="true">
        <view class="section" v-for="(item, index) in sections" :key="index">
            <view class="section_title">{{item.title}} ></view>
            <view class="section_videos">
                <block  v-for="(video, id) in item.videos" :key="id">
                    <view class="video" @click="handleClick(video)">
                        <image :src="video.imgUrl"/>
                        <view class="video_detail">
                            <text class="video_title">{{video.videoTitle}}</text>
                        </view>
                    </view>
                </block>
            </view>
            <view class="line"></view>
        </view>
      </scroll-view>
    </div>
</template>

<script>
export default {
  props: {
    sections: Array
  },
  mounted(){
    console.log(this.sections)
  },
  methods: {
    handleClick(val){
       console.log('杨玉环');
        // console.log(val)
        this.$emit('playVideo', val);
    }
  }
};
</script>

<style scoped>
.section{
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  padding-bottom: 20rpx;
}
/* .section:first-child{
  padding-top: 100rpx;
} */
.section .section_title{
  padding: 20rpx 0 20rpx 20rpx;
  font-weight: bold;
}

.section_videos{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-bottom: 30rpx;
}
.video{
  display: inline-block;
  box-sizing: border-box;
  width:338rpx;
  margin: 10rpx 0rpx;
  overflow: hidden;
  position: relative;
}

.video image{
  border-radius: 10rpx;
  width:338rpx;
  height: 200rpx;
}
.detail_info{
  background: red;
  position: absolute;
  right: 12rpx;
  bottom: 112rpx;
  width: auto;
  height:30rpx;
  line-height: 30rpx;
  font-size: 24rpx;
}
.video_title{
  display: block;
  line-height: 34rpx;
  font-size: 32rpx;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.line{
  height: 1px;
  width: 100%;
  background-color: rgba(204, 204, 204, .3);
}
</style>
