<template>
  <div class="container" :class="[search?'SearchContainer': '']">
    <div class="header" v-show="!search">
      <div class="weui-search-bar__box">
        <icon class="weui-icon-search_in-box" type="search" size="20"></icon>
        <input type="text" disabled class="weui-search-bar__input" placeholder="请输入片名、主演或导演" @click.prevent="searchInput" />
      </div>
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
    <video-section :sections="sections" @playVideo="playVideo" v-if="!search" @refresh="refresh"/>
    <v-search v-if="search" :hotSearch="hotSearch" @cancel="cancel" @searchVideo="searchVideo"></v-search>
  </div>
</template>

<script>
import Fly from '@/utils/fly'
import { searchResult, getHotSearch } from '@/api/getData.js'
import VideoSection from '@/components/section'
import Search from '@/views/search'
export default {
  data() {
    return {
      indicatorDots: false,
      autoplay: true,
      interval: 5000,
      duration: 1000,
      search: false,
      banners: [],
      sections: [],
      hotSearch: []
    }
  },

  components: {
    VideoSection,
    'v-search': Search
  },

  methods: {
    async searchVideo(word){
      this.hotSearch =await searchResult(word)
    },
    async searchInput(){
      console.log('显示搜索页')
      this.search = true
      this.hotSearch = await getHotSearch('/hotSearch')
    },
    cancel(){
      this.search = false
    },
    playBanners(banner){
      const history = wx.getStorageSync('playHistory') || []
      history.push(banner)
      wx.setStorageSync('playHistory', history);
      wx.setStorageSync('playInfo', banner);
      wx.navigateTo({
        url: `../player/main`
      })
    },
    playVideo(val){
      // console.log('父组件输出')
      // console.log(val);
      const history = wx.getStorageSync('playHistory') || []
      history.push(val)
      wx.setStorageSync('playHistory', history);
      wx.setStorageSync('playInfo', val);
      wx.navigateTo({
        url: `../player/main`
      })
    },
    refresh(val){
      console.log('刷新')
      console.log(val);
    }
  },

  created() {
    // 调用应用实例的方法获取全局数据
    Fly.get('/banners').then((res)=>{
     this.banners = res.data.banners
    console.log(res.data.banners)
    //  console.log(this.banners)
  //  console.log(this.banners)
   });
   Fly.get('/index/sections').then(res=>{
     this.sections = res.data.sections;
    //  console.log(this.sections)
   })
  },
  mounted (){
   
  }
};
</script>

<style scoped>
.SearchContainer{
  padding: 0;
}
.weui-icon-search_in-box {
  left: 0;
  top: 10rpx;
}
.header{
  padding: 0 30rpx;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  /* background: #f4f6f8; */
  height: 570rpx;
   background: linear-gradient(#fff, #f4f6f8);
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
 
</style>
