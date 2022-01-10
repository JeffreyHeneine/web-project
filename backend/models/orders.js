const mongoose = require('mongoose')

const Orders = new mongoose.Schema(
    {
        details: {type:String, requires: true},
        payment_meth: {type:String, requires: true},
        shipping_dest: {type:String, requires: true},
        email: {type:String, requires: true}
    }, 
    {collection: 'orders'}
)

const model = mongoose.model('OrdersData', Orders)

module.exports = model