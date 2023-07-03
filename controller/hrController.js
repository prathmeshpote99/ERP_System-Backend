const hrModel = require("../model/hrModel");
const signinModel = require("../model/signinModel");

const Add = async (req, res) => {
  try {
    const signinDetail = new signinModel({
      email: req.body.email,
      password: req.body.password,
      userType: req.body.userType,
    });

    const hrDetails = new hrModel({
      email: req.body.email,
      fName: req.body.fName,
      lName: req.body.lName,
      contact: req.body.contact,
      password: req.body.password,
      userType: req.body.userType,
    });
    const savesigninDetails = await signinDetail.save();
    const saveHr = await hrDetails.save();
    res.status(200).send({ hrData: saveHr, signinData: savesigninDetails });
  } catch (err) {
    res.status(400).send(err);
  }
};

module.exports = { Add };
