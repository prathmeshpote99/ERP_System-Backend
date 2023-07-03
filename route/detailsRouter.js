const express = require("express");
const router = express.Router();
const detailController = require("../controller/loginController");

router.post("/user", detailController.userDetails);
router.post("/admin", detailController.adminDetails);
router.post("/hr", detailController.hrDetails);

module.exports = router;
