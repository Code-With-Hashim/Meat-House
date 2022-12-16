const mongoose = require('mongoose')


const Admin_product_recyle_schema = mongoose.Schema({

    product_id: String,
    product_image_src: String,
    cta_text: String,
    product_name: String,
    item_desc: String,
    net_weight: String,
    rupee: String,
    price: String,
    offer_discount: String,
    add_to_cart: String,
    scooter_src: String,
    message: String,
    message_2: String,
    rupee_3: String,
    category_id: String

}, {
    versionKey: false,
    timestamps: true

})

const Admin_product_recycle = mongoose.model('Admin_product_recycle_collection', Admin_product_recyle_schema)

module.exports = { Admin_product_recycle }