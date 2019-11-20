const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}

// vue.config.js
module.exports = {
    publicPath: './',
    // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
    productionSourceMap: false,
    pages: {
      index: {
        entry: 'src/main.js',
        chunks: ['chunk-vendors', 'chunk-common', 'index']
      }
    },
    configureWebpack: config => {
        //关闭 webpack 的性能提示
        performance: {
            hints: false
        }
        //生产环境取消 console.log
        if (process.env.NODE_ENV === 'production') {
            config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
        }
    },
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@$', resolve('src'))
            .set('@api', resolve('src/api'))
            .set('@assets', resolve('src/assets'))
            .set('@static', resolve('static'))
            .set('@images', resolve('static/images'))
            .set('@comp', resolve('src/components'))
            .set('@views', resolve('src/views'))
            .set('@utils', resolve('src/utils'))
            .set('@axios', resolve('src/axios'))
            .set('@router', resolve('src/router'))
            .set('@store', resolve('src/store'))
            .set('@configs', resolve('src/configs'))
            .set('@support', resolve('src/support'))
    },

    css: {
        loaderOptions: {
            less: {
                modifyVars: {
                    /* less 变量覆盖，用于自定义 ant design 主题 */

                    /*
                    'primary-color': '#F5222D',
                    'link-color': '#F5222D',
                    'border-radius-base': '4px',
                    */
                },
                javascriptEnabled: true,
            }
        }
    },

    devServer: {
        port: 8080,
        proxy: {
            '/jsma': {
                target: 'http://tlc.rongxiangjiankang.com', //请求本地 需要jeecg-boot后台项目
                ws: false,
                changeOrigin: true
            }
        }
    },

    lintOnSave: undefined
}