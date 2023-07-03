const express = require("express");
const route = express.Router();
const hrController = require("../controller/hrController");

route.post("/add", hrController.Add);

module.exports = route;
