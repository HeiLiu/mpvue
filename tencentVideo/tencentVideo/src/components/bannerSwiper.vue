<template>
  <div>
    <swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
        <block v-for="(item, index) in banners" :key="index">
          <swiper-item  @click="playBanners(item)">
            <img :src="item.imgUrl" mode="aspectFill" class="slide-image" />
            <div class="image_info">
            <text>{{item.videoInfo}}</text>
            </div> 
            <text class="image_title">{{item.videoTitle}}</text>
          </swiper-item>
        </block>
      </swiper>
  </div>
</template>

<script>
export default {
  name: 'swiper',
  props: {
    banners: Object,
    "indicator-dots": Boolean,
    autoplay: Boolean,
    interval: Number,
    duration:  Number
  },
  methods: {
    playBanners(item) {
      this.$emit('playBanners', item)
    }
  }
}
</script>

<style scoped>
.swiper {
  margin-top: 20rpx;
  box-sizing: border-box;
  width: 100%;
  height: 500rpx;
}
.slide-image {
  position: relative;
  box-sizing: border-box;
  /* background: red; */
  display: block;
  width: 100%;
  height: 400rpx;
}
.swiper .image_title {
  font-size: 30rpx;
  display: block;
  padding: 20rpx 0;
}
.swiper .image_info {
  font-size: 24rpx;
  width: auto;
  height: 32rpx;
  line-height: 32rpx;
  position: absolute;
  bottom: 115rpx;
  right: 10rpx;
  background-color: red;
  background: rgba(224, 200, 200, 0.7);
  color: #f4f6f8;
}
</style>
