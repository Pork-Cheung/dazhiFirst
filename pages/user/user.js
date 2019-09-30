// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    iflogin: false,
    patientName: getApp().globalData.patientName,
    patientID: getApp().globalData.patientID,
    funName: ['就诊人管理','就诊记录','身份认证','设置']
  },

  // 登录及登记就诊人
  tapToLogin: function() {
    this.setData({iflogin : true});
    // this.onLoad();
  },
  
  // 进入‘就诊人管理’页面
  tapPatientManage: function (event) {
    wx.navigateTo({
      url: 'patientManage/patientManage',
    })
  },

  // 进入‘就诊记录’页面
  tapVisitingRecord: function (event) {
    wx.navigateTo({
      url: 'visitingRecord/visitingRecord',
    })
  },
  
  // 进入‘身份认证’页面
  tapIdentify: function (event) {
    wx.navigateTo({
      url: 'identify/identify',
    })
  },

  // 进入‘设置’页面
  tapSetting: function (event) {
    wx.navigateTo({
      url: 'setting/setting',
    })
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

  }
})