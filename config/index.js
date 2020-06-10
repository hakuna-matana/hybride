const path = require("path");
const _debug = require("debug");
const {argv} = require("yargs");
const ip = require("ip");

const debug = _debug("app:config");
debug("Creating default configuration.");
const PROTOCOL = process.env.PROTOCOL || "http";
// ========================================================
// Default Configuration
// ========================================================
const config = {
  env: process.env.NODE_ENV || "development",

  // ----------------------------------
  // Project Structure
  // ----------------------------------
  path_base: path.resolve(__dirname, ".."),
  dir_client: "src",
  dir_dist: "dist",
  dir_server: "devServer",
  dir_test: "tests",

  // ----------------------------------
  // Server Configuration
  // ----------------------------------
  // use string 'localhost' to prevent exposure on local network
  server_host: ip.address(), //  process.env.DOMAIN || "localhost",
  server_port: process.env.HTTP_PORT || 3001,
  server_protocol: PROTOCOL,

  // ----------------------------------
  // Compiler Configuration
  // ----------------------------------
  compiler_css_modules: true,
  compiler_devtool: "source-map",
  compiler_hash_type: "hash",
  compiler_fail_on_warning: false,
  compiler_quiet: false,
  compiler_public_path: "",
  compiler_stats: {
    hash: true,
    version: true,
    timings: true,
    colors: true,
    errors: true,
    errorDetails: true,
    warnings: true,

    assets: false,
    chunks: false,
    modules: false,
    reasons: false,
    children: false,
    source: false,
    publicPath: false,
  },
  compiler_stats_prod: {
    hash: false,
    version: false,
    timings: true,
    colors: false,
    errors: true,
    errorDetails: true,
    warnings: false,

    assets: false,
    chunks: false,
    modules: false,
    reasons: false,
    children: false,
    source: false,
    publicPath: false,
  },

  // ----------------------------------
  // Test Configuration
  // ----------------------------------
  coverage_reporters: [{type: "text-summary"}, {type: "lcov", dir: "coverage"}],
};

/************************************************
 -------------------------------------------------

 All Internal Configuration Below
 Edit at Your Own Risk

 -------------------------------------------------
 ************************************************/

// ------------------------------------
// Environment
// ------------------------------------
config.globals = {
  "process.env": {
    NODE_ENV: JSON.stringify(config.env),
  },
  NODE_ENV: config.env,
  __DEV__: config.env === "development",
  __PROD__: config.env === "production",
  __TEST__: config.env === "test",
  __DLL__: process.env.DLL,
  __DLL2__: process.env.DLL2,
  __DEBUG__: config.env === "development" && !argv.no_debug,
  __COVERAGE__: !argv.watch && config.env === "test",
  __BASENAME__: JSON.stringify(process.env.BASENAME || ""),
};

// ------------------------------------
// Utilities
// ------------------------------------
const resolve = path.resolve;
const base = (...args) => Reflect.apply(resolve, null, [config.path_base, ...args]);


config.utils_paths = {
  base: base,
  client: base.bind(null, config.dir_client),
  dist: base.bind(null, config.dir_dist),
};

module.exports = {
  paths: config.utils_paths,
  ...config.globals,
  config,
};
