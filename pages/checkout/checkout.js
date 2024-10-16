const app = getApp()
const fetch = app.fetch
const chooseLocation = requirePlugin('chooseLocation');
Page({
  onShow() {
    const location = chooseLocation.getLocation(); // 如果点击确认选点按钮，则返回选点结果对象，否则返回null
    console.log('得到location',location,222222222)
  },
  data: {
    latitude: 39.141333,
    longitude: 117.2334,
    comment: ''
  },

  onLoad: function (options) {
    console.log('onload')
    var id = options.order_id
    wx.showLoading({
      title: '努力加载中...',
    })
    console.log('checkout.js',id)
    fetch('food/order', {
      id,
      uid:getApp().globalData.userid
    },"POST").then(data => {
      console.log(32432432423423432,)
      this.setData({order_food:data['order'],price:data['price'],id:data['order_id']})
      console.log('checkoutdata',data)
      wx.hideLoading()
    }, () => {
      this.onLoad(options)
    })
  },



//https://lbs.qq.com/dev/console/application/mine  配置页面编辑: 里面权限勾上, 然后appid配置好. 我这个是  wxea500b1eb68275c8!!!!!
  address: function () {
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






  pay: function () {
    console.log(1)
    var id = this.data.id;
    wx.showLoading({
      title: '正在支付...',
    })
    // console.log(34234324234234,id,this.data)
    // console.log('致富!!!!!!!!!!!',{
    //   id,
    //   comment: this.data.comment
    // })
    console.log(9999999999999999999999999999999)
    fetch('food/order', {
      id,
      uid:getApp().globalData.userid,
      comment: this.data.comment
    }, 'POST').then(data => {
      console.log(data,3729473892748923743289472389472389472389472389472938)
      return fetch('food/pay', {
        id,
        uid:getApp().globalData.userid
      }, 'POST')
    }).then(data => {
      console.log(8888888888888888888)
      wx.hideLoading()
      wx.showToast({
        title: '支付成功',
        icon: 'success',
        duration: 2000,
        success: () => {
          wx.navigateTo({
            url: '/pages/detail/detail?order_id=' + id,
          })
        }
      })
    }).catch(() => {
      // 支付失败
      this.pay()
    })
  },

  comment: function (e) {
    this.data.comment = e.detail.value;
  }
})