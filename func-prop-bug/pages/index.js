const app = getApp()

Page({
  data: {
    onOk() {
      console.log(this)
    },
  },

  onLoad() {
    this.data.onOk()
  },
})
