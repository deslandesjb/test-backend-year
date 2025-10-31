var express = require("express");
var router = express.Router();

const date = new Date();
const year = date.getFullYear().toString();

router.get("/", (req, res) => {
  res.json({result: true, year});
});

module.exports = router;
