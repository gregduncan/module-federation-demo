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
    port: 3002,
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
      name: 'home',
      filename: 'remoteEntry.js',
      exposes: {
        './MFE': './src/app-wrapper',
      },
      shared: {
        react: {
          import: 'react',
          shareScope: 'react19',
          singleton: true,
          requiredVersion: '19.2.0',
        },
        'react-dom': {
          import: 'react-dom',
          shareScope: 'react19',
          singleton: true,
          requiredVersion: '19.2.0',
        },
      },
    }),
  ],
};
