const user = require("../models/user.schema");

const users = async (req, res) => {
  let data = await user.find();
  res.send(data);
};

const createuser = async (req, res) => {
  let data = await user.create(req.body);
  res.send(data);
};

const updateuser = async (req, res) => {
  let { id } = req.params;
  let data = await user.findByIdAndUpdate(id, req.body);
  res.send(data);
};
const deleteuser = async (req, res) => {
  let { id } = req.params;
  let data = await user.findByIdAndDelete(id);
  res.send(data);
};
const signup = async (req, res) => {
  let { email } = req.body;
  let users = await user.findOne({ email: email });

  if (users) {
    res.send("Already exists");
  } else {
    let data = await user.create(req.body);
    res.send(data);
  }
};

const login = async (req, res) => {
  let { email , password } = req.body;
  let users = await user.findOne({ email: email });
  
  if (!users) {
    res.send("User Not found");
  }
  else if(users.password != password) {
    res.send("wrong password");
  }
  res.send("logged in");
}
const Ui = (req, res) => {
   res.render('index')
};
const charts = (req, res) => {
  res.render('charts')
}
const signups = (req, res) => {
  res.render('signups')
}
module.exports = { users, createuser, updateuser, deleteuser, Ui, signup ,login , charts , signups };


