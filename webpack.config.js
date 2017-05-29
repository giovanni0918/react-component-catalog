const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: {
    "App.bundle": "./src/App.entry.js",
    "Button.bundle": "./src/Button.entry.js",
    "ButtonGroup.bundle": "./src/ButtonGroup.entry.js"
  },
  output: {
    "path": path.resolve(__dirname, "public"),
    "filename": "[name].js"
  },
  module: {
    "rules": [
      {
        "test": /\.css$/,
        "exclude": /node_modules/,
        "use": [
          { "loader": "style-loader" },
          {
            "loader": "css-loader",
            "options": { "importLoaders": 1 }
          },
          { "loader": "postcss-loader" }
        ]
      },
      {
        "test": /\.js$/,
        "exclude": /(node_modules|bower_components)/,
        "use": "babel-loader"
      },
      {
        "test": /\.json$/,
        "use": "json-loader"
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify("production")
      }
    })
  ]
};