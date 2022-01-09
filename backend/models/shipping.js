const mongoose = require('mongoose')

const Shipping = new mongoose.Schema(
    {
        address: {type:String, requires: true},
        city: {type:String, requires: true},
        postalCode: {type:String, requires: true , unique:true},
        country: {type:String, requires: true}
    }, 
    {collection: 'shipping-details'}
)

const model = mongoose.model('ShippingDetails', Shipping)

module.exports = model