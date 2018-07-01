Vue.prototype.getList = function () {
    wx.showLoading({
      title: '加载中',
  })
  this.$http.get('/test').then((res)=>{
      wx.hideLoading();
    }).catch((e)=>{
    console.log(e)
  })
}