// pages/makeappointment/makeappointment.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 科室选择器 数据
    appartments: ['骨科', '内科', '外科', '神经科'],
    objectAppartmentsArray: [
      {
        id: 0,
        name: '骨科'
      },
      {
        id: 1,
        name: '内科'
      },
      {
        id: 2,
        name: '外科'
      },
      {
        id: 3,
        name: '神经科'
      }
    ],
    appartmentsIndex: 0,
    // 医生选择器 数据
    doctors: ['张一', '张二', '张三', '张四'],
    objectDoctorsArray: [
      {
        id: 0,
        name: '张一'
      },
      {
        id: 1,
        name: '张二'
      },
      {
        id: 2,
        name: '张三'
      },
      {
        id: 3,
        name: '张四'
      }
    ],
    doctorsIndex: 0,

    date: '2019-09-01',
    time: '12:01',
    customItem: '全部',
    patientName: getApp().globalData.patientName,
    patientID: getApp().globalData.patientID
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