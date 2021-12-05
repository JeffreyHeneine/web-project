const mongoose  = require("mongoose");

const productSchema = new mongoose.Schema({
    name:{
        type :String,
        required : true
    },
    description:{
        type :String,
        required :true
    },
    category:{
        type :String,
        required : true
    },
    imageUrl:{
        type :String,
        required: true
    },
    price:{
        type :Number,
        required : true
    },
    brand:{
        type :String,
        required : true
    },
    countInStock:{
        type :Number,
        required : true
    }
})

const Product = mongoose.model("product",productSchema);

module.exports = Product;