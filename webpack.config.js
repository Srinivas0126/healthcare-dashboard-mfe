const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");
const { dependencies } = require("./package.json");

const { container: { ModuleFederationPlugin } } = webpack;

module.exports = {
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    clean: true,
    publicPath: "auto",
    uniqueName: "healthcare_dashboard"
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.module\.css$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              esModule: true,
              modules: {
                namedExport: false,
                localIdentName: "[name]__[local]__[hash:base64:5]"
              }
            }
          }
        ]
      },
      {
        test: /\.css$/i,
        exclude: /\.module\.css$/i,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "dashboard",
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./src/App"
      },
      shared: {
        react: {
          requiredVersion: dependencies.react,
          singleton: true
        },
        "react-dom": {
          requiredVersion: dependencies["react-dom"],
          singleton: true
        },
        "react-router-dom": {
          requiredVersion: dependencies["react-router-dom"],
          singleton: true
        }
      }
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    })
  ],
  devServer: {
    port: 3004,
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    historyApiFallback: true,
    hot: true
  }
};
