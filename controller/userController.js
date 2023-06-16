const userModel = require("../model/userModel");
const signinModel = require("../model/signinModel");

const addUserData = async (req, res) => {
  try {
    const signinDetails = new signinModel({
      email: req.body.email,
      password: req.body.password,
      userType: req.body.userType,
    });

    const userDetail = new userModel({
      fName: req.body.fName,
      lName: req.body.lName,
      age: req.body.age,
      city: req.body.city,
      jobTitle: req.body.jobTitle,
      email: req.body.email,
      password: req.body.password,
      userType: req.body.userType,
    });
    const savesigninModel = await signinDetails.save();
    const saveUser = await userDetail.save();
    res.status(200).send({
      msg: "Update Data",
      userData: saveUser,
      signData: savesigninModel,
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

const getUser = async (req, res) => {
  const getData = await userModel.find();
  try {
    res.status(200).send(getData);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = { addUserData, getUser };
