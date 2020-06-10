const {postcssLoader} = require("./postcss");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const sassLoader = {
  loader: "sass-loader",
  options: {
    implementation: require('sass'),
  },
};

const sassResourcesLoader = {
  loader: 'sass-resources-loader',
  options: {
    // Provide path to the file with resources
    resources: './src/styles/global.style.scss',
  },
}

const noCssModulesRules = {
  test: /(core|global\.style)\.(scss|sass)$/,
  use: [
    MiniCssExtractPlugin.loader,
    'css-loader',
    postcssLoader,
    sassLoader,
    sassResourcesLoader
  ],
}

const cssModulesRules = {
  test: /\.s[ac]ss$/,
  exclude: [/core\.(scss|sass)$/, /global\.style\.(scss|sass)$/],
  use: [
    MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        sourceMap: true,
        modules: {
          localIdentName: "[name]_[local]_[hash:base64:5]",
        },
        importLoaders: 2,
      },
    },
    postcssLoader,
    sassLoader,
    sassResourcesLoader
  ],
}

module.exports = {
  noCssModulesRules,
  cssModulesRules
};
