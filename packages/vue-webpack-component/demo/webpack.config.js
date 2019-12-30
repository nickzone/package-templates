const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index.js'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: path.resolve(__dirname, 'src')
      },
      {
        test: /\.scss$/,
        loader: 'vue-style-loader!css-loader!sass-loader',
      },
      {
        test: /\.css$/,
        loader: 'vue-style-loader!css-loader',
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 4096,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'fonts/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      'plugin': path.resolve(__dirname, "../dist/index.js")
    }
  },
  devServer: {
    historyApiFallback: true
  },
  performance: {
    hints: 'warning'
  },
  devtool: 'eval-source-map',
  plugins: [
    new VueLoaderPlugin(),
    new htmlWebpackPlugin({
      title: 'demo',
      inject: true,
      hash: true,
      filename: 'index.html',
      template: './src/index.html'
    })
  ]
};

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = 'source-map';
  module.exports.mode = 'production';
}