const path = require("path");

const typescriptOptions = {
  extensions: [".ts", ".tsx", ".d.ts"],
  configFileName: "tsconfig.json",
  usePrecompiledFiles: true,
  logLevel: "info",
  useCache: true,
  cacheDirectory: path.join(__dirname, "../../node_modules/.cache/awcache"),
  forceIsolatedModules: true,
  reportFiles: ["src/**/*.{ts,tsx}"],
};

const typescriptLoader = {
  loader: "awesome-typescript-loader",
  options: typescriptOptions,
};

const typescriptRules = [
  ...(process.env.NODE_ENV === 'development'
    ? [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        enforce: "pre",
        use: [
          {
            loader: "prettier-loader",
            options: {
              parser: "typescript",
            },
          },
        ],
      },
    ] : []),
  {
    test: /\.tsx?$/,
    use: [
      typescriptLoader,
    ],
  },
];

module.exports = {
  typescriptOptions,
  typescriptLoader,
  typescriptRules,
};
