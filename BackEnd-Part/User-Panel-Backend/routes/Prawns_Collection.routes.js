const express = require('express')
const { ObjectId } = require('mongodb');

const Prawns_Collection_Routes = express.Router()

const { Prawns_Collection_modal } = require("../../modals/Prawns_Collection.modals")

Prawns_Collection_Routes.get("/", async (req, res) => {
    try {

        const { category_id } = req.query

        const { sort_by_price } = req.query

        if (category_id || sort_by_price) {

            if (category_id && sort_by_price) {

                let data;
                if (sort_by_price === 'asc') {
                    const Prawns_Collection_data = await Prawns_Collection_modal.findOne({ _id: category_id }, { Food_list: 1 })

                    data = Prawns_Collection_data.Food_list.sort((a, b) => a.rupee.split("₹")[1] - b.rupee.split("₹")[1])


                } else {
                    const Prawns_Collection_data = await Prawns_Collection_modal.findOne({ _id: category_id }, { Food_list: 1 })

                    data = Prawns_Collection_data.Food_list.sort((a, b) => b.rupee.split("₹")[1] - a.rupee.split("₹")[1])
                }
                res.send(data)


            } else {
                const Prawns_Collection_data = await Prawns_Collection_modal.findOne({ _id: category_id }, { Food_list: 1 })

                // let data = Prawns_Collection_data.Food_list.sort((a, b) => a.rupee.split("₹")[1] - b.rupee.split("₹")[1])

                res.send(Prawns_Collection_data)
            }

        } else {
            const Prawns_Collection_data = await Prawns_Collection_modal.find()

            res.send(Prawns_Collection_data)
        }

    } catch (error) {
        console.log(error)
        res.status(404).send('Something went wrong')
    }
})

Prawns_Collection_Routes.get("/:id", async (req, res) => {

    const { id } = req.params

    try {

        const Prawns_Collection_data = await Prawns_Collection_modal.find()

        let collection_data;

        Prawns_Collection_data.filter((i) => {


            if (i.Food_list) {
                i.Food_list.filter((item) => {

                    if (item._id == id) {
                        collection_data = item
                    }
                })
            }

        })
        if (collection_data) {
            res.send(collection_data)
        } else {
            res.status(404).send({
                status: "Not Success",
                Message: "Item is not Found"
            })
        }



    } catch (error) {
        console.log(error)
        res.send('Not Update')
    }

})



module.exports = { Prawns_Collection_Routes }