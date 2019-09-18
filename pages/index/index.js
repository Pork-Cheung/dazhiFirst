//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    // 首页幻灯片参数配置
    imgUrls: [
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ],
    indicatorDots: true,
    circular: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,

    departments: [
      { name: "内科", pictrue: '/images/home0.png'},
      { name: "外科", pictrue: '/images/home1.png'},
      { name: "骨科", pictrue: '/images/order0.png'},
      { name: "神经科", pictrue: '/images/order1.png'}
    ]
  },

  onLoad() {
    this.setData({
      search: this.search.bind(this)
    })
  },
  search: function (value) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([{ text: '搜索结果', value: 1 }, { text: '搜索结果2', value: 2 }])
      }, 200)
    })
  },
  selectResult: function (e) {
    console.log('select result', e.detail)
  },
})
