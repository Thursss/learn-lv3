const CompressionWebpackPlugin = require('compression-webpack-plugin')
const externals = {
  vue: 'Vue',
  'vue-router': 'VueRouter',
  vuex: 'Vuex',
  axios: 'axios'
}

const cdn = {
  css: [
    'https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css'
  ],
  js: [
    'https://cdn.jsdelivr.net/npm/vue@2.5.17/dist/vue.min.js',
    'https://cdn.jsdelivr.net/npm/vue-router@3.0.1/dist/vue-router.min.js',
    'https://cdn.jsdelivr.net/npm/vuex@3.0.1/dist/vuex.min.js',
    'https://cdn.jsdelivr.net/npm/axios@0.18.0/dist/axios.min.js',
    'https://cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.min.js'
  ]
}
module.exports = {
  // 先写一个configureWebpack 表示你准备配置webpageconfig
  configureWebpack: {
    // 配置路径相关的时候用resolve 可以解决路径相关的问题
    resolve: {
      alias: {
        // 默认有@  他指向的是：src
        assets: '@/assets',
        components: '@/components',
        learn: '@/learn',
        views: '@/views',
        visualization: '@/visualization',
        performance: '@/performance'
      }
    }
    // externals: externals
  },
  chainWebpack: config => {
    // let UglifyPlugin = require('uglifyjs-webpack-plugin');
    if (process.env.use_analyzer) { // 分析
      config
        .plugin('webpack-bundle-analyzer')
        .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
    }
    if (process.env.NODE_ENV === 'production') {
      // CDN
      config.plugin('html').tap(args => {
        args[0].cdn = cdn
        return args
      })
      // 压缩混淆
      // config.mode = 'production'
      // // 将每个依赖包打包成单独的js文件
      // let optimization = {
      //   minimizer: [new UglifyPlugin({
      //     uglifyOptions: {
      //       warnings: false,
      //       compress: {
      //         drop_console: true,
      //         drop_debugger: false,
      //         pure_funcs: ['console.log']
      //       }
      //     }
      //   })]
      // }
      // Object.assign(config, {
      //   optimization
      // })
    }
    // 移除 prefetch 插件
    config.plugins.delete('prefetch')
    // 移除 preload 插件
    config.plugins.delete('preload')
  }
}
