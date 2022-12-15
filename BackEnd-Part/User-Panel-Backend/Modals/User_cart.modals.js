const { ObjectId } = require("mongodb")
const mongoose = require("mongoose")

const User_cart_schema = mongoose.Schema({

    UserID: String,
    Cart: []
}, {
    versionKey: false,
    timestamp: true
})

const User_cart_modals = mongoose.model("User_cart", User_cart_schema)

module.exports = { User_cart_modals }