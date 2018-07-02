<template>
    <div>
    <!-- 視頻播放頁面组件 -->
    <!-- <view class="section tc">
    <video id="myVideo" src="{{playInfo.url}}" :danmu-list="danmuList" enable-danmu danmu-btn controls></video>
        <view class="weui-cell rmTopLine">
            <view class="weui-cell__bd video_title">{{playInfo.title}}</view>
            <view class="weui-cell__ft weui-cell__ft_in-access midFont"> 简介 </view>
        </view>
        <view class="weui-cell video_detail rmTopLine">
            <view class="weui-cell__bd video_detail"><text>7.4分 </text>·<text style="color: orange;"> 独播 </text>·<text> 都市 </text>·<text> 13.3万 </text></view>
        </view>
        <view class="operation">
        <view class="clarity">高清
            <image class="arrow" src="/static/assets/icon/arrow.png"/>
        </view>
        <image class="share" src="/static/assets/icon/share.png"/>
        <image class="heart" src="/static/assets/icon/heart.png"/>
        </view>
        <view class="weui-cell zhuanji">
            <view class="weui-cell__bd ">专辑列表</view>
            <view class="weui-cell__ft weui-cell__ft_in-access midFont"> 5 </view>
        </view>
    </view> -->
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* pages/video_detail/video_detail.wxss */
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
