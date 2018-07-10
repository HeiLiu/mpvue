import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['pages/logs/main', 'pages/index/main', 'pages/videos/main', '^pages/channel/main', 'pages/user/main', 'pages/player/main'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '腾讯视频',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      "color": "#2f2f2f",
      "selectedColor": "#e65e44",
      "backgroundColor": "#ffffff",
      list: [{
          pagePath: "pages/index/main",
          text: "首页",
          "iconPath": "/static/images/icon/index.png",
          "selectedIconPath": "/static/images/icon/index_sel.png"
        },{
          pagePath: "pages/videos/main",
          text: "短视频",
          iconPath: "/static/images/icon/fire.png",
          selectedIconPath: "/static/images/icon/fire_sel.png"
        },{
          pagePath: "pages/channel/main",
          text: "频道",
          iconPath: "/static/images/icon/channel.png",
          selectedIconPath: "/static/images/icon/channel_sel.png"
        },{
          pagePath: "pages/user/main",
          text: "我的",
          iconPath: "/static/images/icon/user.png",
          selectedIconPath: "/static/images/icon/user_sel.png"
        }
        
      ]
    }
  }
}

