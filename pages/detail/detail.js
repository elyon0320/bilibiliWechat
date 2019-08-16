Page({

  /**
   * 页面的初始数据
   */
  data: {
	//视频详情
    videoInfo:[],
	//推荐视频
	othersList:[],
	//评论数据
	commentList:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  
  onLoad: function (options) {
    let videoId=options.id;
	// console.log(videoId);
	this.getCurrentVideo();
	this.getOthersList();
	this.getCommentList();
  },
  
  
  /*根据视频id来获取视频详情数据*/
  getCurrentVideo(videoId){
	  const that = this;
  	wx.request({
		url:"https://easy-mock.com/mock/5ccc2cc89e5cbc7d96b29785/bili/videoDetail?id="+videoId,
		success(res){
			if(res.data.code===0){
				that.setData({
					videoInfo:res.data.data.videoInfo
				})
			}
		}
	})
  },
  /*根据视频id来获取更多推荐视频的信息*/
  getOthersList(videoId){
	  const that = this;
	  wx.request({
	  	url: "https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/othersList?id="+videoId,
	  	success(res){
			// console.log(res);
	  		if(res.data.code===0){
	  			that.setData({
	  				othersList:res.data.data.othersList
	  			})
	  		}
	  	}
	  })
  },

   /*根据视频id来获取当前页面评论数据*/
   // 获取评论数据
     getCommentList(videoId){
       const that = this;
       wx.request({
         url: "https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/commentsList?id="+videoId,
         success(res){
			 console.log(res);
           if(res.data.code === 0) {
             that.setData({
               commentList: res.data.data.commentData
             });
           }
         }
       });
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
