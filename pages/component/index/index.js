// pages/component/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      {
        pic:'../../../images/cmbanner.jpg',
        url:'../details_cm/details_cm',
      },
      {
        pic:'../../../images/hlgbanner.jpg',
        url:'../details_hlg/details_hlg',
      },
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 3000,
    duration: 800,
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})