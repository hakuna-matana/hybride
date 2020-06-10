const imageRules = [
  {
    test: /\.svg(\?.*)?$/,
    loader: "url-loader",
    options: {name: "img/[name].[ext]?[hash]", limit: 10, mimetype: "image/svg+xml"},
  },
  {
    test: /\.(png|jpg|jpeg)$/,
    loader: "url-loader",
    options: {name: "img/[name].[ext]?[hash]", limit: 10},
  },
];

module.exports = {
  imageRules,
};
