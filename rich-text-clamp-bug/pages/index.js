
// 没有标签的纯文本，无法显示
const html = `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`
// 随便添加一个标签，可以正常显示
const html2 = html + `<span />`

Page({
  data: {
    html,
    html2,
  },
  onLoad() { },
})
