const mongoose = require("mongoose");

const approvalSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  isApproved: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("approvalData", approvalSchema);
