const withSourceMaps = require('@zeit/next-source-maps')
const withTypeScript = require('@zeit/next-typescript')
const withCSS = require('@zeit/next-css')
const withLess = require('@zeit/next-less')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const { ANALYZE } = process.env

module.exports = withTypeScript(withCSS(withLess({
    webpack: function (config, {dev}) {
      if (ANALYZE) {
        config.plugins.push(new BundleAnalyzerPlugin({
          analyzerMode: 'static',
          analyzerPort: 8888,
          openAnalyzer: true
        }))
      }
      // increase build speed in development
      if (dev) {
        config.devtool = 'cheap-module-source-map';
      }
  
      return config
    }
  }
)))
