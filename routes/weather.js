const express = require("express");
const router = express.Router();
const geocode = require("../src/utils/geocode");
const forecast = require("../src/utils/forecast");

router.get("/", (req, res) => {
  res.render("landing.ejs");
});

router.get("/weather", (req, res) => {
  
  if (!req.query.address) {
    req.query.address = "London";
    var data = {
      forecast: "DEFAULT FORECAST",
      location: "DEFAULT LOCATION",
      address: req.query.address
    };
    res.render("index.ejs", { data: data });
  }
  geocode(
    req.query.address,
    (error, { latitude, longitude, location } = {}) => {
      if (error) {
        console.log(error);
      }
      forecast(latitude, longitude, (error, forecastData) => {
        if (error) {
          console.log("error");
        }
        const data = {
          forecast: forecastData,
          location: location,
          address: req.query.address
        };

        res.render("index.ejs", { data: data });
      });
    }
  );
});

router.get("/find", (req, res) => {
  
  res.render("form.ejs");
});

module.exports = router;
