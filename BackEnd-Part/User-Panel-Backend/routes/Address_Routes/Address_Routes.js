const express = require('express')

const User_Address_Router = express.Router()

const { User_Address_Modal } = require("../../Modals/User_Address_Modals")
const { authentication } = require("../../../Middlewares/Authenticated.Middlewares")

User_Address_Router.use(authentication)

User_Address_Router.get("/", async (req, res) => {


    try {

        const Address_list = await User_Address_Modal.findOne({ UserID: UserID })

        res.send(Address_list)

    } catch (error) {

    }

})

User_Address_Router.post("/", async (req, res) => {

    const { fetchLocation, address, UserID } = req.body

    console.log(UserID)

    try {

        await User_Address_Modal.updateOne({ UserID: UserID }, { fetchLocation, address })
        const Address_list = await User_Address_Modal.findOne({ UserID: UserID })

        res.send(Address_list)

    } catch (error) {

    }

})

module.exports = { User_Address_Router }