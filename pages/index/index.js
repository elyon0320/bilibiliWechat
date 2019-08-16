Page({

  /**
   * 页面的初始数据
   */
  data: {
	//被点击的首页导航的菜单的索引
	currentIndexNav:0,
    //首页导航数据
	navList:[],
	// 轮播图数据
	swiperList:[],
	//视频列表数据
	videoList:[],
  },
  
  /*点击首页导航按钮 触发的事件*/
  activeNav(element){
  	this.setData({
		currentIndexNav:element.target.dataset.index
	})
  },

/*获取首页导航栏的数据*/
	getNavList(){
		const that = this;
		//利用小程序内置API发送请求
		wx.request({
			url:"https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/navList",
			success(res){
			// console.log(res);
				if(res.data.code === 0){
					//说明请求数据成功了
					that.setData({
						//res.data + data navlist  注意不能遗漏data
						navList: res.data.data.navList
					})
				}
			}
		})
	},
/*获取轮播图的数据*/
	getSwiperList(){
		const that = this;
		wx.request({
			url:"https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/swiperList",
			success(res){
				// console.log(res);
				if(res.data.code===0){
					//说明请求成功了
					that.setData({
						swiperList:res.data.data.swiperList
					})
				}
			}
		})
	},
/*获取视频列表的数据*/
	getVideoList(){
		const that = this;
		wx.request({
			url:"https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/videosList",
			success(res){
				// console.log(res);
				if(res.data.code===0){
					//说明请求成功了
					that.setData({
						videoList:res.data.data.videosList
					})
				}
			}
		})
	},
	
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取首页导航数据
	this.getNavList();
	this.getSwiperList();
	this.getVideoList()
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