const express = require('express')
var uniqid = require('uniqid');

const Marindas_Collection_Routes = express.Router()

const { Marindas_Collection_modal } = require("../../../modals/Ready_to_cook_collection.modals")

Marindas_Collection_Routes.get("/", async (req, res) => {
    try {

        const { category_id } = req.query

        const { sort_by_price } = req.query

        if (category_id || sort_by_price) {

            if (category_id && sort_by_price) {

                let data;
                if (sort_by_price === 'asc') {
                    const Marindas_collection_data = await Marindas_Collection_modal.findOne({ _id: category_id }, { Food_list: 1 })

                    data = Marindas_collection_data.Food_list.sort((a, b) => a.rupee.split("₹")[1] - b.rupee.split("₹")[1])


                } else {
                    const Marindas_collection_data = await Marindas_Collection_modal.findOne({ _id: category_id }, { Food_list: 1 })

                    data = Marindas_collection_data.Food_list.sort((a, b) => b.rupee.split("₹")[1] - a.rupee.split("₹")[1])
                }
                res.send(data)


            } else {
                const Marindas_collection_data = await Marindas_Collection_modal.findOne({ _id: category_id }, { Food_list: 1 })

                // let data = Marindas_collection_data.Food_list.sort((a, b) => a.rupee.split("₹")[1] - b.rupee.split("₹")[1])

                res.send(Marindas_collection_data)
            }

        } else {
            const Marindas_collection_data = await Marindas_Collection_modal.find()

            res.send(Marindas_collection_data)
        }

    } catch (error) {
        console.log(error)
        res.status(404).send('Something went wrong')
    }
})

