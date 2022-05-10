module.exports = function(options = {}) {
    // Allow name to be set by options
    const name = options.name ? options.name : 'example-provider';
    console.log(name);
  
    return {
      type: 'provider',
      name: 'parkeer-provider',
      hosts: false,
      disableIdParam: true,
      Model: require('./model'),
      //routes: require('./routes'),
      //Controller: require('./controller'),
      version: '1.0.0'
    }
  }
  