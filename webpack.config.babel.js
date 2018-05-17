import { resolve } from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import autoprefixer from 'autoprefixer';

const postcss = {
  loader: 'postcss-loader',
  options: {
    plugins() {
      return [autoprefixer({ browsers: 'last 3 versions' })];
    }
  }
};

const styles = {
  test: /\.(scss)$/,
  exclude: /(node_modules|public\/)/,
  use: ExtractTextPlugin.extract([
    'css-loader?sourceMap',
    postcss,
    'sass-loader?sourceMap'
  ])
};

const javascript = {
  test: /\.(js)$/,
  exclude: /(node_modules|public\/)/,
  use: [{ loader: 'babel-loader' }]
};

const extractCSS = new ExtractTextPlugin('../css/[name].bundle.css');

const config = {
  entry: { app: './src/index.js' },
  output: {
    path: resolve(__dirname, 'public', 'js'),
    filename: '[name].bundle.js'
  },
  module: { rules: [styles, javascript] },
  plugins: [extractCSS],
  devtool: 'source-map'
};

export default config;
