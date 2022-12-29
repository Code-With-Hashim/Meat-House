const mongoose = require("mongoose")

const User_Schema = mongoose.Schema({
    profile_img : String,
    name: String,
    phoneNumber: Number,
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    gender: { type: String, enum: ["Male", "Female", "Others"] },
    maritalStatus: { type: String, enum: ["Single", "Married"] },
    UserIP : String

} , {
    versionKey : false,
    timestamps : true
})

const User_Authenticated_Modals = mongoose.model("User_Collection", User_Schema)

module.exports = { User_Authenticated_Modals }