require('dotenv').config()
const express = require('express')

const { connect } = require('./config/db')
const { ProductsRoutes } = require('./User-Panel-Backend/routes/Products.routes')


const app = express()
const PORT = 8080

app.use(express.json())
app.use("/products", ProductsRoutes)

app.get("/", (req, res) => {
    res.send('Welcome to Product collection')
})

app.listen(PORT, async () => {
    try {

        await connect,
        console.log('Database is connected successfully')
        console.log('Listening on port')

    } catch (error) {

    }
})