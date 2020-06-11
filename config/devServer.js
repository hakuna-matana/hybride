const {paths} = require("./index");

const devServer = {
  contentBase: paths.client("static"),
  port: 3000,
  historyApiFallback: {
    rewrites: [
      { from: /^\/$/,
        to: '/landing.html'
      },
      { from: /(.*)/, to: '/app.html' },
      {
        from: /^\/(?:.*\/)?(font|img)(\/?[^/]+)$/,
        to: function(context) {
          return context.parsedUrl.pathname.replace(/^\/(?:.*\/)?(font|img)(\/?[^/]+)$/, "/$1$2");
        },
      },
      {
        from: /^\/(?:(?!font\/)[^/]+\/)+([^/]+\.(?:css|js)(?:\?.*)?)$/,
        to: function(context) {
          return context.parsedUrl.pathname.replace(
            /^\/(?:(?!font\/)[^/]+\/)+([^/]+\.(?:css|js)(?:\?.*)?)$/,
            "/$1"
          );
        },
      },
    ],
  }
};

// как настроить прокси - https://webpack.js.org/configuration/dev-server/#devserverproxy

module.exports = {
  devServer,
};