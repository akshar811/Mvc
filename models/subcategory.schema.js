const mongoose = require('mongoose');

let subcate = new mongoose.Schema({
    subcategorty : String,
    categoryid : {type : mongoose.Schema.Types.ObjectId , ref : "category"}
})

const subcategorty = mongoose.model("subcategory", subcate)

module.exports = subcategorty;