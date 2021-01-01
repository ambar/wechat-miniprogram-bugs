# func-prop-bug

- 无法用简写定义方式，如 `properties: {onLoad: Function}`，将直接抛出异常：「TypeError: Cannot read property 'name' of undefined」，一旦尝试调试异常还会使整个模拟器失去响应 —— 需要写为 `onLoad: {type: Function}`
