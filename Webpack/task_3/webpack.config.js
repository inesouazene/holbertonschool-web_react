const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: {
    header: './modules/header/header.js',
    body: './modules/body/body.js',
    footer: './modules/footer/footer.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    port: 8564,
    open: true,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Holberton Dashboard',
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  module: {
    rules: [
      // Règle pour les fichiers CSS
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      // Règle pour les images
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: '[name][ext]',
        },
        use: [
          {
            loader: 'image-webpack-loader',
          },
        ],
      },
    ],
  },
};
