const product = require("../models/product.schema")

const createproduct = async (req, res) => {
   let data = await product.create(req.body)
   res.send(data)
}

const display = (req, res) => {
    res.render("product");
  };

const findproduct = async (req, res) => {
  let data = await product.find()
  res.send(data)
}

 const deleteproduct = async (req, res) => {
  let {id} = req.params
  let data = await product.findByIdAndDelete(id)
  res.send(data)
 }

 const updateproduct = async (req, res) => {
  let {id} = req.params
  let data = await product.findByIdAndUpdate(id,req.body)
  res.send(data)
 }

module.exports = {createproduct , display , findproduct , deleteproduct , updateproduct}
