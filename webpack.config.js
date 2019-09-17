const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    mode: 'development',
    entry: {
      './app.js': './js/vue/app.js',
    },
    output: {
      path: path.resolve(__dirname, 'js/'),
      filename: '[name]'
    },
    module: {
      rules: [{
          test: /\.vue$/, // ファイルが.vueで終われば...
          loader: 'vue-loader', // vue-loaderを使う
          options: {
            loaders: {
              scss: 'vue-style-loader!css-loader!sass-loader'
            }
          }
        },
        {
          test: /\.js$/,
          loader: 'babel-loader'
        },
        {
          test: /\.css$/,
          use: [
            'vue-style-loader',
            'css-loader',
          ]
        },
        {
          test: /\.scss$/,
          use: [
            'vue-style-loader',
            'css-loader',
            'sass-loader'
          ]
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.vue'],
      alias: {
        vue$: 'vue/dist/vue.esm.js',
      },
    },
    plugins: [
        new VueLoaderPlugin()
      ]
};

