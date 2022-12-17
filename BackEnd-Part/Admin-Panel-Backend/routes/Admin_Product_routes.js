const express = require('express')
const uniqid = require('uniqid')
const multer = require('multer')
const cloudinary = require('cloudinary')
const path = require('path')


cloudinary.config({
    cloud_name: 'djhktua3a',
    api_key: '267842812239797',
    api_secret: '_12w8hbAlsazWgZcWsFII5Z89FE'
});

const storage = multer.diskStorage({
    destination: path.join(__dirname, '..' , 'Product_image_upload'),

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
                            chicken_category
                        },
                        {
                            eggs_category
                        },
                        {
                            marindas_category
                        },
                        {
                            mutton_category
                        },
                        {
                            prawns_category
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

admin_product_routes.post("/create", upload.single('product_img') , async (req, res) => {


    

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

    console.log(category_id)

    try {

        const isValidAdmin = await Admin_authenticated_modal.findOne({ _id: AdminID })

        if (isValidAdmin) {

            const result = await cloudinary.uploader.upload(req.file.path);

            
           

            let isProductexist;


            if(isProductexist === null || isProductexist === undefined) {
                isProductexist = await Chicken_Collection_modal.findOne({ _id: category_id })
            } else if (isProductexist === null || isProductexist === undefined) {

                isProductexist = await Eggs_Collection_modal.findOne({ _id: category_id })

            } else if (isProductexist === null || isProductexist === undefined) {
                
                isProductexist = await Marindas_Collection_modal.findOne({ _id: category_id })

            } else if (isProductexist === null || isProductexist === undefined) {

                isProductexist = await Prawns_Collection_modal.findOne({ _id: category_id })
                
            } else if (isProductexist === null || isProductexist === undefined) {

                isProductexist = await Mutton_Collection_modal.findOne({ _id: category_id })
                
            }
            

            var isUpdate = await Chicken_Collection_modal.updateOne({ _id: isProductexist._id }, {
                $push: {
                    "Food_list": {
                        product_id: uniqid(),
                        product_image_src : result.url,
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
                        product_image_src : result.url,
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
                        product_image_src : result.url,
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
                        product_image_src : result.url,
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
                        product_image_src : result.url,
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
                message : 'Product has been added Successfully'
            })


        } else {
            res.status(401).send({
                message: "You're not authorized for this action"
            })
        }


    } catch (error) {
        res.send('Something went wrong')
    }


})

module.exports = { admin_product_routes }