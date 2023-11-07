const mongoose = require('mongoose');

let productschemas = new mongoose.Schema({
        title : String,
        image : String,
        price : Number,
        subId : {type : mongoose.Schema.Types.ObjectId,ref:"subcategory"},
        userId : {type : mongoose.Schema.Types.ObjectId,ref:"user"},
})

const products = mongoose.model('Products', productschemas );

module.exports = products