const express = require('express')
var uniqid = require('uniqid');

const Prawns_Collection_Routes = express.Router()

const { Prawns_Collection_modal } = require("../../../modals/Prawns_Collection.modals")

Prawns_Collection_Routes.get("/", async (req, res) => {
    try {

        const { category_id } = req.query

        const { sort_by_price } = req.query

        if (category_id || sort_by_price) {

            if (category_id && sort_by_price) {

                let data;
                if (sort_by_price === 'asc') {
                    const Prawns_Collection_data = await Prawns_Collection_modal.findOne({ _id: category_id }, { Food_list: 1 })

                    data = Prawns_Collection_data.Food_list.sort((a, b) => a.rupee.split("₹")[1] - b.rupee.split("₹")[1])


                } else {
                    const Prawns_Collection_data = await Prawns_Collection_modal.findOne({ _id: category_id }, { Food_list: 1 })

                    data = Prawns_Collection_data.Food_list.sort((a, b) => b.rupee.split("₹")[1] - a.rupee.split("₹")[1])
                }
                res.send(data)


            } else {
                const Prawns_Collection_data = await Prawns_Collection_modal.findOne({ _id: category_id }, { Food_list: 1 })

                // let data = Prawns_Collection_data.Food_list.sort((a, b) => a.rupee.split("₹")[1] - b.rupee.split("₹")[1])

                res.send(Prawns_Collection_data)
            }

        } else {
            const Prawns_Collection_data = await Prawns_Collection_modal.find()

            res.send(Prawns_Collection_data)
        }

    } catch (error) {
        console.log(error)
        res.status(404).send('Something went wrong')
    }
})

