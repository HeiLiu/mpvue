<template>
    <div>
        <div class="section tc">
        <my-video id="myVideo" :src="playInfo.videoUrl" enable-danmu danmu-btn="false" controls @click="to14"/>
        <div class="weui-cell rmTopLine">
            <div class="weui-cell__bd video_title"> {{playInfo.videoTitle}} </div>
            <div class="weui-cell__ft weui-cell__ft_in-access midFont"> 简介 </div>
        </div>
        <div class="weui-cell video_detail rmTopLine">
            <div class="weui-cell__bd video_detail"><text>7.4分 </text>·<text style="color: orange;"> 独播 </text>·<text> 都市 </text>·<text> 13.3万 </text></div>
        </div>
        <div class="operation">
        <div class="clarity">高清
            <img class="arrow" src="../../static/images/icon/arrow.png"/>
        </div>
        <img class="share" src="../../static/images/icon/share.png"/>
        <img class="heart" src="../../static/images/icon/heart.png"/>
        </div>
        <div class="weui-cell zhuanji">
            <div class="weui-cell__bd ">专辑列表</div>
            <div class="weui-cell__ft weui-cell__ft_in-access midFont"> 5 </div>
        </div>
    </div>
    </div>
</template>

<script>
import Video from '@/components/videoPlay'
export default {
    data(){
        return {
            
        }
    },
    props: {
        url: String,
        DamuList: Array,
        playInfo: Object
    },
    components: {
        MyVideo: Video
    },
    methods: {
        to14(e){
            //  实现一下发弹幕
            console.log('tiaoa');
            this.videoCtx.seek(35)
            // console.log(e.detail.value)
        }
    },
    mounted() {
        this.videoCtx=wx.createVideoContext('myVideo');
    }
};
</script>

<style scoped>
.section{
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0,.6);
    color: #fff;
}
#myVideo{
    width: 100%;
}
.video_title{
    font-weight:600;
}
.midFont{
    font-size: 34rpx;
}
.video_detail{
    padding:0 20rpx;
    font-size: 28rpx;
}
.operation{
    display: flex;
    align-items: center;
    padding: 30rpx;
    padding-bottom: 40rpx;
}
.clarity{
    position: relative;
    width: 120rpx;
    justify-content: center;
    align-items: center;
    font-size: 28rpx;
    border: 2px solid #fff;
    border-radius: 8rpx;
    padding: 0 15rpx;
    box-sizing: border-box;
}
.clarity .arrow{
    padding: 5rpx;
    width: 32rpx;
    height: 32rpx;
}
.operation image{
    position: absolute;
    width: 64rpx;
    height: 64rpx;
}
.share{
    right: 150rpx;
}
.heart{
    right:30rpx;
}
.rmTopLine:before{
    border-top: none;
}
.zhuanji::before{
    border-color: rgba(0, 0, 0,.2);
}
</style>
