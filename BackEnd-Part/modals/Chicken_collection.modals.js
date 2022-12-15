const mongoose = require('mongoose')


const Chicken_Collection_Schema = mongoose.Schema({


    "img-container src": String,
    "tablescraper-selected-row": String,
    Category_type: String,
    Category_List: String,
    Food_list: []

}, {
    versionKey: false,
    timeStamp: true
})

const Chicken_Collection_modal = mongoose.model("Chicken_Collection", Chicken_Collection_Schema)





module.exports = { Chicken_Collection_modal }