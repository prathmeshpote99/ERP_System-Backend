const feedbackModel = require("../model/feedbackModel");

const Add = async (req, res) => {
  try {
    const feedbackDetails = new feedbackModel({
      name: req.body.name,
      email: req.body.email,
      feedback: req.body.feedback,
    });
    const saveFeedback = await feedbackDetails.save();
    res
      .status(200)
      .send({ msg: "send feedback successsfully", data: saveFeedback });
  } catch (error) {
    res.status(400).send(error);
  }
};

const getFeedback = async (req, res) => {
  const getData = await feedbackModel.find();
  try {
    res.status(200).send(getData);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = { Add, getFeedback };
