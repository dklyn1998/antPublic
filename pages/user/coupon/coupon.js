// pages/user/coupon/coupon.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs:[
      {
      id:0,
      name:'全部优惠券',
      isActive:true
    },
    {
      id:1,
      name:'待使用',
      isActive:false
    },
    {
      id:2,
      name:'已使用',
      isActive:false
    },
    {
      id:3,
      name:'已过期',
      isActive:false
    }
  ]//tab选项卡的内容
  },
  handletap(e){
    console.log(e.target.dataset.index)
    // 获取索引
    const {index}=e.currentTarget.dataset
    let {tabs}=this.data
  // 循环数组
  tabs.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false)
  this.setData({
    tabs,
    transForm:e.target.dataset.index
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