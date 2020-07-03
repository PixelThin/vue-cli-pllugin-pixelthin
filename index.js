const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')
const PrerenderSpaPlugin = require('prerender-spa-plugin')
const fs = require('fs')

module.exports = (api, options) => {
    api.configureWebpack((config) => {
        const routeFile = api.resolve("src/router/routes.json")
        const exists = fs.existsSync(routeFile)
        const routes = exists ? require(routeFile) : [
            { path: '/', preRender: true }
        ]
        if (!exists) {
            console.log(`*****Warning: no routes file found at src/router/routes.json.
            Only the root path will be pre-rendered.`)
        }
        return {
            plugins: [
                new PrerenderSpaPlugin({
                    // Required - The path to the webpack-outputted app to prerender.
                    // staticDir: path.join(__dirname, options.outputDir),
                    staticDir: api.resolve(options.outputDir),
                    // The routes to render should be in an object 
                    routes: routes.filter(r => r.preRender).map(r => r.path)
                })
            ]
        }
    })


}
