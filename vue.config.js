// vue.config.js
module.exports = {
  // 运行时的前缀
  publicPath: '/',
  // build 目录
  outputDir: 'dist',
  // 静态资源 相对于 outputDir
  assetsDir: '',
  // 指定生成的 index.html 的输出路径 (相对于 outputDir)
  indexPath: 'index.html',
  // 生成的文件会携带 hash值,防止缓存
  filenameHashing: true,
  // 生产环境是否启用 sourceMap, 不启用来压缩体积
  productionSourceMap: false,
  devServer: {
    // 控制台日志输出等级, 默认 info. 可选值 none | error | warning | info
    clientLogLevel: 'info',
    proxy: {
      '/api': {
        // 代理地址，这里设置的地址会代替axios中设置的baseURL
        target: 'http://192.168.1.138:8081',
        // 如果接口跨域，需要进行这个参数配置
        changeOrigin: true,
        // proxy websockets
        ws: true,
        // pathRewrite方法重写url
        pathRewrite: {
          '^/api': '/api'
          // pathRewrite: {'^/api': '/'} 重写之后url为 http://192.168.1.16:8085/xxxx
          // pathRewrite: {'^/api': '/api'} 重写之后url为 http://192.168.1.16:8085/api/xxxx
        }
      }
    }
  }
}
