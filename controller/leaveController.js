const leaveModel = require("../model/leaveModel");

const Add = async (req, res) => {
  try {
    const leaveDetails = new leaveModel({
      fullName: req.body.fullName,
      email: req.body.email,
      reason: req.body.reason,
      leaveDate: req.body.leaveDate,
    });
    const saveDetails = await leaveDetails.save();
    res
      .status(200)
      .send({ msg: "Send leave request successfully", data: saveDetails });
  } catch (error) {
    res.status(400).send(error);
  }
};

const getLeave = async (req, res) => {
  const getData = await leaveModel.find();
  try {
    res.status(200).send(getData);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = { Add, getLeave };
