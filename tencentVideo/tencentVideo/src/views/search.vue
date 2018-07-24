<!-- 搜索页面组件 -->
<template>
    <div>
      <div class="searchArea">
        <div class="left">
            <div class="search">
                <icon class="search" type="search" size="18"></icon>
                <!-- <img class="searchIcon" src="../../static/images/icon/search.png"> -->
            </div>
            <input type="search" placeholder="请输入片名、主演或导演" v-model="inputVal" @input="search"/>
            <!-- <icon class="clear" type="clear" size="14"></icon> -->
        </div>
        <div class="weui-search-bar__cancel-btn" @click="cancel">取消</div>
     </div>

    <div :hidden="!histroyShowed">
        <text class="msg">历史搜索</text>
        <div class="search-log">
            <block v-for="(history, index) in histories" :key="index">
                <text class="his_item">{{history}}</text>
            </block>
        </div>
    </div>
    <div class="hotItem">
        <text class="msg">热门搜索</text>
        <block v-for="(item, index) in hotSearch" :key="index">
            <div class="weui-cell weui-cell_access item" hover-class="weui-cell_active">
                <div class="weui-cell__hd">
                     <!-- 1.e92600 2.ff8000 3.fdc000 -->
                     <!-- 3以后 e6e6e6 col 878787 -->
                    <div class="square range" :class="[index == 0 ? 'first' : '',
                     index == 1 ? 'second':'',
                     index == 2 ? 'third': '']">{{index+1}}</div>
                </div>
                <div class="weui-cell__bd">{{item.name}}</div>
                <div class="weui-cell__ft ">{{item.status}}</div>
            </div>
        </block>
    </div>   
    </div>
</template>

<script>
export default {
  data() {
    return {
      inputShowed: false,
      histroyShowed: false,
      inputVal: "",
      histories: []
    };
  },
  props: {
    hotSearch: []
  },
  methods: {
    search(e) {
      // console.log(e.target.value)
      let word = e.target.value;
      this.$emit("searchVideo", word);
    },
    hideInput: function() {
      this.inputVal = "";
      this.inputShowed = false;
    },
    clearInput: function() {
      this.inputVal = "";
    },
    inputTyping: function(e) {
      this.inputVal = e.detail.value;
    },
    bindKeyInput(e) {
      this.inputVal = e.detail.value;
      console.log(this.data.inputVal);
    },
    cancel() {
      console.log("取消");
      this.$emit("cancel");
    },
    searchTap(e) {
      const input = this.data.inputVal;
      const histories = this.data.histories;
      histories.push(input);
      this.histroyShowed = true;
      this.histories = histories;
      console.log(`lishi${histories}`);
    }
  }
};
</script>

<style scoped>
.searchArea {
  padding: 0 30rpx;
  display: flex;
  font-size: 32rpx;
}
.searchArea .left {
  flex: 1;
  padding: 10rpx;
  border-radius: 10rpx;
  height: 60rpx;
  background: #f7f7f7;
  vertical-align: middle;
  position: relative;
}
.left .search {
  margin-right: 10rpx;
  display: inline;
  vertical-align: middle;
}
.searchIcon {
  width: 48rpx;
  height: 48rpx;
  /* top: 24rpx;
  right: 30rpx; */
}
.left input {
  max-width: 450rpx;
  margin-top: 5rpx;
  padding-bottom: 0;
  display: inline-block;
}
.left .clear {
  display: inline;
  position: absolute;
  top: 35%;
  right: 10rpx;
}
.searchbar-result {
  margin-top: 0;
  font-size: 14px;
}

.searchbar-result:before {
  display: none;
}
.msg {
  font-size: 28rpx;
  color: #c5c2c2;
  padding: 30rpx;
}
.search-log {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap-reverse;
  align-items: center;
  /* justify-content: space-around; */
}
.his_item {
  display: inline-block;
  height: 30px;
  line-height: 30px;
  padding: 0 10px;
  margin: 0 10px 10px 0;
  font-size: 14px;
  background-color: #f7f7f7;
  border-radius: 2px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-decoration: none;
  color: #4c4c4c;
}
.item {
    padding: 16rpx 30rpx;
}
.square {
  display: inline-block;
  width: 40rpx;
  height: 40rpx;
  background: #e6e6e6;
  line-height: 40rpx;
  text-align: center;
  box-sizing: border-box;
  color: #878787;
  margin: 20rpx;
  border-radius: 4rpx;
}
.first{
  /* <!-- 1.e92600 2.ff8000 3.fdc000 --> */
  /* <!-- 3以后 e6e6e6 col 878787 --> */
  background: #e92600;
  color: #fff;
}
.second {
    background: #ff8000;
    color:#fff;
}
.third {
    background: #fdc000;
    color: #fff;
}
</style>
