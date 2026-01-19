const path = require('path');
const { default: HtmlRspackPlugin } = require('@rspack/plugin-html');
const { ModuleFederationPlugin } = require('@module-federation/enhanced/rspack');

module.exports = {
  entry: './src/index.ts',
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 3001,
    historyApiFallback: true,
    hot: false,
    liveReload: false,
  },
  output: {
    publicPath: 'auto',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        type: 'javascript/auto',
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            ['@babel/preset-react', { runtime: 'automatic' }],
            '@babel/preset-env',
            '@babel/preset-typescript',
          ],
        },
      },
    ],
  },
  plugins: [
    new HtmlRspackPlugin({
      template: './public/index.html',
    }),
    new ModuleFederationPlugin({
      name: 'catalogue',
      filename: 'remoteEntry.js',
      exposes: {
        './MFE': './src/app',
      },
      shared: {
        'react-router-dom': {
          singleton: true,
          requiredVersion: '6.21.3',
        },
        react: {
          singleton: true,
          requiredVersion: '19.2.0',
        },
        'react-dom': {
          singleton: true,
          requiredVersion: '19.2.0',
        },
      },
    }),
  ],
};
