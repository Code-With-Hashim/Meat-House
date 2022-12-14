const express = require('express');



const { Chicken_Collection_modal } = require("../../modals/Chicken_collection.modals")

const Chicken_Collection_Routes = express.Router()



//Category-wise api
Chicken_Collection_Routes.get("/", async (req, res) => {

    const { category_id } = req.query

    const { sort_by_price } = req.query


    try {

        if (category_id || sort_by_price) {

            if (category_id && sort_by_price) {

                let data;
                if (sort_by_price === 'asc') {
                    const Chicken_collection_data = await Chicken_Collection_modal.findOne({ _id: category_id }, { Food_list: 1 })

                    data = Chicken_collection_data.Food_list.sort((a, b) => a.rupee.split("₹")[1] - b.rupee.split("₹")[1])


                } else {
                    const Chicken_collection_data = await Chicken_Collection_modal.findOne({ _id: category_id }, { Food_list: 1 })

                    data = Chicken_collection_data.Food_list.sort((a, b) => b.rupee.split("₹")[1] - a.rupee.split("₹")[1])
                }
                res.send(data)


            } else {
                const Chicken_collection_data = await Chicken_Collection_modal.findOne({ _id: category_id } , { Food_list: 1 })

                // let data = Chicken_collection_data.Food_list.sort((a, b) => a.rupee.split("₹")[1] - b.rupee.split("₹")[1])

                res.send(Chicken_collection_data)
            }

        } else {
            const Chicken_collection_data = await Chicken_Collection_modal.find()

            res.send(Chicken_collection_data)
        }

    } catch (error) {
        console.log(error)
        res.status(404).send('Something went wrong')
    }

})



//Single Product Api
Chicken_Collection_Routes.get("/:id", async (req, res) => {

    const { id } = req.params

    try {

        const Chicken_collection_data = await Chicken_Collection_modal.find()

        let collection_data;

        Chicken_collection_data.filter((i) => {


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
                status : "Not Success",
                Message : "Item is not Found"
            })
        }



    } catch (error) {
        console.log(error)
        res.send('Not Update')
    }

})


module.exports = { Chicken_Collection_Routes }








