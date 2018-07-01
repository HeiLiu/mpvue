<template>
    <div class="container">
       <header-nav :data="category"/>
    </div>
</template>

<script>
import HeaderNav from '@/components/headerNav'
export default {
    components: {
        HeaderNav
    },
    data(){
        return {
        category: [{
          name: '王者荣耀',
          id: '王者荣耀'
        },
        {
          name: '快看',
          id: 'kuaikan'
        },
        {
          name: '神剪辑',
          id: 'shenjianji'
        },
        {
          name: '搞笑',
          id: 'gaoxiao'
        },
        {
          name: '娱乐',
          id: 'yule'
        },
        {
          name: '新闻',
          id: 'xinwen'
        },
        {
          name: '神剪辑',
          id: 'shenjianji'
        },
        {
          name: '搞笑',
          id: 'gaoxiao'
        },
        {
          name: '娱乐',
          id: 'yule'
        },
        {
          name: '新闻',
          id: 'xinwen'
        }
      ]
        }
    }
}
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
