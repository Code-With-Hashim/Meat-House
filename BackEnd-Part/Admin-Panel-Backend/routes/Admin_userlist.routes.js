const express = require('express')

const admin_userlist_routes = express.Router()

const { Admin_authenticated_modal } = require("../modals/Admin_authenticated.modals")
const { User_Authenticated_Modals } = require("../../User-Panel-Backend/Modals/User_Authenticated.modals")
const { User_cart_modals } = require("../../User-Panel-Backend/Modals/User_cart.modals")
const { User_Address_Modal } = require("../../User-Panel-Backend/Modals/User_Address_Modals")
const { authentication } = require('../../Middlewares/Authenticated.Middlewares')



admin_userlist_routes.use(authentication)

admin_userlist_routes.get("/", async (req, res) => {

    const { AdminID } = req.body

    try {

        const isValidAdmin = await Admin_authenticated_modal.findOne({ _id: AdminID })


        if (isValidAdmin) {
            const userList = await User_Authenticated_Modals.find({})

            res.send(userList)
        } else {
            res.status(401).send({
                message : "You're not authorized for this action"
            })
        }

    } catch (error) {

        res.status(404).send({
            message: 'Something went wrong successfully'
        })
    }

})

admin_userlist_routes.get("/:id", async (req, res) => {

    const { id } = req.params

    const { AdminID } = req.body




    try {
        const isValidAdmin = await Admin_authenticated_modal.findOne({ _id: AdminID })

        if(isValidAdmin) {

            const userList = await User_Authenticated_Modals.findOne({ _id: id })

        if (userList) {

            const UserCart = await User_cart_modals.findOne({ UserID: userList._id }, { _id: 0 })
            const UserAddress = await User_Address_Modal.findOne({ UserID: userList._id }, { _id: 0 })


            const value = Object.assign({}, userList, UserCart, UserAddress)


            res.send(
                [
                    {
                        userList
                    },
                    {
                        UserCart
                    },
                    {
                        UserAddress
                    }
                ]
            )

        } else {
            res.status(401).send({
                message: 'User not exist'
            })
        }

        } else {

            res.status(401).send({
                message : "You're not authorized for this action"
            })

        }

        

    } catch (error) {
        console.log(error)
        res.status(404).send({
            message: 'Something went wrong successfully'
        })
    }

})

module.exports = { admin_userlist_routes }