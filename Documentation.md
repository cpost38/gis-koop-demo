# Koop.js voor API vertaling

## GeoService standaard


- Feature service:
    - https://<catalog-url>/<serviceName>/FeatureServer
    - Layers


- :id - specify a 
- :layer - parameter to specify a layer 

```
"Geoservices" output routes for the "parkeer-provider" provider         Methods  
----------------------------------------------------------------------  ---------
/parkeer-provider/rest/info                                             GET, POST (GeoService info)
/parkeer-provider/tokens/:method                                        GET, POST (auth)
/parkeer-provider/tokens                                                GET, POST (auth)
/parkeer-provider/rest/services/:host/:id/FeatureServer/:layer/:method  GET, POST
/parkeer-provider/rest/services/:host/:id/FeatureServer/layers          GET, POST
/parkeer-provider/rest/services/:host/:id/FeatureServer/:layer          GET, POST
/parkeer-provider/rest/services/:host/:id/FeatureServer                 GET, POST
/parkeer-provider/:host/:id/FeatureServer/:layer/:method                GET, POST
/parkeer-provider/:host/:id/FeatureServer/layers                        GET, POST
/parkeer-provider/:host/:id/FeatureServer/:layer                        GET, POST
/parkeer-provider/:host/:id/FeatureServer                               GET, POST
/parkeer-provider/rest/services/:host/:id/FeatureServer*                GET, POST
/parkeer-provider/:host/:id/FeatureServer*                              GET, POST
/parkeer-provider/rest/services/:host/:id/MapServer*                    GET, POST
/parkeer-provider/:host/:id/MapServer*                                  GET, POST
```