const serverless = require('serverless-http');
const Koop = require('koop');

// initiate a Koop app
const koop = new Koop();

// configure the Koop app

// NOTE: this line is the real change
// wrap the Koop server with the serverless framework
module.exports.handler = serverless(koop.server);
