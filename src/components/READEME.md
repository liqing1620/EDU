# 全局核心组件
````
全局注册组件

AppRegister.registerComponents = (vue) => {
    const requireComponent = require.context(
        // 其组件目录的相对路径
        '../components',
        // 是否查询其子目录
        false,
        // 匹配基础组件文件名的正则表达式 //Base
        /[A-Z]\w+\.(vue|js)$/
    )
    requireComponent.keys().forEach(fileName => {
        // 获取组件配置
        const componentConfig = requireComponent(fileName)

        // 获取组件的 PascalCase 命名
        const componentName = upperFirst(
            camelCase(
                // 获取和目录深度无关的文件名
                fileName
                    .split('/')
                    .pop()
                    .replace(/\.\w+$/, '')
            )
        )
        // 如果这个组件选项是通过 `export default` 导出的，
        // 那么就会优先使用 `.default`，
        // 否则回退到使用模块的根。
        let componentDef = componentConfig.default || componentConfig
        // 全局注册组件
        Vue.component(
            componentName,
            componentDef
        )
    })
}
````
## 单独创建文件夹需要单独引入组件
