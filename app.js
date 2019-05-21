const path = require("path");
const express = require("express");
const app = express();

const port = process.env.PORT || 2001;
const publicDirectoryPath = path.join(__dirname, '/public')

app.use(express.static(publicDirectoryPath));
app.set("view engine", "ejs");

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

app.get("/current",(req,res)=>{
  res.render("current")
})

app.listen(port, () => {
  console.log("Server is started");
});
