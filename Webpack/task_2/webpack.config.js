const path = require('path');

module.exports = {
  mode: 'production',
  entry: './js/dashboard_main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
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
        use: [
          {
            loader: 'image-webpack-loader',
          },
        ],
      },
    ],
  },
};
