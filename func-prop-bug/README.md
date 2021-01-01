# func-prop-bug

- 无法用简写定义方式，如 `properties: {onLoad: Function}`，将直接抛出异常：「TypeError: Cannot read property 'name' of undefined」，一旦尝试调试异常还会使整个模拟器失去响应 —— 需要写为 `onLoad: {type: Function}`
- `this` 指向不一致：通常小程序会改写组件/页面定义上的函数 `this` 指向，如 `methods`/`lifetimes` 等字段内的函数，这里 Page 构造器 `data` 内的函数有改写，但 Component 构造器上 `data` 内的函数没有改写。
