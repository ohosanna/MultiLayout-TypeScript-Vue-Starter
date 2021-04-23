const config = require('./config.js'),
  path = require('path'),
  TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin'),
  ESLintPlugin = require('eslint-webpack-plugin'),
  VueLoaderPlugin = require('vue-loader/lib/plugin.js');

// function resolve(dir) {
//   return path.join('_dirname', '..', dir);
// }
const { entry, alias, esLint, layouts } = config,
  isProduction = process.env.TYPE === 'pro';

let baseConfig = {
  entry,
  output: {
    hashDigestLength: 5
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.vue', '.json'],
    alias,
    plugins: [
      new TsconfigPathsPlugin({
        // configFile: "./path/to/tsconfig.json"
      })
    ]
  },
  cache: {
    type: 'filesystem',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
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
        use: [
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
      },
      // {
      //   test: /\.(js|vue|ts|tsx|jsx)$/,
      //   enforce: 'pre',
      //   exclude: /node_modules/,
      //   loader: 'eslint-loader',
      //   options: {
      //     fix: esLint.autoFix,
      //     extensions: ['.js', '.jsx', '.vue', '.ts', '.tsx'],
      //     cache: false,
      //     emitWarning: true,
      //     emitError: false
      //   }
      // },
      ...require('./utils.js').styleLoaders({ extract: isProduction })
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new ESLintPlugin({
      extensions: ['.js', '.jsx', '.vue', '.ts', '.tsx'],
    })
  ]
};

baseConfig = require('./utils.js').layoutConfig(baseConfig, layouts);

module.exports = baseConfig;
