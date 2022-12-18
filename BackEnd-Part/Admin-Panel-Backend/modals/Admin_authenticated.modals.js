const mongoose = require('mongoose')


const Admin_Authenticated_schema = mongoose.Schema({
    profile_img : String,
    name: String,
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    gender: { type: String, enum: ['Male', 'Female' , 'Other'] },
    maritalStatus : {type : String , enum : ['Single' , 'Married']}
} , {
    versionKey : false,
    timestamps : true

})

const Admin_authenticated_modal = mongoose.model('Admin_collection', Admin_Authenticated_schema)

module.exports = { Admin_authenticated_modal }