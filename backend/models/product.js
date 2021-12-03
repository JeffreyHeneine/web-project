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
    price:{
        type :Number,
        required : true
    },
    countInStock:{
        type :Number,
        required : true
    },
    iamgeUrl:{
        type :String,
        required: true
    },
    category:{
        type :String,
        required : true
    },
    Brand:{
        type :String,
        required : true
    }
})

const Product = mongoose.model("product",productSchema)

module.exports = Product;