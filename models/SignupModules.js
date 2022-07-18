const mongoose = require('mongoose')


const signupTemplate = new mongoose.Schema({
    fullName : {
        type: String,
        required : true
    },
    userName : {
        type: String,
        required : true
    },
    email: {
        type: String,
        required : true
    },
    password:{
        type: String,
        required : true
    },
    date: {
        type:Date,
        default: Date.now
    }
})

const userModel = mongoose.model('mytable', signupTemplate)

module.exports = userModel