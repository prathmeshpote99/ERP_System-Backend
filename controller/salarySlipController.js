const salaryslipmodel = require("../model/salarySlipModel");
const signModel = require("../model/signinModel");

const addsalarydata = async (req, res) => {
  try {
    const signData = await signModel.findOne({ email: req.body.email });

    console.log(signData);
    const salarydetail = new salaryslipmodel({
      email: signData.email,
      password: signData.password,
      Employee: req.body.Employee,
      Date_of_joining: req.body.Date_of_joining,
      Department: req.body.Department,
      Employee_code: req.body.Employee_code,
      Designation: req.body.Designation,
      Present_day: req.body.Present_day,
      Back_Acc_no: req.body.Back_Acc_no,
      // Absent_days: req.body.Absent_days,
      // Basic_pay: req.body.Basic_pay,
      // Proffesional_Tax: req.body.Proffesional_Tax,
      // HRA: req.body.HRA,
      // Leaves: req.body.Leaves,
      // Converience_alloyarce: req.body.Converience_alloyarce,
      // Employee_contribution_PF: req.body.Employee_contribution_PF,
      // other_alloyarce: req.body.other_alloyarce,
      // Employee_contribution_ESIC: req.body.Employee_contribution_ESIC,
      Gross_Salary: req.body.Gross_Salary,
      //   Deduction: req.body.Deduction,
    });
    const savesalary = await salarydetail.save();
    res.status(200).send({ msg: "update data", salarydata: savesalary });
  } catch (error) {
    res.status(400).send(error);
  }
};

const getsalary = async (req, res) => {
  const { email, password } = req.body;

  const getData = await salaryslipmodel
    .findOne({ email, password })
    .sort({ created_at: -1 });
  try {
    if (getData === null) {
      res.status(400).send("No details found");
    } else {
      res.status(200).send(getData);
    }
  } catch (err) {
    res.status(500).send(err);
  }
};
module.exports = { addsalarydata, getsalary };
