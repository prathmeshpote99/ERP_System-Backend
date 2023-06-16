const experss = require("express");
const router = experss.Router();
const salaryslipcontroller = require("../controller/salarySlipController");

router.post("/add", salaryslipcontroller.addsalarydata);
router.post("/find", salaryslipcontroller.getsalary);

module.exports = router;
