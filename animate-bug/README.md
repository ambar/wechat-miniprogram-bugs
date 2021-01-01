# animate API 不可靠，不太可用

具体表现：

- 这是假的关键帧动画，关键帧增加就卡顿、运行轨迹不连贯、抖动（duration 也不起作用），像是连续的 transition 依次调用（而不是 animation）
- 不会自动插值（如 1 与 4 关键帧定义透明度变化，但 2/3 不会补齐）
- 不支持 cubic bezier

https://developers.weixin.qq.com/community/develop/doc/000c0a7090c43815887b3f38356400
