const mongoose = require('mongoose');

let cate = new mongoose.Schema({
    categorty : String,
})

const categorty = mongoose.model("category", cate)

module.exports = categorty;