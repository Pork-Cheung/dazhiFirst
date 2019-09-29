// pages/docinfo/docinfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    docName: '张大志',
    docTitle: '叫兽',
    docDpm: '内科',
    docProfessional: '专业擅长专业擅长专业擅长专业擅长专业擅长专业擅长专业擅长专业擅长专业擅长专业擅长专业擅长专业擅长专业擅长专业擅长',
    docProfile: '医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生简介医生简介'
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

  tapAddIcon: function (event) {
    wx.switchTab({
      url: '/pages/makeappointment/makeappointment',
    })
  }
})