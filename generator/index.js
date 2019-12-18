const fs = require('fs')
module.exports = (api, options) => {
    api.extendPackage({
        dependencies: {
            "axios": "^0.19.0",
            "vue-scroll-reveal": "^1.0.11",
            "vuex": "^3.0.1",
            "vue-router": "^3.0.3",
            "vuetify": "^2.1.0",
        },
        devDependencies: {
            "prerender-spa-plugin": "^3.4.0",
            "vue-meta": "2.3.1",
            "copy-webpack-plugin": "^5.0.5"
        }
    })
    api.render('./template')

    api.onCreateComplete(() => {
        // This plugin needs to overwrite the default router 
        // to support pre-rendering with a route JSON object
        const originalRouterFile = 'src/router/index.js'
        const originalStoreFile = 'src/store/index.js'
        const newRouterFile = 'src/router/pixel-router.js'
        const deletes = [
            'src/components/HelloWorld.vue',
            // Note About, App, and Home are case-sensitive on Linux, not on Windows.
            'src/App.vue',
            'src/views/About.vue',
            'src/views/Home.vue',
            originalStoreFile,
            originalRouterFile
        ]
        const renames = [
            // PixelThin uses lowercase for all file names to avoid issues 
            // between Linux and Windows (Windows is not consistently case-sensitive, Linux is)
            { templateName: 'src/pixel-app.vue', projectName: 'src/app.vue' },
            { templateName: 'src/store/pixel-store.js', projectName: originalStoreFile },
            { templateName: 'src/router/pixel-router.js', projectName: originalRouterFile }
        ]
        deletes.forEach(d => {
            if (fs.existsSync(api.resolve(d))) {
                fs.unlinkSync(api.resolve(d))
            }
        })
        renames.forEach(r => {
            fs.renameSync(api.resolve(r.templateName), api.resolve(r.projectName))
        })
    });
}
