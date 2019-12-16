const path = require('path')
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
    api.configurewWebpack = function (config) {
        return {
            // TODO: Add copying of php files and setup pre-rendering.
        }
    }
    api.onCreateComplete(() => {
        // This plugin needs to overwrite the default router 
        // to support pre-rendering with a route JSON object
        const oldRouterFile = 'src/router/index.js'
        const newRouterFile = 'src/router/pixel-router.js'
        const newAppFile = 'src/pixel-app.vue'
        const files = [
            'src/components/HelloWorld.vue',
            'src/App.vue',
            // Note About and Home are case-sensitive on Linux, not on Windows.
            'src/views/About.vue',
            'src/views/Home.vue',
            oldRouterFile
        ]
        files.forEach(f => {
            if (fs.existsSync(api.resolve(f))) {
                fs.unlinkSync(api.resolve(f))
            }
        })
        fs.renameSync(api.resolve(newRouterFile), api.resolve(oldRouterFile))
        // Note: we use lowercase for all files to avoid casing issues between Windows and Linux
        fs.renameSync(api.resolve(newAppFile), api.resolve('src/app.vue'))
    });
}
