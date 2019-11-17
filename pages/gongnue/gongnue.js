// pages/gongnue/gongnue.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs:[
      {
      id:0,
      name:'推荐',
      isActive:true
    },
    {
      id:1,
      name:'VIS设计',
      isActive:false
    },
    {
      id:2,
      name:'LOGO设计',
      isActive:false
    },
    {
      id:3,
      name:'企业文化墙',
      isActive:false
    },
    {
      id:4,
      name:'画册设计',
      isActive:false
    },
    // {
    //   id:5,
    //   name:'包装设计',
    //   isActive:false
    // },
    // {
    //   id:6,
    //   name:'品牌全案',
    //   isActive:false
    // },
    // {
    //   id:7,
    //   name:'专卖店设计',
    //   isActive:false
    // },
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