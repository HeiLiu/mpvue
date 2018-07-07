<template>
    <div class="container">
       <header-nav :navItems="category" @switchNav="switchNav"/>
       <scroll-section :sections="sections" @playVideo="playVideo" v-if="show"/>
       <video-page v-if="!show"/>
    </div>
</template>

<script>
import HeaderNav from "@/components/headerNav";
import ScrollSection from '@/components/scrollSection'
import VideoPage from '@/views/videoOnpage'
import Fly from '@/utils/fly'
export default {
  components: {
    HeaderNav,
    ScrollSection,
    VideoPage
  },
  data() {
    return {
      category: [
        {
          name: "王者荣耀",
          id: "wangzhe",
          sections: true 
        },
        {
          name: "快看",
          id: "kuaikan",
          sections: false
        },
        {
          name: "神剪辑",
          id: "shenjianji",
          sections: false
        },
        {
          name: "搞笑",
          id: "gaoxiao"
        },
        {
          name: "娱乐",
          id: "yule"
        },
        {
          name: "新闻",
          id: "xinwen"
        },
        {
          name: "神剪辑",
          id: "shenjianji"
        },
        {
          name: "搞笑",
          id: "gaoxiao"
        },
        {
          name: "娱乐",
          id: "yule"
        },
        {
          name: "新闻",
          id: "xinwen"
        }
      ],
      sections: [],
      show: true
    };
  },
  mounted() {
    Fly.get('/video/wangzhe')
      .then(res => {
        this.sections = res.data.sections
        // console.log(res.data.data)
        // console.log(this.sections);
      })
  },
  methods: {
    switchNav(id, index){
      // 获取切换以后的菜单项
      // console.log('负组件顺丰')
      console.log(id);
      console.log(this.category[index])
      this.show = this.category[index].sections
      // 拼接url
      Fly.get(`/video/${id}`)
      .then(res => {
        this.sections = res.data.sections
        console.log(res.data.data)
        console.log(this.sections);
      })
    },
    playVideo(val){
      console.log(val)
      wx.setStorageSync('playInfo', val);
      wx.navigateTo({
        url: `../player/main`
      })
    }
  }
};
</script>

<style>
.category_top {
  display: flex;
  flex-direction: row;
  font-weight: 600;
  font-size: 34rpx;
  white-space: nowrap;
  justify-content: space-between;
  overflow: hidden;
}

.cate_list {
  display: inline-block;
  width: auto;
  padding: 20rpx;
  position: relative;
}

.cate_list:first-child {
  padding-left: 0;
}

.on {
  color: orange;
}

.on:after {
  content: "";
  background-color: orange;
  position: absolute;
  bottom: 10rpx;
  left: 40%;
  width: 10px;
  height: 5rpx;
}
</style>
