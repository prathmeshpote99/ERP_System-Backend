const mongoose = require("mongoose");
const attendencedSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  present_days: {
    type: Number,
    required: true,
  },
  absent_days: {
    type: Number,
    // required: true,
  },
  // attendence_in_perc: {
  //   type: Number,
  //   required: true,
  // },
});
module.exports = mongoose.model("attendencedData", attendencedSchema);
