const path = require('path')
const { EnvironmentPlugin } = require("webpack");

module.exports = {
  target: 'webworker',
  resolve: {
    alias: {
      fs: path.resolve(__dirname, './null.js'),
    },
  },
  mode: 'production',
  optimization: {
    usedExports: true,
  },
  plugins: [
    new EnvironmentPlugin({
      THE_MOVIE_DB_API_KEY: 'unknown'
    })
  ]
}
