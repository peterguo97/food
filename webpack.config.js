const webpack = require('webpack');
module.exports = (config, { webpack }) => {
  config.plugins.push(new webpack.optimize.UglifyJsPlugin({
      comments: false,
      compress: {
        warnings: false,
        drop_console: true,
        collapse_vars: true,
        reduce_vars: true
      }
  }))
  return config
}