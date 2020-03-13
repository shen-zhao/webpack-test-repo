const webpack = require('webpack');

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        // '@mc/phone-pc-sdk': '@mc/phone-pc-sdk/lib/esm.vue.js'
      }
    },
    plugins: [
      new webpack.ProgressPlugin()
    ]
  }
}
