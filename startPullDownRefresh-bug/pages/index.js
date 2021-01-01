const toast = () => {
  wx.showToast({title: 'PullDownRefresh', icon: 'none'})
}

const call = () => {
  wx.startPullDownRefresh()
  setTimeout(() => {
    wx.stopPullDownRefresh()
  }, 1500)
}

const {platform} = wx.getSystemInfoSync()

Page({
  data: {
    paras: [...Array(1000).keys()],
  },

  onReady() {
    this.handleScrollDown()
  },

  onPullDownRefresh() {
    setTimeout(() => {
      wx.stopPullDownRefresh()
    }, 1500)
  },

  handlePullDownRefresh() {
    toast()
    call()
  },

  handlePullDownRefreshBugged() {
    toast()
    wx.pageScrollTo({scrollTop: 0})
    call()
  },

  handlePullDownRefreshFixed() {
    toast()
    wx.pageScrollTo({scrollTop: 0}).then(call)
  },

  handlePullDownRefreshFixed2() {
    toast()
    if (platform !== 'ios') {
      // devtools 也可以不经过 callback
      const duration = 300
      wx.pageScrollTo({scrollTop: 0, duration}).then(call)
    } else {
      call()
    }
  },

  handleScrollDown() {
    wx.pageScrollTo({scrollTop: 2000})
  },

  handleScrollToTop() {
    wx.pageScrollTo({scrollTop: 0})
  },
})
