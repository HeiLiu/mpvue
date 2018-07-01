<template>
  <div class="container">
    <div class="header">

    
    <div class="weui-search-bar__box">
      <icon class="weui-icon-search_in-box" type="search" size="20"></icon>
      <input type="text" class="weui-search-bar__input" placeholder="请输入片名、主演或导演" bindinput="bindKeyInput" />
    </div>
    <swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
      <block v-for="(item, index) in banners" :key="index">
        <swiper-item>
          <image :src="item.imgUrl" mode="aspectFill" class="slide-image" />
          <view class="image_info">
          <text>{{item.detail}}</text>
          </view>
          <text class="image_title">{{item.title}}</text>
        </swiper-item>
      </block>
    </swiper>
     </div>   
  </div>
</template>

<script>
import {getData} from '@/api/getData'
import Fly from '@/utils/fly'
export default {
  data() {
    return {
      indicatorDots: false,
      autoplay: true,
      interval: 5000,
      duration: 1000,
      banners: [],
      sections: [
        {
          section_title: "创造101 人气学长助阵公演",
          posterImgUrl: "http://puui.qpic.cn/tv/0/25725891_1080607/0",
          posterDetail: "06-09",
          posterTitle: "🍵六首原创唱跳超过瘾",
          videos: [
            {
              imgUrl: "http://puui.qpic.cn/tv/0/25725670_498280/0",
              videoInfo: "06-08",
              videoTitle: "奔跑吧2·要哭了",
              videoContent: "陈赫含泪不忍撕邓超名牌"
            },
            {
              imgUrl: "http://puui.qpic.cn/tv/0/25642166_498280/0",
              videoInfo: "更新至22集",
              videoTitle: "如果, 爱",
              videoContent: "我养你💓张柏芝最深情表白"
            },
            {
              imgUrl: "http://puui.qpic.cn/tv/0/25731749_498280/0",
              videoInfo: "06-08",
              videoTitle: "高能少年团互怼cp",
              videoContent: "张一山杨紫互相diss年纪大"
            },
            {
              imgUrl: "http://puui.qpic.cn/tv/0/25730925_498280/0",
              videoInfo: "",
              videoTitle: "战神纪·独播",
              videoContent: "陈伟霆林允上演传奇爱情"
            }
          ]
        },
        {
          section_title: "周末好心情，快快嗨起来(●'◡'●)✌",
          posterImgUrl: "http://puui.qpic.cn/tv/0/25738125_498280/0",
          posterDetail: "06-09",
          posterTitle: "爱国者[首播 会员提前看]",
          videos: [
            {
              imgUrl: "http://puui.qpic.cn/tv/0/25725670_498280/0",
              videoInfo: "06-08",
              videoTitle: "奔跑吧2·要哭了",
              videoContent: "陈赫含泪不忍撕邓超名牌"
            },
            {
              imgUrl: "http://puui.qpic.cn/tv/0/25642166_498280/0",
              videoInfo: "更新至22集",
              videoTitle: "如果, 爱",
              videoContent: "我养你💓张柏芝最深情表白"
            },
            {
              imgUrl: "http://puui.qpic.cn/tv/0/25731749_498280/0",
              videoInfo: "06-08",
              videoTitle: "高能少年团互怼cp",
              videoContent: "张一山杨紫互相diss年纪大"
            },
            {
              imgUrl: "http://puui.qpic.cn/tv/0/25730925_498280/0",
              videoInfo: "",
              videoTitle: "战神纪·独播",
              videoContent: "陈伟霆林允上演传奇爱情"
            }
          ]
        }
      ]
    };
  },

  components: {
  },

  methods: {
  },

  created() {
    // 调用应用实例的方法获取全局数据
  },
  mounted (){
   Fly.get('/banners').then((res)=>{
     this.banners = res.data.data.banners
     console.log(res)
   console.log(this.banners)
   });
  }
};
</script>

<style scoped>
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
