const express = require('express')
const uniqid = require('uniqid')
const multer = require('multer')
const cloudinary = require('cloudinary')
const path = require('path')


cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET_KEY
});

const storage = multer.diskStorage({
    destination: path.join(__dirname, '..', 'Product_image_upload'),

    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

const upload = multer({ storage: storage })


const { Chicken_Collection_modal } = require("../../modals/Chicken_collection.modals")
const { Eggs_Collection_modal } = require("../../modals/Eggs_Collection.modals")
const { Mutton_Collection_modal } = require("../../modals/Mutton_Collection.modal")
const { Prawns_Collection_modal } = require("../../modals/Prawns_Collection.modals")
const { Marindas_Collection_modal } = require("../../modals/Ready_to_cook_collection.modals")
const { Admin_product_recycle } = require("../modals/Admin_product_recyle.modals")
const { Admin_authenticated_modal } = require("../modals/Admin_authenticated.modals")
const { authentication } = require("../../Middlewares/Authenticated.Middlewares")
const { ObjectId } = require('mongodb')


const admin_product_routes = express.Router()

admin_product_routes.use(authentication)

admin_product_routes.get("/", async (req, res) => {

    const { search } = req.query

    const { AdminID } = req.body


    try {

        const isValidAdmin = await Admin_authenticated_modal.findOne({ _id: AdminID })


        if (isValidAdmin) {
            if (search) {

                const chicken_category = await Chicken_Collection_modal.find({ Food_list: { $elemMatch: { product_name: { $regex: search } } } }, { Food_list: 1 })
                const eggs_category = await Eggs_Collection_modal.find({ Food_list: { $elemMatch: { product_name: { $regex: search } } } }, { Food_list: 1 })
                const marindas_category = await Marindas_Collection_modal.find({ Food_list: { $elemMatch: { product_name: { $regex: search } } } }, { Food_list: 1 })
                const mutton_category = await Mutton_Collection_modal.find({ Food_list: { $elemMatch: { product_name: { $regex: search } } } }, { Food_list: 1 })
                const prawns_category = await Prawns_Collection_modal.find({ Food_list: { $elemMatch: { product_name: { $regex: search } } } }, { Food_list: 1 })

                if (chicken_category.length !== 0) search_productlist = chicken_category
                if (eggs_category.length !== 0) search_productlist = eggs_category
                if (marindas_category.length !== 0) search_productlist = marindas_category
                if (mutton_category.length !== 0) search_productlist = mutton_category
                if (prawns_category.length !== 0) search_productlist = prawns_category


                res.send(search_productlist)

            } else {
                const chicken_category = await Chicken_Collection_modal.find({})
                const eggs_category = await Eggs_Collection_modal.find({})
                const marindas_category = await Marindas_Collection_modal.find({})
                const mutton_category = await Mutton_Collection_modal.find({})
                const prawns_category = await Prawns_Collection_modal.find({})


                res.send(

                    [
                        {
                            product_img_src: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/34466dbd-a515-edd1-3e99-05000f217cb6/original/Chicken_(2).png",
                            category_name: "Chicken",
                            category_id: "9lc7t96i4lbsdmt18",
                            foodCategory: chicken_category
                        },
                        {
                            product_img_src: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/1bd08fae-c971-390a-ce8a-6f6502f5bd0d/original/Eggs_(1).png",
                            category_name: "Eggs",
                            category_id: "9lc7t96i4lbsdmt19",
                            foodCategory: eggs_category
                        },
                        {
                            product_img_src: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/21653c3a-4d6d-da71-2432-6833b88e9629/original/RC.png",
                            category_name: "Ready to Cook",
                            category_id: "9lc7t96i4lbsdmt1a",
                            foodCategory: marindas_category
                        },
                        {
                            product_img_src: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/3a3d173d-5537-dafc-0be4-dec0791dcd24/original/MUT.png",
                            category_name: "Muttons",
                            category_id: "9lc7t96i4lbsdmt1b",
                            foodCategory: mutton_category
                        },
                        {
                            product_img_src: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/f4053965-f199-80a0-2551-d85d712574e2/original/Prawn_(2).png",
                            category_name: "Prawns",
                            category_id: "9lc7t96i4lbsdmt1c",
                            foodCategory: prawns_category
                        }
                    ]

                )
            }
        } else {
            res.status(401).send({
                message: "You're not authorized for this action"
            })
        }


    } catch (error) {
        res.status(400).send({
            message: "Something went wrong"
        })
    }
})

admin_product_routes.get("/:id", async (req, res) => {

    const { id } = req.params

    console.log(id)
    const { AdminID } = req.body


    try {

        const isValidAdmin = await Admin_authenticated_modal.findOne({ _id: AdminID })


        let FoodItem

        if (isValidAdmin) {

            if (FoodItem == null || FoodItem == undefined) {
                FoodItem = await Chicken_Collection_modal.findOne({ _id: id }, { Food_list: 1 })
            }
            if (FoodItem == null || FoodItem == undefined) {
                FoodItem = await Eggs_Collection_modal.findOne({ _id: id }, { Food_list: 1 })

            }
            if (FoodItem == null || FoodItem == undefined) {
                FoodItem = await Marindas_Collection_modal.findOne({ _id: id }, { Food_list: 1 })
            }
            if (FoodItem == null || FoodItem == undefined) {
                FoodItem = await Mutton_Collection_modal.findOne({ _id: id }, { Food_list: 1 })
            }
            if (FoodItem == null || FoodItem == undefined) {
                FoodItem = await Prawns_Collection_modal.findOne({ _id: id }, { Food_list: 1 })

            }



            res.send(FoodItem)
        } else {
            res.status(401).send({
                message: "You're not authorized for this action"
            })
        }
    } catch (error) {
        res.status(400).send({
            message: "Something went wrong"
        })
    }
})

admin_product_routes.get("singleProduct/:id", async (req, res) => {

    const { id } = req.params


    const { AdminID } = req.body

    try {

        const isValidAdmin = await Admin_authenticated_modal.findOne({ _id: AdminID })

        if (isValidAdmin) {

            let single_product;
            const ChickenList = await Chicken_Collection_modal.find({}, { _id: 0, Food_list: 1 })
            const MarindasList = await Marindas_Collection_modal.find({}, { _id: 0, Food_list: 1 })
            const EggsList = await Eggs_Collection_modal.find({}, { _id: 0, Food_list: 1 })
            const PrawnsList = await Prawns_Collection_modal.find({}, { _id: 0, Food_list: 1 })
            const MuttonList = await Mutton_Collection_modal.find({}, { _id: 0, Food_list: 1 })
            // single_product = await Mix_Food_Collection_Modal.findOne({ _id: id })






            ChickenList.filter((i) => {
                i.Food_list.filter((item) => {
                    if (item.product_id == id) {
                        single_product = item
                        single_product.category_id = i._id
                        console.log(i)


                    }
                })
            })
            MarindasList.filter((i) => {
                i.Food_list.filter((item) => {
                    if (item.product_id == id) {
                        single_product = item
                        single_product.category_id = i._id
                        console.log(i)


                    }
                })
            })
            EggsList.filter((i) => {
                i.Food_list.filter((item) => {
                    if (item.product_id == id) {
                        single_product = item
                        single_product.category_id = i._id
                        console.log(i)


                    }
                })
            })
            PrawnsList.filter((i) => {
                i.Food_list.filter((item) => {
                    if (item.product_id == id) {
                        single_product = item
                        single_product.category_id = i._id
                        console.log(i)


                    }
                })
            })
            MuttonList.filter((i) => {
                i.Food_list.filter((item) => {
                    if (item.product_id == id) {
                        single_product = item
                        single_product.category_id = i._id
                        console.log(i)


                    }
                })
            })

            res.send(single_product)

        } else {

            res.status(401).send({
                message: "You're not authorized for this action"
            })

        }



    } catch (error) {

    }
})


admin_product_routes.delete("/:id", async (req, res) => {

    const { id } = req.params

    const { AdminID } = req.body

    try {

        const isValidAdmin = await Admin_authenticated_modal.findOne({ _id: AdminID })

        if (isValidAdmin) {
            let single_product;
            const ChickenList = await Chicken_Collection_modal.find({}, { _id: 1, Food_list: 1 })
            const MarindasList = await Marindas_Collection_modal.find({}, { _id: 1, Food_list: 1 })
            const EggsList = await Eggs_Collection_modal.find({}, { _id: 1, Food_list: 1 })
            const PrawnsList = await Prawns_Collection_modal.find({}, { _id: 1, Food_list: 1 })
            const MuttonList = await Mutton_Collection_modal.find({}, { _id: 1, Food_list: 1 })
            // single_product = await Mix_Food_Collection_Modal.findOne({ _id: id })


            ChickenList.filter((i) => {
                i.Food_list.filter((item) => {
                    if (item.product_id == id) {
                        single_product = item
                        single_product.category_id = i._id



                    }
                })
            })
            MarindasList.filter((i) => {
                i.Food_list.filter((item) => {
                    if (item.product_id == id) {
                        single_product = item
                        single_product.category_id = i._id



                    }
                })
            })
            EggsList.filter((i) => {
                i.Food_list.filter((item) => {
                    if (item.product_id == id) {
                        single_product = item
                        single_product.category_id = i._id



                    }
                })
            })
            PrawnsList.filter((i) => {
                i.Food_list.filter((item) => {
                    if (item.product_id == id) {
                        single_product = item
                        single_product.category_id = i._id
                    }
                })
            })
            MuttonList.filter((i) => {

                i.Food_list.filter((item) => {
                    if (item.product_id == id) {
                        single_product = item
                        single_product.category_id = i._id
                    }
                })
            })

            if (single_product) {


                const data = await Admin_product_recycle.findOne({ product_id: single_product.product_id })

                if (!data) {
                    await Admin_product_recycle.create(single_product)
                }



                await Chicken_Collection_modal.updateOne({ _id: single_product.category_id }, { $pull: { Food_list: { product_id: single_product.product_id } } })
                await Marindas_Collection_modal.updateOne({ _id: single_product.category_id }, { $pull: { Food_list: { product_id: single_product.product_id } } })
                await Eggs_Collection_modal.updateOne({ _id: single_product.category_id }, { $pull: { Food_list: { product_id: single_product.product_id } } })
                await Prawns_Collection_modal.updateOne({ _id: single_product.category_id }, { $pull: { Food_list: { product_id: single_product.product_id } } })
                await Mutton_Collection_modal.updateOne({ _id: single_product.category_id }, { $pull: { Food_list: { product_id: single_product.product_id } } })



                res.send({
                    message: "Item is Successfully Delete"
                })

            } else {
                res.status(404).send({
                    message: "Product not been exist any more"
                })
            }
        } else {

            res.status(401).send({
                message: "You're not authorized for this action"
            })

        }


    } catch (error) {
        console.log(error)
        res.status(404).send({
            message: "Something went wrong , please try again"
        })

    }

})

admin_product_routes.patch("/:id", async (req, res) => {

    const { id } = req.params
    const { rupee, product_name, item_desc, net_weight, offer_discount, AdminID } = req.body



    try {

        const isValidAdmin = await Admin_authenticated_modal.findOne({ _id: AdminID })

        if (isValidAdmin) {

            //199

            //"product_name": "Premium Chicken Curry Cut",
            // "Leg, wing & breast pieces from half a chicken"

            var isUpdate = await Chicken_Collection_modal.updateOne({ "Food_list.product_id": id }, {
                $set: {
                    "Food_list.$.rupee": rupee ? `₹${rupee}` : rupee,
                    "Food_list.$.product_name": product_name,
                    "Food_list.$.item_desc": item_desc,
                    "Food_list.$.net_weight": net_weight ? `${net_weight}gms` : net_weight,
                    "Food_list.$.offer_discount": offer_discount ? `${offer_discount}% OFF` : offer_discount,

                }
            })
            var isUpdate = await Marindas_Collection_modal.updateOne({ "Food_list.product_id": id }, {
                $set: {
                    "Food_list.$.rupee": `₹${rupee}`,
                    "Food_list.$.product_name": product_name,
                    "Food_list.$.item_desc": item_desc,
                    "Food_list.$.net_weight": `${net_weight}gms`,
                    "Food_list.$.offer_discount": `${offer_discount}% OFF`,

                }
            })
            var isUpdate = await Eggs_Collection_modal.updateOne({ "Food_list.product_id": id }, {
                $set: {
                    "Food_list.$.rupee": `₹${rupee}`,
                    "Food_list.$.product_name": product_name,
                    "Food_list.$.item_desc": item_desc,
                    "Food_list.$.net_weight": `${net_weight}gms`,
                    "Food_list.$.offer_discount": `${offer_discount}% OFF`,

                }
            })
            var isUpdate = await Prawns_Collection_modal.updateOne({ "Food_list.product_id": id }, {
                $set: {
                    "Food_list.$.rupee": `₹${rupee}`,
                    "Food_list.$.product_name": product_name,
                    "Food_list.$.item_desc": item_desc,
                    "Food_list.$.net_weight": `${net_weight}gms`,
                    "Food_list.$.offer_discount": `${offer_discount}% OFF`,

                }
            })
            var isUpdate = await Mutton_Collection_modal.updateOne({ "Food_list.product_id": id }, {
                $set: {
                    "Food_list.$.rupee": `₹${rupee}`,
                    "Food_list.$.product_name": product_name,
                    "Food_list.$.item_desc": item_desc,
                    "Food_list.$.net_weight": `${net_weight}gms`,
                    "Food_list.$.offer_discount": `${offer_discount}% OFF`,

                }
            })

            if (isUpdate.matchedCount !== 0) {
                res.send({
                    message: 'Item is update successfully'
                })
            } else {
                res.send({
                    message: 'Item not exist'
                })
            }

        } else {
            res.status(401).send({
                message: "You're not authorized for this action"
            })
        }


    } catch (error) {
        console.log(error)
        res.status(404).send({
            message: "Something went wrong"
        })
    }
})

admin_product_routes.post("/create", upload.single('product_img'), async (req, res) => {




    const { category_id } = req.query
    const {
        product_name,
        item_desc,
        net_weight,
        rupee,
        price,
        offer_discount,
        AdminID
    } = req.body

    try {

        const isValidAdmin = await Admin_authenticated_modal.findOne({ _id: AdminID })

        if (isValidAdmin) {

            const result = await cloudinary.uploader.upload(req.file.path);



            let isProductexist;


            if (isProductexist === null || isProductexist === undefined) {
                isProductexist = await Chicken_Collection_modal.findOne({ _id: category_id })
            } if (isProductexist === null || isProductexist === undefined) {

                isProductexist = await Eggs_Collection_modal.findOne({ _id: category_id })

            } if (isProductexist === null || isProductexist === undefined) {

                isProductexist = await Marindas_Collection_modal.findOne({ _id: category_id })

            } if (isProductexist === null || isProductexist === undefined) {

                isProductexist = await Prawns_Collection_modal.findOne({ _id: category_id })

            } if (isProductexist === null || isProductexist === undefined) {

                isProductexist = await Mutton_Collection_modal.findOne({ _id: category_id })

            }


            var isUpdate = await Chicken_Collection_modal.updateOne({ _id: isProductexist._id }, {
                $push: {
                    "Food_list": {
                        product_id: uniqid(),
                        product_image_src: result.url,
                        product_name,
                        item_desc,
                        net_weight,
                        rupee,
                        price,
                        offer_discount,
                        add_to_cart: "Add To Cart",
                    }
                }
            })
            var isUpdate = await Marindas_Collection_modal.updateOne({ _id: isProductexist._id }, {
                $push: {
                    "Food_list": {
                        product_id: uniqid(),
                        product_image_src: result.url,
                        product_name,
                        item_desc,
                        net_weight,
                        rupee,
                        price,
                        offer_discount,
                        add_to_cart: "Add To Cart",
                    }
                }
            })
            var isUpdate = await Mutton_Collection_modal.updateOne({ _id: isProductexist._id }, {
                $push: {
                    "Food_list": {
                        product_id: uniqid(),
                        product_image_src: result.url,
                        product_name,
                        item_desc,
                        net_weight,
                        rupee,
                        price,
                        offer_discount,
                        add_to_cart: "Add To Cart",
                    }
                }
            })
            var isUpdate = await Prawns_Collection_modal.updateOne({ _id: isProductexist._id }, {
                $push: {
                    "Food_list": {
                        product_id: uniqid(),
                        product_image_src: result.url,
                        product_name,
                        item_desc,
                        net_weight,
                        rupee,
                        price,
                        offer_discount,
                        add_to_cart: "Add To Cart",
                    }
                }
            })
            var isUpdate = await Eggs_Collection_modal.updateOne({ _id: isProductexist._id }, {
                $push: {
                    "Food_list": {
                        product_id: uniqid(),
                        product_image_src: result.url,
                        product_name,
                        item_desc,
                        net_weight,
                        rupee,
                        price,
                        offer_discount,
                        add_to_cart: "Add To Cart",
                    }
                }
            })

            res.send({
                message: 'Product has been added Successfully'
            })


        } else {
            res.status(401).send({
                message: "You're not authorized for this action"
            })
        }


    } catch (error) {
        console.log(error)
        res.send('Something went wrong')
    }


})

module.exports = { admin_product_routes }