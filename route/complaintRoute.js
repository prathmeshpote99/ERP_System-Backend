const express = require("express");
const router = express.Router();
const complaintController = require("../controller/complaintController");

router.post("/add", complaintController.Add);
router.get("/find", complaintController.getComplaint);

module.exports = router;
