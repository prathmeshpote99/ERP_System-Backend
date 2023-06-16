const express = require("express");
const route = express.Router();
const erpController = require("../controller/erpController");

route.post("/add", erpController.Add);

module.exports = route;
