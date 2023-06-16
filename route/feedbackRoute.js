const express = require("express");
const router = express.Router();
const feedbackController = require("../controller/feedbackController");

router.post("/add", feedbackController.Add);
router.get("/find", feedbackController.getFeedback);

module.exports = router;
