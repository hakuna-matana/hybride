const cssNano = require("cssnano");

const postcssLoader = {
  loader: "postcss-loader",

  options: {
    plugins: [
      cssNano({
        autoprefixer: {
          add: true,
          remove: true,
          browsers: [
            "android >= 4.4.3",
            "chrome >= 41",
            "edge >= 14",
            "firefox  >= 39",
            "ios >= 10",
            "safari >= 10",
            "ie >= 10",
          ],
        },
        discardComments: {
          removeAll: true,
        },
      }),
    ],
  },
}

module.exports = {
  postcssLoader
};
