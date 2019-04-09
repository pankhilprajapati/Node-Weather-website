const request = require("request");

const forecast = (latitude, longitude, call) => {
  const url =
    "https://api.darksky.net/forecast/55e4830f895cf7170d372086f479f613/" +
    latitude +
    "," +
    longitude;

  request({ url: url, json: true }, (error, { body }) => {
    if (error) {
      call("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      call("Unable to find location", undefined);
    } else {
      call(
        undefined,
        body.daily.data[0].summary +
          " It is currently " +
          body.currently.temperature +
          " degress out. There is a " +
          body.currently.precipProbability +
          "% chance of rain."
      );
    }
  });
};

module.exports = forecast;
