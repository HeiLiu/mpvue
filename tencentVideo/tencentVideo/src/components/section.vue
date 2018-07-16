<template>
    <div class="sections">
        <div class="section" v-for="(section, index) in sections" :key="index">
            <div class="section_title">{{section.section_title}}</div>
            <div class="section_poster" v-if="section.posterImgUrl">
            <img class="poster_img" :src="section.posterImgUrl"/>
            <div class="poster_detail">{{section.posterDetail}}</div>
            <text class="poster_title">{{section.posterTitle}}</text>
            </div>
            <div class="section_videos">
            <block v-for="(video, id) in section.videos" :key="id">
                <div class="video" @click="handleClick(video)">
                <img mode="aspectFill" :src="video.imgUrl"/>
                <div class="detail_info">{{video.videoInfo}}</div>
                <div class="video_detail">
                    <text class="video_title">{{video.videoTitle}}</text>
                    <text class="video_content smallFont">{{video.videoContent}}</text>
                </div>
                </div>
            </block>
            <div class="line" v-if="refresh"></div>
            <div class="section_ft" v-if="refresh" @click="handleRefresh">
                <image class="refresh" src="/static/images/icon/refresh.png"/>
                <text class="refresh_info smallFont">换一批试试</text>
            </div>
            </div>
        </div>
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
        sections: Array,
        refresh: {
          type: Boolean,
          default: true
        }
    },
    methods: {
      handleClick(val){
        // 点击预览图实现跳转到播放页面，播放相应的视频，并且展示相关的信息
        // 关键： 怎么得到相关的视频信息 
        console.log('子组件输出');
        console.log(val)
        this.$emit('playVideo', val);
      },
        handleRefresh(val){
            console.log('刷新？不不不，还没做呢,该功能实现按一下刷新一栏数据，就是换一批啦');
            this.$emit('refresh', val)
        }
    },
    mounted(){
        console.log(this.sections)
        this.$emit('refresh','hahahah');
    }

}
</script>

<style>
.sections{
    /* position: relative; */
    display: block;
    padding-top: 570rpx;
}
</style>

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
  cursor: pointer;
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
  width: 338rpx;
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
