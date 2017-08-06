const path = require('path');

module.exports = {
  context: __dirname,
  entry: {
    amd : "./amd",
    commonjs: "./commonjs",
    umd: "./umd"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  },
  resolve: {
    modules: [path.resolve(__dirname)],
    extensions: [".js"]
  }
}
