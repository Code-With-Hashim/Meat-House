const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema({
    id: Number,
    cat_name: String,
    cat_desc: String,
    cat_img: String,
    slug: String,
    meta_desc: String,
    meta_keyword: String,
    meta_title: String,
    status: Number,
    parent_id: Number,
    cat_web_img: String,
    cat_tile_img: String,
    msite_desc: String,
    subtitle: String,
    popular: Number,
    mobile_icon: String,
    mobile_icon_active: String,
    web_icon: String,
    web_icon_active: String,
    category_nav_section_img: String,
    category_nav_page_img: String,
    l0_subtext: String,
    order: String,
    sub_categories: Array
}, {
    versionKey: false,
    timeStamp: true
})

const Product_modal = mongoose.model("All_Product_Collection", ProductSchema)


module.exports = { Product_modal }