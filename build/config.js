const path = require('path');

function resolve(dir) {
  return path.join('_dirname', '..', dir);
}

let entries = require('./utils.js').getEntry('src/entries/*.js');

const config = {
  entry: entries,
  alias: { // 别名配置
    'vue$': 'vue/dist/vue.esm.js',
    '@': resolve('src'),
    '@comps': resolve('src/components'),
    '@css': resolve('src/assets/css'),
    '@scss': resolve('src/assets/scss'),
    '@img': resolve('src/assets/images')
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
};

module.exports = config;
