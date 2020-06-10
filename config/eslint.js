const {paths, config} = require("./index");

const {__DEV__} = config.globals;

const eslintRules = [
  {
    test: /\.(js|jsx|ts|tsx)$/,
    loader: "eslint-loader",
    options: {
      configFile: paths.base(".eslintrc.js"),
      emitWarning: __DEV__,
      fix: false,
      cache: true,
      failOnError: false,
      failOnWarning: false,
    },
    exclude: /node_modules/,
    enforce: "pre",
  },
];

module.exports = {
  eslintRules,
};