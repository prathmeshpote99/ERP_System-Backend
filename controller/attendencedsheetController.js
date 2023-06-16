const attendencedmodel = require("../model/attendencedsheetModel");
const signModel = require("../model/signinModel");

const addattendenceddata = async (req, res) => {
  try {
    const signData = await signModel.findOne({ email: req.body.email });
    console.log("signModel Email", signData.email);

    if (signData.userType == "User") {
      const attendenceddetail = new attendencedmodel({
        fullName: req.body.fullName,
        email: signData.email,
        present_days: req.body.present_days,
        absent_days: req.body.absent_days,
        // attendence_in_perc: req.body.attendence_in_perc,
      });
      const saveattendenced = await attendenceddetail.save();
      res
        .status(200)
        .send({ msg: "update data", attendenceddata: saveattendenced });
    } else {
      res.status(400).send({ msg: "Attendece is only applicable to user" });
    }
  } catch (error) {
    console.log(error);
  }
};

const getAttendence = async (req, res) => {
  const getData = await attendencedmodel.find();
  try {
    res.status(200).send(getData);
  } catch (err) {
    res.status(500).send(err);
  }
};

const getPerticularAttendence = async (req, res) => {
  try {
    const userdetail = await attendencedmodel.findOne({
      email: req.body.email,
    });

    if (!userdetail) {
      res.status(400).send("No details found");
    } else {
      res.status(200).send(userdetail);
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = { addattendenceddata, getAttendence, getPerticularAttendence };
