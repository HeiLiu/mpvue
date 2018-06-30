<template>
    <!-- 页面轮播组件 -->
    <div>
        <swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
            <block v-for="(item, index) in images" :key="index">
            <swiper-item>
                <image :src="item" mode="aspectFill" class="slide-image" />
                <view class="image_info">
                <text>更新至11集</text>
                </view>
                <text class="image_title">【创造101】22人离开王嘉尔神配合</text>
            </swiper-item>
            </block>
        </swiper>
    </div>
</template>

<script>
export default {
    data(){
        return {
            
        }
    },
    props:{
        indicatorDots: Boolean,
        autoplay: Boolean
    },
    methods: {

    }
};
</script>
    
<style>
</style>
