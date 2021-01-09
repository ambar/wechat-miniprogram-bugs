# css-priority-bug

1. 自定义组件样式优先级表现不正确，它内部定义的样式（类）优先级高于引用方定义的样式（类）
1. `properties` 传递的 class 无法传多个，只有第一个会保留，如传递 `myClass="bold center"`，只有 `bold` 会生效 —— 但 `addGlobalClass` 申明后又可以传多个了，猜测是 `^` 引用处理错了
1. `externalClasses` 传递的 class 可以传多个，但其中的类名不能用驼峰（camelCase）
1. 自定义组件引用自定义组件会生成样式类前缀（即使启用了样式隔离），例如实际定义的是 `.MyClass`，审查面板里面看到的可能是 `foo--MyClass`，这产生一个严重的问题是微信统计用不了，因为它用类名匹配，但开发者根本不确定可能被加了前缀
1. 全局自定义组件样式的优先级错乱：如果 A 是全局自定义组件，B 是引用了 A 的自定义组件，在 B 中定义覆盖 A 的样式，这个样式有效与否取决于 B 是不是在引用方申明的 `usingComponents` 中的第一项

第 1 点是最致命的，特别影响体验，例如可能我定义了一个公共按钮有默认颜色，或者一个弹层有默认的标题样式，但是实际使用中这些公共组件总会要重新定义样式。

即使放弃样式隔离（申明 `addGlobalClass`）也不能解决优先级问题，引用内部类还是需要组合选择器来提升优先级。

为了避免避免优先级问题可能会弄出许多难以说明的 hack，如：

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

/* 即使放弃样式隔离，还是要想办法做提升 */
.MyPage .Popover-title {
}
```
