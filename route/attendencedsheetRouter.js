const experss = require("express");
const router = experss.Router();
const addattendencedcontroller = require("../controller/attendencedsheetController");

router.post("/add", addattendencedcontroller.addattendenceddata);
router.get("/find", addattendencedcontroller.getAttendence);
router.post("/findOne", addattendencedcontroller.getPerticularAttendence);

module.exports = router;
