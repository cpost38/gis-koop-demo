/**
 * https://koopjs.github.io/docs/development/provider/routes
 * In addition to routes defined by output-plugins, a provider may extend the Koop 
 * API by defining their own routes and associated controllers. These routes are 
 * defined in a file that is referenced in the registration object. This file 
 * should export an array of route definition objects
 */
module.exports = [
    {
        path: `/parkeer-provider/test`,
        methods: ['get'],
        handler: 'testHandler'
    }
]
