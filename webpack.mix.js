const mix = require('laravel-mix');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');
// const CompressionPlugin = require('compression-webpack-plugin');
const path =require('path');
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.react('resources/js/app.js', 'public/js');



mix.webpackConfig({
      devServer: {
      historyApiFallback: true
    },
    plugins: [
        // new BundleAnalyzerPlugin(),
      new AntdDayjsWebpackPlugin(),
      // new CompressionPlugin()
    ],
    resolve: {
      alias: {
        "@ant-design/icons/lib/dist$": path.resolve(__dirname, './resources/js/icons/icons.js')
      }
    }
      
  });