const express = require('express')

const admin_product_recyle_routes = express.Router()

const { Chicken_Collection_modal } = require("../../modals/Chicken_collection.modals")
const { Eggs_Collection_modal } = require("../../modals/Eggs_Collection.modals")
const { Mutton_Collection_modal } = require("../../modals/Mutton_Collection.modal")
const { Prawns_Collection_modal } = require("../../modals/Prawns_Collection.modals")
const { Marindas_Collection_modal } = require("../../modals/Ready_to_cook_collection.modals")
const { Admin_product_recycle } = require("../modals/Admin_product_recyle.modals")
const { Admin_authenticated_modal } = require("../modals/Admin_authenticated.modals")
const { authentication } = require("../../Middlewares/Authenticated.Middlewares")


admin_product_recyle_routes.use(authentication)

admin_product_recyle_routes.get("/", async (req, res) => {

    const { AdminID } = req.body

    try {

        const isValidAdmin = await Admin_authenticated_modal.findOne({ _id: AdminID })

        if (isValidAdmin) {
            const data = await Admin_product_recycle.find({})

            if (data.length !== 0) {
                res.send(data)
            } else {
                res.send({
                    message: "Item not been exist",
                    status : false
                })
            }
        } else {
            res.status(401).send({
                message: "You're not authorized for this action"
            })
        }

    } catch (error) {
        res.status(404).send({
            message: "Something went wrong , please try again"
        })
    }
})

admin_product_recyle_routes.post("/:id", async (req, res) => {

    const { id } = req.params

    const { AdminID } = req.body

    try {

        const isValidAdmin = await Admin_authenticated_modal.findOne({ _id: AdminID })

        if (isValidAdmin) {

            const { category_id } = await Admin_product_recycle.findOne({ product_id: id })

            if (category_id) {

                const data = await Admin_product_recycle.findOne({ product_id: id }, { _id: 0, createdAt: 0, updatedAt: 0, category_id: 0 })

                if (data) {
                    await Chicken_Collection_modal.updateOne({ _id: category_id }, { $push: { Food_list: data } })
                    await Marindas_Collection_modal.updateOne({ _id: category_id }, { $push: { Food_list: data } })
                    await Eggs_Collection_modal.updateOne({ _id: category_id }, { $push: { Food_list: data } })
                    await Prawns_Collection_modal.updateOne({ _id: category_id }, { $push: { Food_list: data } })
                    await Mutton_Collection_modal.updateOne({ _id: category_id }, { $push: { Food_list: data } })

                    await Admin_product_recycle.deleteOne({ product_id: data.product_id })

                    res.send({
                        message: 'Item restore successfully'
                    })

                }

            } else {
                res.status(404).send({
                    message: 'Item is not exist in recycle bin'
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


admin_product_recyle_routes.delete("/:id", async (req, res) => {

    const { id } = req.params

    const { AdminID } = req.body

    try {

        const isValidAdmin = await Admin_authenticated_modal.findOne({ _id: AdminID })

        if (isValidAdmin) {

            await Admin_product_recycle.deleteOne({ product_id: id })

            res.send({
                message: 'Item Delete successfully'
            })

        } else {
            res.status(401).send({
                message: "You're not authorized for this action"
            })
        }



    } catch (error) {
        res.status(404).send({
            message: "Something went wrong , please try again"
        })
    }
})




module.exports = { admin_product_recyle_routes }

