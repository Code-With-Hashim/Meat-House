const express = require('express')
var uniqid = require('uniqid');

const Mutton_Collection_Routes = express.Router()

const { Mutton_Collection_modal } = require("../../../modals/Mutton_Collection.modal")

Mutton_Collection_Routes.get("/", async (req, res) => {
    try {

        const { category_id } = req.query

        const { sort_by_price } = req.query

        if (category_id || sort_by_price) {

            if (category_id && sort_by_price) {

                let data;
                if (sort_by_price === 'asc') {
                    const Mutton_collection_data = await Mutton_Collection_modal.findOne({ _id: category_id }, { Food_list: 1 })

                    data = Mutton_collection_data.Food_list.sort((a, b) => a.rupee.split("₹")[1] - b.rupee.split("₹")[1])


                } else {
                    const Mutton_collection_data = await Mutton_Collection_modal.findOne({ _id: category_id }, { Food_list: 1 })

                    data = Mutton_collection_data.Food_list.sort((a, b) => b.rupee.split("₹")[1] - a.rupee.split("₹")[1])
                }
                res.send(data)


            } else {
                const Mutton_collection_data = await Mutton_Collection_modal.findOne({ _id: category_id }, { Food_list: 1 })

                // let data = Mutton_collection_data.Food_list.sort((a, b) => a.rupee.split("₹")[1] - b.rupee.split("₹")[1])

                res.send(Mutton_collection_data)
            }

        } else {
            const Mutton_collection_data = await Mutton_Collection_modal.find()

            res.send(Mutton_collection_data)
        }

    } catch (error) {
        console.log(error)
        res.status(404).send('Something went wrong')
    }
})

