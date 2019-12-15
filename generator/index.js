// const CopyWebpackPlugin = require('copy-webpack-plugin')
// const path = require('path')
// const routes = require('./src/router/routes.json')
// console.log(routes.map(r => r.path))
// const PrerenderSpaPlugin = require('prerender-spa-plugin')
const fs = require('fs')
module.exports = (api, options) => {
    api.extendPackage({
        dependencies: {
            "axios": "^0.19.0",
            "vue-scroll-reveal": "^1.0.11",
        },
        devDependencies: {
            "prerender-spa-plugin": "^3.4.0",
            "vue-meta": "2.3.1",
            "copy-webpack-plugin": "^5.0.5"
        }
    })
    api.render('./template')
    api.configurewWebpack = () => {
        console.log("here i am")
        return {
            // plugins: [
            //     new CopyWebpackPlugin([{
            //         from: path.join(__dirname, 'php'),
            //         to: path.join(__dirname, 'prod/dist/php')
            //     }]),
            //     new PrerenderSpaPlugin({
            //         // Required - The path to the webpack-outputted app to prerender.
            //         staticDir: path.join(__dirname, 'prod/dist'),
            //         // Required - Routes to render.
            //         // routes: ['/', '/about', '/some/deep/nested/route'],
            //         routes: routes.map(r => r.path)
            //     })
            // ]
        }
    }
    api.onCreateComplete(() => {
        const files = [
            'src/components/HelloWorld.vue',
            'src/App.vue',
            'src/views/About.vue',
            'src/views/Home.vue'
        ]
        files.forEach(f => {
            if (fs.existsSync(api.resolve(f))) {
                fs.unlinkSync(api.resolve(f))
            }
        })
    });
}
