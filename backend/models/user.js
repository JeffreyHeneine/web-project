const mongoose = require('mongoose')

const User = new mongoose.Schema(
    {
        firstName: {type:String, requires: true},
        lastName: {type:String, requires: true},
        email: {type:String, requires: true , unique:true},
        password: {type:String, requires: true},
        passwordConfirmation: {type:String, requires: true},
    }, 
    {collection: 'users'}
)

const model = mongoose.model('UserData', User)

module.exports = model