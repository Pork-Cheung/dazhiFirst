// pages/doclist/doclist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    departments: [
      { name: "内科", pictrue: '/images/home0.png' },
      { name: "外科", pictrue: '/images/home1.png' },
      { name: "骨科", pictrue: '/images/order0.png' },
      { name: "神经科", pictrue: '/images/order1.png' }
    ],
    Index: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  tapDocCard: function (event) {
    wx.navigateTo({
      url: '/pages/docinfo/docinfo',
    })
  }
})