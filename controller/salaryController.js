const salarymodel = require("../model/salaryModel");
const signModel = require("../model/signinModel");

const addsalarydata = async (req, res) => {
  try {
    const signData = await signModel.findOne({ email: req.body.email });

    console.log(signData);

    const salarydetail = new salarymodel({
      email: signData.email,
      password: signData.password,
      fName: req.body.fName,
      salary: req.body.salary,
      tax: req.body.tax,
      // nsal:req.body.nsal,
      // id:req.body.id
    });
    const savesalary = await salarydetail.save();
    res.status(200).send({ msg: "update data", salarydata: savesalary });
  } catch (error) {
    res.status(400).send(error);
  }
};

const getsalary = async (req, res) => {
  const { email, password } = req.body;

  const getData = await salarymodel
    .findOne({ email, password })
    .sort({ created_at: -1 });
  try {
    if (getData === null) {
      res.status(400).send("No details found");
    } else {
      res.status(200).send(getData);
    }
  } catch (err) {
    res.status(500).send(err);
  }
};
// const salaryEmployee = async (req, res) => {
//     try {
//       const { id } = req.params;
//        const { fName,email,salary,tax,nsal } = req.body;
//       const saveEmployee = await salarymodel.findById(id);

//      return res.json({  saveEmployee });
//     } catch (err) {
//       res.status(400).send(err);
//     }
//   };

// salaryEmployee

// const salary = async (req, res) => {
//   try {
//     const { id } = req.body;
//     const savedata = await salarymodel.find({ id });
//     if (savedata.length === 0) {
//       res.status(400).send({ msg: "This brand does not exist in database" });
//     } else {
//       res.status(200).send({ salarydetails: savedata });
//     }
//   } catch (error) {
//     res.status(400).send(error);
//   }
// };

module.exports = { addsalarydata, getsalary };
