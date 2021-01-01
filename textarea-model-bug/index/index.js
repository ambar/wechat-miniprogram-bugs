const app = getApp()

Page({
  data: {
    inputValue: ''
  },

  handleSubmit(e) {
    console.log(e.type, e.timeStamp)
    wx.showToast({ title: this.data.inputValue, icon: 'none' })
  },

  handleSubmitBugged(e) {
    console.log(e.type, e.timeStamp)
    wx.showToast({ title: this.data.inputValue, icon: 'none' })
  },

  handleTap(e) {
    console.log(e.type, e.timeStamp)
  }
})
