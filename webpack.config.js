const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
  entry: {
    app: "./src/index.ts",
    cookieBanner: "./src/scss/cookie-banner.scss",
    modal: "./src/scss/modal.scss"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    libraryTarget: "umd",
    library: "cookie",
  },
  module: {
    rules: [
      {
        test: /\.s?[ac]ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { url: false, sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } }
        ]
      },
      {
        test: /\.ts(x)?$/,
        use: ["awesome-typescript-loader"],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      ignoreOrder: false
    }),
    new HtmlWebpackPlugin({
      appMountId: "app",
      filename: "index.html",
      template: "example/index.html",
    }),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".scss"],
  },
};

module.exports = config;
