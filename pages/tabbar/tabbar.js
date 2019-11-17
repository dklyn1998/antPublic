// pages/tabbar/tabbar.js
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

  /**
   * 组件的方法列表
   */
  methods: {
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
    }
  }
})