Prawns_Collection_Routes.get("/:id", async (req, res) => {

    const { id } = req.params

    try {

        const Prawns_Collection_data = await Prawns_Collection_modal.find()

        let collection_data;

        Prawns_Collection_data.filter((i) => {


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

// Prawns_Collection_Routes.get("/:id", async (req, res) => {

//     const { id } = req.params

//     try {
//         await Prawns_Collection_modal.insertMany([
//             {
//                 "img_container_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/f4053965-f199-80a0-2551-d85d712574e2/original/Prawn_(2).png",
//                 "tablescraper-selected-row": "Prawns",
//                 "Category_type": "Prawns",
//                 "Category_List": "All Prawns",
//                 "Food_list": [
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/797ea63c-7d48-cc91-7359-95db47064685/original/WhatsApp_Image_2022-04-13_at_2.16.31_PM.jpeg",
//                         "cta_text": "DeLicious easy recipes for meaty meals!",
//                         "product_name": "Freshwater/ White Prawns/ Jhinga (Medium) - Cleaned & Deveined",
//                         "item_desc": "Freshwater prawns. De-shelled, cleaned, deveined, butterflied prawns, with head and tail removed.",
//                         "net_weight": "250gms",
//                         "rupee": "₹386",
//                         "offer_discount": "10% OFF",
//                         "message": "Tomorrow",
//                         "gross_weight": ""
//                     },
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/cf5c9510-8334-0118-ce40-95aee37dd65a/original/Prawns-Zaffrani-tag.jpg",
//                         "cta_text": "How To Cook",
//                         "product_name": "Prawns Zaffrani | Ready in 8 Minutes",
//                         "item_desc": "Medium sized prawns in a creamy, saffron marinade.",
//                         "net_weight": "Pieces: 12-16",
//                         "rupee": "₹349",
//                         "offer_discount": "",
//                         "message": "Out of Stock",
//                         "gross_weight": "Net wt: 200gms"
//                     },
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/528a33e0-78d6-8b4a-bd7c-042a034eeaba/original/1626790290_(1).jpg",
//                         "cta_text": "Licious Health & Safety Protocols - Prawn",
//                         "product_name": "Tiger Prawns/ Jhinga (Large) - Cleaned & Deveined, With Tail",
//                         "item_desc": "Flavourful Tiger Prawns, cleaned and ready for the pan",
//                         "net_weight": "250gms",
//                         "rupee": "₹457",
//                         "offer_discount": "25% OFF",
//                         "message": "Out of Stock",
//                         "gross_weight": ""
//                     },
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/ProductMerchantdising/6feeb228-6eaf-49c0-9077-e2d69cafe564/original/1600275865.615--2020-09-1622_34_25--738.jpeg",
//                         "cta_text": "DeLicious easy recipes for meaty meals!",
//                         "product_name": "Freshwater/ White Prawns/ Jhinga (Large) - Cleaned & Deveined",
//                         "item_desc": "Large butterflied prawns with head and tail removed - deshelled, cleaned, deveined.",
//                         "net_weight": "250gms",
//                         "rupee": "₹645",
//                         "offer_discount": "",
//                         "message": "Out of Stock",
//                         "gross_weight": ""
//                     },
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/21f139cd-c4bb-93a2-19e6-0b93407c35e0/original/1624645711.jpg",
//                         "cta_text": "The Safest Prawns, for You",
//                         "product_name": "Tiger Prawns/ Jhinga (Extra Large) - Cleaned & Deviened, With Tail",
//                         "item_desc": "Large and flavoursome prawns, peeled & deveined",
//                         "net_weight": "250gms",
//                         "rupee": "₹479",
//                         "offer_discount": "25% OFF",
//                         "message": "Out of Stock",
//                         "gross_weight": ""
//                     },
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/6b50ecdd-432c-6fe2-67c3-8f1578779b99/original/Freshwater-Prawns-medium2.jpeg",
//                         "cta_text": "DeLicious easy recipes for meaty meals!",
//                         "product_name": "Freshwater/ White Prawns/ Jhinga (Medium) - Cleaned & Deveined (Large Pack)",
//                         "item_desc": "Freshwater prawns. De-shelled, cleaned, deveined, butterflied prawns, with head and tail removed.",
//                         "net_weight": "500gms",
//                         "rupee": "₹644",
//                         "offer_discount": "25% OFF",
//                         "message": "Out of Stock",
//                         "gross_weight": ""
//                     },
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/be8d4f69-abc4-8f48-44c9-f9dadb531831/original/Crispy-Prawns-_-Tagjpg.jpg",
//                         "cta_text": "How To Cook",
//                         "product_name": "Crispy Prawns | Ready to Cook",
//                         "item_desc": "Crumb-coated prawns, ready to be deep fried",
//                         "net_weight": "Pieces: 10-12",
//                         "rupee": "₹279",
//                         "offer_discount": "20% OFF",
//                         "message": "Out of Stock",
//                         "gross_weight": "Net wt: 200gms"
//                     },
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/331c6046-434a-23d5-d4bc-f08172b55e01/original/christmas_old_7_sku_-05.jpg",
//                         "cta_text": "How To Cook",
//                         "product_name": "Goan Prawn Curry - (Medium Prawns) | Ready In 6 Mins",
//                         "item_desc": "Freshwater Prawns in a flavourful coconut based gravy.",
//                         "net_weight": "Pieces: 15-20",
//                         "rupee": "₹319",
//                         "offer_discount": "20% OFF",
//                         "message": "Out of Stock",
//                         "gross_weight": "Net wt: 350gms"
//                     },
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_123kq19agfk/18/prod_display_image/1632811974.4061--2021-09-2812:22:54--1818",
//                         "cta_text": "DeLicious easy recipes for meaty meals!",
//                         "product_name": "Flower Shrimp/ Jhinga (Medium) - Cleaned & Deveined",
//                         "item_desc": "Juicy & delicious, perfect for pakoras and pan-fried dishes",
//                         "net_weight": "250gms",
//                         "rupee": "₹369",
//                         "offer_discount": "",
//                         "message": "Out of Stock",
//                         "gross_weight": ""
//                     },
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_drokbgazp3h/18/prod_display_image/1634637079.3158--2021-10-1915:21:19--1818",
//                         "cta_text": "How to Use Chunky Prawn Spreads",
//                         "product_name": "Chunky Butter Garlic Prawn Spread (single serve)",
//                         "item_desc": "A delightful blend of freshly cooked juicy prawn chunks in a flavourful Butter Garlic base.",
//                         "net_weight": "Pieces: 1",
//                         "rupee": "₹49",
//                         "offer_discount": "",
//                         "message": "Out of Stock",
//                         "gross_weight": ""
//                     },
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_drokbgb0iv8/18/prod_display_image/1631604644.7089--2021-09-1413:00:44--1818",
//                         "cta_text": "How to Use Chunky Prawn Spreads",
//                         "product_name": "Chunky Sriracha Prawn Spread (single serve)",
//                         "item_desc": "A blend of freshly cooked juicy prawn chunks in a spicy Sriracha base.",
//                         "net_weight": "Pieces: 1",
//                         "rupee": "₹49",
//                         "offer_discount": "",
//                         "message": "Out of Stock",
//                         "gross_weight": ""
//                     },
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_jt8kbgb1utl/18/prod_display_image/1634637379.3959--2021-10-1915:26:19--1818",
//                         "cta_text": "How to Use Chunky Prawn Spreads",
//                         "product_name": "Chunky Butter Garlic Prawn Spread",
//                         "item_desc": "A delightful blend of freshly cooked juicy prawn chunks in a flavourful Butter Garlic base.",
//                         "net_weight": "Pieces: 1",
//                         "rupee": "₹249",
//                         "offer_discount": "",
//                         "message": "Out of Stock",
//                         "gross_weight": ""
//                     },
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_drokbgb2jhb/18/prod_display_image/1634375186.6782--2021-10-1614:36:26--905",
//                         "cta_text": "How to Use Chunky Prawn Spreads",
//                         "product_name": "Chunky Sriracha Prawn Spread",
//                         "item_desc": "A blend of freshly cooked juicy prawn chunks in a spicy Sriracha base.",
//                         "net_weight": "Pieces: 1",
//                         "rupee": "₹249",
//                         "offer_discount": "",
//                         "message": "Out of Stock",
//                         "gross_weight": ""
//                     },
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/ProductMerchantdising/9723401c-b12d-0ad9-d2c7-dec7f1f628b2/original/1586376460.2379--2020-04-0901_37_40--472.jpeg",
//                         "cta_text": "DeLicious easy recipes for meaty meals!",
//                         "product_name": "Freshwater Prawns 60Count/Kg (Jhinga)- Cleaned & Deveined, No Tail",
//                         "item_desc": "Freshwater Vannamei prawns. De-shelled, cleaned, deveined, butterflied prawns, with head and tail removed.",
//                         "net_weight": "250gms",
//                         "rupee": "₹399",
//                         "offer_discount": "",
//                         "message": "Out of Stock",
//                         "gross_weight": ""
//                     }
//                 ]
//             },
//             {
//                 "img_container_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/f4053965-f199-80a0-2551-d85d712574e2/original/Prawn_(2).png",
//                 "tablescraper-selected-row": "Prawns",
//                 "Category_type": "Prawns",
//                 "Category_List": "Small_Size",
//                 "Food_list": []
//             },
//             {
//                 "img_container_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/f4053965-f199-80a0-2551-d85d712574e2/original/Prawn_(2).png",
//                 "tablescraper-selected-row": "Prawns",
//                 "Category_type": "Prawns",
//                 "Category_List": "Medium Size",
//                 "Food_list": [
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/797ea63c-7d48-cc91-7359-95db47064685/original/WhatsApp_Image_2022-04-13_at_2.16.31_PM.jpeg",
//                         "product_name": "Freshwater/ White Prawns/ Jhinga (Medium) - Cleaned & Deveined",
//                         "item_desc": "Freshwater prawns. De-shelled, cleaned, deveined, butterflied prawns, with head and tail removed.",
//                         "net_weight": "250gms",
//                         "rupee": "₹386",
//                         "offer_discount": "10% OFF",
//                         "add_to_cart": "Add To Cart",
//                         "scooter_src": "https://www.licious.in/img/rebranding/express_delivery.svg",
//                         "message": "Tomorrow",
//                         "message_2": "6 AM - 9 AM"
//                     },
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/6b50ecdd-432c-6fe2-67c3-8f1578779b99/original/Freshwater-Prawns-medium2.jpeg",
//                         "product_name": "Freshwater/ White Prawns/ Jhinga (Medium) - Cleaned & Deveined (Large Pack)",
//                         "item_desc": "Freshwater prawns. De-shelled, cleaned, deveined, butterflied prawns, with head and tail removed.",
//                         "net_weight": "500gms",
//                         "rupee": "₹644",
//                         "offer_discount": "25% OFF",
//                         "add_to_cart": "",
//                         "scooter_src": "",
//                         "message": "Out of Stock",
//                         "message_2": ""
//                     },
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_123kq19agfk/18/prod_display_image/1632811974.4061--2021-09-2812:22:54--1818",
//                         "product_name": "Flower Shrimp/ Jhinga (Medium) - Cleaned & Deveined",
//                         "item_desc": "Juicy & delicious, perfect for pakoras and pan-fried dishes",
//                         "net_weight": "250gms",
//                         "rupee": "₹369",
//                         "offer_discount": "",
//                         "add_to_cart": "",
//                         "scooter_src": "",
//                         "message": "Out of Stock",
//                         "message_2": ""
//                     },
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/ProductMerchantdising/9723401c-b12d-0ad9-d2c7-dec7f1f628b2/original/1586376460.2379--2020-04-0901_37_40--472.jpeg",
//                         "product_name": "Freshwater Prawns 60Count/Kg (Jhinga)- Cleaned & Deveined, No Tail",
//                         "item_desc": "Freshwater Vannamei prawns. De-shelled, cleaned, deveined, butterflied prawns, with head and tail removed.",
//                         "net_weight": "250gms",
//                         "rupee": "₹399",
//                         "offer_discount": "",
//                         "add_to_cart": "",
//                         "scooter_src": "",
//                         "message": "Out of Stock",
//                         "message_2": ""
//                     }
//                 ]
//             },
//             {
//                 "img_container_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/f4053965-f199-80a0-2551-d85d712574e2/original/Prawn_(2).png",
//                 "tablescraper-selected-row": "Prawns",
//                 "Category_type": "Prawns",
//                 "Category_List": "Large Size",
//                 "Food_list": [
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/528a33e0-78d6-8b4a-bd7c-042a034eeaba/original/1626790290_(1).jpg",
//                         "cta_text": "Licious Health & Safety Protocols - Prawn",
//                         "product_name": "Tiger Prawns/ Jhinga (Large) - Cleaned & Deveined, With Tail",
//                         "item_desc": "Flavourful Tiger Prawns, cleaned and ready for the pan",
//                         "net_weight": "250gms",
//                         "rupee": "₹457",
//                         "rupee 2": "MRP:",
//                         "offer_discount": "25% OFF",
//                         "item_qty": 0,
//                         "message": "Out of Stock",
//                         "cat-ll-banner-licious-nm-logo src": "",
//                         "cat-ll-nm-banner-top": "",
//                         "cat-ll-nm-banner-bottom": ""
//                     },
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/ProductMerchantdising/6feeb228-6eaf-49c0-9077-e2d69cafe564/original/1600275865.615--2020-09-1622_34_25--738.jpeg",
//                         "cta_text": "DeLicious easy recipes for meaty meals!",
//                         "product_name": "Freshwater/ White Prawns/ Jhinga (Large) - Cleaned & Deveined",
//                         "item_desc": "Large butterflied prawns with head and tail removed - deshelled, cleaned, deveined.",
//                         "net_weight": "250gms",
//                         "rupee": "₹645",
//                         "rupee 2": "MRP:",
//                         "offer_discount": "",
//                         "item_qty": 0,
//                         "message": "Out of Stock",
//                         "cat-ll-banner-licious-nm-logo src": "",
//                         "cat-ll-nm-banner-top": "",
//                         "cat-ll-nm-banner-bottom": ""
//                     },
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/21f139cd-c4bb-93a2-19e6-0b93407c35e0/original/1624645711.jpg",
//                         "cta_text": "The Safest Prawns, for You",
//                         "product_name": "Tiger Prawns/ Jhinga (Extra Large) - Cleaned & Deviened, With Tail",
//                         "item_desc": "Large and flavoursome prawns, peeled & deveined",
//                         "net_weight": "250gms",
//                         "rupee": "₹479",
//                         "rupee 2": "MRP:",
//                         "offer_discount": "25% OFF",
//                         "item_qty": 0,
//                         "message": "Out of Stock",
//                         "cat-ll-banner-licious-nm-logo src": "",
//                         "cat-ll-nm-banner-top": "",
//                         "cat-ll-nm-banner-bottom": ""
//                     },
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "",
//                         "cta_text": "",
//                         "product_name": "",
//                         "item_desc": "",
//                         "net_weight": "",
//                         "rupee": "",
//                         "rupee 2": "",
//                         "offer_discount": "",
//                         "item_qty": "",
//                         "message": "",
//                         "cat-ll-banner-licious-nm-logo src": "https://www.licious.in/img/rebranding/loyalty_licious_logo.svg",
//                         "cat-ll-nm-banner-top": "JOIN NOW",
//                         "cat-ll-nm-banner-bottom": "Join MEATOPIA to get free delivery on all orders with cart value more than Rs.99."
//                     }
//                 ]
//             },
//             {
//                 "img_container_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/f4053965-f199-80a0-2551-d85d712574e2/original/Prawn_(2).png",
//                 "tablescraper-selected-row": "Prawns",
//                 "Category_type": "Prawns",
//                 "Category_List": "Combos",
//                 "Food_list": []
//             },
//             {
//                 "img_container_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/f4053965-f199-80a0-2551-d85d712574e2/original/Prawn_(2).png",
//                 "tablescraper-selected-row": "Prawns",
//                 "Category_type": "Prawns",
//                 "Category_List": "Ready to Cook",
//                 "Food_list": [
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/cf5c9510-8334-0118-ce40-95aee37dd65a/original/Prawns-Zaffrani-tag.jpg",
//                         "cta_text": "How To Cook",
//                         "product_name": "Prawns Zaffrani | Ready in 8 Minutes",
//                         "item_desc": "Medium sized prawns in a creamy, saffron marinade.",
//                         "net_weight": "Pieces: 12-16",
//                         "gross_weight": "Net wt: 200gms",
//                         "rupee": "₹349",
//                         "offer_discount": ""
//                     },
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/be8d4f69-abc4-8f48-44c9-f9dadb531831/original/Crispy-Prawns-_-Tagjpg.jpg",
//                         "cta_text": "How To Cook",
//                         "product_name": "Crispy Prawns | Ready to Cook",
//                         "item_desc": "Crumb-coated prawns, ready to be deep fried",
//                         "net_weight": "Pieces: 10-12",
//                         "gross_weight": "Net wt: 200gms",
//                         "rupee": "₹279",
//                         "offer_discount": "20% OFF"
//                     },
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/331c6046-434a-23d5-d4bc-f08172b55e01/original/christmas_old_7_sku_-05.jpg",
//                         "cta_text": "How To Cook",
//                         "product_name": "Goan Prawn Curry - (Medium Prawns) | Ready In 6 Mins",
//                         "item_desc": "Freshwater Prawns in a flavourful coconut based gravy.",
//                         "net_weight": "Pieces: 15-20",
//                         "gross_weight": "Net wt: 350gms",
//                         "rupee": "₹319",
//                         "offer_discount": "20% OFF"
//                     },
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_drokbgazp3h/18/prod_display_image/1634637079.3158--2021-10-1915:21:19--1818",
//                         "cta_text": "How to Use Chunky Prawn Spreads",
//                         "product_name": "Chunky Butter Garlic Prawn Spread (single serve)",
//                         "item_desc": "A delightful blend of freshly cooked juicy prawn chunks in a flavourful Butter Garlic base.",
//                         "net_weight": "Pieces: 1",
//                         "gross_weight": "",
//                         "rupee": "₹49",
//                         "offer_discount": ""
//                     },
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_drokbgb0iv8/18/prod_display_image/1631604644.7089--2021-09-1413:00:44--1818",
//                         "cta_text": "How to Use Chunky Prawn Spreads",
//                         "product_name": "Chunky Sriracha Prawn Spread (single serve)",
//                         "item_desc": "A blend of freshly cooked juicy prawn chunks in a spicy Sriracha base.",
//                         "net_weight": "Pieces: 1",
//                         "gross_weight": "",
//                         "rupee": "₹49",
//                         "offer_discount": ""
//                     },
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_jt8kbgb1utl/18/prod_display_image/1634637379.3959--2021-10-1915:26:19--1818",
//                         "cta_text": "How to Use Chunky Prawn Spreads",
//                         "product_name": "Chunky Butter Garlic Prawn Spread",
//                         "item_desc": "A delightful blend of freshly cooked juicy prawn chunks in a flavourful Butter Garlic base.",
//                         "net_weight": "Pieces: 1",
//                         "gross_weight": "",
//                         "rupee": "₹249",
//                         "offer_discount": ""
//                     },
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_drokbgb2jhb/18/prod_display_image/1634375186.6782--2021-10-1614:36:26--905",
//                         "cta_text": "How to Use Chunky Prawn Spreads",
//                         "product_name": "Chunky Sriracha Prawn Spread",
//                         "item_desc": "A blend of freshly cooked juicy prawn chunks in a spicy Sriracha base.",
//                         "net_weight": "Pieces: 1",
//                         "gross_weight": "",
//                         "rupee": "₹249",
//                         "offer_discount": ""
//                     }
//                 ]
//             }
//         ])
//        res.send("Updated")

//     } catch (error) {
//         console.log(error)
//         res.send('Not Update')
//     }

// })



module.exports = { Prawns_Collection_Routes }