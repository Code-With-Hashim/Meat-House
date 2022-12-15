const express = require('express')

const { Mix_Food_Collection_Modal } = require("../../../modals/mix_collection.modals")


const Mix_Food_Collection_Routes = express.Router()

Mix_Food_Collection_Routes.get("/", async (req, res) => {

    try {

        const Food_list = await Mix_Food_Collection_Modal.find({})
        res.send(Food_list)

    } catch (error) {
        res.status(404).send({
            message: "Something went wrong , please try again"
        })
    }

})


module.exports = { Mix_Food_Collection_Routes }