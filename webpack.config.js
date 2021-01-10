const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: {
    "App.bundle": "./src/App.entry.js",
    "Button.bundle": "./src/Button.entry.js",
    "ButtonGroup.bundle": "./src/ButtonGroup.entry.js",
    "Card.bundle": "./src/Card.entry.js",
    "Input.bundle": "./src/Input.entry.js",
    "Toolbar.bundle": "./src/Toolbar.entry.js",
    "Spinner.bundle": "./src/Spinner.entry.js",
  },
  output: {
    "path": path.resolve(__dirname, "docs"),
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