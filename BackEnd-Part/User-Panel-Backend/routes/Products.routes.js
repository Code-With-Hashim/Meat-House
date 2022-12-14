const express = require('express')

const { Product_modal } = require("../../modals/Product.modals")

const ProductsRoutes = express.Router()


ProductsRoutes.get("/", async (req, res) => {

    try {

        const Product_List = await Product_modal.find({}, { sub_categories: 0 })
        res.send(Product_List)

    } catch (error) {

    }

})

ProductsRoutes.get("/:cat_name", async (req, res) => {

    const { cat_name } = req.params
    const { category_id } = req.query

    try {

        if (category_id) {
            
            const Product_List = await Product_modal.findOne({ cat_name : {$regex : cat_name} }, { sub_categories: 1, id: 1, slug: 1 })
            
            const SingleProduct = Product_List.sub_categories.filter((i) => {
                if(i.id === Number(category_id)) {
                    return i
                }
            })

            res.send(SingleProduct)

        } else {
            const Product_List = await Product_modal.find({ cat_name : {$regex : cat_name} }, { sub_categories: 1, id: 1, slug: 1 })
            res.send(Product_List)
        }

    } catch (error) {

    }

})





module.exports = { ProductsRoutes }