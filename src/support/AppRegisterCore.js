/**
 * vue 实列注册
 * - 基础组件(@/components)
 * - 备注：注册的组件命名方式需大小写混合使用
 * - 指令注册
 * - ...
 */
import Vue from 'vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

let AppRegister = {}
/**
 * 注册自定义组件
 * @param vue
 */

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

/**
 * 注册自定义指令
 * @param vue
 */
// AppRegister.registerDirectives = (vue) => {
//     // 注册自定义指令
//     const requireDirective = require.context(
//         '../directives/',
//         false,
//         /[A-Z]\w+\.js$/
//     )
//     requireDirective.keys().forEach(fileName => {
//         // 获取指令配置
//         const directiveConfig = requireDirective(fileName)
//         // 获取指令的 kebabCase 命名
//         // const directiveName = kebabCase(fileName.replace(/^\.\/(.*)\.\w+$/, '$1'))
//         // 获取组件的 PascalCase 命名
//         const directiveName = upperFirst(
//             camelCase(
//                 // 获取和目录深度无关的文件名
//                 fileName
//                     .split('/')
//                     .pop()
//                     .replace(/\.\w+$/, '')
//             )
//         )
//         let directiveDef = directiveConfig.default || directiveConfig
//         vue.directive(directiveName, directiveDef)
//     })
// }

AppRegister.install = (Vue) => {
    AppRegister.registerComponents(Vue)
    // AppRegister.registerDirectives(Vue)
}

export default AppRegister