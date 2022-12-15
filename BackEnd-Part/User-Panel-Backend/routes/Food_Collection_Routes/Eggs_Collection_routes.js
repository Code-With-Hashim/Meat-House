const express = require('express')
var uniqid = require('uniqid');

const Eggs_Collection_Routes = express.Router()

const { Eggs_Collection_modal } = require("../../../modals/Eggs_Collection.modals")

Eggs_Collection_Routes.get("/", async (req, res) => {
    try {

        const { category_id } = req.query

        const { sort_by_price } = req.query

        if (category_id || sort_by_price) {

            if (category_id && sort_by_price) {

                let data;
                if (sort_by_price === 'asc') {
                    const Eggs_Collection_data = await Eggs_Collection_modal.findOne({ _id: category_id }, { Food_list: 1 })

                    data = Eggs_Collection_data.Food_list.sort((a, b) => a.rupee.split("₹")[1] - b.rupee.split("₹")[1])


                } else {
                    const Eggs_Collection_data = await Eggs_Collection_modal.findOne({ _id: category_id }, { Food_list: 1 })

                    data = Eggs_Collection_data.Food_list.sort((a, b) => b.rupee.split("₹")[1] - a.rupee.split("₹")[1])
                }
                res.send(data)


            } else {
                const Eggs_Collection_data = await Eggs_Collection_modal.findOne({ _id: category_id }, { Food_list: 1 })

                // let data = Eggs_Collection_data.Food_list.sort((a, b) => a.rupee.split("₹")[1] - b.rupee.split("₹")[1])

                res.send(Eggs_Collection_data)
            }

        } else {
            const Eggs_Collection_data = await Eggs_Collection_modal.find()

            res.send(Eggs_Collection_data)
        }

    } catch (error) {
        console.log(error)
        res.status(404).send('Something went wrong')
    }
})

Eggs_Collection_Routes.get("/:id", async (req, res) => {

    const { id } = req.params

    try {

        const Eggs_Collection_data = await Eggs_Collection_modal.find()

        let collection_data;

        Eggs_Collection_data.filter((i) => {


            if (i.Food_list) {
                i.Food_list.filter((item) => {

                    if (item.product_id == id) {
                        collection_data = item
                    }
                })
            }

        })
        if (collection_data) {
            res.send(collection_data)
        } else {
            res.status(404).send({
                status: "Not Success",
                Message: "Item is not Found"
            })
        }



    } catch (error) {
        console.log(error)
        res.send('Not Update')
    }

})

// Eggs_Collection_Routes.get("/:id", async (req, res) => {

//     const { id } = req.params

//     try {

