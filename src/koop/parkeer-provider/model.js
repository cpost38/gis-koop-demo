const axios = require('axios').default;

class Model {

  async getData(req, callback) {

    const { params: { host, id, layer, method } } = req;

    // Print the parameter values
    // console.log(req);
    // console.log("host: ", host);
    // console.log("id: ", id);
    // console.log("GeoService>FeatureService>layer: ", layer);
    // console.log("GeoService>FeatureService>method: ", method);

    var parkeergarages = [];

    // Make a request to the API main page
    await axios.get('https://opendata.technolution.nl/opendata/parkingdata/v1/')
      .then(response => {
        parkeergarages = response.data.parkingFacilities;
      })
      .catch(error => {
        callback(error);
        return;
      });

    try {
      const geojson = this._translate(parkeergarages);
      callback(null, geojson);
    } catch (ex) {
      callback(ex);
    }

  }

  _translate(parkeergarages) {
    const ps = parkeergarages.map(this._translateItem)
    return {
      "type": "FeatureCollection",
      "features": ps,
      "metadata": {
        idField: "num",
        geometryType: "Point",
        name: "Parkeergarages",
      }
    }
  }

  _translateItem(p, index) {
    let coordinates = [0.0, 0.0];
    if (p.locationForDisplay) {
      coordinates = [
        p.locationForDisplay.longitude,
        p.locationForDisplay.latitude
      ]
    }

    return {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": coordinates,
      },
      "properties": {
        "name": p.name,
        "identifier": p.identifier,
        "num": index,
      }
    }
  }

}

module.exports = Model

