const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const cloudinary = require('cloudinary')
const multer = require('multer')
const path = require('path')


const { Admin_authenticated_modal } = require("../modals/Admin_authenticated.modals")
const { authentication } = require("../../Middlewares/Authenticated.Middlewares")

const admin_authenticated_routes = express.Router()




cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET_KEY
});



const storage = multer.diskStorage({
    destination: path.join(__dirname, '..', "Admin_Profile_Uploads"),

    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})


const upload = multer({ storage: storage })


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

admin_authenticated_routes.get("/adminDetail", authentication, async (req, res) => {

    const { AdminID } = req.body

    try {

        const isValidAdmin = await Admin_authenticated_modal.findOne({ _id: AdminID })

        res.send(isValidAdmin)


    } catch (error) {
        console.log(error)
    }

})

admin_authenticated_routes.patch("/updatedetail", authentication, upload.single('profile_img'), async (req, res) => {

    let { email, password, name, gender, maritalStatus, AdminID } = req.body

    if (email === "") email = undefined
    if (password === "") password = undefined
    if (name === "") name = undefined
    if (gender === "") gender = undefined
    if (maritalStatus === "") maritalStatus = undefined




    try {

        const existingUser = await Admin_authenticated_modal.findOne({ _id: AdminID })


        if (existingUser) {

            if (req.file) {

                const result = await cloudinary.uploader.upload(req.file.path);

                await Admin_authenticated_modal.findByIdAndUpdate({ _id: AdminID }, {
                    profile_img: result.url,
                    email,
                    name,
                    gender,
                    password,
                    maritalStatus,

                })
            } else {

                await Admin_authenticated_modal.findByIdAndUpdate({ _id: AdminID }, {
                    email,
                    name,
                    gender,
                    password,
                    maritalStatus,

                })


            }

            res.status(200).send({
                message: "Detail Udpdate Successfully",
                status: "Success"
            })

        } else {
            res.status(401).send({
                message: "Something went wrong please try again",
                status: "Failed"
            })
        }

    } catch (error) {
        console.log(error)
        res.status(404).send({
            message: "Something went wrong please try again",
            status: "Failed"
        })
    }

})

module.exports = { admin_authenticated_routes }