//         await Eggs_Collection_modal.insertMany([
//             {
//                 "img_container_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/1bd08fae-c971-390a-ce8a-6f6502f5bd0d/original/Eggs_(1).png",
//                 "tablescraper-selected-row": "Eggs",
//                 "Category_type": "Eggs",
//                 "Category_List": "All Eggs",
//                 "Food_list": [
//                     {
//                         "product_id" : uniqid(), 
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/a917c576-c350-375a-afad-4882c7fd85a8/original/Classic-Eggs---Pack-of-12-Hero-Shot.jpg",
//                         "cta_text": "DeLicious easy recipes for meaty meals!",
//                         "product_name": "Classic Eggs - Pack Of 12",
//                         "item_desc": "White shell eggs laid by healthy hens.",
//                         "net_weight": "Pieces: 12",
//                         "rupee": "₹155",
//                         "add_to_cart": "Add To Cart",
//                         "item_qty": 1,
//                         "message": "All slots full"
//                     },
//                     {
//                         "product_id" : uniqid(), 
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/0103f393-83db-a8aa-d2f7-2bceb6c6af36/original/Classic-Eggs---Pack-of-6--Hero-Shot.jpg",
//                         "cta_text": "DeLicious easy recipes for meaty meals!",
//                         "product_name": "Classic Eggs - Pack Of 6",
//                         "item_desc": "Pack of 6  fresh, white eggs from healthy hens",
//                         "net_weight": "Pieces: 6",
//                         "rupee": "₹79",
//                         "add_to_cart": "Add To Cart",
//                         "item_qty": 0,
//                         "message": "All slots full"
//                     },
//                     {
//                         "product_id" : uniqid(), 
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/1803f01a-2f09-e768-897e-7c9707e5c5ed/original/Classic-Eggs---Pack-Of-30-Hero-Shot.jpg",
//                         "cta_text": "DeLicious easy recipes for meaty meals!",
//                         "product_name": "Classic Eggs - Pack Of 30",
//                         "item_desc": "Pack of 30 fresh, white eggs from healthy hens",
//                         "net_weight": "Pieces: 30",
//                         "rupee": "₹365",
//                         "add_to_cart": "Add To Cart",
//                         "item_qty": 0,
//                         "message": "All slots full"
//                     },
//                     {
//                         "product_id" : uniqid(), 
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/4a988d54-529d-60de-c666-e8ab75a16e5c/original/Country-Eggs---Pack-Of-6-Hero-Shot.jpg",
//                         "cta_text": "Licious Health & Safety Protocols - Eggs",
//                         "product_name": "Country Eggs - Pack Of 6",
//                         "item_desc": "Pack of 6 fresh, white eggs from healthy hens.",
//                         "net_weight": "Pieces: 6",
//                         "rupee": "₹115",
//                         "add_to_cart": "",
//                         "item_qty": 0,
//                         "message": "Out of Stock"
//                     },
//                     {
//                         "product_id" : uniqid(), 
//                         "product_image_src": "https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_1puko17o11a/18/prod_display_image/1620061207.2395--2021-05-0322:30:07--738",
//                         "cta_text": "",
//                         "product_name": "Chunky Creamy Tomato Egg Spread (Single Serve)",
//                         "item_desc": "Tangy, creamy spread with chunks of egg in every bite.",
//                         "net_weight": "Pieces: 1",
//                         "rupee": "₹29",
//                         "add_to_cart": "",
//                         "item_qty": 0,
//                         "message": "Out of Stock"
//                     },
//                     {
//                         "product_id" : uniqid(), 
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/fee04c74-6b36-8d90-0242-cd9f62731a38/original/Brown-Eggs---Pack-Of-6-Hero-Shot_(1).jpg",
//                         "cta_text": "Licious Health & Safety Protocols - Eggs",
//                         "product_name": "Brown Eggs - Pack of 6",
//                         "item_desc": "Brown shell eggs laid by healthy hens.",
//                         "net_weight": "Pieces: 6",
//                         "rupee": "₹99",
//                         "add_to_cart": "",
//                         "item_qty": 0,
//                         "message": "Out of Stock"
//                     },
//                     {
//                         "product_id" : uniqid(), 
//                         "product_image_src": "https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_156ko17lb9z/18/prod_display_image/1620095732.3083--2021-05-0408:05:32--738",
//                         "cta_text": "",
//                         "product_name": "Chunky Garlic Mustard Egg Spread",
//                         "item_desc": "Your favourite condiments in a yummy, chunky egg spread!",
//                         "net_weight": "Pieces: 1",
//                         "rupee": "₹149",
//                         "add_to_cart": "",
//                         "item_qty": 0,
//                         "message": "Out of Stock"
//                     },
//                     {
//                         "product_id" : uniqid(), 
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/a04c890a-337b-cc5a-c8b4-e63e1cfa0778/original/Chunky-Creamy-Tomato-Egg-Spread_(1).jpg",
//                         "cta_text": "",
//                         "product_name": "Chunky Creamy Tomato Egg Spread",
//                         "item_desc": "Tangy, creamy spread with chunks of egg in every bite.",
//                         "net_weight": "Pieces: 1",
//                         "rupee": "₹149",
//                         "add_to_cart": "",
//                         "item_qty": 0,
//                         "message": "Out of Stock"
//                     },
//                     {
//                         "product_id" : uniqid(), 
//                         "product_image_src": "https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_15cko17ou95/18/prod_display_image/1620095891.0803--2021-05-0408:08:11--738",
//                         "cta_text": "",
//                         "product_name": "Chunky Garlic Mustard Egg Spread (Single Serve)",
//                         "item_desc": "Your favourite condiments in a yummy, chunky egg spread!",
//                         "net_weight": "Pieces: 1",
//                         "rupee": "₹29",
//                         "add_to_cart": "",
//                         "item_qty": 0,
//                         "message": "Out of Stock"
//                     },
//                     {
//                         "product_id" : uniqid(), 
//                         "product_image_src": "https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_htvkfobkh1m/3/prod_display_image/1601405662.7327--2020-09-3000:24:22--472",
//                         "cta_text": "Licious Health & Safety Protocols - Eggs",
//                         "product_name": "Country Eggs- 12 Pcs",
//                         "item_desc": "Combo pack of 12 delicious, country egg",
//                         "net_weight": "",
//                         "rupee": "₹225",
//                         "add_to_cart": "",
//                         "item_qty": 0,
//                         "message": "Out of Stock"
//                     },
//                     {
//                         "product_id" : uniqid(), 
//                         "product_image_src": "https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_1puko17mted/18/prod_display_image/1634575724.9323--2021-10-1822:18:44--1818",
//                         "cta_text": "",
//                         "product_name": "Chunky Continental Egg Spread",
//                         "item_desc": "Creamy egg spread flavoured with garlic.",
//                         "net_weight": "Pieces: 1",
//                         "rupee": "₹149",
//                         "add_to_cart": "",
//                         "item_qty": 0,
//                         "message": "Out of Stock"
//                     },
//                     {
//                         "product_id" : uniqid(), 
//                         "product_image_src": "https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_15cko17rxm5/18/prod_display_image/1620096316.8177--2021-05-0408:15:16--738",
//                         "cta_text": "",
//                         "product_name": "Chunky Continental Egg Spread (Single Serve)",
//                         "item_desc": "Creamy egg spread flavoured with garlic",
//                         "net_weight": "Pieces: 1",
//                         "rupee": "₹29",
//                         "add_to_cart": "",
//                         "item_qty": 0,
//                         "message": "Out of Stock"
//                     }
//                 ]
//             },
//             {
//                 "img_container_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/1bd08fae-c971-390a-ce8a-6f6502f5bd0d/original/Eggs_(1).png",
//                 "tablescraper-selected-row": "Eggs",
//                 "Category_type": "Classic Eggs",
//                 "Category_List": "Classic Eggs",
//                 "Food_list": [
//                     {
//                         "product_id" : uniqid(), 
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/a917c576-c350-375a-afad-4882c7fd85a8/original/Classic-Eggs---Pack-of-12-Hero-Shot.jpg",
//                         "cta_text": "DeLicious easy recipes for meaty meals!",
//                         "product_name": "Classic Eggs - Pack Of 12",
//                         "item_desc": "White shell eggs laid by healthy hens.",
//                         "net_weight": "Pieces: 12",
//                         "rupee": "₹155",
//                         "add_to_cart": "Add To Cart",
//                         "item_qty": 1,
//                         "message": "All slots full"
//                     },
//                     {
//                         "product_id" : uniqid(), 
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/0103f393-83db-a8aa-d2f7-2bceb6c6af36/original/Classic-Eggs---Pack-of-6--Hero-Shot.jpg",
//                         "cta_text": "DeLicious easy recipes for meaty meals!",
//                         "product_name": "Classic Eggs - Pack Of 6",
//                         "item_desc": "Pack of 6  fresh, white eggs from healthy hens",
//                         "net_weight": "Pieces: 6",
//                         "rupee": "₹79",
//                         "add_to_cart": "Add To Cart",
//                         "item_qty": 0,
//                         "message": "All slots full"
//                     },
//                     {
//                         "product_id" : uniqid(), 
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/1803f01a-2f09-e768-897e-7c9707e5c5ed/original/Classic-Eggs---Pack-Of-30-Hero-Shot.jpg",
//                         "cta_text": "DeLicious easy recipes for meaty meals!",
//                         "product_name": "Classic Eggs - Pack Of 30",
//                         "item_desc": "Pack of 30 fresh, white eggs from healthy hens",
//                         "net_weight": "Pieces: 30",
//                         "rupee": "₹365",
//                         "add_to_cart": "Add To Cart",
//                         "item_qty": 0,
//                         "message": "All slots full"
//                     },
//                     {
//                         "product_id" : uniqid(), 
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/fee04c74-6b36-8d90-0242-cd9f62731a38/original/Brown-Eggs---Pack-Of-6-Hero-Shot_(1).jpg",
//                         "cta_text": "Licious Health & Safety Protocols - Eggs",
//                         "product_name": "Brown Eggs - Pack of 6",
//                         "item_desc": "Brown shell eggs laid by healthy hens.",
//                         "net_weight": "Pieces: 6",
//                         "rupee": "₹99",
//                         "add_to_cart": "",
//                         "item_qty": 0,
//                         "message": "Out of Stock"
//                     }
//                 ]
//             },
//             {
//                 "img_container_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/1bd08fae-c971-390a-ce8a-6f6502f5bd0d/original/Eggs_(1).png",
//                 "tablescraper-selected-row": "Eggs",
//                 "Category_type": "Spread Eggs",
//                 "Category_List": "Spread Eggs",
//                 "Food_list": [
//                     {
//                         "product_id" : uniqid(), 
//                         "product_image_src": "https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_1puko17o11a/18/prod_display_image/1620061207.2395--2021-05-0322:30:07--738",
//                         "product_name": "Chunky Creamy Tomato Egg Spread (Single Serve)",
//                         "item_desc": "Tangy, creamy spread with chunks of egg in every bite.",
//                         "rupee": "₹29"
//                     },
//                     {
//                         "product_id" : uniqid(), 
//                         "product_image_src": "https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_156ko17lb9z/18/prod_display_image/1620095732.3083--2021-05-0408:05:32--738",
//                         "product_name": "Chunky Garlic Mustard Egg Spread",
//                         "item_desc": "Your favourite condiments in a yummy, chunky egg spread!",
//                         "rupee": "₹149"
//                     },
//                     {
//                         "product_id" : uniqid(), 
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/a04c890a-337b-cc5a-c8b4-e63e1cfa0778/original/Chunky-Creamy-Tomato-Egg-Spread_(1).jpg",
//                         "product_name": "Chunky Creamy Tomato Egg Spread",
//                         "item_desc": "Tangy, creamy spread with chunks of egg in every bite.",
//                         "rupee": "₹149"
//                     },
//                     {
//                         "product_id" : uniqid(), 
//                         "product_image_src": "https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_15cko17ou95/18/prod_display_image/1620095891.0803--2021-05-0408:08:11--738",
//                         "product_name": "Chunky Garlic Mustard Egg Spread (Single Serve)",
//                         "item_desc": "Your favourite condiments in a yummy, chunky egg spread!",
//                         "rupee": "₹29"
//                     },
//                     {
//                         "product_id" : uniqid(), 
//                         "product_image_src": "https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_1puko17mted/18/prod_display_image/1634575724.9323--2021-10-1822:18:44--1818",
//                         "product_name": "Chunky Continental Egg Spread",
//                         "item_desc": "Creamy egg spread flavoured with garlic.",
//                         "rupee": "₹149"
//                     },
//                     {
//                         "product_id" : uniqid(), 
//                         "product_image_src": "https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_15cko17rxm5/18/prod_display_image/1620096316.8177--2021-05-0408:15:16--738",
//                         "product_name": "Chunky Continental Egg Spread (Single Serve)",
//                         "item_desc": "Creamy egg spread flavoured with garlic",
//                         "rupee": "₹29"
//                     }
//                 ]
//             }
//         ])
//         res.send('updated')


//     } catch (error) {
//         console.log(error)
//         res.send('Not Update')
//     }

// })




module.exports = { Eggs_Collection_Routes }