const mongoose = require("mongoose");
const salaryslipSchema = new mongoose.Schema({
  Employee: {
    type: String,
    required: true,
  },
  Date_of_joining: {
    type: String,
    required: true,
  },
  Department: {
    type: String,
    required: true,
  },
  Employee_code: {
    type: Number,
    required: true,
  },
  Designation: {
    type: String,
    required: true,
  },
  Present_day: {
    type: String,
    required: true,
  },
  Back_Acc_no: {
    type: Number,
    required: true,
  },
  // Absent_days: {
  //   type: String,
  //   required: true,
  // },
  // Basic_pay: {
  //   type: Number,
  //   required: true,
  // },
  // Proffesional_Tax: {
  //   type: Number,
  //   required: true,
  // },
  // HRA: {
  //   type: Number,
  //   required: true,
  // },
  // Leaves: {
  //   type: Number,
  //   required: true,
  // },
  // Converience_alloyarce: {
  //   type: Number,
  //   required: true,
  // },
  // Employee_contribution_PF: {
  //   type: Number,
  //   required: true,
  // },
  // other_alloyarce: {
  //   type: Number,
  //   required: true,
  // },
  // Employee_contribution_ESIC: {
  //   type: Number,
  //   required: true,
  // },
  Gross_Salary: {
    type: Number,
    required: true,
  },
  // Deduction: {
  //   type: Number,
  //   required:true
  // },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
});
module.exports = mongoose.model("salaryslipData", salaryslipSchema);
