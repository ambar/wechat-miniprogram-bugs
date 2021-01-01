# Android textarea 上使用双向绑定有 bug，值不能及时更新

iOS 及 devtools 下工作正常，只有 Android 不正常：如果点击输入框外的提交按钮，bug 的表现就像需要 blur 之后才更新值（而不是 input 事件时更新了值）。

https://developers.weixin.qq.com/community/develop/doc/0008a4af4d48b04faa7b93db151000
