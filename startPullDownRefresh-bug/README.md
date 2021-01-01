# startPullDownRefresh-bug

- 模拟器：下拉区域背景色起始是白色的看不见，直到定义了 `window.backgroundColor`
- 真机/模拟器：下拉区域背景色与 page 背景关系不一样，真机不受影响，模拟器受影响
- 模拟器：调用 `startPullDownRefresh` 不会滚动页面
- 真机：调用 `startPullDownRefresh` 会滚动页面，并且 iOS 会有滚动过渡，Android 没有（立即回到顶部）
- iOS：调用 `wx.pageScrollTo` 会打断 `startPullDownRefresh` 效果，Android 不会

如果需要一致的滚动表现，只有判断平台，再决定调用什么：

```js
const {platform} = wx.getSystemInfoSync()
if (platform !== 'ios') {
  // devtools 也可以不经过 callback
  wx.pageScrollTo({scrollTop: 0}).then(() => {
    setTimeout(call, duration)
  })
} else {
  wx.startPullDownRefresh()
}
```
