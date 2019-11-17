// pages/taocanBasic/taocanBasic.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs:[
      {
      id:0,
      name:'基础套餐',
      isActive:true
    },
    {
      id:1,
      name:'高级套餐',
      isActive:false
    },
    {
      id:2,
      name:'无忧套餐',
      isActive:false
    },
  ]
  },
  handletap(e){
    console.log(e)
    // 获取索引
    const {index}=e.currentTarget.dataset
    let {tabs}=this.data
  // 循环数组
  tabs.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false)
  this.setData({
    tabs
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