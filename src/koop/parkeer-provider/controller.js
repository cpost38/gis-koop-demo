const axios = require('axios').default;

class Controller{

  async testHandler(req, callback) {

    axios.get('https://opendata.technolution.nl/opendata/parkingdata/v1/')
    .then(data => {
      callback(null, {}); // Todo map to geojson and 
    })
    .catch(error => {
      callback(error);
      return;
    });
  
  }
  
}

module.exports = Controller