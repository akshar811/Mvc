const mongoose = require('mongoose');

let productschema = new mongoose.Schema({
        title : String,
        price : Number,
        image : String,
        category : String,
})

const product = mongoose.model('Product', productschema );

module.exports = product