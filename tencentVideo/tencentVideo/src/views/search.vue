<!-- 搜索页面组件 -->
<template>
    <div>
     <div class="weui-search-bar">
        <div class="weui-search-bar__form">
            <div class="weui-search-bar__box">
                <icon class="weui-icon-search_in-box" type="search" size="14"></icon>
                <input type="text" class="weui-search-bar__input" placeholder="请输入片名、主演或导演" value="{{inputVal}}" focus="{{inputShowed}}"
                    bindinput="bindKeyInput" />
                <div class="weui-icon-clear" bindtap="clearInput">
                    <icon type="clear" size="14"></icon>
                </div>
            </div>
            <label class="weui-search-bar__label" hidden="{{inputShowed}}" bindtap="showInput">
                <icon class="weui-icon-search" type="search" size="14"></icon>
                <div class="weui-search-bar__text" bindtap="">搜索</div>
            </label>
        </div>
        <div class="weui-search-bar__cancel-btn" hidden="{{!inputShowed}}" bindtap="searchTap">搜索</div>
    </div>

    <div hidden="{{!histroyShowed}}">
        <text class="msg">历史搜索</text>
        <div class="search-log">
            <block wx:for="{{histories}}">

                <text class="his_item">{{item}}</text>
            </block>
        </div>
    </div>
    <div class="hotItem">
        <text class="msg">热门搜索</text>
        <block wx:for="12">
            <navigator url="" class="weui-cell weui-cell_access" hover-class="weui-cell_active">
                <div class="weui-cell__hd">
                    <view class="square range">1</view>
                </div>
                <div class="weui-cell__bd">奔跑吧 第2季</div>
                <view class="weui-cell__ft ">⬆</view>
            </navigator>
        </block>
    </div>   
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.searchbar-result {
    margin-top: 0;
    font-size: 14px;
}

.searchbar-result:before {
    display: none;
}
.msg{
    font-size: 28rpx;
    color: #c5c2c2;
    padding: 30rpx;
}
.search-log{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap-reverse;
    align-items: center;
    /* justify-content: space-around; */
}
.his_item{
    display: inline-block;
    width: 45%;
    height: 40rpx;
    line-height: 40rpx;
    border-radius: 8rpx;
    padding: 5rpx;
    margin: 10rpx 10rpx;
    background: #ece8e8;
    font-size: 30rpx;
    text-align: center;
   font-family:microsoft yahei;
}
.square{
    display:inline-block;
    width: 40rpx;
    height: 40rpx;
    background: red;
    line-height: 40rpx;
    text-align: center;
    box-sizing: border-box;
    color: #fff;
    margin: 20rpx;
    border-radius: 4rpx;
}
</style>
