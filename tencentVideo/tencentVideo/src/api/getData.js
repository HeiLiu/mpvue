import Fly from '../utils/fly'
Vue.prototype.getList = function () {
    wx.showLoading({
      title: '加载中',
  })
  this.$http.get('sell#!method=get').then((res)=>{
      
      wx.hideLoading();
    }).catch((e)=>{
    console.log(e)
  })
}