Marindas_Collection_Routes.get("/:id", async (req, res) => {

    const { id } = req.params

    try {

        const Marindas_collection_data = await Marindas_Collection_modal.find()

        let collection_data;

        Marindas_collection_data.filter((i) => {


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

// Marindas_Collection_Routes.get("/:id", async (req, res) => {

//     const { id } = req.params

//     try {
//         await Marindas_Collection_modal.insertMany([
//             {
//                 "img_container_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/21653c3a-4d6d-da71-2432-6833b88e9629/original/RC.png",
//                 "tablescraper-selected-row": "Ready to Cook",
//                 "Category_type": "Ready_to_cook",
//                 "Category_List": "All Ready_to_cook",
//                 "Food_list": [
//                     {
                        
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/957ac157-3d74-e687-f82f-121e0f2d66bc/original/Cripsy-Chicken-Wings-7Tag_(1).jpg",
//                         "cta_text": "How To Cook",
//                         "product_name": "Crispy Chicken Wings - 7 Pieces | Ready To Cook",
//                         "item_desc": "Panko-crumbed wings curated by our expert Nakhrebaaz",
//                         "net_weight": "Pieces: 7",
//                         "rupee": "₹99",
//                         "add_to_cart": "Add To Cart",
//                         "message": "All slots full",
//                         "gross_weight": "",
//                         "offer_discount": ""
//                     },
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/777b4969-9cfa-3dff-2108-b1dad1d5f091/original/Creamy-Afghani-Chicken_(1).jpg",
//                         "cta_text": "How To Cook",
//                         "product_name": "Creamy Afghani Chicken (Mini) | Ready to Cook",
//                         "item_desc": "Pre-marinated, tender chicken by our Nakhrebaaz chefs",
//                         "net_weight": "Pieces: 7-9",
//                         "rupee": "₹170",
//                         "add_to_cart": "Add To Cart",
//                         "message": "All slots full",
//                         "gross_weight": "Net wt: 225gms",
//                         "offer_discount": "5% OFF"
//                     },
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/3329785a-0acf-da91-a10c-2da5a97a002e/original/Amritsari-Achari-Murg.jpg",
//                         "cta_text": "How To Cook",
//                         "product_name": "Amritsari Achari Murg (Mini) | Ready to Cook",
//                         "item_desc": "Boneless pieces of chicken marinated in pickling spices.",
//                         "net_weight": "Pieces: 8-10",
//                         "rupee": "₹169",
//                         "add_to_cart": "Add To Cart",
//                         "message": "All slots full",
//                         "gross_weight": "Net wt: 225gms",
//                         "offer_discount": ""
//                     },
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/e4c543f1-bebc-5e45-5afc-052f4702ebfe/original/uncooked.jpg",
//                         "cta_text": "How To Cook",
//                         "product_name": "Afghani Murgh Seekh Kebab | Ready in 8 Minutes",
//                         "item_desc": "The classic chicken seekh kebab, marinated in traditional spices of the Mughal era.",
//                         "net_weight": "Pieces: 4",
//                         "rupee": "₹269",
//                         "add_to_cart": "Add To Cart",
//                         "message": "All slots full",
//                         "gross_weight": "",
//                         "offer_discount": ""
//                     },
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/b4f91521-1ded-33aa-3772-cd825b156069/original/Habanero-Chicken-Wings-_-Ready-to-Cook.jpg",
//                         "cta_text": "How To Cook",
//                         "product_name": "Habanero Chicken Wings | Ready to Cook",
//                         "item_desc": "Chicken wings in a fiery marinade of habanero chilli and dried herbs for a bite of tasty heat",
//                         "net_weight": "Pieces: 10",
//                         "rupee": "₹249",
//                         "add_to_cart": "Add To Cart",
//                         "message": "All slots full",
//                         "gross_weight": "",
//                         "offer_discount": ""
//                     },
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/715d4156-cae5-f3c5-ef78-a6e5c129ed5c/original/Lucknowi-Mutton-Galouti-Kebab-Hero-Shot-Uncooked_(1).jpg",
//                         "cta_text": "How To Cook",
//                         "product_name": "Lucknowi Mutton Galouti Kebab | Ready in 8 Minutes",
//                         "item_desc": "Fresh Nakhre, fresh meats & fresh ingredients",
//                         "net_weight": "Pieces: 6",
//                         "rupee": "₹399",
//                         "add_to_cart": "Add To Cart",
//                         "message": "All slots full",
//                         "gross_weight": "",
//                         "offer_discount": ""
//                     },
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/b036c9ae-6a89-4725-959d-b6e3782700af/original/BBQ-chicken-wings.jpg",
//                         "cta_text": "How To Cook",
//                         "product_name": "BBQ Chicken Wings without Skin | Ready to Cook",
//                         "item_desc": "Our take on the American classic - skinless chicken wings marinated in our sticky barbecue sauce.",
//                         "net_weight": "Pieces: 10",
//                         "rupee": "₹149",
//                         "add_to_cart": "Add To Cart",
//                         "message": "All slots full",
//                         "gross_weight": "",
//                         "offer_discount": ""
//                     },
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/c3bb7ea3-79dd-84e5-26bc-b5ea62f6dc5e/original/WhatsApp_Image_2022-06-07_at_9.04.34_PM.jpeg",
//                         "cta_text": "How To Cook",
//                         "product_name": "Hariyali Murgh Tikka | Ready in 8 Minutes",
//                         "item_desc": "Boneless chicken marinated in a fresh green herbs base.",
//                         "net_weight": "Pieces: 6-8",
//                         "rupee": "₹279",
//                         "add_to_cart": "Add To Cart",
//                         "message": "All slots full",
//                         "gross_weight": "Net wt: 300gms",
//                         "offer_discount": ""
//                     },
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/47be7398-42d9-1048-e486-a8686e77fcaf/original/Nilgiri-Fish-Tikka-_Tag.jpg",
//                         "cta_text": "",
//                         "product_name": "Hariyali Fish Tikka | Ready to Cook",
//                         "item_desc": "Batter-coated basa with mint, coriander, and curry leaves.",
//                         "net_weight": "Pieces: 8-10",
//                         "rupee": "₹329",
//                         "add_to_cart": "Add To Cart",
//                         "message": "All slots full",
//                         "gross_weight": "Net wt: 300gms",
//                         "offer_discount": ""
//                     },
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/efa4244d-a05f-6d07-fab0-6c1c4ecdfd95/original/Chicken-Malai-Tikka-Tag.jpg",
//                         "cta_text": "How To Cook",
//                         "product_name": "Chicken Malai Tikka | Ready in 8 Minutes",
//                         "item_desc": "Pieces of boneless chicken in a smoky, creamy marinade.",
//                         "net_weight": "Pieces: 6-8",
//                         "rupee": "₹299",
//                         "add_to_cart": "Add To Cart",
//                         "message": "All slots full",
//                         "gross_weight": "Net wt: 350gms",
//                         "offer_discount": ""
//                     },
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/9de54ecd-30c3-d445-5d9f-be1d086a1072/original/rtc_july_6images-23.jpg",
//                         "cta_text": "How To Cook",
//                         "product_name": "Crispy Fish Fingers | Ready to Cook",
//                         "item_desc": "Boneless pieces of basa, coated in panko crumbs.",
//                         "net_weight": "Pieces: 9-12",
//                         "rupee": "₹299",
//                         "add_to_cart": "Add To Cart",
//                         "message": "All slots full",
//                         "gross_weight": "Net wt: 250gms",
//                         "offer_discount": ""
//                     },
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/1e7f984e-3701-e97f-3699-76c618d73d9b/original/500gms_(3).jpg",
//                         "cta_text": "How To Cook",
//                         "product_name": "Hyderabadi Chicken Biryani (Mini) | Meat & Masala Mix",
//                         "item_desc": "Aromatic, spicy, rich and meaty",
//                         "net_weight": "Pieces: 1 Unit",
//                         "rupee": "₹199",
//                         "add_to_cart": "Add To Cart",
//                         "message": "All slots full",
//                         "gross_weight": "Net wt: 250gms",
//                         "offer_discount": ""
//                     },
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/23cfe014-8c80-8eba-3d10-b36080e69309/original/mini_rtc_4-05.jpg",
//                         "cta_text": "",
//                         "product_name": "Chicken Tikka (Mini) - Boneless | Ready to Cook",
//                         "item_desc": "Boneless chicken breast pieces in a creamy marinade.",
//                         "net_weight": "Pieces: 5-7",
//                         "rupee": "₹169",
//                         "add_to_cart": "Add To Cart",
//                         "message": "All slots full",
//                         "gross_weight": "Net wt: 225gms",
//                         "offer_discount": ""
//                     },
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/ac49a3a0-370f-343f-cda7-0f54314b378f/original/Crispy-Chicken-Wings-Tag_(1).jpg",
//                         "cta_text": "How To Cook",
//                         "product_name": "Crispy Chicken Wings | Ready To Cook",
//                         "item_desc": "Chicken wings marinated in spices & coated in panko crumbs.",
//                         "net_weight": "Pieces:",
//                         "rupee": "₹119",
//                         "add_to_cart": "",
//                         "message": "Out of Stock",
//                         "gross_weight": "",
//                         "offer_discount": ""
//                     },
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/2326e0f7-e80f-b665-0317-07eed0d3c54c/original/rtc_july_6images-14_(1).jpg",
//                         "cta_text": "How To Cook",
//                         "product_name": "Crispy Chicken Supreme | Ready To Cook",
//                         "item_desc": "Panko crumb-coated chicken tenders, ready in 8 minutes!",
//                         "net_weight": "Pieces: 4-5",
//                         "rupee": "₹199",
//                         "add_to_cart": "",
//                         "message": "Out of Stock",
//                         "gross_weight": "Net wt: 250gms",
//                         "offer_discount": ""
//                     },
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/259697f7-b1ab-a3df-4960-09a7c91b4a6e/original/Sichuan-Chilli-Chicken_(1).jpg",
//                         "cta_text": "How To Cook",
//                         "product_name": "Sichuan Chilli Chicken (Mini) | Ready to Cook",
//                         "item_desc": "Boneless chicken pieces in an Indo-Chinese marinade.",
//                         "net_weight": "Pieces: 10-12",
//                         "rupee": "₹199",
//                         "add_to_cart": "",
//                         "message": "Out of Stock",
//                         "gross_weight": "Net wt: 250gms",
//                         "offer_discount": ""
//                     },
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/ea596bab-1888-313a-369e-a918190e1095/original/Chicken-Tag.jpg",
//                         "cta_text": "How To Cook",
//                         "product_name": "Chicken Tikka | Ready To Cook",
//                         "item_desc": "Twice marinated boneless chicken chunks, first with fresh ginger and crushed garlic and then with a Licious Secret Spice Mix, thick yogurt and a note of mustard oil.",
//                         "net_weight": "Pieces: 9 - 11",
//                         "rupee": "₹299",
//                         "add_to_cart": "",
//                         "message": "Out of Stock",
//                         "gross_weight": "Net wt: 450gms",
//                         "offer_discount": ""
//                     },
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_15ckn5pzo5x/18/prod_display_image/1618388769.9292--2021-04-1413:56:09--738",
//                         "cta_text": "",
//                         "product_name": "Assorted Kebab Platter | Ready to Cook",
//                         "item_desc": "Tender & juicy- our platter of kebabs is perfect for parties!",
//                         "net_weight": "",
//                         "rupee": "₹730",
//                         "add_to_cart": "",
//                         "message": "Out of Stock",
//                         "gross_weight": "",
//                         "offer_discount": "30% OFF"
//                     },
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/7019c400-3816-e42a-db43-f5c030fb0e7a/original/Purani-Dilli-ki-Mutton-Seekh-Kebab-_(2).jpg",
//                         "cta_text": "How to cook",
//                         "product_name": "Purani Dilli ki Mutton Seekh Kebab | Ready in 8 Minutes",
//                         "item_desc": "The classic mutton seekh kebab, that will transport you to the streets of Purani Dilli.",
//                         "net_weight": "Pieces: 4",
//                         "rupee": "₹375",
//                         "add_to_cart": "",
//                         "message": "Out of Stock",
//                         "gross_weight": "",
//                         "offer_discount": ""
//                     },
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/1fc16168-e40e-f9aa-5725-e8ab295cef33/original/Angara-Murgh-Tikka.jpg",
//                         "cta_text": "How To Cook",
//                         "product_name": "Angara Murgh Tikka | Ready In 8 Minutes",
//                         "item_desc": "Boneless chicken marinated in a spicy curd base.",
//                         "net_weight": "Pieces: 6-8",
//                         "rupee": "₹229",
//                         "add_to_cart": "",
//                         "message": "Out of Stock",
//                         "gross_weight": "Net wt: 300gms",
//                         "offer_discount": "15% OFF"
//                     },
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/ad5c2533-1af2-0ab9-193f-8aa324ba031c/original/Tangy-Chilli-Chicken-WingstagCook.jpg",
//                         "cta_text": "How To Cook",
//                         "product_name": "Tangy Chilli Chicken Wings | Ready to Cook",
//                         "item_desc": "Spicy marinated wings coated in a zesty, chilli glaze",
//                         "net_weight": "Pieces: 6-8",
//                         "rupee": "₹135",
//                         "add_to_cart": "",
//                         "message": "Out of Stock",
//                         "gross_weight": "Net wt: 250gms",
//                         "offer_discount": "20% OFF"
//                     },
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/97383447-e460-3fda-5d88-68c3c104d0ea/original/Tandoori-Chicken-_-Ready-in-8-Minutes_(1).jpg",
//                         "cta_text": "How To Cook",
//                         "product_name": "Tandoori Chicken | Ready in 8 Minutes",
//                         "item_desc": "Smokey & marinated chicken curated by our Nakhrebaaz team",
//                         "net_weight": "Pieces: 4",
//                         "rupee": "₹249",
//                         "add_to_cart": "",
//                         "message": "Out of Stock",
//                         "gross_weight": "Net wt: 350gms",
//                         "offer_discount": ""
//                     },
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/1a7ac405-b462-9b16-a04d-152ee2b97ef5/original/Honey-Chilli-Garlic-Chicken-Wings-Tag.jpg",
//                         "cta_text": "How To Cook",
//                         "product_name": "Honey Chilli Garlic Chicken Wings | Ready to Cook",
//                         "item_desc": "Spicy marinated wings coated in a honey and chilli glaze",
//                         "net_weight": "Pieces: 6-8",
//                         "rupee": "₹127",
//                         "add_to_cart": "",
//                         "message": "Out of Stock",
//                         "gross_weight": "Net wt: 250gms",
//                         "offer_discount": "15% OFF"
//                     },
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/51a18a68-acc0-f766-e8a3-10529ac374ec/original/Chicken-Tangdi-Kebab-Tag.jpg",
//                         "cta_text": "How To Cook",
//                         "product_name": "Chicken Tangdi Kebab | Ready in 8 Minutes",
//                         "item_desc": "Chicken drumsticks in a smoky, spicy marinade.",
//                         "net_weight": "Pieces: 3",
//                         "rupee": "₹269",
//                         "add_to_cart": "",
//                         "message": "Out of Stock",
//                         "gross_weight": "Net wt: 300gms",
//                         "offer_discount": ""
//                     },
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/69114a5d-3214-c0eb-01d8-2c54cc1a70a5/original/Crispy-Snacks-.jpg",
//                         "cta_text": "",
//                         "product_name": "Crispy Snacks Combo",
//                         "item_desc": "Super crispy! Chicken tenders, wings & fish fingers.",
//                         "net_weight": "",
//                         "rupee": "₹494",
//                         "add_to_cart": "",
//                         "message": "Out of Stock",
//                         "gross_weight": "",
//                         "offer_discount": "20% OFF"
//                     },
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/17dff175-5e23-961e-d828-737879a7136a/original/Fish-Tikka-Tag.jpg",
//                         "cta_text": "How To Cook",
//                         "product_name": "Fish Tikka | Ready to Cook",
//                         "item_desc": "Boneless basa fillets in an East Indian style marinade.",
//                         "net_weight": "Pieces: 11 - 13",
//                         "rupee": "₹369",
//                         "add_to_cart": "",
//                         "message": "Out of Stock",
//                         "gross_weight": "Net wt: 350gms",
//                         "offer_discount": ""
//                     },
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/feb575eb-a73d-963b-c611-fa34a99d0c85/original/RTC-mini-COMBO-tricolor.jpg",
//                         "cta_text": "",
//                         "product_name": "Tandoori Trio Combo",
//                         "item_desc": "Smoky & delicious, ready-to-cook Tandoori Trio.",
//                         "net_weight": "",
//                         "rupee": "₹720",
//                         "add_to_cart": "",
//                         "message": "Out of Stock",
//                         "gross_weight": "",
//                         "offer_discount": "15% OFF"
//                     },
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/0154ba9c-827f-b57a-4baf-816af78502b7/original/rtc_july_6images-26.jpg",
//                         "cta_text": "How To Cook",
//                         "product_name": "Crispy Chicken Cutlet | Ready to Cook",
//                         "item_desc": "Bengali-style, breaded, minced chicken cutlets",
//                         "net_weight": "Pieces: 4",
//                         "rupee": "₹152",
//                         "add_to_cart": "",
//                         "message": "Out of Stock",
//                         "gross_weight": "Net wt: 200gms",
//                         "offer_discount": "10% OFF"
//                     },
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/26e53fe5-438c-2dc7-ea28-57bebfd61b2b/original/Amritsari-Fish-Ready_to_Cook.jpg",
//                         "cta_text": "How To Cook",
//                         "product_name": "Achari Fish Tikka | Ready to Cook",
//                         "item_desc": "Boneless cubes of basa coated in a tangy, spicy batter.",
//                         "net_weight": "Pieces: 7-10",
//                         "rupee": "₹299",
//                         "add_to_cart": "",
//                         "message": "Out of Stock",
//                         "gross_weight": "Net wt: 300gms",
//                         "offer_discount": ""
//                     },
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/56f738f6-24be-d2f0-6550-944ce538ffc3/original/Tikka-Delights-Combo.jpg",
//                         "cta_text": "",
//                         "product_name": "Tikka Delights Combo",
//                         "item_desc": "Fish tikka two ways and a creamy Chicken Malai Tikka",
//                         "net_weight": "",
//                         "rupee": "₹514",
//                         "add_to_cart": "",
//                         "message": "Out of Stock",
//                         "gross_weight": "",
//                         "offer_discount": "14% OFF"
//                     },
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/679da087-b561-afa1-111a-8541faa2fed0/original/Chicken---Three-ways-Combo-1.jpg",
//                         "cta_text": "",
//                         "product_name": "Chicken, Three ways Combo",
//                         "item_desc": "",
//                         "net_weight": "",
//                         "rupee": "₹448",
//                         "add_to_cart": "",
//                         "message": "Out of Stock",
//                         "gross_weight": "",
//                         "offer_discount": "13% OFF"
//                     },
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/26731072-7fdc-d6a8-cc1e-fdaf294324ad/original/mini_rtc_4-13.jpg",
//                         "cta_text": "",
//                         "product_name": "Achari Fish Tikka (Mini) | Ready To Cook",
//                         "item_desc": "Boneless basa fillets in an Amritsari style marinade.",
//                         "net_weight": "Pieces: 4-5",
//                         "rupee": "₹152",
//                         "add_to_cart": "",
//                         "message": "Out of Stock",
//                         "gross_weight": "Net wt: 150gms",
//                         "offer_discount": "10% OFF"
//                     },
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/e0d1adbd-3b97-2ee3-309d-a58dcbe771cf/original/Hyderabadi-Mutton-Shami-Kebab-_-Ready-in-8-Minutes_(1).jpg",
//                         "cta_text": "How To Cook",
//                         "product_name": "Hyderabadi Mutton Shami Kebab | Ready in 8 Minutes",
//                         "item_desc": "Hyderabad's favourite kebab, so delicious it's fit for royalty.",
//                         "net_weight": "Pieces: 6",
//                         "rupee": "₹349",
//                         "add_to_cart": "",
//                         "message": "Out of Stock",
//                         "gross_weight": "",
//                         "offer_discount": ""
//                     },
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/dbb4537d-4fe9-94e8-10bf-a09626ca5707/original/rtc_july_6images-15.jpg",
//                         "cta_text": "How to cook",
//                         "product_name": "Chicken Cutlet | Ready to Cook",
//                         "item_desc": "Mildly spicy chicken cutlets made with minced chicken.",
//                         "net_weight": "Pieces: 8",
//                         "rupee": "₹249",
//                         "add_to_cart": "",
//                         "message": "Out of Stock",
//                         "gross_weight": "Net wt: 320gms",
//                         "offer_discount": ""
//                     },
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/77ab62ad-dce2-f854-2b10-e2dc987bba6d/original/Chicken-Delight-Combo---Indian-1.jpg",
//                         "cta_text": "",
//                         "product_name": "Chicken Delight Combo - Indian",
//                         "item_desc": "Truly desi! Tandoori Chicken & Creamy Afghani Chicken.",
//                         "net_weight": "",
//                         "rupee": "₹407",
//                         "add_to_cart": "",
//                         "message": "Out of Stock",
//                         "gross_weight": "",
//                         "offer_discount": "5% OFF"
//                     },
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/4a28f1b9-adfa-0842-57cd-5d1cd8a6df1e/original/Chicken-Bounty-Combo-1.jpg",
//                         "cta_text": "",
//                         "product_name": "Chicken Bounty Combo",
//                         "item_desc": "3 medium spicy pre-marinated chicken dishes you will love.",
//                         "net_weight": "",
//                         "rupee": "₹520",
//                         "add_to_cart": "",
//                         "message": "Out of Stock",
//                         "gross_weight": "",
//                         "offer_discount": "5% OFF"
//                     },
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/ccf4dc1a-1ef3-62e1-18e3-7aa719861427/original/two.jpg",
//                         "cta_text": "",
//                         "product_name": "Fish Tikka (Mini) | Ready to Cook",
//                         "item_desc": "Boneless basa fillets in a spicy marinade.",
//                         "net_weight": "Pieces: 6-7",
//                         "rupee": "₹199",
//                         "add_to_cart": "",
//                         "message": "Out of Stock",
//                         "gross_weight": "Net wt: 175gms",
//                         "offer_discount": ""
//                     },
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/e93be3ee-0083-9815-14b3-2fdc1f463f9f/original/Country-Captain.jpg",
//                         "cta_text": "How To Cook",
//                         "product_name": "Country Captain Chicken | Ready In 10 Mins",
//                         "item_desc": "Chicken leg curry cut in a sweet onion based gravy.",
//                         "net_weight": "Pieces: 3",
//                         "rupee": "₹249",
//                         "add_to_cart": "",
//                         "message": "Out of Stock",
//                         "gross_weight": "",
//                         "offer_discount": ""
//                     },
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/2ae0c8b1-a5e1-2652-79f6-b112aa90a1de/original/Frank-Buffalo-WingsTag.jpg",
//                         "cta_text": "How To Cook",
//                         "product_name": "Frank's Buffalo Chicken Wings | Ready to Cook",
//                         "item_desc": "Spicy marinated wings with a hot and sour glaze",
//                         "net_weight": "Pieces: 7-9",
//                         "rupee": "₹199",
//                         "add_to_cart": "",
//                         "message": "Out of Stock",
//                         "gross_weight": "Net wt: 250gms",
//                         "offer_discount": ""
//                     },
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/394866bb-1a7a-e025-b255-a41d9aa075cf/original/Teriyaki-Wings---tag.jpg",
//                         "cta_text": "How To Cook",
//                         "product_name": "Teriyaki Chicken Wings | Ready to Cook",
//                         "item_desc": "Chicken Wings coated in spices and a Teriyaki glaze",
//                         "net_weight": "Pieces: 7-9",
//                         "rupee": "₹199",
//                         "add_to_cart": "",
//                         "message": "Out of Stock",
//                         "gross_weight": "Net wt: 250gms",
//                         "offer_discount": ""
//                     },
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/1061622d-54a2-bb7b-3ba1-405b2b45f061/original/250gms_(1).jpg",
//                         "cta_text": "How To Cook",
//                         "product_name": "Awadhi Chicken Biryani (Mini) | Meat & Masala Mix",
//                         "item_desc": "Fragrant, delicately flavourful & meaty",
//                         "net_weight": "Pieces: 1 Unit",
//                         "rupee": "₹229",
//                         "add_to_cart": "",
//                         "message": "Out of Stock",
//                         "gross_weight": "Net wt: 250gms",
//                         "offer_discount": ""
//                     },
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/b0c9d487-f007-28e2-94a5-44498a258110/original/250gms.jpg",
//                         "cta_text": "How To Cook",
//                         "product_name": "Awadhi Mutton Biryani (Mini) | Meat & Masala Mix",
//                         "item_desc": "Aromatic, spicy, rich and meaty",
//                         "net_weight": "Pieces: 1 Unit",
//                         "rupee": "₹349",
//                         "add_to_cart": "",
//                         "message": "Out of Stock",
//                         "gross_weight": "Net wt: 250gms",
//                         "offer_discount": ""
//                     },
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/3245abd9-1ee3-f536-4006-d11d2e3b2261/original/Mini.jpg",
//                         "cta_text": "How To Cook",
//                         "product_name": "Hyderabadi Mutton Biryani (Mini) | Meat & Masala Mix",
//                         "item_desc": "Aromatic, spicy, rich and meaty",
//                         "net_weight": "Pieces: 1 Unit",
//                         "rupee": "₹329",
//                         "add_to_cart": "",
//                         "message": "Out of Stock",
//                         "gross_weight": "Net wt: 250gms",
//                         "offer_discount": ""
//                     },
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/0f479248-e517-4ff3-65af-6536202feeed/original/Kolkata-CB-250-cooked_(2).jpg",
//                         "cta_text": "How To Cook",
//                         "product_name": "Kolkata Chicken Biryani (Mini) | Meat & Masala Mix",
//                         "item_desc": "Fragrant, meaty, subtly spiced & meaty.",
//                         "net_weight": "Pieces: 1 Unit",
//                         "rupee": "₹229",
//                         "add_to_cart": "",
//                         "message": "Out of Stock",
//                         "gross_weight": "Net wt: 250gms",
//                         "offer_discount": ""
//                     },
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/9052c6fa-fdd9-e3a6-dd62-edca34b308c1/original/uncooked_(4).jpg",
//                         "cta_text": "How To Cook",
//                         "product_name": "Amritsari Achari Murgh | Ready to Cook",
//                         "item_desc": "Spicy, marinated chicken chunks from our Nakhrebaaz chefs",
//                         "net_weight": "Pieces: 14-16",
//                         "rupee": "₹329",
//                         "add_to_cart": "",
//                         "message": "Out of Stock",
//                         "gross_weight": "Net wt: 450gms",
//                         "offer_discount": ""
//                     }
//                 ]
//             },
//             {
//                 "img_container_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/21653c3a-4d6d-da71-2432-6833b88e9629/original/RC.png",
//                 "tablescraper-selected-row": "Ready to Cook",
//                 "Category_type": "Ready_to_cook",
//                 "Category_List": "Gourmet Marindas",
//                 "Food_list": [
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/777b4969-9cfa-3dff-2108-b1dad1d5f091/original/Creamy-Afghani-Chicken_(1).jpg",
//                         "cta_text": "How To Cook",
//                         "product_name": "Creamy Afghani Chicken (Mini) | Ready to Cook",
//                         "item_desc": "Pre-marinated, tender chicken by our Nakhrebaaz chefs",
//                         "net_weight": "Pieces: 7-9",
//                         "gross_weight": "Net wt: 225gms",
//                         "rupee": "₹170",
//                         "add_to_cart": "Add To Cart",
//                         "message": "All slots full"
//                     },
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/3329785a-0acf-da91-a10c-2da5a97a002e/original/Amritsari-Achari-Murg.jpg",
//                         "cta_text": "How To Cook",
//                         "product_name": "Amritsari Achari Murg (Mini) | Ready to Cook",
//                         "item_desc": "Boneless pieces of chicken marinated in pickling spices.",
//                         "net_weight": "Pieces: 8-10",
//                         "gross_weight": "Net wt: 225gms",
//                         "rupee": "₹169",
//                         "add_to_cart": "Add To Cart",
//                         "message": "All slots full"
//                     },
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/47be7398-42d9-1048-e486-a8686e77fcaf/original/Nilgiri-Fish-Tikka-_Tag.jpg",
//                         "cta_text": "",
//                         "product_name": "Hariyali Fish Tikka | Ready to Cook",
//                         "item_desc": "Batter-coated basa with mint, coriander, and curry leaves.",
//                         "net_weight": "Pieces: 8-10",
//                         "gross_weight": "Net wt: 300gms",
//                         "rupee": "₹329",
//                         "add_to_cart": "Add To Cart",
//                         "message": "All slots full"
//                     },
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/23cfe014-8c80-8eba-3d10-b36080e69309/original/mini_rtc_4-05.jpg",
//                         "cta_text": "",
//                         "product_name": "Chicken Tikka (Mini) - Boneless | Ready to Cook",
//                         "item_desc": "Boneless chicken breast pieces in a creamy marinade.",
//                         "net_weight": "Pieces: 5-7",
//                         "gross_weight": "Net wt: 225gms",
//                         "rupee": "₹169",
//                         "add_to_cart": "Add To Cart",
//                         "message": "All slots full"
//                     },
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/259697f7-b1ab-a3df-4960-09a7c91b4a6e/original/Sichuan-Chilli-Chicken_(1).jpg",
//                         "cta_text": "How To Cook",
//                         "product_name": "Sichuan Chilli Chicken (Mini) | Ready to Cook",
//                         "item_desc": "Boneless chicken pieces in an Indo-Chinese marinade.",
//                         "net_weight": "Pieces: 10-12",
//                         "gross_weight": "Net wt: 250gms",
//                         "rupee": "₹199",
//                         "add_to_cart": "",
//                         "message": "Out of Stock"
//                     },
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/ea596bab-1888-313a-369e-a918190e1095/original/Chicken-Tag.jpg",
//                         "cta_text": "How To Cook",
//                         "product_name": "Chicken Tikka | Ready To Cook",
//                         "item_desc": "Twice marinated boneless chicken chunks, first with fresh ginger and crushed garlic and then with a Licious Secret Spice Mix, thick yogurt and a note of mustard oil.",
//                         "net_weight": "Pieces: 9 - 11",
//                         "gross_weight": "Net wt: 450gms",
//                         "rupee": "₹299",
//                         "add_to_cart": "",
//                         "message": "Out of Stock"
//                     },
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/17dff175-5e23-961e-d828-737879a7136a/original/Fish-Tikka-Tag.jpg",
//                         "cta_text": "How To Cook",
//                         "product_name": "Fish Tikka | Ready to Cook",
//                         "item_desc": "Boneless basa fillets in an East Indian style marinade.",
//                         "net_weight": "Pieces: 11 - 13",
//                         "gross_weight": "Net wt: 350gms",
//                         "rupee": "₹369",
//                         "add_to_cart": "",
//                         "message": "Out of Stock"
//                     },
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/26e53fe5-438c-2dc7-ea28-57bebfd61b2b/original/Amritsari-Fish-Ready_to_Cook.jpg",
//                         "cta_text": "How To Cook",
//                         "product_name": "Achari Fish Tikka | Ready to Cook",
//                         "item_desc": "Boneless cubes of basa coated in a tangy, spicy batter.",
//                         "net_weight": "Pieces: 7-10",
//                         "gross_weight": "Net wt: 300gms",
//                         "rupee": "₹299",
//                         "add_to_cart": "",
//                         "message": "Out of Stock"
//                     },
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/26731072-7fdc-d6a8-cc1e-fdaf294324ad/original/mini_rtc_4-13.jpg",
//                         "cta_text": "",
//                         "product_name": "Achari Fish Tikka (Mini) | Ready To Cook",
//                         "item_desc": "Boneless basa fillets in an Amritsari style marinade.",
//                         "net_weight": "Pieces: 4-5",
//                         "gross_weight": "Net wt: 150gms",
//                         "rupee": "₹152",
//                         "add_to_cart": "",
//                         "message": "Out of Stock"
//                     },
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/dbb4537d-4fe9-94e8-10bf-a09626ca5707/original/rtc_july_6images-15.jpg",
//                         "cta_text": "How to cook",
//                         "product_name": "Chicken Cutlet | Ready to Cook",
//                         "item_desc": "Mildly spicy chicken cutlets made with minced chicken.",
//                         "net_weight": "Pieces: 8",
//                         "gross_weight": "Net wt: 320gms",
//                         "rupee": "₹249",
//                         "add_to_cart": "",
//                         "message": "Out of Stock"
//                     },
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/ccf4dc1a-1ef3-62e1-18e3-7aa719861427/original/two.jpg",
//                         "cta_text": "",
//                         "product_name": "Fish Tikka (Mini) | Ready to Cook",
//                         "item_desc": "Boneless basa fillets in a spicy marinade.",
//                         "net_weight": "Pieces: 6-7",
//                         "gross_weight": "Net wt: 175gms",
//                         "rupee": "₹199",
//                         "add_to_cart": "",
//                         "message": "Out of Stock"
//                     },
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/e93be3ee-0083-9815-14b3-2fdc1f463f9f/original/Country-Captain.jpg",
//                         "cta_text": "How To Cook",
//                         "product_name": "Country Captain Chicken | Ready In 10 Mins",
//                         "item_desc": "Chicken leg curry cut in a sweet onion based gravy.",
//                         "net_weight": "Pieces: 3",
//                         "gross_weight": "",
//                         "rupee": "₹249",
//                         "add_to_cart": "",
//                         "message": "Out of Stock"
//                     },
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/9052c6fa-fdd9-e3a6-dd62-edca34b308c1/original/uncooked_(4).jpg",
//                         "cta_text": "How To Cook",
//                         "product_name": "Amritsari Achari Murgh | Ready to Cook",
//                         "item_desc": "Spicy, marinated chicken chunks from our Nakhrebaaz chefs",
//                         "net_weight": "Pieces: 14-16",
//                         "gross_weight": "Net wt: 450gms",
//                         "rupee": "₹329",
//                         "add_to_cart": "",
//                         "message": "Out of Stock"
//                     }
//                 ]
//             },
//             {
//                 "img_container_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/21653c3a-4d6d-da71-2432-6833b88e9629/original/RC.png",
//                 "tablescraper-selected-row": "Ready to Cook",
//                 "Category_type": "Ready_to_cook",
//                 "Category_List": "Kebab & tandoor",
//                 "Food_list": [
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/e4c543f1-bebc-5e45-5afc-052f4702ebfe/original/uncooked.jpg",
//                         "cta_text": "How To Cook",
//                         "product_name": "Afghani Murgh Seekh Kebab | Ready in 8 Minutes",
//                         "item_desc": "The classic chicken seekh kebab, marinated in traditional spices of the Mughal era.",
//                         "net_weight": "Pieces: 4",
//                         "rupee": "₹269",
//                         "add_to_cart": "Add To Cart",
//                         "message": "All slots full",
//                         "gross_weight": ""
//                     },
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/715d4156-cae5-f3c5-ef78-a6e5c129ed5c/original/Lucknowi-Mutton-Galouti-Kebab-Hero-Shot-Uncooked_(1).jpg",
//                         "cta_text": "How To Cook",
//                         "product_name": "Lucknowi Mutton Galouti Kebab | Ready in 8 Minutes",
//                         "item_desc": "Fresh Nakhre, fresh meats & fresh ingredients",
//                         "net_weight": "Pieces: 6",
//                         "rupee": "₹399",
//                         "add_to_cart": "Add To Cart",
//                         "message": "All slots full",
//                         "gross_weight": ""
//                     },
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/c3bb7ea3-79dd-84e5-26bc-b5ea62f6dc5e/original/WhatsApp_Image_2022-06-07_at_9.04.34_PM.jpeg",
//                         "cta_text": "How To Cook",
//                         "product_name": "Hariyali Murgh Tikka | Ready in 8 Minutes",
//                         "item_desc": "Boneless chicken marinated in a fresh green herbs base.",
//                         "net_weight": "Pieces: 6-8",
//                         "rupee": "₹279",
//                         "add_to_cart": "Add To Cart",
//                         "message": "All slots full",
//                         "gross_weight": "Net wt: 300gms"
//                     },
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/efa4244d-a05f-6d07-fab0-6c1c4ecdfd95/original/Chicken-Malai-Tikka-Tag.jpg",
//                         "cta_text": "How To Cook",
//                         "product_name": "Chicken Malai Tikka | Ready in 8 Minutes",
//                         "item_desc": "Pieces of boneless chicken in a smoky, creamy marinade.",
//                         "net_weight": "Pieces: 6-8",
//                         "rupee": "₹299",
//                         "add_to_cart": "Add To Cart",
//                         "message": "All slots full",
//                         "gross_weight": "Net wt: 350gms"
//                     },
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/7019c400-3816-e42a-db43-f5c030fb0e7a/original/Purani-Dilli-ki-Mutton-Seekh-Kebab-_(2).jpg",
//                         "cta_text": "How to cook",
//                         "product_name": "Purani Dilli ki Mutton Seekh Kebab | Ready in 8 Minutes",
//                         "item_desc": "The classic mutton seekh kebab, that will transport you to the streets of Purani Dilli.",
//                         "net_weight": "Pieces: 4",
//                         "rupee": "₹375",
//                         "add_to_cart": "",
//                         "message": "Out of Stock",
//                         "gross_weight": ""
//                     },
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/1fc16168-e40e-f9aa-5725-e8ab295cef33/original/Angara-Murgh-Tikka.jpg",
//                         "cta_text": "How To Cook",
//                         "product_name": "Angara Murgh Tikka | Ready In 8 Minutes",
//                         "item_desc": "Boneless chicken marinated in a spicy curd base.",
//                         "net_weight": "Pieces: 6-8",
//                         "rupee": "₹229",
//                         "add_to_cart": "",
//                         "message": "Out of Stock",
//                         "gross_weight": "Net wt: 300gms"
//                     },
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/97383447-e460-3fda-5d88-68c3c104d0ea/original/Tandoori-Chicken-_-Ready-in-8-Minutes_(1).jpg",
//                         "cta_text": "How To Cook",
//                         "product_name": "Tandoori Chicken | Ready in 8 Minutes",
//                         "item_desc": "Smokey & marinated chicken curated by our Nakhrebaaz team",
//                         "net_weight": "Pieces: 4",
//                         "rupee": "₹249",
//                         "add_to_cart": "",
//                         "message": "Out of Stock",
//                         "gross_weight": "Net wt: 350gms"
//                     },
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/51a18a68-acc0-f766-e8a3-10529ac374ec/original/Chicken-Tangdi-Kebab-Tag.jpg",
//                         "cta_text": "How To Cook",
//                         "product_name": "Chicken Tangdi Kebab | Ready in 8 Minutes",
//                         "item_desc": "Chicken drumsticks in a smoky, spicy marinade.",
//                         "net_weight": "Pieces: 3",
//                         "rupee": "₹269",
//                         "add_to_cart": "",
//                         "message": "Out of Stock",
//                         "gross_weight": "Net wt: 300gms"
//                     },
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/e0d1adbd-3b97-2ee3-309d-a58dcbe771cf/original/Hyderabadi-Mutton-Shami-Kebab-_-Ready-in-8-Minutes_(1).jpg",
//                         "cta_text": "How To Cook",
//                         "product_name": "Hyderabadi Mutton Shami Kebab | Ready in 8 Minutes",
//                         "item_desc": "Hyderabad's favourite kebab, so delicious it's fit for royalty.",
//                         "net_weight": "Pieces: 6",
//                         "rupee": "₹349",
//                         "add_to_cart": "",
//                         "message": "Out of Stock",
//                         "gross_weight": ""
//                     }
//                 ]
//             },
//             {
//                 "img_container_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/21653c3a-4d6d-da71-2432-6833b88e9629/original/RC.png",
//                 "tablescraper-selected-row": "Ready to Cook",
//                 "Category_type": "Ready_to_cook",
//                 "Category_List": "Wings",
//                 "Food_list": [
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/b4f91521-1ded-33aa-3772-cd825b156069/original/Habanero-Chicken-Wings-_-Ready-to-Cook.jpg",
//                         "product_name": "Habanero Chicken Wings | Ready to Cook",
//                         "item_desc": "Chicken wings in a fiery marinade of habanero chilli and dried herbs for a bite of tasty heat",
//                         "net_weight": "Pieces: 10",
//                         "rupee": "₹249",
//                         "add_to_cart": "Add To Cart",
//                         "message": "All slots full",
//                         "gross_weight": "",
//                         "offer_discount": ""
//                     },
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/b036c9ae-6a89-4725-959d-b6e3782700af/original/BBQ-chicken-wings.jpg",
//                         "product_name": "BBQ Chicken Wings without Skin | Ready to Cook",
//                         "item_desc": "Our take on the American classic - skinless chicken wings marinated in our sticky barbecue sauce.",
//                         "net_weight": "Pieces: 10",
//                         "rupee": "₹149",
//                         "add_to_cart": "Add To Cart",
//                         "message": "All slots full",
//                         "gross_weight": "",
//                         "offer_discount": ""
//                     },
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/ac49a3a0-370f-343f-cda7-0f54314b378f/original/Crispy-Chicken-Wings-Tag_(1).jpg",
//                         "product_name": "Crispy Chicken Wings | Ready To Cook",
//                         "item_desc": "Chicken wings marinated in spices & coated in panko crumbs.",
//                         "net_weight": "Pieces:",
//                         "rupee": "₹119",
//                         "add_to_cart": "",
//                         "message": "Out of Stock",
//                         "gross_weight": "",
//                         "offer_discount": ""
//                     },
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/ad5c2533-1af2-0ab9-193f-8aa324ba031c/original/Tangy-Chilli-Chicken-WingstagCook.jpg",
//                         "product_name": "Tangy Chilli Chicken Wings | Ready to Cook",
//                         "item_desc": "Spicy marinated wings coated in a zesty, chilli glaze",
//                         "net_weight": "Pieces: 6-8",
//                         "rupee": "₹135",
//                         "add_to_cart": "",
//                         "message": "Out of Stock",
//                         "gross_weight": "Net wt: 250gms",
//                         "offer_discount": "20% OFF"
//                     },
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/1a7ac405-b462-9b16-a04d-152ee2b97ef5/original/Honey-Chilli-Garlic-Chicken-Wings-Tag.jpg",
//                         "product_name": "Honey Chilli Garlic Chicken Wings | Ready to Cook",
//                         "item_desc": "Spicy marinated wings coated in a honey and chilli glaze",
//                         "net_weight": "Pieces: 6-8",
//                         "rupee": "₹127",
//                         "add_to_cart": "",
//                         "message": "Out of Stock",
//                         "gross_weight": "Net wt: 250gms",
//                         "offer_discount": "15% OFF"
//                     },
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/2ae0c8b1-a5e1-2652-79f6-b112aa90a1de/original/Frank-Buffalo-WingsTag.jpg",
//                         "product_name": "Frank's Buffalo Chicken Wings | Ready to Cook",
//                         "item_desc": "Spicy marinated wings with a hot and sour glaze",
//                         "net_weight": "Pieces: 7-9",
//                         "rupee": "₹199",
//                         "add_to_cart": "",
//                         "message": "Out of Stock",
//                         "gross_weight": "Net wt: 250gms",
//                         "offer_discount": ""
//                     },
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/394866bb-1a7a-e025-b255-a41d9aa075cf/original/Teriyaki-Wings---tag.jpg",
//                         "product_name": "Teriyaki Chicken Wings | Ready to Cook",
//                         "item_desc": "Chicken Wings coated in spices and a Teriyaki glaze",
//                         "net_weight": "Pieces: 7-9",
//                         "rupee": "₹199",
//                         "add_to_cart": "",
//                         "message": "Out of Stock",
//                         "gross_weight": "Net wt: 250gms",
//                         "offer_discount": ""
//                     }
//                 ]
//             },
//             {
//                 "img_container_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/21653c3a-4d6d-da71-2432-6833b88e9629/original/RC.png",
//                 "tablescraper-selected-row": "Ready to Cook",
//                 "Category_type": "Ready_to_cook",
//                 "Category_List": "Crispy Snacks",
//                 "Food_list": [
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/957ac157-3d74-e687-f82f-121e0f2d66bc/original/Cripsy-Chicken-Wings-7Tag_(1).jpg",
//                         "product_name": "Crispy Chicken Wings - 7 Pieces | Ready To Cook",
//                         "item_desc": "Panko-crumbed wings curated by our expert Nakhrebaaz",
//                         "net_weight": "Pieces: 7",
//                         "rupee": "₹99",
//                         "add_to_cart": "Add To Cart",
//                         "message": "All slots full",
//                         "gross_weight": "",
//                         "offer_discount": ""
//                     },
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/9de54ecd-30c3-d445-5d9f-be1d086a1072/original/rtc_july_6images-23.jpg",
//                         "product_name": "Crispy Fish Fingers | Ready to Cook",
//                         "item_desc": "Boneless pieces of basa, coated in panko crumbs.",
//                         "net_weight": "Pieces: 9-12",
//                         "rupee": "₹299",
//                         "add_to_cart": "Add To Cart",
//                         "message": "All slots full",
//                         "gross_weight": "Net wt: 250gms",
//                         "offer_discount": ""
//                     },
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/ac49a3a0-370f-343f-cda7-0f54314b378f/original/Crispy-Chicken-Wings-Tag_(1).jpg",
//                         "product_name": "Crispy Chicken Wings | Ready To Cook",
//                         "item_desc": "Chicken wings marinated in spices & coated in panko crumbs.",
//                         "net_weight": "Pieces:",
//                         "rupee": "₹119",
//                         "add_to_cart": "",
//                         "message": "Out of Stock",
//                         "gross_weight": "",
//                         "offer_discount": ""
//                     },
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/2326e0f7-e80f-b665-0317-07eed0d3c54c/original/rtc_july_6images-14_(1).jpg",
//                         "product_name": "Crispy Chicken Supreme | Ready To Cook",
//                         "item_desc": "Panko crumb-coated chicken tenders, ready in 8 minutes!",
//                         "net_weight": "Pieces: 4-5",
//                         "rupee": "₹199",
//                         "add_to_cart": "",
//                         "message": "Out of Stock",
//                         "gross_weight": "Net wt: 250gms",
//                         "offer_discount": ""
//                     },
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/0154ba9c-827f-b57a-4baf-816af78502b7/original/rtc_july_6images-26.jpg",
//                         "product_name": "Crispy Chicken Cutlet | Ready to Cook",
//                         "item_desc": "Bengali-style, breaded, minced chicken cutlets",
//                         "net_weight": "Pieces: 4",
//                         "rupee": "₹152",
//                         "add_to_cart": "",
//                         "message": "Out of Stock",
//                         "gross_weight": "Net wt: 200gms",
//                         "offer_discount": "10% OFF"
//                     }
//                 ]
//             },
//             {
//                 "img_container_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/21653c3a-4d6d-da71-2432-6833b88e9629/original/RC.png",
//                 "tablescraper-selected-row": "Ready to Cook",
//                 "Category_type": "Ready_to_cook",
//                 "Category_List": "Biryani",
//                 "Food_list": [
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/1e7f984e-3701-e97f-3699-76c618d73d9b/original/500gms_(3).jpg",
//                         "product_name": "Hyderabadi Chicken Biryani (Mini) | Meat & Masala Mix",
//                         "item_desc": "Aromatic, spicy, rich and meaty",
//                         "rupee": "₹199",
//                         "add_to_cart": "Add To Cart",
//                         "message": "All slots full"
//                     },
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/1061622d-54a2-bb7b-3ba1-405b2b45f061/original/250gms_(1).jpg",
//                         "product_name": "Awadhi Chicken Biryani (Mini) | Meat & Masala Mix",
//                         "item_desc": "Fragrant, delicately flavourful & meaty",
//                         "rupee": "₹229",
//                         "add_to_cart": "",
//                         "message": "Out of Stock"
//                     },
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/b0c9d487-f007-28e2-94a5-44498a258110/original/250gms.jpg",
//                         "product_name": "Awadhi Mutton Biryani (Mini) | Meat & Masala Mix",
//                         "item_desc": "Aromatic, spicy, rich and meaty",
//                         "rupee": "₹349",
//                         "add_to_cart": "",
//                         "message": "Out of Stock"
//                     },
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/3245abd9-1ee3-f536-4006-d11d2e3b2261/original/Mini.jpg",
//                         "product_name": "Hyderabadi Mutton Biryani (Mini) | Meat & Masala Mix",
//                         "item_desc": "Aromatic, spicy, rich and meaty",
//                         "rupee": "₹329",
//                         "add_to_cart": "",
//                         "message": "Out of Stock"
//                     },
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/0f479248-e517-4ff3-65af-6536202feeed/original/Kolkata-CB-250-cooked_(2).jpg",
//                         "product_name": "Kolkata Chicken Biryani (Mini) | Meat & Masala Mix",
//                         "item_desc": "Fragrant, meaty, subtly spiced & meaty.",
//                         "rupee": "₹229",
//                         "add_to_cart": "",
//                         "message": "Out of Stock"
//                     }
//                 ]
//             },
//             {
//                 "img_container_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/21653c3a-4d6d-da71-2432-6833b88e9629/original/RC.png",
//                 "tablescraper-selected-row": "Ready to Cook",
//                 "Category_type": "Ready_to_cook",
//                 "Category_List": "Combos",
//                 "Food_list": [
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_15ckn5pzo5x/18/prod_display_image/1618388769.9292--2021-04-1413:56:09--738",
//                         "product_name": "Assorted Kebab Platter | Ready to Cook",
//                         "item_desc": "Tender & juicy- our platter of kebabs is perfect for parties!",
//                         "rupee": "₹730",
//                         "offer_discount": "30% OFF"
//                     },
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/69114a5d-3214-c0eb-01d8-2c54cc1a70a5/original/Crispy-Snacks-.jpg",
//                         "product_name": "Crispy Snacks Combo",
//                         "item_desc": "Super crispy! Chicken tenders, wings & fish fingers.",
//                         "rupee": "₹494",
//                         "offer_discount": "20% OFF"
//                     },
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/feb575eb-a73d-963b-c611-fa34a99d0c85/original/RTC-mini-COMBO-tricolor.jpg",
//                         "product_name": "Tandoori Trio Combo",
//                         "item_desc": "Smoky & delicious, ready-to-cook Tandoori Trio.",
//                         "rupee": "₹720",
//                         "offer_discount": "15% OFF"
//                     },
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/56f738f6-24be-d2f0-6550-944ce538ffc3/original/Tikka-Delights-Combo.jpg",
//                         "product_name": "Tikka Delights Combo",
//                         "item_desc": "Fish tikka two ways and a creamy Chicken Malai Tikka",
//                         "rupee": "₹514",
//                         "offer_discount": "14% OFF"
//                     },
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/679da087-b561-afa1-111a-8541faa2fed0/original/Chicken---Three-ways-Combo-1.jpg",
//                         "product_name": "Chicken, Three ways Combo",
//                         "item_desc": "",
//                         "rupee": "₹448",
//                         "offer_discount": "13% OFF"
//                     },
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/77ab62ad-dce2-f854-2b10-e2dc987bba6d/original/Chicken-Delight-Combo---Indian-1.jpg",
//                         "product_name": "Chicken Delight Combo - Indian",
//                         "item_desc": "Truly desi! Tandoori Chicken & Creamy Afghani Chicken.",
//                         "rupee": "₹407",
//                         "offer_discount": "5% OFF"
//                     },
//                     {
//                         "product_id" : uniqid(),
//                         "product_image_src": "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/4a28f1b9-adfa-0842-57cd-5d1cd8a6df1e/original/Chicken-Bounty-Combo-1.jpg",
//                         "product_name": "Chicken Bounty Combo",
//                         "item_desc": "3 medium spicy pre-marinated chicken dishes you will love.",
//                         "rupee": "₹520",
//                         "offer_discount": "5% OFF"
//                     }
//                 ]
//             }
//         ])

//         res.send('Updated')

//     } catch (error) {
//         console.log(error)
//         res.send('Not Update')
//     }

// })


module.exports = { Marindas_Collection_Routes }