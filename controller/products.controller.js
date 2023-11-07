const products = require("../models/products.schema");

const add = async (req, res) => {       
  req.body.userId = req.user.id;
  let data = await products.create(req.body);
  res.send(data);
};

const productdisplay = (req, res) => {
    res.render("products")
}

const get = async (req, res) => {
    let data = await products.find().populate("userId")
    res.send(data);
}

module.exports = {add, productdisplay , get}

