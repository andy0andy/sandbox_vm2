

- [js文档](https://developer.mozilla.org/zh-CN/docs/WEB)
- [vm2 git](https://github.com/patriksimek/vm2)


```text
tree 结构
├─code  # 调试debug代码
├─envs  # 环境代码，补环境于此
│  └─envs.sep   # 自定义环境代码隔离文件
│      └─datasheets # 单独网站 初始化 bom/dom 代码
│          └─initEnvs
├─node_modules  # 依赖包
│
└─tools # 工具代码
    └─tools.sep # 自定义工具代码隔离文件；例如共享内存存储的初始化网站数据
        └─datasheets
```