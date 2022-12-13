const express = require('express')

const { Product_modal } = require("../../modals/Product.modals")

const ProductsRoutes = express.Router()

ProductsRoutes.get("/", async (req, res) => {

    try {

        const Product_data_tree = await Product_modal.find()

        res.status(200).send(Product_data_tree)

    } catch (error) {
        res.status(404).send('Something went wrong')
    }

})

module.exports = { ProductsRoutes }