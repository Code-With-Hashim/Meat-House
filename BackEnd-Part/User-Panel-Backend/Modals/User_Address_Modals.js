const mongoose = require('mongoose')


const User_Address_Schema = mongoose.Schema({
    UserID: String,
    address: String,
    fetchLocation: String
} , {
    versionKey : false,
    timestamps : true
})

const User_Address_Modal = mongoose.model("User_Address", User_Address_Schema)

module.exports = { User_Address_Modal }