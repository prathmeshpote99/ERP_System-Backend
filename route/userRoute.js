const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

router.post("/add", userController.addUserData);
router.get("/find", userController.getUser);

module.exports = router;
