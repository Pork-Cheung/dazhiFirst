// components/patientCard.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    patientInfo: {
      ID : '123456789123456',
      name : '张大三',
      tel : '12345678912'
    },
    default: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    statusChange: function(e){
      this.setData({default : e.detail.value})
    }
  }
})
