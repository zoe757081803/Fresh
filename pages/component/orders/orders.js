// pages/component/orders/orders.js
Page({
  data: {
    address: {},
    hasAddress: false,
    total: 0,
    orders: [
      { id: 1, title: '百香果 精品中果12个装', image: '../../../images/bxg.png', num: 4, price: 18.9, selected: true }
    ]
  },

  onReady() {
    this.getTotalPrice();
  },

  onShow: function () {
    const self = this;
    wx.getStorage({
      key: 'address',
      success(res) {
        self.setData({
          address: res.data,
          hasAddress: true
        })
      }
    })
  },

  /**
   * 计算总价
   */
  getTotalPrice() {
    let orders = this.data.orders;
    let total = 0;
    for (let i = 0; i < orders.length; i++) {
      total += orders[i].num * orders[i].price;
    }
    this.setData({
      total: total
    })
  },

  toPay() {
    wx.showModal({
      title: '提示',
      content: '本系统只做演示，支付系统已屏蔽',
      text: 'center',
      complete() {
        wx.switchTab({
          url: '/page/component/user/user'
        })
      }
    })
  },
 
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})