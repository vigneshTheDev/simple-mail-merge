const path = require("path");

const HtmlPlugin = require("html-webpack-plugin");
const HtmlInlineScriptPlugin = require("html-inline-script-webpack-plugin");

const commonConfig = require("./webpack.common.config");

/** @type {import('webpack').Configuration} */
module.exports = {
  ...commonConfig,
  entry: {
    client: path.join(__dirname, "./src/client/index.tsx"),
  },
  devtool: process.env.NODE_ENV === "production" ? "source-map" : "eval-cheap-module-source-map",
  externals: {
    react: "React",
    "react-dom": "ReactDOM",
    antd: "antd",
    moment: "moment",
  },
  module: {
    rules: [
      ...commonConfig.module.rules,
      {
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
        loader: "url-loader",
        options: {
          limit: 100000,
        },
      },

      {
        test: /\.s?css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "sass-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    ...commonConfig.plugins,
    new HtmlPlugin({
      filename: "app.html",
      chunks: ["client"],
      cache: false,
      template: path.join(__dirname, "./src/client/index.html"),
      inject: "body",
    }),
    new HtmlInlineScriptPlugin(),
  ],
};
