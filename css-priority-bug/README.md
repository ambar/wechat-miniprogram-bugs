# css-priority-bug

1. 自定义组件样式优先级表现不正确，它内部定义的样式（类）优先级高于引用方定义的样式（类）
1. `properties` 传递的 class 无法传多个，只有第一个会保留，如 `myClass="bold center"`
1. `externalClasses` 中的类名不能使用驼峰（camelCase）