Mutton_Collection_Routes.get("/:id", async (req, res) => {

    const { id } = req.params

    try {

        const Mutton_collection_data = await Mutton_Collection_modal.find()

        let collection_data;

        Mutton_collection_data.filter((i) => {


            if (i.Food_list) {
                i.Food_list.filter((item) => {

                    if (item.
                        product_id == id) {
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

// Mutton_Collection_Routes.get("/:id", async (req, res) => {

//     const { id } = req.params

//     try {

//         await Mutton_Collection_modal.insertMany([
//             {
//                 "img_container_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/34466dbd-a515-edd1-3e99-05000f217cb6/original/Chicken_(2).png",
//                 "tablescraper-selected-row": "Mutton",
//                 "Category_type": "Mutton",
//                 "Category_List": "All Mutton",
//                 "Food_list": [
//                     {
//                         "product_id": uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/3f1f5dca-3534-7a67-9141-5243bfa404d7/original/Goat-Mince_Keema--Hero-Shot.jpg",
//                         "cta_text": "The Safest Mutton in Town",
//                         "product_name": "Goat - Mince (Keema)",
//                         "item_desc": "Ground goat meat, ideal for kebabs, cutlets & more",
//                         "net_weight": "450gms",
//                         "rupee": "₹729",
//                         "price": "₹755",
//                         "offer_discount": "3% OFF",
//                         "add_to_cart": "Add To Cart",
//                         "message": "Tomorrow",
//                         "message_2": "6 AM - 9 AM",
//                         "rupee_3": ""
//                     },
//                     {
//                         "product_id": uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/1aaade46-ba00-4473-6d38-c5a5702b3a57/original/mutton_cuts-01.jpg",
//                         "cta_text": "The Safest Mutton in Town",
//                         "product_name": "Goat Curry Cut Raan Chaamp Puth",
//                         "item_desc": "Chunky pieces of tender, precisely-trimmed lean meat from the ribs and hind leg.",
//                         "net_weight": "500gms",
//                         "rupee": "₹729",
//                         "price": "",
//                         "offer_discount": "",
//                         "add_to_cart": "Add To Cart",
//                         "message": "Tomorrow",
//                         "message_2": "6 AM - 9 AM",
//                         "rupee_3": "₹729"
//                     },
//                     {
//                         "product_id": uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/1e6494c4-87e7-ec8a-e8d4-f65a871db14d/original/WhatsApp_Image_2022-06-08_at_3.29.42_PM.jpeg",
//                         "cta_text": "Licious Health & Safety Protocols - Mutton",
//                         "product_name": "Goat Shoulder Curry Cut",
//                         "item_desc": "Evenly cut, juicy, bone-in and boneless pieces of goat meat from the shoulders of goat.",
//                         "net_weight": "500gms",
//                         "rupee": "₹649",
//                         "price": "₹709",
//                         "offer_discount": "8% OFF",
//                         "add_to_cart": "Add To Cart",
//                         "message": "Tomorrow",
//                         "message_2": "6 AM - 9 AM",
//                         "rupee_3": ""
//                     },
//                     {
//                         "product_id": uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/f5269e9e-940c-0076-780f-45f7e6145798/original/mutton_cuts-09.jpg",
//                         "cta_text": "The Safest Mutton in Town",
//                         "product_name": "Lean Lamb Curry Cut (Large - 11 to 15 pieces)",
//                         "item_desc": "Supple mix of bone-in & boneless lamb meat from the neck, shoulder, leg, loin and ribs cut into large pieces.",
//                         "net_weight": "500gms",
//                         "rupee": "₹699",
//                         "price": "₹769",
//                         "offer_discount": "9% OFF",
//                         "add_to_cart": "Add To Cart",
//                         "message": "Tomorrow",
//                         "message_2": "6 AM - 9 AM",
//                         "rupee_3": ""
//                     },
//                     {
//                         "product_id": uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/bc90916a-cb3d-a641-c3b3-3a37625fe855/original/Goat-Boneless-Hero-Shot.jpg",
//                         "cta_text": "The Safest Mutton in Town",
//                         "product_name": "Goat Boneless",
//                         "item_desc": "Chunky, even pieces of fat-trimmed, boneless goat meat from the hind legs.",
//                         "net_weight": "450gms",
//                         "rupee": "₹815",
//                         "price": "",
//                         "offer_discount": "",
//                         "add_to_cart": "",
//                         "message": "Out of Stock",
//                         "message_2": "",
//                         "rupee_3": "₹815"
//                     },
//                     {
//                         "product_id": uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/c21778b3-b0fb-d3bc-ce39-a4d0fd33c97d/original/Lamb-Mince-Hero-Shot.jpg",
//                         "cta_text": "The Safest Mutton in Town",
//                         "product_name": "Lamb Mince (Keema)",
//                         "item_desc": "Boneless, minced lamb for a variety of dishes",
//                         "net_weight": "450gms",
//                         "rupee": "₹655",
//                         "price": "",
//                         "offer_discount": "",
//                         "add_to_cart": "",
//                         "message": "Out of Stock",
//                         "message_2": "",
//                         "rupee_3": "₹655"
//                     },
//                     {
//                         "product_id": uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/ed7381f5-8029-084e-263b-eb9c6369247c/original/mutton_cuts-11.jpg",
//                         "cta_text": "The Safest Mutton in Town",
//                         "product_name": "Goat Curry Cut Shoulder Chaamp Puth",
//                         "item_desc": "Chunky pieces of tender and rich goat meat from the ribs and shoulder.",
//                         "net_weight": "500gms",
//                         "rupee": "₹689",
//                         "price": "",
//                         "offer_discount": "",
//                         "add_to_cart": "",
//                         "message": "Out of Stock",
//                         "message_2": "",
//                         "rupee_3": "₹689"
//                     },
//                     {
//                         "product_id": uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/d27151b4-b106-381b-8645-039528496d8d/original/Mutton-Liver-Chunks-hero.jpg",
//                         "cta_text": "Licious Health & Safety Protocols - Mutton",
//                         "product_name": "Mutton Liver - Chunks",
//                         "item_desc": "Cleaned, trimmed & tender cook up delicious meals with fresh cuts of mutton liver!",
//                         "net_weight": "250gms",
//                         "rupee": "₹260",
//                         "price": "₹289",
//                         "offer_discount": "10% OFF",
//                         "add_to_cart": "",
//                         "message": "Out of Stock",
//                         "message_2": "",
//                         "rupee_3": ""
//                     },
//                     {
//                         "product_id": uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/7019c400-3816-e42a-db43-f5c030fb0e7a/original/Purani-Dilli-ki-Mutton-Seekh-Kebab-_(2).jpg",
//                         "cta_text": "How to cook",
//                         "product_name": "Purani Dilli ki Mutton Seekh Kebab | Ready in 8 Minutes",
//                         "item_desc": "The classic mutton seekh kebab, that will transport you to the streets of Purani Dilli.",
//                         "net_weight": "Pieces: 4",
//                         "rupee": "₹375",
//                         "price": "",
//                         "offer_discount": "",
//                         "add_to_cart": "",
//                         "message": "Out of Stock",
//                         "message_2": "",
//                         "rupee_3": "₹375"
//                     },
//                     {
//                         "product_id": uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/715d4156-cae5-f3c5-ef78-a6e5c129ed5c/original/Lucknowi-Mutton-Galouti-Kebab-Hero-Shot-Uncooked_(1).jpg",
//                         "cta_text": "How To Cook",
//                         "product_name": "Lucknowi Mutton Galouti Kebab | Ready in 8 Minutes",
//                         "item_desc": "Fresh Nakhre, fresh meats & fresh ingredients",
//                         "net_weight": "Pieces: 6",
//                         "rupee": "₹399",
//                         "price": "",
//                         "offer_discount": "",
//                         "add_to_cart": "",
//                         "message": "Out of Stock",
//                         "message_2": "",
//                         "rupee_3": "₹399"
//                     },
//                     {
//                         "product_id": uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/a44670fd-cdb5-30d3-9326-ccd6ab1c5471/original/WhatsApp_Image_2022-06-08_at_4.19.42_PM.jpeg",
//                         "cta_text": "The Safest Mutton in Town",
//                         "product_name": "Lamb Boneless",
//                         "item_desc": "Tender, boneless, evenly-cut chunks of velvety, lean lamb meat taken from the hind leg.",
//                         "net_weight": "450gms",
//                         "rupee": "₹915",
//                         "price": "",
//                         "offer_discount": "",
//                         "add_to_cart": "",
//                         "message": "Out of Stock",
//                         "message_2": "",
//                         "rupee_3": "₹915"
//                     },
//                     {
//                         "product_id": uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/3550630d-5620-4375-46ed-f072105ead7d/original/WhatsApp_Image_2022-06-08_at_4.55.00_PM.jpeg",
//                         "cta_text": "The Safest Mutton in Town",
//                         "product_name": "Lamb Shoulder Curry Cut - Medium Pieces",
//                         "item_desc": "Evenly cut, juicy, bone-in and boneless pieces of lamb meat from the shoulders of spring lambs",
//                         "net_weight": "500gms",
//                         "rupee": "₹815",
//                         "price": "",
//                         "offer_discount": "",
//                         "add_to_cart": "",
//                         "message": "Out of Stock",
//                         "message_2": "",
//                         "rupee_3": "₹815"
//                     },
//                     {
//                         "product_id": uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/09d9b40a-b156-9135-ed4f-ab755ca681fb/original/mutton_cuts-03.jpg",
//                         "cta_text": "The Safest Mutton in Town",
//                         "product_name": "Goat Shoulder Biryani Cut",
//                         "item_desc": "A mix of bone-in and boneless pieces of goat shoulder, specially crafted for biryanis.",
//                         "net_weight": "500gms",
//                         "rupee": "₹719",
//                         "price": "",
//                         "offer_discount": "",
//                         "add_to_cart": "",
//                         "message": "Out of Stock",
//                         "message_2": "",
//                         "rupee_3": "₹719"
//                     },
//                     {
//                         "product_id": uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/e0d1adbd-3b97-2ee3-309d-a58dcbe771cf/original/Hyderabadi-Mutton-Shami-Kebab-_-Ready-in-8-Minutes_(1).jpg",
//                         "cta_text": "How To Cook",
//                         "product_name": "Hyderabadi Mutton Shami Kebab | Ready in 8 Minutes",
//                         "item_desc": "Hyderabad's favourite kebab, so delicious it's fit for royalty.",
//                         "net_weight": "Pieces: 6",
//                         "rupee": "₹349",
//                         "price": "",
//                         "offer_discount": "",
//                         "add_to_cart": "",
//                         "message": "Out of Stock",
//                         "message_2": "",
//                         "rupee_3": "₹349"
//                     },
//                     {
//                         "product_id": uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/8b51398b-b07f-1a84-cce2-0c3ec19b153e/original/Goat---Mince.jpg",
//                         "cta_text": "The Safest Mutton in Town",
//                         "product_name": "Goat Mince - Combo",
//                         "item_desc": "2 packs of clean, finely ground Goat Keema/Mince.",
//                         "net_weight": "",
//                         "rupee": "₹1284",
//                         "price": "₹1510",
//                         "offer_discount": "15% OFF",
//                         "add_to_cart": "",
//                         "message": "Out of Stock",
//                         "message_2": "",
//                         "rupee_3": ""
//                     },
//                     {
//                         "product_id": uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/262b267f-dfb7-b8af-6da3-bd849b08d6d7/original/Goat-Ribs-and-Chops--Hero-Shot.jpg",
//                         "cta_text": "Licious Health & Safety Protocols - Mutton",
//                         "product_name": "Goat Ribs & Chops",
//                         "item_desc": "Perfectly cut, mix of 8-9 tender goat ribs and juicy chops to cook a quick weekday dinner or fire up the grill for a scrumptious weekend menu.",
//                         "net_weight": "500gms",
//                         "rupee": "₹635",
//                         "price": "",
//                         "offer_discount": "",
//                         "add_to_cart": "",
//                         "message": "Out of Stock",
//                         "message_2": "",
//                         "rupee_3": "₹635"
//                     },
//                     {
//                         "product_id": uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/c1c2eca5-534a-57f6-00fa-00aafc637243/original/Mutton-Soup-Bones--Hero-Shot.jpg",
//                         "cta_text": "Licious Health & Safety Protocols - Mutton",
//                         "product_name": "Mutton Soup Bones",
//                         "item_desc": "Cleaned, blood-free, chunky pieces of lamb & goat bone taken from the shoulders, ribs & legs",
//                         "net_weight": "500gms",
//                         "rupee": "₹399",
//                         "price": "",
//                         "offer_discount": "",
//                         "add_to_cart": "",
//                         "message": "Out of Stock",
//                         "message_2": "",
//                         "rupee_3": "₹399"
//                     },
//                     {
//                         "product_id": uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/b8ba9d1c-2d51-11c1-b64d-6d9ff4cf9353/original/Lamb---Mince.jpg",
//                         "cta_text": "The Safest Mutton in Town",
//                         "product_name": "Lamb Mince - Combo",
//                         "item_desc": "2 packs of clean, finely ground Lamb Keema/Mince.",
//                         "net_weight": "",
//                         "rupee": "₹1245",
//                         "price": "₹1310",
//                         "offer_discount": "5% OFF",
//                         "add_to_cart": "",
//                         "message": "Out of Stock",
//                         "message_2": "",
//                         "rupee_3": ""
//                     },
//                     {
//                         "product_id": uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/b0c9d487-f007-28e2-94a5-44498a258110/original/250gms.jpg",
//                         "cta_text": "How To Cook",
//                         "product_name": "Awadhi Mutton Biryani (Mini) | Meat & Masala Mix",
//                         "item_desc": "Aromatic, spicy, rich and meaty",
//                         "net_weight": "Pieces: 1 Unit",
//                         "rupee": "₹349",
//                         "price": "",
//                         "offer_discount": "",
//                         "add_to_cart": "",
//                         "message": "Out of Stock",
//                         "message_2": "",
//                         "rupee_3": "₹349"
//                     },
//                     {
//                         "product_id": uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/3245abd9-1ee3-f536-4006-d11d2e3b2261/original/Mini.jpg",
//                         "cta_text": "How To Cook",
//                         "product_name": "Hyderabadi Mutton Biryani (Mini) | Meat & Masala Mix",
//                         "item_desc": "Aromatic, spicy, rich and meaty",
//                         "net_weight": "Pieces: 1 Unit",
//                         "rupee": "₹329",
//                         "price": "",
//                         "offer_discount": "",
//                         "add_to_cart": "",
//                         "message": "Out of Stock",
//                         "message_2": "",
//                         "rupee_3": "₹329"
//                     }
//                 ]
//             },
//             {
//                 "img_container_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/34466dbd-a515-edd1-3e99-05000f217cb6/original/Chicken_(2).png",
//                 "tablescraper-selected-row": "Mutton",
//                 "Category_type": "Curry Cuts",
//                 "Category_List": "Curry Cuts Mutton",
//                 "Food_list": [
//                     {
//                         "product_id": uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/1aaade46-ba00-4473-6d38-c5a5702b3a57/original/mutton_cuts-01.jpg",
//                         "cta_text": "The Safest Mutton in Town",
//                         "product_name": "Goat Curry Cut Raan Chaamp Puth",
//                         "item_desc": "Chunky pieces of tender, precisely-trimmed lean meat from the ribs and hind leg.",
//                         "rupee": "₹729",
//                         "rupee_3": "₹729",
//                         "add_to_cart": "Add To Cart",
//                         "message": "Tomorrow",
//                         "message_2": "6 AM - 9 AM",
//                         "price": "",
//                         "offer_discount": ""
//                     },
//                     {
//                         "product_id": uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/1e6494c4-87e7-ec8a-e8d4-f65a871db14d/original/WhatsApp_Image_2022-06-08_at_3.29.42_PM.jpeg",
//                         "cta_text": "Licious Health & Safety Protocols - Mutton",
//                         "product_name": "Goat Shoulder Curry Cut",
//                         "item_desc": "Evenly cut, juicy, bone-in and boneless pieces of goat meat from the shoulders of goat.",
//                         "rupee": "₹649",
//                         "rupee_3": "",
//                         "add_to_cart": "Add To Cart",
//                         "message": "Tomorrow",
//                         "message_2": "6 AM - 9 AM",
//                         "price": "₹709",
//                         "offer_discount": "8% OFF"
//                     },
//                     {
//                         "product_id": uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/f5269e9e-940c-0076-780f-45f7e6145798/original/mutton_cuts-09.jpg",
//                         "cta_text": "The Safest Mutton in Town",
//                         "product_name": "Lean Lamb Curry Cut (Large - 11 to 15 pieces)",
//                         "item_desc": "Supple mix of bone-in & boneless lamb meat from the neck, shoulder, leg, loin and ribs cut into large pieces.",
//                         "rupee": "₹699",
//                         "rupee_3": "",
//                         "add_to_cart": "Add To Cart",
//                         "message": "Tomorrow",
//                         "message_2": "6 AM - 9 AM",
//                         "price": "₹769",
//                         "offer_discount": "9% OFF"
//                     },
//                     {
//                         "product_id": uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/ed7381f5-8029-084e-263b-eb9c6369247c/original/mutton_cuts-11.jpg",
//                         "cta_text": "The Safest Mutton in Town",
//                         "product_name": "Goat Curry Cut Shoulder Chaamp Puth",
//                         "item_desc": "Chunky pieces of tender and rich goat meat from the ribs and shoulder.",
//                         "rupee": "₹689",
//                         "rupee_3": "₹689",
//                         "add_to_cart": "",
//                         "message": "Out of Stock",
//                         "message_2": "",
//                         "price": "",
//                         "offer_discount": ""
//                     },
//                     {
//                         "product_id": uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/3550630d-5620-4375-46ed-f072105ead7d/original/WhatsApp_Image_2022-06-08_at_4.55.00_PM.jpeg",
//                         "cta_text": "The Safest Mutton in Town",
//                         "product_name": "Lamb Shoulder Curry Cut - Medium Pieces",
//                         "item_desc": "Evenly cut, juicy, bone-in and boneless pieces of lamb meat from the shoulders of spring lambs",
//                         "rupee": "₹815",
//                         "rupee_3": "₹815",
//                         "add_to_cart": "",
//                         "message": "Out of Stock",
//                         "message_2": "",
//                         "price": "",
//                         "offer_discount": ""
//                     }
//                 ]
//             },
//             {
//                 "img_container_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/34466dbd-a515-edd1-3e99-05000f217cb6/original/Chicken_(2).png",
//                 "tablescraper-selected-row": "Mutton",
//                 "Category_type": "Boneless Mince",
//                 "Category_List": "Boneless Mince Mutton",
//                 "Food_list": [
//                     {
//                         "product_id": uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/3f1f5dca-3534-7a67-9141-5243bfa404d7/original/Goat-Mince_Keema--Hero-Shot.jpg",
//                         "cta_text": "The Safest Mutton in Town",
//                         "product_name": "Goat - Mince (Keema)",
//                         "item_desc": "Ground goat meat, ideal for kebabs, cutlets & more",
//                         "net_weight": "450gms",
//                         "rupee": "₹729",
//                         "price": "₹755",
//                         "offer_discount": "3% OFF",
//                         "add_to_cart": "Add To Cart",
//                         "message": "Tomorrow",
//                         "message_2": "6 AM - 9 AM"
//                     },
//                     {
//                         "product_id": uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/1aaade46-ba00-4473-6d38-c5a5702b3a57/original/mutton_cuts-01.jpg",
//                         "cta_text": "The Safest Mutton in Town",
//                         "product_name": "Goat Curry Cut Raan Chaamp Puth",
//                         "item_desc": "Chunky pieces of tender, precisely-trimmed lean meat from the ribs and hind leg.",
//                         "net_weight": "500gms",
//                         "rupee": "₹729",
//                         "price": "",
//                         "offer_discount": "",
//                         "add_to_cart": "Add To Cart",
//                         "message": "Tomorrow",
//                         "message_2": "6 AM - 9 AM"
//                     },
//                     {
//                         "product_id": uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/1e6494c4-87e7-ec8a-e8d4-f65a871db14d/original/WhatsApp_Image_2022-06-08_at_3.29.42_PM.jpeg",
//                         "cta_text": "Licious Health & Safety Protocols - Mutton",
//                         "product_name": "Goat Shoulder Curry Cut",
//                         "item_desc": "Evenly cut, juicy, bone-in and boneless pieces of goat meat from the shoulders of goat.",
//                         "net_weight": "500gms",
//                         "rupee": "₹649",
//                         "price": "₹709",
//                         "offer_discount": "8% OFF",
//                         "add_to_cart": "Add To Cart",
//                         "message": "Tomorrow",
//                         "message_2": "6 AM - 9 AM"
//                     },
//                     {
//                         "product_id": uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/f5269e9e-940c-0076-780f-45f7e6145798/original/mutton_cuts-09.jpg",
//                         "cta_text": "The Safest Mutton in Town",
//                         "product_name": "Lean Lamb Curry Cut (Large - 11 to 15 pieces)",
//                         "item_desc": "Supple mix of bone-in & boneless lamb meat from the neck, shoulder, leg, loin and ribs cut into large pieces.",
//                         "net_weight": "500gms",
//                         "rupee": "₹699",
//                         "price": "₹769",
//                         "offer_discount": "9% OFF",
//                         "add_to_cart": "Add To Cart",
//                         "message": "Tomorrow",
//                         "message_2": "6 AM - 9 AM"
//                     },
//                     {
//                         "product_id": uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/bc90916a-cb3d-a641-c3b3-3a37625fe855/original/Goat-Boneless-Hero-Shot.jpg",
//                         "cta_text": "The Safest Mutton in Town",
//                         "product_name": "Goat Boneless",
//                         "item_desc": "Chunky, even pieces of fat-trimmed, boneless goat meat from the hind legs.",
//                         "net_weight": "450gms",
//                         "rupee": "₹815",
//                         "price": "",
//                         "offer_discount": "",
//                         "add_to_cart": "",
//                         "message": "Out of Stock",
//                         "message_2": ""
//                     },
//                     {
//                         "product_id": uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/c21778b3-b0fb-d3bc-ce39-a4d0fd33c97d/original/Lamb-Mince-Hero-Shot.jpg",
//                         "cta_text": "The Safest Mutton in Town",
//                         "product_name": "Lamb Mince (Keema)",
//                         "item_desc": "Boneless, minced lamb for a variety of dishes",
//                         "net_weight": "450gms",
//                         "rupee": "₹655",
//                         "price": "",
//                         "offer_discount": "",
//                         "add_to_cart": "",
//                         "message": "Out of Stock",
//                         "message_2": ""
//                     },
//                     {
//                         "product_id": uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/ed7381f5-8029-084e-263b-eb9c6369247c/original/mutton_cuts-11.jpg",
//                         "cta_text": "The Safest Mutton in Town",
//                         "product_name": "Goat Curry Cut Shoulder Chaamp Puth",
//                         "item_desc": "Chunky pieces of tender and rich goat meat from the ribs and shoulder.",
//                         "net_weight": "500gms",
//                         "rupee": "₹689",
//                         "price": "",
//                         "offer_discount": "",
//                         "add_to_cart": "",
//                         "message": "Out of Stock",
//                         "message_2": ""
//                     },
//                     {
//                         "product_id": uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/d27151b4-b106-381b-8645-039528496d8d/original/Mutton-Liver-Chunks-hero.jpg",
//                         "cta_text": "Licious Health & Safety Protocols - Mutton",
//                         "product_name": "Mutton Liver - Chunks",
//                         "item_desc": "Cleaned, trimmed & tender cook up delicious meals with fresh cuts of mutton liver!",
//                         "net_weight": "250gms",
//                         "rupee": "₹260",
//                         "price": "₹289",
//                         "offer_discount": "10% OFF",
//                         "add_to_cart": "",
//                         "message": "Out of Stock",
//                         "message_2": ""
//                     },
//                     {
//                         "product_id": uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/7019c400-3816-e42a-db43-f5c030fb0e7a/original/Purani-Dilli-ki-Mutton-Seekh-Kebab-_(2).jpg",
//                         "cta_text": "How to cook",
//                         "product_name": "Purani Dilli ki Mutton Seekh Kebab | Ready in 8 Minutes",
//                         "item_desc": "The classic mutton seekh kebab, that will transport you to the streets of Purani Dilli.",
//                         "net_weight": "Pieces: 4",
//                         "rupee": "₹375",
//                         "price": "",
//                         "offer_discount": "",
//                         "add_to_cart": "",
//                         "message": "Out of Stock",
//                         "message_2": ""
//                     },
//                     {
//                         "product_id": uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/715d4156-cae5-f3c5-ef78-a6e5c129ed5c/original/Lucknowi-Mutton-Galouti-Kebab-Hero-Shot-Uncooked_(1).jpg",
//                         "cta_text": "How To Cook",
//                         "product_name": "Lucknowi Mutton Galouti Kebab | Ready in 8 Minutes",
//                         "item_desc": "Fresh Nakhre, fresh meats & fresh ingredients",
//                         "net_weight": "Pieces: 6",
//                         "rupee": "₹399",
//                         "price": "",
//                         "offer_discount": "",
//                         "add_to_cart": "",
//                         "message": "Out of Stock",
//                         "message_2": ""
//                     },
//                     {
//                         "product_id": uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/a44670fd-cdb5-30d3-9326-ccd6ab1c5471/original/WhatsApp_Image_2022-06-08_at_4.19.42_PM.jpeg",
//                         "cta_text": "The Safest Mutton in Town",
//                         "product_name": "Lamb Boneless",
//                         "item_desc": "Tender, boneless, evenly-cut chunks of velvety, lean lamb meat taken from the hind leg.",
//                         "net_weight": "450gms",
//                         "rupee": "₹915",
//                         "price": "",
//                         "offer_discount": "",
//                         "add_to_cart": "",
//                         "message": "Out of Stock",
//                         "message_2": ""
//                     },
//                     {
//                         "product_id": uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/3550630d-5620-4375-46ed-f072105ead7d/original/WhatsApp_Image_2022-06-08_at_4.55.00_PM.jpeg",
//                         "cta_text": "The Safest Mutton in Town",
//                         "product_name": "Lamb Shoulder Curry Cut - Medium Pieces",
//                         "item_desc": "Evenly cut, juicy, bone-in and boneless pieces of lamb meat from the shoulders of spring lambs",
//                         "net_weight": "500gms",
//                         "rupee": "₹815",
//                         "price": "",
//                         "offer_discount": "",
//                         "add_to_cart": "",
//                         "message": "Out of Stock",
//                         "message_2": ""
//                     },
//                     {
//                         "product_id": uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/09d9b40a-b156-9135-ed4f-ab755ca681fb/original/mutton_cuts-03.jpg",
//                         "cta_text": "The Safest Mutton in Town",
//                         "product_name": "Goat Shoulder Biryani Cut",
//                         "item_desc": "A mix of bone-in and boneless pieces of goat shoulder, specially crafted for biryanis.",
//                         "net_weight": "500gms",
//                         "rupee": "₹719",
//                         "price": "",
//                         "offer_discount": "",
//                         "add_to_cart": "",
//                         "message": "Out of Stock",
//                         "message_2": ""
//                     },
//                     {
//                         "product_id": uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/e0d1adbd-3b97-2ee3-309d-a58dcbe771cf/original/Hyderabadi-Mutton-Shami-Kebab-_-Ready-in-8-Minutes_(1).jpg",
//                         "cta_text": "How To Cook",
//                         "product_name": "Hyderabadi Mutton Shami Kebab | Ready in 8 Minutes",
//                         "item_desc": "Hyderabad's favourite kebab, so delicious it's fit for royalty.",
//                         "net_weight": "Pieces: 6",
//                         "rupee": "₹349",
//                         "price": "",
//                         "offer_discount": "",
//                         "add_to_cart": "",
//                         "message": "Out of Stock",
//                         "message_2": ""
//                     },
//                     {
//                         "product_id": uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/8b51398b-b07f-1a84-cce2-0c3ec19b153e/original/Goat---Mince.jpg",
//                         "cta_text": "The Safest Mutton in Town",
//                         "product_name": "Goat Mince - Combo",
//                         "item_desc": "2 packs of clean, finely ground Goat Keema/Mince.",
//                         "net_weight": "",
//                         "rupee": "₹1284",
//                         "price": "₹1510",
//                         "offer_discount": "15% OFF",
//                         "add_to_cart": "",
//                         "message": "Out of Stock",
//                         "message_2": ""
//                     },
//                     {
//                         "product_id": uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/262b267f-dfb7-b8af-6da3-bd849b08d6d7/original/Goat-Ribs-and-Chops--Hero-Shot.jpg",
//                         "cta_text": "Licious Health & Safety Protocols - Mutton",
//                         "product_name": "Goat Ribs & Chops",
//                         "item_desc": "Perfectly cut, mix of 8-9 tender goat ribs and juicy chops to cook a quick weekday dinner or fire up the grill for a scrumptious weekend menu.",
//                         "net_weight": "500gms",
//                         "rupee": "₹635",
//                         "price": "",
//                         "offer_discount": "",
//                         "add_to_cart": "",
//                         "message": "Out of Stock",
//                         "message_2": ""
//                     },
//                     {
//                         "product_id": uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/c1c2eca5-534a-57f6-00fa-00aafc637243/original/Mutton-Soup-Bones--Hero-Shot.jpg",
//                         "cta_text": "Licious Health & Safety Protocols - Mutton",
//                         "product_name": "Mutton Soup Bones",
//                         "item_desc": "Cleaned, blood-free, chunky pieces of lamb & goat bone taken from the shoulders, ribs & legs",
//                         "net_weight": "500gms",
//                         "rupee": "₹399",
//                         "price": "",
//                         "offer_discount": "",
//                         "add_to_cart": "",
//                         "message": "Out of Stock",
//                         "message_2": ""
//                     },
//                     {
//                         "product_id": uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/b8ba9d1c-2d51-11c1-b64d-6d9ff4cf9353/original/Lamb---Mince.jpg",
//                         "cta_text": "The Safest Mutton in Town",
//                         "product_name": "Lamb Mince - Combo",
//                         "item_desc": "2 packs of clean, finely ground Lamb Keema/Mince.",
//                         "net_weight": "",
//                         "rupee": "₹1245",
//                         "price": "₹1310",
//                         "offer_discount": "5% OFF",
//                         "add_to_cart": "",
//                         "message": "Out of Stock",
//                         "message_2": ""
//                     },
//                     {
//                         "product_id": uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/b0c9d487-f007-28e2-94a5-44498a258110/original/250gms.jpg",
//                         "cta_text": "How To Cook",
//                         "product_name": "Awadhi Mutton Biryani (Mini) | Meat & Masala Mix",
//                         "item_desc": "Aromatic, spicy, rich and meaty",
//                         "net_weight": "Pieces: 1 Unit",
//                         "rupee": "₹349",
//                         "price": "",
//                         "offer_discount": "",
//                         "add_to_cart": "",
//                         "message": "Out of Stock",
//                         "message_2": ""
//                     },
//                     {
//                         "product_id": uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/3245abd9-1ee3-f536-4006-d11d2e3b2261/original/Mini.jpg",
//                         "cta_text": "How To Cook",
//                         "product_name": "Hyderabadi Mutton Biryani (Mini) | Meat & Masala Mix",
//                         "item_desc": "Aromatic, spicy, rich and meaty",
//                         "net_weight": "Pieces: 1 Unit",
//                         "rupee": "₹329",
//                         "price": "",
//                         "offer_discount": "",
//                         "add_to_cart": "",
//                         "message": "Out of Stock",
//                         "message_2": ""
//                     }
//                 ]
//             },
//             {
//                 "img_container_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/34466dbd-a515-edd1-3e99-05000f217cb6/original/Chicken_(2).png",
//                 "tablescraper-selected-row": "Mutton",
//                 "Category_type": "Specialty Cuts",
//                 "Category_List": "Specialty Cuts Mutton",
//                 "Food_list": [
//                     {
//                         "product_id": uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/1aaade46-ba00-4473-6d38-c5a5702b3a57/original/mutton_cuts-01.jpg",
//                         "cta_text": "The Safest Mutton in Town",
//                         "product_name": "Goat Curry Cut Raan Chaamp Puth",
//                         "item_desc": "Chunky pieces of tender, precisely-trimmed lean meat from the ribs and hind leg.",
//                         "rupee": "₹729",
//                         "add_to_cart": "Add To Cart",
//                         "message": "Tomorrow",
//                         "message_2": "6 AM - 9 AM"
//                     },
//                     {
//                         "product_id": uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/1e6494c4-87e7-ec8a-e8d4-f65a871db14d/original/WhatsApp_Image_2022-06-08_at_3.29.42_PM.jpeg",
//                         "cta_text": "Licious Health & Safety Protocols - Mutton",
//                         "product_name": "Goat Shoulder Curry Cut",
//                         "item_desc": "Evenly cut, juicy, bone-in and boneless pieces of goat meat from the shoulders of goat.",
//                         "rupee": "₹649",
//                         "add_to_cart": "Add To Cart",
//                         "message": "Tomorrow",
//                         "message_2": "6 AM - 9 AM"
//                     },
//                     {
//                         "product_id": uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/ed7381f5-8029-084e-263b-eb9c6369247c/original/mutton_cuts-11.jpg",
//                         "cta_text": "The Safest Mutton in Town",
//                         "product_name": "Goat Curry Cut Shoulder Chaamp Puth",
//                         "item_desc": "Chunky pieces of tender and rich goat meat from the ribs and shoulder.",
//                         "rupee": "₹689",
//                         "add_to_cart": "",
//                         "message": "Out of Stock",
//                         "message_2": ""
//                     },
//                     {
//                         "product_id": uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/3550630d-5620-4375-46ed-f072105ead7d/original/WhatsApp_Image_2022-06-08_at_4.55.00_PM.jpeg",
//                         "cta_text": "The Safest Mutton in Town",
//                         "product_name": "Lamb Shoulder Curry Cut - Medium Pieces",
//                         "item_desc": "Evenly cut, juicy, bone-in and boneless pieces of lamb meat from the shoulders of spring lambs",
//                         "rupee": "₹815",
//                         "add_to_cart": "",
//                         "message": "Out of Stock",
//                         "message_2": ""
//                     },
//                     {
//                         "product_id": uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/09d9b40a-b156-9135-ed4f-ab755ca681fb/original/mutton_cuts-03.jpg",
//                         "cta_text": "The Safest Mutton in Town",
//                         "product_name": "Goat Shoulder Biryani Cut",
//                         "item_desc": "A mix of bone-in and boneless pieces of goat shoulder, specially crafted for biryanis.",
//                         "rupee": "₹719",
//                         "add_to_cart": "",
//                         "message": "Out of Stock",
//                         "message_2": ""
//                     },
//                     {
//                         "product_id": uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/262b267f-dfb7-b8af-6da3-bd849b08d6d7/original/Goat-Ribs-and-Chops--Hero-Shot.jpg",
//                         "cta_text": "Licious Health & Safety Protocols - Mutton",
//                         "product_name": "Goat Ribs & Chops",
//                         "item_desc": "Perfectly cut, mix of 8-9 tender goat ribs and juicy chops to cook a quick weekday dinner or fire up the grill for a scrumptious weekend menu.",
//                         "rupee": "₹635",
//                         "add_to_cart": "",
//                         "message": "Out of Stock",
//                         "message_2": ""
//                     },
//                     {
//                         "product_id": uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/c1c2eca5-534a-57f6-00fa-00aafc637243/original/Mutton-Soup-Bones--Hero-Shot.jpg",
//                         "cta_text": "Licious Health & Safety Protocols - Mutton",
//                         "product_name": "Mutton Soup Bones",
//                         "item_desc": "Cleaned, blood-free, chunky pieces of lamb & goat bone taken from the shoulders, ribs & legs",
//                         "rupee": "₹399",
//                         "add_to_cart": "",
//                         "message": "Out of Stock",
//                         "message_2": ""
//                     }
//                 ]
//             },
//             {
//                 "img_container_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/34466dbd-a515-edd1-3e99-05000f217cb6/original/Chicken_(2).png",
//                 "tablescraper-selected-row": "Mutton",
//                 "Category_type": "Ready to Cook",
//                 "Category_List": "Ready to Cook",
//                 "Food_list": [
//                     {

//                         "product_id": uniqid(), "card href": "https://www.licious.in/red-meat/purani-dilli-ki-mutton-seekh-kebab-pr_inuk3ilznwg",
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/7019c400-3816-e42a-db43-f5c030fb0e7a/original/Purani-Dilli-ki-Mutton-Seekh-Kebab-_(2).jpg",
//                         "cta_text": "How to cook",
//                         "product_name": "Purani Dilli ki Mutton Seekh Kebab | Ready in 8 Minutes",
//                         "item_desc": "The classic mutton seekh kebab, that will transport you to the streets of Purani Dilli.",
//                         "net_weight": "Pieces: 4",
//                         "rupee": "₹375",
//                         "gross_weight": ""
//                     },
//                     {

//                         "product_id": uniqid(), "card href": "https://www.licious.in/red-meat/lucknowi-mutton-galouti-kebab-pr_ikuk3im2bid",
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/715d4156-cae5-f3c5-ef78-a6e5c129ed5c/original/Lucknowi-Mutton-Galouti-Kebab-Hero-Shot-Uncooked_(1).jpg",
//                         "cta_text": "How To Cook",
//                         "product_name": "Lucknowi Mutton Galouti Kebab | Ready in 8 Minutes",
//                         "item_desc": "Fresh Nakhre, fresh meats & fresh ingredients",
//                         "net_weight": "Pieces: 6",
//                         "rupee": "₹399",
//                         "gross_weight": ""
//                     },
//                     {

//                         "product_id": uniqid(), "card href": "https://www.licious.in/red-meat/hyderabadi-mutton-shami-kebab-pr_ikuk3im1dc7",
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/e0d1adbd-3b97-2ee3-309d-a58dcbe771cf/original/Hyderabadi-Mutton-Shami-Kebab-_-Ready-in-8-Minutes_(1).jpg",
//                         "cta_text": "How To Cook",
//                         "product_name": "Hyderabadi Mutton Shami Kebab | Ready in 8 Minutes",
//                         "item_desc": "Hyderabad's favourite kebab, so delicious it's fit for royalty.",
//                         "net_weight": "Pieces: 6",
//                         "rupee": "₹349",
//                         "gross_weight": ""
//                     },
//                     {

//                         "product_id": uniqid(), "card href": "https://www.licious.in/red-meat/awadhi-mutton-biryani-mini-pr_ek9l4pfihgs",
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/b0c9d487-f007-28e2-94a5-44498a258110/original/250gms.jpg",
//                         "cta_text": "How To Cook",
//                         "product_name": "Awadhi Mutton Biryani (Mini) | Meat & Masala Mix",
//                         "item_desc": "Aromatic, spicy, rich and meaty",
//                         "net_weight": "Pieces: 1 Unit",
//                         "rupee": "₹349",
//                         "gross_weight": "Net wt: 250gms"
//                     },
//                     {

//                         "product_id": uniqid(), "card href": "https://www.licious.in/red-meat/hyderabadi-mutton-biryani-mini-pr_ewyl4pfawzh",
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/3245abd9-1ee3-f536-4006-d11d2e3b2261/original/Mini.jpg",
//                         "cta_text": "How To Cook",
//                         "product_name": "Hyderabadi Mutton Biryani (Mini) | Meat & Masala Mix",
//                         "item_desc": "Aromatic, spicy, rich and meaty",
//                         "net_weight": "Pieces: 1 Unit",
//                         "rupee": "₹329",
//                         "gross_weight": "Net wt: 250gms"
//                     }
//                 ]
//             }
//         ])

// res.send('updated')


//     } catch (error) {
//         console.log(error)
//         res.send('Not Update')
//     }

// })

module.exports = { Mutton_Collection_Routes }