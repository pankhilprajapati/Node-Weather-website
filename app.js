const path = require("path");
const express = require("express");
const app = express();
flash = require("connect-flash");
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");
app.use(flash());

const weatherRoutes = require("./routes/weather.js");
const helpRoutes = require("./routes/help");
const aboutRoutes = require("./routes/about.js");

app.use("/", weatherRoutes);

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/help", (req, res) => {
  res.render("help");
});

app.listen(2001, () => {
  console.log("Server is started");
});
