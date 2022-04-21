const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const proxyUrl = "./Projects/VRScene"; //代理项目地址

module.exports = {
  mode: "production", //production//development
  entry: `${proxyUrl}/index.js`,
  output: {
    clean: true,
    path: path.resolve(__dirname, "demo"), //将项目打包到demo的目录下面更新
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
  devtool: "hidden-cheap-source-map", //hidden-cheap-source-map//source-map
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
