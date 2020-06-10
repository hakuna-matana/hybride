const path = require("path");
const {config} = require("./config/index");
const HTMLPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const {typescriptRules} = require("./config/typescript");
const {cssModulesRules, noCssModulesRules} = require("./config/style");
const {eslintRules} = require("./config/eslint");
const {imageRules} = require("./config/image");
const {mediaRules} = require("./config/media");
const {devServer} = require("./config/devServer");
const CopyWebpackPlugin = require('copy-webpack-plugin');


const environments = require("./config/environments");
const overrides = environments[config.env];

if (overrides) {
  Object.assign(config, overrides(config));
}

const webpackConfig = {
  entry: "./src/index.tsx",
  output: {
    path: config.utils_paths.dist(),
    publicPath: config.compiler_public_path,
    filename: 'index.js',
    pathinfo: false,
  },
  context: path.resolve(__dirname, "./"),
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json", ".css", ".scss", ".sass"],
    mainFields: ["browser", "module", "main"],
    alias: {
      '~': path.resolve(__dirname, 'src'),
      'static': path.resolve(__dirname, 'src/static'),
    }
  },
  stats: 'minimal',
  devServer: {
    ...devServer
  },
  optimization: {
    minimizer: [new TerserJSPlugin({})],
  },
  plugins: [
    new HTMLPlugin({
      filename: 'index.html',
      template: './src/index.html',
      favicon: 'src/static/favicon.ico'
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
    new CopyWebpackPlugin([
      { from: './src/static'}
    ])
  ],
  module: {
    rules: [
      // ...eslintRules,
      ...typescriptRules,
      cssModulesRules,
      noCssModulesRules,
      ...imageRules,
      ...mediaRules,
    ]
  }
};


module.exports = webpackConfig;
