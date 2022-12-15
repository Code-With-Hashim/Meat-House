const express = require('express')

const Eggs_Collection_Routes = express.Router()

const { Eggs_Collection_modal } = require("../../modals/Eggs_Collection.modals")

Eggs_Collection_Routes.get("/", async (req, res) => {
    try {

        const { category_id } = req.query

        const { sort_by_price } = req.query

        if (category_id || sort_by_price) {

            if (category_id && sort_by_price) {

                let data;
                if (sort_by_price === 'asc') {
                    const Eggs_Collection_data = await Eggs_Collection_modal.findOne({ _id: category_id }, { Food_list: 1 })

                    data = Eggs_Collection_data.Food_list.sort((a, b) => a.rupee.split("₹")[1] - b.rupee.split("₹")[1])


                } else {
                    const Eggs_Collection_data = await Eggs_Collection_modal.findOne({ _id: category_id }, { Food_list: 1 })

                    data = Eggs_Collection_data.Food_list.sort((a, b) => b.rupee.split("₹")[1] - a.rupee.split("₹")[1])
                }
                res.send(data)


            } else {
                const Eggs_Collection_data = await Eggs_Collection_modal.findOne({ _id: category_id }, { Food_list: 1 })

                // let data = Eggs_Collection_data.Food_list.sort((a, b) => a.rupee.split("₹")[1] - b.rupee.split("₹")[1])

                res.send(Eggs_Collection_data)
            }

        } else {
            const Eggs_Collection_data = await Eggs_Collection_modal.find()

            res.send(Eggs_Collection_data)
        }

    } catch (error) {
        console.log(error)
        res.status(404).send('Something went wrong')
    }
})

Eggs_Collection_Routes.get("/:id", async (req, res) => {

    const { id } = req.params

    try {

        const Eggs_Collection_data = await Eggs_Collection_modal.find()

        let collection_data;

        Eggs_Collection_data.filter((i) => {


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




module.exports = { Eggs_Collection_Routes }