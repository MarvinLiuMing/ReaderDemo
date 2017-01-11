// pages/post/post-detail/post-detail.js
var postdata = require("../../../data/post-data.js")
Page({
  data:{

  },
  onLoad:function(options){
    var id =options.id;
    this.data.currentPostId = id;
    this.setData(postdata.postlist[id]);

    var postCollected = wx.getStorageSync("postCollected");
    if(postCollected){
      this.setData({
        collected : postCollected[id]
      })
    }else{
      postCollected = {}
      postCollected[id] = false;
      wx.setStorageSync('postCollected', postCollected);
    }
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  collectiontap:function(event){
    var postCollected = wx.getStorageSync('postCollected')
    postCollected[this.data.currentPostId] = !postCollected[this.data.currentPostId];
    wx.setStorageSync('postCollected', postCollected);
    this.setData({
      collected : postCollected[this.data.currentPostId]
    })
  },
  sharetap:function(){
    
  }
})