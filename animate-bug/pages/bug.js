const bounceFrames = [
  {
    opacity: 0,
    scale3d: [0.3, 0.3, 0.3],
    offset: 0,
  },
  {
    offset: 0.2,
    // opacity: .2,
    scale3d: [1.1, 1.1, 1.1],
  },
  {
    offset: 0.4,
    // opacity: .4,
    scale3d: [0.9, 0.9, 0.9],
  },
  {
    offset: 0.6,
    opacity: 1,
    scale3d: [1.03, 1.03, 1.03],
  },
  {
    offset: 0.8,
    scale3d: [0.97, 0.97, 0.97],
  },
  {
    opacity: 1,
    scale3d: [1, 1, 1],
  },
]

Component({
  /**
   * 组件的属性列表
   */
  properties: {},

  /**
   * 组件的初始数据
   */
  data: {},

  ready() {
    this.runBox()
    this.runCircle()
  },

  /**
   * 组件的方法列表
   */
  methods: {
    runBox() {
      const frames = [...Array(90).keys()].map(n => ({
        rotate: n * 4,
        translateX: n * 2,
      }))
      this.animate('.box', frames, 1000, () => {
        this.clearAnimation('.box')
        this.runBox()
      })
    },
    runCircle() {
      this.animate('.circle', bounceFrames, 1500, () => {
        this.clearAnimation('.circle')
        this.runCircle()
      })
    },
  },
})
