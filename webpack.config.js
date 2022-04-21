const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const proxyUrl = "./Projects/VRScene"; //代理项目地址

module.exports = {
  mode: "development", //production
  entry: `${proxyUrl}/index.js`,
  output: {
    clean: true,
    path: path.resolve(__dirname, "demo"),
    filename: "[name].js",
  },
  resolve: {
    extensions: [".js", ".json", ".wasm"],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ],
  },
  devtool: "source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, "resources"),
    },
    open: true,
    port: 8086,
    hot: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: `${proxyUrl}/index.html`,
    }),
    new CopyPlugin({
      patterns: [{ from: `${proxyUrl}/resources`, to: "./resources" }],
    }),
  ],
};
