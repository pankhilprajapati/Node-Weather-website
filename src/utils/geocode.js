const request = require("request");

const geocode = (add, call) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURIComponent(add) +
    ".json?access_token=pk.eyJ1IjoicGFwYTEzIiwiYSI6ImNqdTRmbHY4bDB4aWs0M21teHJyaDVtMjkifQ.IF1k59OYks524_NwDPt1VA";
  request({ url: url, json: true }, (err, { body }) => {
    if (err) {
      call("Unable to connect to location services", undefined);
    } else if (body.features.length === 0) {
      call("unable to fine the location, Try again later ", undefined);
    } else {
      call(undefined, {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].place_name
      });
    }
  });
};

module.exports = geocode;
