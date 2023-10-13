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


const Ui = (req, res) => {
   res.render('index')
};
const charts = (req, res) => {
  res.render('charts')
}
const signups = (req, res) => {
  res.render('signups')
}
const logins = (req, res) => {
  res.render('login')
}
const login = async (req, res) => {
  let{username , password} = req.body
  let data = await user.findOne({username: username });
  if(!data) {
    return res.send("user not found")
  }
  if(data.password != password) {
    return res.send("wrong password")
  }
  res.cookie("id",data.id).send("checking");
}

module.exports = { users, createuser, updateuser, deleteuser, Ui, signup , charts , signups ,logins , login };


