const path = require('path')
const entries = require('./utils.js').getEntry('src/entries/*.ts')

const config = {
  entry: entries,
  layouts: [
    {
      name: 'main', // 生成的html目录名称
      tplName: 'home', // 模板文件名，在src/templates目录下
      commonChunks: ['vendors'], // 需要加载的公共JS资源
      seoMeta: {
        title: 'showMoney',
        keywords: 'BSV, 数字钱包',
        description: ''
      }
    },
  ],
  alias: { // 别名配置
    'vue$': 'vue/dist/vue.esm.js'
  },
  esLint: {
    autoFix: false // 是否自动修改代码风格
  },
  build: { // 打包输出配置
    sw: true, // service worker是否开启
    assetsSubDirectory: path.resolve(__dirname, '../dist/'),
    assetsPublicPath: '../',
    sourceMap: false,
    cssPublicPath: '../',
    outputPath: path.join(__dirname, '../dist', process.env.TYPE)
  },
  dev: { // 本地开发配置
    port: 3333,
    assetsSubDirectory: path.join(__dirname, '../dist'),
    assetsPublicPath: '../',
    // 静态资源访问目录
    devServerPublicPath: './',
    outputPath: path.join(__dirname, '../dist/dev'),
    sourceMap: true
  },
  externals: {

  }
}

module.exports = config
