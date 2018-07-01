<template>
    <!-- 页面轮播组件 -->
    <div>
        
    </div>
</template>

<script>
export default {
  data() {
    return {
      imgUrls: [
        "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
        "http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg",
        "http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg"
      ]
    };
  },
  props: {
    indicatorDots: {
      type: Boolean,
      default: false
    },
    autoplay: {
      type: Boolean,
      default: false
    },
    interval: {
      type: Number,
      default: 5000
    },
    duration: {
      type: Number,
      default: 1000
    }
  },
  methods: {
      getData(){

      }
  },
  mounted() {
    console.log(this.autoplay)
  }
};
</script>
    
<style>
.swiper {
  margin-top: 20rpx;
  box-sizing: border-box;
  width: 100%;
  height: 500rpx;
  background: #f4f6f8;
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
