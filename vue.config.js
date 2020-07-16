module.exports = {

  devServer: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8000/',
        ws: true,
        changeOrigin: true,
        secure: false,
        host: '127.0.0.1',
        port: 8000//django和webpackvue交互的跨域问题
      },

    }
  },
  publicPath: './',
  assetsDir: 'static',
  productionSourceMap: false,
  parallel: false
}