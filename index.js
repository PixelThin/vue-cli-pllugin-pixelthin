const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')
const PrerenderSpaPlugin = require('prerender-spa-plugin')

module.exports = (api) => {
    api.configurewWebpack = function (config) {
        return {
            plugins: [
                new CopyWebpackPlugin([{
                    from: path.join(__dirname, 'php'),
                    to: path.join(__dirname, 'prod/dist/php')
                }]),
                new PrerenderSpaPlugin({
                    // Required - The path to the webpack-outputted app to prerender.
                    staticDir: path.join(__dirname, 'prod/dist'),
                    // Required - Routes to render.
                    // routes: ['/', '/about', '/some/deep/nested/route'],
                    routes: routes.map(r => r.path)
                })
            ]
        }
    }
}
