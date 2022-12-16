const mongoose = require('mongoose')


const Admin_Authenticated_schema = mongoose.Schema({
    name: {
        firstName: String,
        lastName: String,
    },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    gender: { type: String, enum: ['Male', 'Female'] }
} , {
    versionKey : false,
    timestamps : true

})

const Admin_authenticated_modal = mongoose.model('Admin_collection', Admin_Authenticated_schema)

module.exports = { Admin_authenticated_modal }