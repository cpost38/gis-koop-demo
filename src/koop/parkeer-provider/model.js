const axios = require('axios').default;

class Model {

  async getData(req, callback) {

    const { params: { host, id, layer, method } } = req;

    // console.log(req);
    // console.log("host: ", host);
    // console.log("id: ", id);
    // console.log("GeoService>FeatureService>layer: ", layer);
    // console.log("GeoService>FeatureService>method: ", method);

    await axios.get('https://opendata.technolution.nl/opendata/parkingdata/v1/')
      .then(response => {
        // console.log(response.data);
        try {
          const ps = response.data.parkingFacilities
            .map((p, index) => {

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
                  "num": index
                }
              }
            });

          const geojson = {
            "type": "FeatureCollection",
            "features": ps,
            "metadata": {
              idField: "num",
              geometryType: "Point",
              name: "Parkeergarages",

            }
          }

          // console.log("GeoJson: ", geojson);
          callback(null, geojson);
        } catch (ex) {
          console.error(ex);
          callback(ex);
        }
      })
      .catch(error => {
        callback(error);
      });

  }

}

module.exports = Model