const app = getApp()
 Page({

  /**
   * 页面的初始数据
   */
  data: {
    dingdan:"wx201904041000",
    wxName:"杨帅帅",
    jdTime:"2018-08-08 15:15",
    dcTime: "2018-08-08 15:15",
    peijian:"*****",
    price:"****",
    wxResult:"未知",
    finshTime: "2018-08-08 15:15",
    tempFilePaths:[]
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
    this.setData({
      wxName:"帅帅杨"
    })
    
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
  //显示图片
  showPj:function(){
    var tempFilePaths=this.data.tempFilePaths;
      wx.previewImage({
      current: tempFilePaths, // 当前显示图片的http链接
      urls: tempFilePaths // 需要预览的图片http链接列表
    })
 
  },
  //显示图片
  showAllPj:function(){
    var _this = this
     wx.chooseImage({
      count: 2,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
         _this.setData({
            tempFilePaths: res.tempFilePaths
          })  
       }
    })
  }
})