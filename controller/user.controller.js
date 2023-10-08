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
module.exports = { users, createuser, updateuser, deleteuser };
