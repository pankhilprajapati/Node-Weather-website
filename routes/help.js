const express = require("express");
const router = express.Router();

router.get("/help", (req, res) => {
  res.render("help.ejs");
});

module.exports = router;
