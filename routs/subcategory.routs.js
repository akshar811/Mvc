const { Router } = require("express");
const subcategorty = require("../models/subcategory.schema");

const subcat = Router();

subcat.post("/create",async(req,res)=>{
    let data = await subcategorty.create(req.body)
    res.send(data);
})


subcat.get("/ui",async(req , res) =>{
    let data = await subcategorty.find().populate("categoryid")
    res.send(data)
})

module.exports = subcat