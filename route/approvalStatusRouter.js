const express = require("express");
const router = express.Router();
const approvalController = require("../controller/approvalStatusController");

router.post("/add", approvalController.Add);
router.get("/find", approvalController.getapproval);

module.exports = router;
