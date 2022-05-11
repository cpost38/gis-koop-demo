const serverless = require('serverless-http');
const Koop = require('koop');
const parkeerProvider = require('./parkeer-provider');
const wfs = require('@koopjs/output-wfs');

// initiate a Koop app
const koop = new Koop();

// configure the Koop app
const parkeergarages = parkeerProvider({ 
   name: 'parkeer module' 
});
koop.register(wfs);
koop.register(parkeergarages);


// For running Koop in a lambda
module.exports.handler = serverless(koop.server);

// For running Koop locally
// koop.server.listen(8080, () => console.log(`Koop listening on port 8080!`))

