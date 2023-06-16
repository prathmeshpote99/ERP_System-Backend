const complaintModel = require("../model/complaintModel");

const Add = async (req, res) => {
  try {
    const complaintDetails = new complaintModel({
      fullName: req.body.fullName,
      subject: req.body.subject,
      compliantBox: req.body.compliantBox,
    });
    const saveComplaint = await complaintDetails.save();
    res
      .status(200)
      .send({ msg: "Send complaint successfully", data: saveComplaint });
  } catch (error) {
    res.status(400).send(error);
  }
};

const getComplaint = async (req, res) => {
  const getData = await complaintModel.find();
  try {
    res.status(200).send(getData);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = { Add, getComplaint };
