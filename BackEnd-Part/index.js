require('dotenv').config()
const express = require('express')
const cors = require('cors')



const { connect } = require('./config/db')
const { Chicken_Collection_Routes } = require("./User-Panel-Backend/routes/Food_Collection_Routes/Chicken_collection_Routes")
const { Mutton_Collection_Routes } = require("./User-Panel-Backend/routes/Food_Collection_Routes/Mutton_collection_Routes")
const { Marindas_Collection_Routes } = require("./User-Panel-Backend/routes/Food_Collection_Routes/Ready_to_collection.routes")
const { Eggs_Collection_Routes } = require("./User-Panel-Backend/routes/Food_Collection_Routes/Eggs_Collection_routes")
const { Prawns_Collection_Routes } = require("./User-Panel-Backend/routes/Food_Collection_Routes/Prawns_Collection.routes")
const { User_Authenticated_Router } = require('./User-Panel-Backend/routes/User_Authenticated_Routes/User_Authenticated_Routes')
const { User_Cart_Routes } = require("./User-Panel-Backend/routes/Cart_routes/User_Cart_routes")
const { User_Address_Router } = require('./User-Panel-Backend/routes/Address_Routes/Address_Routes')
const { Mix_Food_Collection_Routes } = require('./User-Panel-Backend/routes/Food_Collection_Routes/MixFood_Collection_Routes')
const { admin_authenticated_routes } = require('./Admin-Panel-Backend/routes/Admin_authenticated.routes')
const { admin_product_routes } = require('./Admin-Panel-Backend/routes/Admin_Product_routes')
const { admin_product_recyle_routes } = require('./Admin-Panel-Backend/routes/Admin_product_recyle.routes')
const { admin_userlist_routes } = require('./Admin-Panel-Backend/routes/Admin_userlist.routes')

const app = express()
const PORT = 8080

app.use(express.json())
// app.use(express.urlencoded({ extended: true }))
app.use(cors({
    origin : "*"
}))



// Food Collection ---Routes
app.use("/Chicken", Chicken_Collection_Routes)
app.use("/Mutton", Mutton_Collection_Routes)
app.use("/Marindas", Marindas_Collection_Routes)
app.use("/Eggs", Eggs_Collection_Routes)
app.use("/Prawns", Prawns_Collection_Routes)
app.use("/mixfood", Mix_Food_Collection_Routes)

//User-Collection ---Routes
app.use("/User", User_Authenticated_Router)
//Cart-Collection ---Routes
app.use("/cart", User_Cart_Routes)
//address-collection --Routes

app.use("/address", User_Address_Router)

//admin collection --- 
app.use("/admin" , admin_authenticated_routes)
app.use("/admin/products" , admin_product_routes)
app.use("/admin/recycle"  , admin_product_recyle_routes)
app.use("/admin/userdetail" , admin_userlist_routes) 


app.get("/", (req, res) => {
    
})



app.listen(PORT, async () => {
    try {

        await connect,
        console.log('Database is connected successfully')
        console.log('Listening on port')

    } catch (error) {

    }
})