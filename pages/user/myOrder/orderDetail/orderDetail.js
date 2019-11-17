// pages/index/detail/suredetail/shuredetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    kindNum:1,
    array: ['英文标', '中文标', '图形标', '图形标','图形标','图形标'],
    index:0,//picker的下标
    switch1Checked:false,//按钮的值
    isshow:0,
  },
  /* 加减按钮 */
  numLess:function(){
    this.data.kindNum -=1
    if(this.data.kindNum<0){
      this.data.kindNum =0
    }
    this.setData({
      kindNum:this.data.kindNum
    })
  },
  numAdd:function(){
    this.data.kindNum +=1
    this.setData({
      kindNum:this.data.kindNum
    })
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
  /* 取消遮罩层 */
  cancel:function () {
    this.setData({
      isshow:0,
    })
  },
  /* 优惠券详情 */
  youhuiquan:function () {
    this.setData({
      isshow:1
    })
  },
  /* 优惠券页面完成 */
  cancel1:function () {
    this.setData({
      isshow:0,
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