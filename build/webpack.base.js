const config = require('./config.js'),
  VueLoaderPlugin = require('vue-loader/lib/plugin.js');

// function resolve(dir) {
//   return path.join('_dirname', '..', dir);
// }
const { entry, alias } = config;
//  isProduction = process.env.TYPE === 'pro';

let baseConfig = {
  entry,
  output: {
    hashDigestLength: 5
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.vue', '.json'],
    alias
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'cache-loader',
            options: {}
          },
          {
            loader: 'vue-loader',
            options: {
              compilerOptions: {
                preserveWhitespace: false
              }
            }
          }
        ]
      },
      {
        test: /\.ts$/,
        loaders: [
          {
            loader: 'cache-loader',
            options: {}
          },
          {
            loader: 'thread-loader'
          },
          {
            loader: 'ts-loader',
            options: {
              appendTsSuffixTo: [/\.vue$/],
              transpileOnly: true,
              happyPackMode: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
};

baseConfig = require('./utils.js').htmlConfig(baseConfig, './src/templates/*.html');

module.exports = baseConfig;
