const mongoose = require("mongoose");

const complaintScheama = new mongoose.Schema({
  fullName: {
    type: String,
    require: true,
  },
  subject: {
    type: String,
    require: true,
  },
  compliantBox: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("complaintData", complaintScheama);
