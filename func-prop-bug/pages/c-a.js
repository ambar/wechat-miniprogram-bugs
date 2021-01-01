Component({
  properties: {
    onLoad: { type: Function },
    // TypeError
    // onLoad: Function,
  },

  data: {
    // 不一致
    onOk() {
      console.log(this)
    }
  },

  ready() {
    this.data.onOk()
  }
})
