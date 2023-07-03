const approvalModel = require("../model/approvalStatusmodel");
const signModel = require("../model/signinModel");

const Add = async (req, res) => {
  try {
    const signData = await signModel.findOne({ email: req.body.email });

    console.log(signData);
    const approvalDetails = new approvalModel({
      email: signData.email,
      isApproved: req.body.isApproved,
    });
    const saveDetails = await approvalDetails.save();
    res
      .status(200)
      .send({ msg: "Send leave request successfully", data: saveDetails });
  } catch (error) {
    res.status(400).send(error);
  }
};

const getapproval = async (req, res) => {
  try {
    const getData = await approvalModel.find();
    res.status(200).send(getData);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = { Add, getapproval };
