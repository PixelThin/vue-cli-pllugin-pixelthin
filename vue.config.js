const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')
const routes = require('./src/router/routes.json')
console.log(routes.map(r => r.path))
const PrerenderSpaPlugin = require('prerender-spa-plugin')
module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  chainWebpack: config => {
    config.resolve.symlinks(false)
  },
  // configureWebpack: {
  //   plugins: [
  //     new CopyWebpackPlugin([{
  //       from: path.join(__dirname, 'php'),
  //       to: path.join(__dirname, 'prod/dist/php')
  //     }]),
  //     new PrerenderSpaPlugin({
  //       // Required - The path to the webpack-outputted app to prerender.
  //       staticDir: path.join(__dirname, 'prod/dist'),
  //       // Required - Routes to render.
  //       // routes: ['/', '/about', '/some/deep/nested/route'],
  //       routes: routes.map(r => r.path)
  //     })
  //   ]
  // },
  outputDir: 'prod/dist',
  productionSourceMap: false
}
