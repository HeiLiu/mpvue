<template>
    <div class="container">
      <div class="header">
        <header-nav id="category" :navItems="category" @switchNav="switchNav"/>
        <img class="searchIcon" src="../../../static/images/icon/search.png">
      </div>
      <video-section :sections="sections" @playVideo="playVideo"/>
    </div>
</template>

<script>
import Fly from '@/utils/fly'
import HeaderNav from "@/components/headerNav"
import VideoSection from "@/components/section"
export default {
  data() {
    return {
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
          id: "dongman"
        }
      ],
      sections: []
    };
  },
  components: {
      HeaderNav,
      VideoSection
  },
  methods: {
    playVideo() {
      console.log('播放视频')
    }
  },
  mounted(){
    Fly.get('/index/sections').then(res=>{
     this.sections = res.data.sections;
    //  console.log(this.sections)
   })
  }
};
</script>

<style lang="stylus" scoped>
.header
  position relative
#category
  width 80v
.searchIcon
  width 48rpx
  height 48rpx
  position absolute
  top 50%
  margin-top -24rpx
  right 0
</style>
