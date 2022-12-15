const mongoose = require('mongoose')

const Mix_Food_Collection_Schema = mongoose.Schema({
    product_image_src: String,
    product_name: String,
    item_desc: String,
    rupee: String,
    offer_discount: String,
    add_to_cart: String,
    message: String,
    message_2: String,
    cta_text: String
}, {
    versionKey: false,
    timestamps: true
})

const Mix_Food_Collection_Modal = mongoose.model("mixfood_collection", Mix_Food_Collection_Schema)

module.exports = { Mix_Food_Collection_Modal }