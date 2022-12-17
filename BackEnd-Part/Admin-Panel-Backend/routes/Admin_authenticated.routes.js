const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const { Admin_authenticated_modal } = require("../modals/Admin_authenticated.modals")
const { authentication } = require("../../Middlewares/Authenticated.Middlewares")

const admin_authenticated_routes = express.Router()

admin_authenticated_routes.post("/signup", async (req, res) => {

    const { name, email, gender, password } = req.body



    try {

        const existingUser = await Admin_authenticated_modal.findOne({ email })

        if (existingUser) {
            res.status(403).send({
                message: "Admin account already been exist"
            })
        } else {

            bcrypt.hash(password, 5, async function (err, hash) {
                if (err) {
                    res.status(404).send({
                        message: "Something went wrong, please try again"
                    })
                } else {
                    await Admin_authenticated_modal.create({ name, password: hash, email, gender })

                    res.status(201).send({
                        message: "Admin account create successfully"
                    })
                }
            });

        }



    } catch (error) {
        console.log(error)
        res.status(404).send({
            message: "Something went wrong, please try again"
        })

    }
})


admin_authenticated_routes.post("/login", async (req, res) => {

    const { email, password } = req.body

    try {

        const isValidUser = await Admin_authenticated_modal.findOne({ email })

        if (isValidUser) {
            bcrypt.compare(password, isValidUser.password, function (err, result) {


                const token = jwt.sign({ AdminID: isValidUser._id }, process.env.SECRET_KEY);

                if (result) {

                    res.status(200).send({
                        message: "Admin Login Successfully",
                        token
                    })
                } else {
                    res.status(401).send({
                        message: "Something went wrong, please try again"
                    })
                }

            });
        } else {
            res.status(401).send({
                message: "Admin not been exist create an account"
            })
        }

    } catch (error) {
        console.log(error)
        res.status(404).send({
            message: "Something went wrong, please try again"
        })

    }
})

admin_authenticated_routes.get("/adminDetail", authentication , async (req, res) => {

    const {AdminID} = req.body

    try {

        const isValidAdmin = await Admin_authenticated_modal.findOne({_id : AdminID})

        res.send(isValidAdmin)
        
        
    } catch (error) {
        console.log(error)
    }

})

module.exports = { admin_authenticated_routes }
