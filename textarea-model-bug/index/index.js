const app = getApp()

Page({
  data: {
    inputValue: ''
  },
  handleSubmit: function (e) {
    console.log(e.type, e.timeStamp)
    wx.showModal({ content: this.data.inputValue })
  },

  handleTap(e) {
    console.log(e.type, e.timeStamp)
  }
})
