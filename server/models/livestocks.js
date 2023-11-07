const mongoose = require("mongosse")

const livestocksSchema = new mongoose.Schema({
    name: String,
    type: String,
    price: Number,
    description: String,
    stock: Number,
    food: [],
    tanksize: [],
    reviews: [], 
})

module.exports = mongoose.model("Livestock", livestocksSchema)