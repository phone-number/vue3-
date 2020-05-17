const path = require('path')
const webpack = require('webpack')
module.exports = {
  chainWebpack: config => {
    // 添加一个新的打包入口文件
    config.entry('hotcss').add('hotcss')
    config.resolve.alias
      .set('@', path.resolve(__dirname, './src'))
      .set('_c', path.resolve(__dirname, './src/components'))
    config
      .plugin('html')
      .tap(args => {
        args[0].meta = {
          viewport: 'width=device-width, initial-scale=1.0,maxinum-scale=1,mininum-scale=1,use-scalable=no,minimal-ui',
          referrer: 'no-referrer',
          renderer: 'wibkit'
        }
        return args
      })
  },
   
  configureWebpack: config => {
    // config.resolve.extensions = ['.mjs', '.js', '.jsx', '.vue', '.json', '.wasm','.less']
    config.plugins.push(
      new webpack.ProvidePlugin({
        _: 'lodash'
      })
    )
  },
  css: { // 配置css模块
    loaderOptions: { // 向预处理器 Loader 传递配置选项
      less: { // 配置less 在实际的输入文件前添加“Less”代码
        prependData: `
          @import '@/style/global.less';
          @import '@/style/mixin.less';
        `
      }
    }
  }
}