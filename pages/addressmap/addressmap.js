// pages/addressmap.js
//https://lbs.qq.com/miniProgram/plugin/pluginGuide/locationPicker
const chooseLocation = requirePlugin('chooseLocation');
Page({
address(e){
console.log('adress')
const location = chooseLocation.getLocation(); // 如果点击确认选点按钮，则返回选点结果对象，否则返回null
console.log(523590237489237492834,location)
console.log("location==>",location);

},
  /**
   * 页面的初始数据
   */
  data: {latitude: 39.141333,
    longitude: 117.2334,

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log(12121212)
    const key = 'YVRBZ-W7XW7-B4UXC-HOS55-XPHE3-VJB2Q'; //使用在腾讯位置服务申请的key
    const referer = '点餐'; //调用插件的app的名称
    const location = JSON.stringify({
      latitude: 39.89631551,
      longitude: 116.323459711
    });
    // const category = '生活服务,娱乐休闲';
     
    wx.navigateTo({
      url: 'plugin://chooseLocation/index?key=' + key + '&referer=' + referer + '&location=' + location 
      // + '&category=' + category
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    const location = chooseLocation.getLocation(); 
    console.log(location)
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})