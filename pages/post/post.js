// pages/post/post.js
var array = require('../../data/post-data.js')
Page({
  data: {
    // date:"2017/01/08",
    // title:"title",
    // content:"content",
    // likecount:"66",
    // commnetcount:"99",
    // avatar_image:"../../images/avatar.png",
    post_image_path: "/images/DSC_2928.png"
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数


    this.setData({ postarry: array.postlist });
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  todetail : function(event){
    var id =event.currentTarget.dataset.pageid;
    wx.navigateTo({
      url: 'post-detail/post-detail?id='+id,
      success: function(res){
        // success
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  }
})