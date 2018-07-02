<template>
    <scroll-view scroll-x scroll-with-animation="true" class="category_top">
        <view v-for="(item, index) in navItems" :key="index" :data-id="item.id" :data-index="index" @click="switchNav" class="cate_list"
            :class="[curIndex===index?'on':'']">
            <text>{{item.name}}</text>
        </view>
        <view class="line"></view>
    </scroll-view>
      <!-- :data-id="item.id" :data-index="index" @click="switchCategory" :class="cate_list [curIndex===index?'on':'']" -->
</template>

<script>
export default {
  name: "header-nav",
  data() {
    return {
      curIndex: 0,
      navItems: [
        {
          name: "王者荣耀",
          id: "wangzhe"
        },{
          name: "快看",
          id: "kuaikan"
        },{
          name: "神剪辑",
          id: "shenjianji"
        },{
          name: "搞笑",
          id: "gaoxiao"
        },{
          name: "娱乐",
          id: "yule"
        },{
          name: "新闻",
          id: "xinwen"
        },{
          name: "神剪辑",
          id: "shenjianji"
        },{
          name: "搞笑",
          id: "gaoxiao"
        },{
          name: "娱乐",
          id: "yule"
        },{
          name: "实事",
          id: "xinwen"
        }
      ]
    };
  },
  props: {
    category: {
      type: Array,
      default: []
    }
  },
  methods: {
    switchNav(e) {
      console.log(e);
      var index = e.currentTarget.dataset.index;
      console.log(index);
      this.curIndex = index ? index : 0;
    }
  },
  mounted() {
    console.log(this.category);
  },
  computed: {
    getCategory: function() {
      return this.category;
    }
  }
};
</script>

<style scoped>
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

