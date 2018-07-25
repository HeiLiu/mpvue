import fly from '@/utils/fly'

// 显示搜索结果
export const searchResult = (word) => new Promise((resolve, reject) => {
    fly.get(`http://s.video.qq.com/smt_wap?plat=2&ver=3&num=10&otype=json&query=${word}&callback=show`)
        .then(res => {
            let result = res.data.replace('show(','').replace(')', '')
            let suggestions = JSON.parse(result).item
            console.log(suggestions)
            suggestions = suggestions.map(suggestion => {
            return {name: suggestion.word}
            });
            resolve(suggestions)
        })
})
// 获取热门搜索
export const getHotSearch = (url) => new Promise((resolve, reject) => {
    fly.get(url).then(res => {
        resolve(res.data.hotSearch)
    })
})
// 获取短视频页面数据
export const getVideosInfo = (url) => new Promise((resolve, reject) => {
    fly.get(url).then(res => {
        resolve(res.data.sections)
    })
})

// 
export const getChannelInfo = (url) => new Promise((resolve, reject) => {
    fly.get(url).then(res => {
        resolve(res.data)
    })
})

// Fly.get(`/channel/${id}`)
//       .then(res => {
//         // console.log(res.data)
//         this.banners = res.data.banners
//         this.sections = res.data.sections
//         console.log(res.data.banners)
//         console.log(this.sections);
//       })
