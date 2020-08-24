const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const { InjectManifest } = require('workbox-webpack-plugin')
const { sass } = require('svelte-preprocess-sass')

module.exports = {
  entry: {
    app: './src/app.js'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ template: 'src/index.html.tmpl' }),
    new MiniCssExtractPlugin(),
    new InjectManifest({
      swSrc: './src/sw.js',
      swDest: './sw.js',
      maximumFileSizeToCacheInBytes: 5000000,
      mode: 'production'
    }),
    new CopyPlugin([
      { from: 'static' }
    ]),
    new FaviconsWebpackPlugin({
      logo: './static/icon-512.png',
      favicons: {
        appShortName: 'Tracks PWA',
        appName: 'Circuits pour mobile',
        appDescription: 'Try installing me!',
        developername: 'Etienne Burdet Opendatasoft',
        developerUrl: 'https://www.opendatasoft.com/',
        display: 'standalone',
        start_url: '/',
        scope: '/',
        background_color: '#3367D6',
        theme_color: '#3367D6',
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: true,
          favicons: true,
          firefox: true,
          windows: true,
          yandex: true
        }
      }
    })
  ],
  output: {
    filename: '[name].[contenthash].bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  resolve: {
    alias: {
      svelte: path.resolve('node_modules', 'svelte')
    },
    extensions: ['.mjs', '.js', '.svelte'],
    mainFields: ['svelte', 'browser', 'module', 'main']
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.(html|svelte)$/,
        exclude: /node_modules/,
        use: {
          loader: 'svelte-loader',
          options: {
            emitCss: true,
            dev: true,
            preprocess: {
              style: sass({}, { name: 'scss' })
            }
          }
        }
      }
    ]
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  }
}
