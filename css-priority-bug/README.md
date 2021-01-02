# css-priority-bug

1. 自定义组件样式优先级表现不正确，它内部定义的样式（类）优先级高于引用方定义的样式（类）
1. `properties` 传递的 class 无法传多个，只有第一个会保留，如传递 `myClass="bold center"`，只有 `bold` 会生效
1. `externalClasses` 传递的 class 可以传多个，但其中的类名不能用驼峰（camelCase）

第 1 点是最致命的，特别影响体验，例如可能我定义了一个公共按钮有默认颜色，或者一个弹层有默认的标题样式，但是实际使用中这些公共组件总会要重新定义样式。

为了避免它可能会弄出许多难以说明的 hack，如：

```css
/* 全部用 important 吧 */
.MyPopover-title {
  color: #fff !important;
  font-size: 20px !important;
}

/* 或者我再加个 class 提高一下权重（但你就不能使用 properties，见第 2 点） */
.MyPopover-title.fixme {
}

/* 或者利用其他方式加权重（标签、后代） */
view.MyPopover-title {
}
page .MyPopover-title {
}
.MyPage .MyPopover-title {
}

/* 或者放弃样式隔离（申明 `addGlobalClass`），直接引用内部类吧 */
/* 但如果这个页面有两个不同引用样式区分，又怎么办？又回到了到上面的方式 */
.Popover-title {
}
```
