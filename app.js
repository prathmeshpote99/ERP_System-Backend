const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");

mongoose
  .connect("mongodb://127.0.0.1:27017/erp-system")
  .then(console.log("Database connected successfully"))
  .catch((err) => console.log(err));

app.use(express.json());
app.use(cors());

const erpRouter = require("./route/erpRoute");
app.use("/erp", erpRouter);

const hrRouter = require("./route/hrRoute");
app.use("/hr", hrRouter);

const loginController = require("./controller/loginController");
app.post("/login", loginController.login);

const userRouter = require("./route/userRoute");
app.use("/user", userRouter);

const leaveRouter = require("./route/leaveRoute");
app.use("/addleave", leaveRouter);

const complaintRouter = require("./route/complaintRoute");
app.use("/complaint", complaintRouter);

const attendencedRouter = require("./route/attendencedsheetRouter");
app.use("/attendenced", attendencedRouter);

const feedbackRouter = require("./route/feedbackRoute");
app.use("/feedback", feedbackRouter);

const salaryRouter = require("./route/salaryRouter");
app.use("/salary", salaryRouter);

const detailRouter = require("./route/detailsRouter");
app.use("/details", detailRouter);

const salaryslipRouter = require("./route/salarySlipRouter");
app.use("/salaryslip", salaryslipRouter);

const leaveDayRouter = require("./route/approvalStatusRouter");
app.use("/approval", leaveDayRouter);

app.listen(7080, () => {
  console.log("Server Running");
});
