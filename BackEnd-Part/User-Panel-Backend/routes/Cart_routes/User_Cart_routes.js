const express = require('express')

const { authentication } = require("../../../Middlewares/Authenticated.Middlewares")
const { User_cart_modals } = require("../../Modals/User_cart.modals")
const { Chicken_Collection_modal } = require("../../../modals/Chicken_collection.modals")
const { Eggs_Collection_modal } = require("../../../modals/Eggs_Collection.modals")
const { Mutton_Collection_modal } = require("../../../modals/Mutton_Collection.modal")
const { Prawns_Collection_modal } = require("../../../modals/Prawns_Collection.modals")
const { Marindas_Collection_modal } = require("../../../modals/Ready_to_cook_collection.modals")
const { Mix_Food_Collection_Modal } = require('../../../modals/mix_collection.modals')

const User_Cart_Routes = express.Router()

User_Cart_Routes.use(authentication)

User_Cart_Routes.post("/:id", async (req, res) => {

    const { UserID, quantity } = req.body
    const { id } = req.params

    // console.log(quantity)


    try {

        let cart_add_data;
        const ChickenList = await Chicken_Collection_modal.find({}, { _id: 0, Food_list: 1 })
        const MarindasList = await Marindas_Collection_modal.find({}, { _id: 0, Food_list: 1 })
        const EggsList = await Eggs_Collection_modal.find({}, { _id: 0, Food_list: 1 })
        const PrawnsList = await Prawns_Collection_modal.find({}, { _id: 0, Food_list: 1 })
        const MuttonList = await Mutton_Collection_modal.find({}, { _id: 0, Food_list: 1 })
        // cart_add_data = await Mix_Food_Collection_Modal.findOne({ _id: id })






        ChickenList.filter((i) => {
            i.Food_list.filter((item) => {
                if (item.product_id == id) {
                    cart_add_data = item
                    cart_add_data.quantity = 1
                    return
                }
            })
        })
        MarindasList.filter((i) => {
            i.Food_list.filter((item) => {
                if (item.product_id == id) {
                    cart_add_data = item
                    cart_add_data.quantity = 1
                    return
                }
            })
        })
        EggsList.filter((i) => {
            i.Food_list.filter((item) => {
                if (item.product_id == id) {
                    cart_add_data = item
                    cart_add_data.quantity = 1
                    return
                }
            })
        })
        PrawnsList.filter((i) => {
            i.Food_list.filter((item) => {
                if (item.product_id == id) {
                    cart_add_data = item
                    cart_add_data.quantity = 1
                    return
                }
            })
        })
        MuttonList.filter((i) => {
            i.Food_list.filter((item) => {
                if (item.product_id == id) {
                    cart_add_data = item
                    cart_add_data.quantity = 1
                    return
                }
            })
        })

        console.log(cart_add_data)

        const UserData = await User_cart_modals.findOne({ UserID })

        if (UserData) {

            const check_if_existProduct = await User_cart_modals.findOne({ UserID, "Cart.product_id": id })


            if (!check_if_existProduct) {
                const data = await User_cart_modals.updateOne({ UserID: UserID }, { $push: { Cart: cart_add_data } })


                console.log(data)
                if (data.acknowledged) {
                    res.status(201).send({
                        message: "Cart is been Added Successfully"
                    })
                } else {
                    res.status(404).send({
                        message: "Something went wrong"
                    })
                }

            } else {

                if (quantity) {
                    await User_cart_modals.updateOne({ UserID, "Cart.product_id": id }, { $set: { "Cart.$.quantity": quantity } })
                    res.send({
                        message: "'Quantity Update Successfully'"
                    })
                } else {
                    res.status(401).send({
                        message: "Product Already exist"
                    })
                }
            }
        } else {
            res.status(401).send({
                message: "User not exist"
            })
        }

    } catch (error) {
        console.log(error)
        res.status(404).send({
            message: "Something went wrong"
        })

    }

})

User_Cart_Routes.get("/", async (req, res) => {


    console.log(req.body)

    try {

        const Cart_list = await User_cart_modals.findOne({ UserID: req.body.UserID })

        if (Cart_list) {
            res.send(Cart_list)
        } else {
            res.status(401).send({
                message: "User not exist"
            })
        }




    } catch (error) {

        console.log(error)
    }

})

User_Cart_Routes.delete("/:id", async (req, res) => {

    const { id } = req.params
    const { UserID } = req.body

    console.log

    try {




        const updateDetail = await User_cart_modals.updateOne({ UserID: UserID }, { $pull: { Cart: { product_id: id } } })

        console.log(updateDetail)
        if (updateDetail.modifiedCount !== 0) {
            res.send({
                message: "Cart Item Remove Successfully"
            })
        } else {
            res.status(404).send({
                message: "Something went wrong"
            })
        }



    } catch (error) {
        console.log(error)
    }
})



module.exports = { User_Cart_Routes }
