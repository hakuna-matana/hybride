/* eslint-disable */
const mediaRules = [
  {
    test: /\.woff(\?.*)?$/,
    loader: "url-loader",
    options: {
      prefix: "fonts/",
      name: "[path][name].[ext]?[hash]",
      limit: 10,
      mimetype: "application/font-woff",
    },
  },
  {
    test: /\.woff2(\?.*)?$/,
    loader: "url-loader",
    options: {
      prefix: "fonts/",
      name: "[path][name].[ext]?[hash]",
      limit: 10,
      mimetype: "application/font-woff2",
    },
  },
  {
    test: /\.otf(\?.*)?$/,
    loader: "file-loader",
    options: {
      prefix: "fonts/",
      name: "[path][name].[ext]?[hash]",
      limit: 10,
      mimetype: "font/opentype",
    },
  },
  {
    test: /\.ttf(\?.*)?$/,
    loader: "url-loader",
    options: {
      prefix: "fonts/",
      name: "[path][name].[ext]?[hash]",
      limit: 10,
      mimetype: "application/octet-stream",
    },
  },
  {
    test: /\.eot(\?.*)?$/,
    loader: "file-loader",
    options: {prefix: "fonts/", name: "[path][name].[ext]?[hash]", limit: 10},
  },
  {
    test: /\.svg(\?.*)?$/,
    loader: "url-loader",
    options: {name: "img/[name].[ext]?[hash]", limit: 10, mimetype: "image/svg+xml"},
  },
  {
    test: /\.(png|jpg)$/,
    loader: "url-loader",
    options: {name: "img/[name].[ext]?[hash]", limit: 10},
  },
];
/* eslint-enable */
module.exports = {
  mediaRules,
};