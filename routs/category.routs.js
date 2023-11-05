const { Router } = require("express");
const categorty = require("../models/category.schema");

const cate = Router();

cate.post("/create",async (req, res)=>{
  let data = await categorty.create(req.body);
  res.status(201).send(data);
})

module.exports = cate;