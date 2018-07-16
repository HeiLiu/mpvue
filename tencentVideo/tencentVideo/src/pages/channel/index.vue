<template>
    <div class="container">
      <div class="header">
        <header-nav id="category" :navItems="category" @switchNav="switchNav"/>
        <img class="searchIcon" src="../../../static/images/icon/search.png">
        <div class="cate">
          <span class="item">偶像爱情</span>
          <span class="item">宫斗权谋</span>
          <span class="item">玄幻史诗</span>
          <span class="item">全部分类</span>
        </div>
        <div class="line"></div>
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
      <div class="hotVideo">热剧精选</div>
      <video-section id="section" :sections="sections" @playVideo="playVideo"/>
    </div>
</template>

<script>
import Fly from "@/utils/fly";
import HeaderNav from "@/components/headerNav";
import VideoSection from "@/components/section";
import BannerSwiper from "@/components/bannerSwiper";
export default {
  data() {
    return {
      indicatorDots: false,
      autoplay: true,
      interval: 5000,
      duration: 1000,
      category: [
        {
          name: "电视剧",
          id: "dianshiju",
          sections: true
        },
        {
          name: "综艺",
          id: "zongyi",
          sections: true
        },
        {
          name: "电影",
          id: "dianying",
          sections: false
        },
        {
          name: "动漫",
          id: "dongman",
          sections: true
        }
      ],
      sections: [],
      banners: []
    };
  },
  components: {
    HeaderNav,
    VideoSection,
    BannerSwiper
  },
  methods: {
    playBanners(banner){
      // console.log('zhege..')
      
      wx.setStorageSync('playInfo', banner);
      wx.navigateTo({
        url: `../player/main`
      })
    },
    playVideo(val){
      console.log('父组件输出')
      console.log(val);
      wx.setStorageSync('playInfo', val);
      wx.navigateTo({
        url: `../player/main`
      })
    },
    switchNav(id, index){
      // 获取切换以后的菜单项
      // console.log('负组件顺丰')
      console.log(id);
      console.log(this.category[index])
      // this.show = this.category[index].sections
      // 拼接url
      Fly.get(`/channel/${id}`)
      .then(res => {
        // console.log(res.data)
        this.banners = res.data.banners
        this.sections = res.data.sections
        console.log(res.data.banners)
        console.log(this.sections);
      })
    }
  },
  mounted() {
    // 调用应用实例的方法获取全局数据
    Fly.get("/channel/dianshiju").then(res => {
      this.banners = res.data.banners
      this.sections = res.data.sections
    })
  }
};
</script>

<style lang="stylus" scoped>
.header {
  position: relative;
}

.header {
  padding: 0 30rpx;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  /* background: #f4f6f8; */
  height: 685rpx;
  background: linear-gradient(#fff, #f4f6f8);
}



#category {
  width: 80v;
}

.searchIcon {
  width: 48rpx;
  height: 48rpx;
  position: absolute;
  top: 24rpx;
  right: 30rpx;
}
.cate
  display flex
  justify-content space-around
  .item
    flex 1
    font-size 28rpx
    box-sizing border-box
    width auto 
    height 60rpx
    line-height 60rpx
    text-align center
    background #F5F7F9
    border-radius 8rpx
    color #bfbfbf
    margin 10rpx 20rpx 20rpx 0
    letter-spacing 3rpx

.line {
  height: 1rpx;
  width: 100%;
  position: absolute;
  left: 0 ;
  right 0;
  background: #e6e6e6;
  transform scaleY(.5)
}

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
.hotVideo
  width 100rpx 
  height 32rpx
  margin-top 70rpx
  background #000
</style>

