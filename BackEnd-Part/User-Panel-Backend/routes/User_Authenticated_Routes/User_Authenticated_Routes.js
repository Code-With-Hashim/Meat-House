const express = require("express")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const multer = require("multer")
const path = require('path')
const cloudinary = require('cloudinary')

const { User_Authenticated_Modals } = require("../../Modals/User_Authenticated.modals")
const { User_cart_modals } = require("../../Modals/User_cart.modals")
const { User_Address_Modal } = require("../../Modals/User_Address_Modals")
const { authentication, ipMiddleware } = require("../../../Middlewares/Authenticated.Middlewares")
const { dirname } = require("path")

//SECRET_KEY 

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET_KEY
});

const SECRET_KEY = process.env.SECRET_KEY

const User_Authenticated_Router = express.Router()


const storage = multer.diskStorage({
    destination: path.join(__dirname, '..', "User_Profile_Uploads"),

    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

const upload = multer({ storage: storage })


User_Authenticated_Router.post("/signup", ipMiddleware, async (req, res) => {
    const { email, password, UserIP } = req.body

    console.log(email)

    try {

        const existingUser = await User_Authenticated_Modals.findOne({ email })


        if (existingUser) {
            res.status(403).send({
                message: "User Already exist",
                status: "Failed"
            })

        } else {


            bcrypt.hash(password, 5, async function (err, hash) {
                if (err) {
                    console.log(error)
                    res.status(404).send({
                        message: "Something went wrong",
                        status: "Failed"
                    })
                } else {

                    try {

                        const UserData = await User_Authenticated_Modals.create(
                            {
                                email,
                                password: hash,
                                UserIP
                            })




                        await User_cart_modals.insertMany([{ UserID: UserData._id }])
                        await User_Address_Modal.insertMany([{ UserID: UserData._id }])

                        res.status(201).send({
                            message: "User Created Successfully",
                            status: "Success"
                        })

                    } catch (error) {
                        console.log(error)
                        res.status(404).send({
                            message: "Something went wrong",
                            status: "Failed"
                        })

                    }

                }
            });
        }

    } catch (error) {
        console.log(error)
        res.status(404).send({
            message: "Something went wrong",
            status: "Failed"
        })

    }


})

User_Authenticated_Router.post("/login", async (req, res) => {
    const { email, password } = req.body

    try {

        const existingUser = await User_Authenticated_Modals.findOne({ email })

        if (existingUser) {

            const token = jwt.sign({ UserID: existingUser._id }, SECRET_KEY);

            bcrypt.compare(password, existingUser.password, function (err, result) {
                if (result) {
                    res.status(200).send({
                        message: "Login Successfully",
                        status: "Success",
                        token
                    })
                } else {
                    res.status(401).send({
                        message: "Login Failed, Please try again",
                        status: "Failed",
                    })
                }
            });

        } else {
            res.status(401).send({
                message: "User not exist Create an account",
                status: "Failed"
            })
        }


    } catch (error) {
        console.log(error)
        res.status(404).send({
            message: "Something went wrong , please try again",
            status: "Failed"
        })
    }
})

User_Authenticated_Router.patch("/updatedetail", authentication, upload.single('avatar'), async (req, res) => {

    let { email, password, name, phoneNumber, gender, maritalStatus, UserID } = req.body

    if (email === "") email = undefined
    if (password === "") password = undefined
    if (name === "") name = undefined
    if (phoneNumber === "") phoneNumber = undefined
    if (gender === "") gender = undefined
    if (maritalStatus === "") maritalStatus = undefined




    try {

        const existingUser = await User_Authenticated_Modals.findOne({ _id: UserID })

        if (existingUser) {

            if (req.file) {

                const result = await cloudinary.uploader.upload(req.file.path);

                await User_Authenticated_Modals.findByIdAndUpdate({ _id: UserID }, {
                    profile_img: result.url,
                    email,
                    phoneNumber,
                    name,
                    gender,
                    password,
                    maritalStatus,

                })
            } else {

                await User_Authenticated_Modals.findByIdAndUpdate({ _id: UserID }, {
                    email,
                    phoneNumber,
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



module.exports = { User_Authenticated_Router }