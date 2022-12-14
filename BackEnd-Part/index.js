require('dotenv').config()
const express = require('express')

const { connect } = require('./config/db')
const { Marindas_Collection_Routes } = require('./User-Panel-Backend/routes/Ready_to_collection.routes')
const { Chicken_Collection_Routes } = require('./User-Panel-Backend/routes/Chicken_collection_Routes')
const { Mutton_Collection_Routes } = require('./User-Panel-Backend/routes/Mutton_collection_Routes')
const { Eggs_Collection_Routes } = require('./User-Panel-Backend/routes/Eggs_Collection_routes')
const { Prawns_Collection_Routes } = require('./User-Panel-Backend/routes/Prawns_Collection.routes')


const app = express()
const PORT = 8080

app.use(express.json())
app.use("/Chicken", Chicken_Collection_Routes)
app.use("/Mutton", Mutton_Collection_Routes)
app.use("/Marindas", Marindas_Collection_Routes)
app.use("/Eggs", Eggs_Collection_Routes)
app.use("/Prawns", Prawns_Collection_Routes)


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