// pages/index/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: ['英文标', '中文标', '图形标', '图形标','图形标','图形标'],
    index:0,//picker的下标
    switch1Checked:false,//按钮的值
    isshow:0,
    tabs2:[
      {
      id:0,
      name:'设计详情',
      isActive:true
    },
    {
      id:1,
      name:'设计案例',
      isActive:false
    },
    {
      id:2,
      name:'下单须知',
      isActive:false
    },
  ],
  shareIndex:false,

  },
  /* picker点击事件 */
  bindPickerChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  /* switch按钮 的转换 */
  switch1Change: function (e){
    console.log('switch1 发生 change 事件，携带值为', e.detail.value)
    this.setData({
      switch1Checked:e.detail.value,
    })
  },
  dutyMsg:function(){
    this.setData({
      isshow:1
    })
  },
  cancel:function () {
    this.setData({
      isshow:0,
      shareIndex:false,
    })
  },// 取消遮罩层
  /* 选项卡点击事件 */
  handletap(e){
    console.log(e)
    // 获取索引
    const {index}=e.currentTarget.dataset
    let {tabs2}=this.data
  // 循环数组
  tabs2.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false)
  this.setData({
    tabs2
  })
  },
  //分享给朋友
  shareToFriend:function () {
    console.log('点击了分享页面')
    this.setData({
      shareIndex:true,
      isshow:2
    })
  },
  // 取消分享页面
  cancelshare:function () {
    this.setData({
      shareIndex:false,
      isshow:0
    })
  },
  /* 优惠券界面 */
  getyouhuiquan:function () {
    this.setData({
      isshow:2
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