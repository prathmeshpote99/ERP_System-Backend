const express = require("express");
const router = express.Router();
const salarycontroller = require("../controller/salaryController");

router.post("/add", salarycontroller.addsalarydata);
router.post("/find", salarycontroller.getsalary);

module.exports = router;
